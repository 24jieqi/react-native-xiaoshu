import React from 'react'

import type { PageProps } from '@/layouts/layout/interface'
import Layout from '@/layouts/layout'

const DemoWrapper: React.FC<PageProps> = props => {
  return <Layout.Page {...props} />
}

export default DemoWrapper
