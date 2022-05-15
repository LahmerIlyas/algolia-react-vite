import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { Typography } from './typography.component'

describe('Given typography element', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<Typography as="h1" variant="s1">H1</Typography>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
