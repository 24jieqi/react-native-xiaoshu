import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { PlaceholderMedia } from 'rn-placeholder'

import { useTheme } from '../theme'
import type { SkeletonAvatarProps } from './interface'
import SkeletonActive from './active'

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = ({
  active = true,
  size = 40,
  shape = 'circle',
}) => {
  const THEME_VAR = useTheme()
  const style = useMemo<ViewStyle>(
    () => ({
      height: size,
      width: size,
      backgroundColor: THEME_VAR.skeleton_color,
      borderRadius:
        shape === 'circle' ? size / 2 : THEME_VAR.skeleton_avatar_border_radius,
    }),
    [
      THEME_VAR.skeleton_avatar_border_radius,
      THEME_VAR.skeleton_color,
      shape,
      size,
    ],
  )
  const nodeJSX = <PlaceholderMedia style={style} />

  if (active) {
    return <SkeletonActive>{nodeJSX}</SkeletonActive>
  }

  return nodeJSX
}

export default memo(SkeletonAvatar)
