import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { BreadCrumb } from './breadcrumb.component'

export default {
  title: 'Example/BreadCrumb',
  component: BreadCrumb,
} as ComponentMeta<typeof BreadCrumb >

const Template: ComponentStory<typeof BreadCrumb> = () => (
  <React.Fragment>
    <BreadCrumb/>
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
