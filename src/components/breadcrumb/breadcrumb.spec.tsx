import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { BreadCrumb } from './breadcrumb.component'

describe('Given breadcrumb element', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<BreadCrumb />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
