import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ApplicationPage = () => {
  return (
    <>
      <MetaTags title="Application" description="Application page" />

      <h1>ApplicationPage</h1>
      <p>
        Find me in <code>./web/src/pages/ApplicationPage/ApplicationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>application</code>, link to me with `
        <Link to={routes.application()}>Application</Link>`
      </p>
    </>
  )
}

export default ApplicationPage
