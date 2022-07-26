import React, { memo } from 'react'

import type { FullPageProps } from './interface'
import Page from './page'

/**
 * 全屏页面
 */
const FullPage: React.FC<React.PropsWithChildren<FullPageProps>> = ({
  filled = false,
  ...restProps
}) => {
  return <Page {...restProps} headerShown={false} statusBarShown={!filled} />
}

export default memo<typeof FullPage>(FullPage)
