import React, { useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { PlaceholderLine } from 'rn-placeholder'

import Space from '../space'
import Theme from '../theme'

import type { SkeletonParagraphProps } from './interface'
import SkeletonActive from './skeleton-active'
import { varCreator } from './style'

const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  theme,
  active = true,
  rows,
  widths,
  testID,
}) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const style = useMemo<ViewStyle>(
    () => ({
      backgroundColor: CV.skeleton_color,
    }),
    [CV.skeleton_color],
  )
  const paragraphs = useMemo(
    () => new Array(rows).fill(0).map((_, i) => i),
    [rows],
  )
  const nodeJSX = (
    <Space testID={testID}>
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
