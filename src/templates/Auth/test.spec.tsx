import { screen, render } from '@testing-library/react'

import Auth from '.'

describe('<Auth />', () => {
  it('render test', () => {
    const { container } = render(<Auth />)

    expect(screen.getByRole('heading', { name: /Auth/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
