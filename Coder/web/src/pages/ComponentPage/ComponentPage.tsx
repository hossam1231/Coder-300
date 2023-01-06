import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ComponentPage = () => {
  return (
    <>
      <MetaTags title="Component" description="Component page" />

      <h1>ComponentPage</h1>
      <p>
        Find me in <code>./web/src/pages/ComponentPage/ComponentPage.tsx</code>
      </p>
      <p>
        My default route is named <code>component</code>, link to me with `
        <Link to={routes.component()}>Component</Link>`
      </p>
    </>
  )
}

export default ComponentPage
