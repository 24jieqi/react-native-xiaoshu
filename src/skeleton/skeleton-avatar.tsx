import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { PlaceholderMedia } from 'rn-placeholder'

import { useThemeTokens, createVar } from '../theme'

import type { SkeletonAvatarProps } from './interface'
import SkeletonActive from './skeleton-active'
import { varCreator } from './style'

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  active = true,
  size = 40,
  shape = 'circle',
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const style = useMemo<ViewStyle>(
    () => ({
      height: size,
      width: size,
      backgroundColor: CV.skeleton_color,
      borderRadius:
        shape === 'circle' ? size / 2 : CV.skeleton_avatar_border_radius,
    }),
    [CV.skeleton_avatar_border_radius, CV.skeleton_color, shape, size],
  )
  const nodeJSX = <PlaceholderMedia style={style} />

  if (active) {
    return <SkeletonActive>{nodeJSX}</SkeletonActive>
  }

  return nodeJSX
}

export default memo(SkeletonAvatar)
