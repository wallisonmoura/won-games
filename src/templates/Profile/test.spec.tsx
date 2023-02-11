import { screen, render } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render', () => {
    renderWithTheme(
      <Profile>
        <h1>children</h1>
      </Profile>
    )

    expect(
      screen.getByRole('heading', { name: /children/i })
    ).toBeInTheDocument()
  })
})
