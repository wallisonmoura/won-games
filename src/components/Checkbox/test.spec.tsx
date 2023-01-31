import { screen, render } from '@testing-library/react'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('render test', () => {
    const { container } = render(<Checkbox />)
  })
})
