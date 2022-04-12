import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Fade } from 'rn-placeholder'

import Theme from '../theme'

import { varCreator } from './style'

const SkeletonActive: React.FC = ({ children }) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)

  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: CV.skeleton_color_active,
    }),
    [CV.skeleton_color_active],
  )

  return <Fade style={style}>{children}</Fade>
}

export default memo<typeof SkeletonActive>(SkeletonActive)
