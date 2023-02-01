import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myid" />)

    expect(container.querySelector('#paint_linear_myid')).toBeInTheDocument()
  })
  it('Should render a white label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#fafafa'
    })
  })

  it('Should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('Should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('Should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('Should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})
