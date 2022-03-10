import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Fade } from 'rn-placeholder'

import { useThemeTokens, createVar } from '../theme'

import { varCreator } from './style'

const SkeletonActive: React.FC = ({ children }) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)

  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: CV.skeleton_color_active,
    }),
    [CV.skeleton_color_active],
  )

  return <Fade style={style}>{children}</Fade>
}

export default memo<typeof SkeletonActive>(SkeletonActive)
