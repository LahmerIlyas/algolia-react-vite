import { describe, expect, it } from 'vitest'
import renderer from 'react-test-renderer'
import { AppBar } from './app-bar.component'

describe('Given appbar element', () => {
  it('should renders correctly', () => {
    const tree = renderer.create(<AppBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
