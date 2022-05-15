import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { Button } from './button.component'

describe('Given button element', () => {
  it('should renders primary variant correctly', () => {
    const tree = renderer.create(<Button variant="primary" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('should renders secondary variant correctly', () => {
    const tree = renderer.create(<Button variant="secondary" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
