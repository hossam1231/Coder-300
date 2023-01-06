import { render } from '@redwoodjs/testing/web'

import LayoutPage from './LayoutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LayoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LayoutPage />)
    }).not.toThrow()
  })
})
