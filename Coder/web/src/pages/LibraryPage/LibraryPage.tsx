import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LibraryPage = () => {
  return (
    <>
      <MetaTags title="Library" description="Library page" />

      <h1>LibraryPage</h1>
      <p>
        Find me in <code>./web/src/pages/LibraryPage/LibraryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>library</code>, link to me with `
        <Link to={routes.library()}>Library</Link>`
      </p>
    </>
  )
}

export default LibraryPage
