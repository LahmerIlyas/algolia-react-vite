import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './button.component'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button >

const Template: ComponentStory<typeof Button> = () => (
  <React.Fragment>
    <Button variant="primary">
      Click me
    </Button>
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
