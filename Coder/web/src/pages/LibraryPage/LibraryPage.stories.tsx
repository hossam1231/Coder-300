import type { ComponentMeta } from '@storybook/react'

import LibraryPage from './LibraryPage'

export const generated = () => {
  return <LibraryPage />
}

export default {
  title: 'Pages/LibraryPage',
  component: LibraryPage,
} as ComponentMeta<typeof LibraryPage>
