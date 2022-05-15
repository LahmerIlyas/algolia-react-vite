import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Typography from './typography.component'

export default {
  title: 'Example/Typography',
  component: Typography,
  argTypes: {
    variant: { control: 'color' },
  },
} as ComponentMeta<typeof Typography >

const Template: ComponentStory<typeof Typography> = () => (
  <React.Fragment>
    <Typography variant="s1" as="h1">
      Header 1
    </Typography>
    <Typography variant="s2" as="h2">
      Header 2
    </Typography>
    <Typography variant="s3" as="h3">
      Header 3
    </Typography>
    <Typography variant="s4" as="h4">
      Header 4
    </Typography>
    <Typography variant="s5" as="h5">
      Header 5
    </Typography>
    <Typography variant="s6" as="h6">
      Header 6
    </Typography>
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
