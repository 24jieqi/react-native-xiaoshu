import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Fade } from 'rn-placeholder'

import { useTheme } from '../theme'

const SkeletonActive: React.FC = ({ children }) => {
  const THEME_VAR = useTheme()
  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: THEME_VAR.skeleton_color_active,
    }),
    [THEME_VAR.skeleton_color_active],
  )

  return <Fade style={style}>{children}</Fade>
}

export default memo<typeof SkeletonActive>(SkeletonActive)
