import { Cog6ToothIcon } from '@heroicons/react/20/solid'
import { PencilSquareIcon } from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CommandPalletWithPreview from 'src/components/CommandPallet/CommandPalletWithPreview'
import DashedLineEmpty from 'src/components/Empty/DashedLinedEmpty'
import Feed from 'src/components/Pages/Page/Feed'
import SlideOver from 'src/components/SlideOver/SlideOver'
import SyntaxH from 'src/components/SyntaxHighlighter/SyntaxHighlighter'

const item = {
  id: 1,
  name: 'No language',
  description: 'No style selected.',
  url: '#',
  color: 'bg-indigo-500',
  icon: PencilSquareIcon,
}
// More items...

const PagePage = () => {
  const [open, setOpen] = React.useState(true)
  const [openCommandPallet, setOpenCommandPallet] = React.useState(false)
  const [commandPalletValue, setCommandPalletValue] = React.useState({})

  return (
    <>
      <MetaTags title="Page" description="Page page" />
      <div
        onClick={() => {
          setOpenCommandPallet(!openCommandPallet)
          setCommandPalletValue({ title: 'Language' })
        }}
        className="flex cursor-default select-none rounded-xl bg-gray-100 p-3"
      >
        <>
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-indigo-500">
            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="ml-4 flex-auto">
            <p className="text-sm font-medium text-gray-900">{item.name}</p>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        </>
      </div>
      {/* <Feed /> */}
      <div className="flex h-full p-20">
        <DashedLineEmpty text={'Add a layout to get started'} />
        <DashedLineEmpty />
      </div>
      {/* <div>
        <DashedLineEmpty />
        <DashedLineEmpty />
      </div> */}
      <div
        style={{
          position: 'absolute',
          bottom: 5,
          right: 10,
        }}
        className="flex"
      >
        <button
          type="button"
          className=" mr-2 inline-flex items-center rounded-full border border-transparent bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Preview your code
        </button>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Cog6ToothIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <SlideOver open={open} setOpen={setOpen} />
      {/* <SyntaxH /> */}
      <CommandPalletWithPreview
        title={commandPalletValue.title}
        open={openCommandPallet}
        setOpen={setOpenCommandPallet}
        setCommandPalletValue={setCommandPalletValue}
        commandPalletValue={commandPalletValue}
      />
    </>
  )
}

export default PagePage
