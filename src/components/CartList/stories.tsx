import { Story, Meta } from '@storybook/react'
import CartList from '.'

import items from './mock'

export default {
  title: 'CartList',
  component: CartList,

  argTypes: {
    items: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)

Default.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}

export const WithButton: Story = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} hasButton />
  </div>
)

WithButton.args = {
  total: 'R$ 330,00',
  cartContextValue: { items }
}
export const WithEmpty: Story = () => (
  <div style={{ maxWidth: 800 }}>
    <CartList />
  </div>
)
