import 'session.mock'
import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText('$235.00')
    // Preço nao tenha line-throught
    expect(price).not.toHaveStyle({ TextDecoration: 'line-through' })

    // preço tenha o background secundário
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should render a line-through in price when promotion', () => {
    //renderizar o componente (com promotionalPrice) // 200 reais  //15 reais
    render(<GameCard {...props} promotionalPrice={15} />)

    // preço tenha line-through (235)
    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('$15.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/My ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
