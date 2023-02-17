import { Story, Meta } from '@storybook/react'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'Dropdown',
  component: Dropdown
} as Meta

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />

Default.args = {
  title: 'Click here',
  children: 'Content'
}
