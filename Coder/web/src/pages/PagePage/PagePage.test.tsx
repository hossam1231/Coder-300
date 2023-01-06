import { render } from '@redwoodjs/testing/web'

import PagePage from './PagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PagePage />)
    }).not.toThrow()
  })
})
