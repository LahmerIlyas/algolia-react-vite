import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { FilterHeadline } from './filter-headline.component'

export default {
  title: 'Example/FilterHeadline',
  component: FilterHeadline,
} as ComponentMeta<typeof FilterHeadline >

const Template: ComponentStory<typeof FilterHeadline> = () => (
  <React.Fragment>
    <FilterHeadline
      items={[
        { id: 1, isSelected: false, label: 'Test' },
        { id: 2, isSelected: false, label: 'Test 1' },
        { id: 3, isSelected: false, label: 'Test 2' },
        { id: 4, isSelected: false, label: 'Test 3' },
      ]}
      onClicked={() => { }}
      title="Categories"
    />
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
