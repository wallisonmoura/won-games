import { Story, Meta } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as Meta

export const Basic: Story = (args) => <Logo />

