import React from 'react'

import Layout from '~/layouts/layout'
import type { PageProps } from '~/layouts/layout/interface'

const DemoWrapper: React.FC<React.PropsWithChildren<PageProps>> = props => {
  return <Layout.Page {...props} />
}

export default DemoWrapper
