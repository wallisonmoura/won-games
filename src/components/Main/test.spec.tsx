import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('render test', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /React com Nextjs/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('render colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})
