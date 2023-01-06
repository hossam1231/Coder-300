import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Feed from 'src/components/Pages/Page/Feed'

const PagePage = () => {
  return (
    <>
      <MetaTags title="Page" description="Page page" />

      <Feed />
    </>
  )
}

export default PagePage
