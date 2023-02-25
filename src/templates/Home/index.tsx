import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  upcomingGamesTitle: string
  upComingGames: GameCardProps[]
  upComingHighLight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularGames,
  mostPopularHighLight,
  upcomingGamesTitle,
  upComingGames,
  upComingHighLight,
  freeGamesTitle,
  freeGames,
  freeHighLight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighLight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upComingGames}
        highlight={upComingHighLight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighLight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
