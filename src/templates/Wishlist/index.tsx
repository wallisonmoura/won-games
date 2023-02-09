import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        <Showcase
          title="You may like these games"
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}

export default Wishlist
