import { render } from '@redwoodjs/testing/web'

import ComponentPage from './ComponentPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ComponentPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ComponentPage />)
    }).not.toThrow()
  })
})
