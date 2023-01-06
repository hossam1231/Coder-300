import type { ComponentMeta } from '@storybook/react'

import PagePage from './PagePage'

export const generated = () => {
  return <PagePage />
}

export default {
  title: 'Pages/PagePage',
  component: PagePage,
} as ComponentMeta<typeof PagePage>
