import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import {
  CalendarIcon,
  CodeBracketIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
  Bars4Icon,
} from '@heroicons/react/24/outline'

const item = {
  id: 1,
  name: 'Text',
  description: 'Add freeform text with basic formatting options.',
  url: '#',
  color: 'bg-indigo-500',
  icon: PencilSquareIcon,
}
// More items...

const ApplicationPage = () => {
  return (
    <>
      <MetaTags title="Application" description="Application page" />

      <h1>ApplicationPage</h1>
      <div
        className={
          'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
          item.color
        }
      >
        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
      </div>
      <div className="ml-4 flex-auto">
        <p
          className={
            'text-sm font-medium',
            active ? 'text-gray-900' : 'text-gray-700'
          }
        >
          {item.name}
        </p>
        <p
          className={
            'text-sm',
            active ? 'text-gray-700' : 'text-gray-500'
          }
        >
          {item.description}
        </p>
      </div>
      <p>
        My default route is named <code>application</code>, link to me with `
        <Link to={routes.application()}>Application</Link>`
      </p>
    </>
  )
}

export default ApplicationPage
