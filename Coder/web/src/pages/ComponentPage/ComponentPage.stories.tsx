import type { ComponentMeta } from '@storybook/react'

import ComponentPage from './ComponentPage'

export const generated = () => {
  return <ComponentPage />
}

export default {
  title: 'Pages/ComponentPage',
  component: ComponentPage,
} as ComponentMeta<typeof ComponentPage>
