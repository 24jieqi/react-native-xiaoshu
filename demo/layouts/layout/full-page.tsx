import React, { useMemo, memo } from 'react'

import type { FullPageProps } from './interface'
import Page from './page'

/**
 * 全屏页面
 */
const FullPage: React.FC<FullPageProps> = ({
  children,
  statusBarStyle = 'dark-content',
}) => {
  const statusBarProps = useMemo(() => ({ barStyle: statusBarStyle }), [
    statusBarStyle,
  ])

  return (
    <Page
      headerBackgroundColor="transparent"
      showHeader={false}
      statusBarProps={statusBarProps}>
      {children}
    </Page>
  )
}

export default memo<typeof FullPage>(FullPage)
