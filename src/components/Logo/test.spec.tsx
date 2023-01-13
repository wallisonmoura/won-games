import { screen, render } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('render test', () => {
    const { container } = render(<Logo />)

    expect(
      screen.getByRole('heading', { name: /Logo/i })).
      toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
