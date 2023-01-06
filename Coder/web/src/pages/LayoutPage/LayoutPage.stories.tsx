import type { ComponentMeta } from '@storybook/react'

import LayoutPage from './LayoutPage'

export const generated = () => {
  return <LayoutPage />
}

export default {
  title: 'Pages/LayoutPage',
  component: LayoutPage,
} as ComponentMeta<typeof LayoutPage>
