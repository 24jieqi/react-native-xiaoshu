import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { PlaceholderLine } from 'rn-placeholder'

import Space from '../space'
import { useTheme } from '../theme'

import type { SkeletonParagraphProps } from './interface'
import SkeletonActive from './skeleton-active'

const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  active = true,
  rows,
  widths,
}) => {
  const THEME_VAR = useTheme()
  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: THEME_VAR.skeleton_color,
    }),
    [THEME_VAR.skeleton_color],
  )
  const paragraphs = useMemo(
    () => new Array(rows).fill(0).map((_, i) => i),
    [rows],
  )
  const nodeJSX = (
    <Space>
      {paragraphs.map(n => {
        return (
          <PlaceholderLine key={n} width={widths?.[n]} style={style} noMargin />
        )
      })}
    </Space>
  )

  if (active) {
    return <SkeletonActive>{nodeJSX}</SkeletonActive>
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return nodeJSX
}

export default memo(SkeletonParagraph)
