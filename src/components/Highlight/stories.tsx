import { Story, Meta } from '@storybook/react'
import Highlight, { HighlightsProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it`s back',
    subtitle: 'Cone see John`s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'buy now',
    buttonLink: '/games/rdr2'
  }
} as Meta

export const Default: Story<HighlightsProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightsProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
