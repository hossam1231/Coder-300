import type { ComponentMeta } from '@storybook/react'

import ApplicationPage from './ApplicationPage'

export const generated = () => {
  return <ApplicationPage />
}

export default {
  title: 'Pages/ApplicationPage',
  component: ApplicationPage,
} as ComponentMeta<typeof ApplicationPage>
