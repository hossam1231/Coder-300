type HomeLayoutProps = {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div
      style={{ height: '100vh', justifyContent: 'center' }}
      className="h-100vh flex w-full content-center bg-slate-200 p-10"
    >
      <div className="flex-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white p-10 shadow">
        <>{children}</>
      </div>
    </div>
  )
}

export default HomeLayout
