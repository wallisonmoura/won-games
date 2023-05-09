/* eslint-disable */
import * as nextImage from 'next/legacy/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const { objectFit, ...rest} = props
    return <img {...rest} />
  }
})
