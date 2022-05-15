import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { ProductCard } from './product-card.component'

describe('Given product card element', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(
      <ProductCard
        content="Test content"
        id={1}
        price={'20'}
        title="Test title"
        imgUrl="https://picsum.photos/200/300"
        link="https://picsum.photos/200/300"
      />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
