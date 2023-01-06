import type { ComponentMeta } from '@storybook/react'

import FolderPage from './FolderPage'

export const generated = () => {
  return <FolderPage />
}

export default {
  title: 'Pages/FolderPage',
  component: FolderPage,
} as ComponentMeta<typeof FolderPage>
