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
  newGames: GameCardProps[]
  mostPopularHighLight: HighlightProps
  mostPopularGames: GameCardProps[]
  upComingGames: GameCardProps[]
  upComingHighLight: HighlightProps
  upComingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighLight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighLight,
  mostPopularGames,
  upComingGames,
  upComingHighLight,
  upComingMoreGames,
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
        <Showcase title="News" games={newGames} />
      </S.SectionNews>

      <Showcase
        title="Most Popular"
        highlight={mostPopularHighLight}
        games={mostPopularGames}
      />

      <S.SectionUpcoming>
        <Showcase title="Upcoming" games={upComingGames} />
        <Showcase highlight={upComingHighLight} games={upComingMoreGames} />
      </S.SectionUpcoming>

      <Showcase
        title="Free games"
        highlight={freeHighLight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
