import { screen, render } from '@testing-library/react'

import GameCard from '.'

describe('<GameCard />', () => {
  it('render test', () => {
    const { container } = render(<GameCard />)

    expect(
      screen.getByRole('heading', { name: /GameCard/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
