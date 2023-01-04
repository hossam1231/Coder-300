import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import EmptyState from 'src/components/Create/Home/EmptyState'

const HomePage = () => {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h1>Library</h1>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        <EmptyState />
      </div>
    </>
  )
}

export default HomePage
