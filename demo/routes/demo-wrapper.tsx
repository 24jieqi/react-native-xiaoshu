import React from 'react'

import Layout from '@/layouts/layout'
import type { PageProps } from '@/layouts/layout/interface'

const DemoWrapper: React.FC<PageProps> = props => {
  return <Layout.Page {...props} />
}

export default DemoWrapper
