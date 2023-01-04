import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h1>Library</h1>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className="px-4 py-5 sm:p-6">
        <p>hello</p>
      </div>
    </>
  )
}

export default HomePage
