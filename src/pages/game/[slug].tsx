import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QUERY_GAMES, QUERY_GAMES_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import Game, { GameTemplateProps } from 'templates/Game'
import { getImageUrl } from 'utils/getImageUrl'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada
  // pode mostrar loading
  // tela de esqueleto
  if (router.isFallback) return null

  return <Game {...props} />
}

// gerar em build time(/game/bla, /bame/foo...)
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game data
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAMES_BY_SLUG,
    variables: { slug: `${params?.slug}` },
    fetchPolicy: 'no-cache'
  })

  if (!data.games.length) {
    return { notFound: true }
  }

  const game = data.games[0]

  // get recommended games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  // get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10)
  const { data: upcoming } = await apolloClient.query<
    QueryUpcoming,
    QueryUpcomingVariables
  >({
    query: QUERY_UPCOMING,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: upcoming.showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcoming.upcomingGames),
      upcomingHighlight: highlightMapper(
        upcoming.showcase?.upcomingGames?.highlight
      ),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games)
    }
  }
}
