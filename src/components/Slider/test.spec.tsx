import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Slider from '.'

describe('<Slider />', () => {
  it('render test', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item 1</p>
        <p>item 2</p>
      </Slider>
    )

    expect(
      screen.getByText(/item 1/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')
    expect(
      screen.getByText(/item 2/i).parentElement?.parentElement
    ).toHaveClass('slick-slide')

    expect(container.firstChild).toMatchSnapshot()
  })
})
