import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { FilterHeadline } from './filter-headline.component'

describe('Given filter headline element', () => {
  it('should renders correctly', () => {
    const items = [
      { id: 1, label: 'test', isSelected: false },
      { id: 2, label: 'test 2 ', isSelected: true },
    ]
    const tree = renderer.create(
      <FilterHeadline
        items={items}
        title={'Test title'}
        onClicked={() => {}}
      />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
