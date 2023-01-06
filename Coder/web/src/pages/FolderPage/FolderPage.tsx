import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FolderPage = () => {
  return (
    <>
      <MetaTags title="Folder" description="Folder page" />

      <h1>FolderPage</h1>
      <p>
        Find me in <code>./web/src/pages/FolderPage/FolderPage.tsx</code>
      </p>
      <p>
        My default route is named <code>folder</code>, link to me with `
        <Link to={routes.folder()}>Folder</Link>`
      </p>
    </>
  )
}

export default FolderPage
