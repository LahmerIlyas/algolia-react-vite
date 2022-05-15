import React from 'react'
import type { ComponentMeta, ComponentStory } from '@storybook/react'

import { ProductCard } from './product-card.component'

export default {
  title: 'Example/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard >

const Template: ComponentStory<typeof ProductCard> = () => (
  <React.Fragment>
    <ProductCard
      content="This is a product description"
      title="This is a product title"
      imgUrl="https://picsum.photos/200/300"
      link="https://picsum.photos/200/300"
      id={1}
      price="123"
    />
  </React.Fragment>
)

export const ExampleStory = Template.bind({})
ExampleStory.args = {
}
