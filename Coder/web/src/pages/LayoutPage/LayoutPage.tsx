import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LayoutPage = () => {
  return (
    <>
      <MetaTags title="Layout" description="Layout page" />

      <h1>LayoutPage</h1>
      <p>
        Find me in <code>./web/src/pages/LayoutPage/LayoutPage.tsx</code>
      </p>
      <p>
        My default route is named <code>layout</code>, link to me with `
        <Link to={routes.layout()}>Layout</Link>`
      </p>
    </>
  )
}

export default LayoutPage
