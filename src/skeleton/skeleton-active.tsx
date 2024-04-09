import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Fade } from 'rn-placeholder'

import Theme from '../theme'

import type { SkeletonTheme } from './style'
import { varCreator } from './style'

const SkeletonActive: React.FC<
  React.PropsWithChildren<{
    theme?: Partial<SkeletonTheme>
  }>
> = ({ children, theme }) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: CV.skeleton_color_active,
    }),
    [CV.skeleton_color_active],
  )

  return <Fade style={style}>{children}</Fade>
}

export default memo(SkeletonActive)
