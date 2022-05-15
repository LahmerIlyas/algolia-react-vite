import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { AppBar } from './app-bar.component'

export default {
  title: 'Example/AppBar',
  component: AppBar,
} as ComponentMeta<typeof AppBar >

const Template: ComponentStory<typeof AppBar> = () => (
  <React.Fragment>
    <AppBar/>
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
