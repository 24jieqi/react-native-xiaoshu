import React, { useMemo, memo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { View } from 'react-native'

import Theme from '../theme'

import type { DividerLineProps } from './interface'
import { varCreator } from './style'

/**
 * 分割线
 */
const DividerLine: React.FC<DividerLineProps> = ({
  color,
  dashed,
  position,
  adaptive = true,
  direction = 'horizontal',
}) => {
  const isVertical = direction === 'vertical'
  const TOKENS = Theme.useThemeTokens()
  const VC = Theme.createVar(TOKENS, varCreator)

  const Styles = useMemo(() => {
    let wrap: StyleProp<ViewStyle> = { overflow: 'hidden' }
    let line: StyleProp<ViewStyle> = {}
    let lineMask: StyleProp<ViewStyle> = {}
    if (isVertical) {
      wrap = { ...wrap, width: 1, height: '100%' }
      line = {
        ...line,
        height: '100%',
        borderLeftWidth: 1,
        borderColor: color,
      }
    } else {
      wrap = { ...wrap, height: 1, maxWidth: '100%' }
      line = {
        ...line,
        height: 0,
        minHeight: 0,
        borderBottomWidth: 1,
        borderColor: color,
      }
    }
    if (dashed) {
      line = { ...line, borderStyle: 'dashed' }
    }

    if (position === 'left') {
      line.marginRight = VC.divider_margin_horizontal
    }

    if (position === 'right') {
      line.marginLeft = VC.divider_margin_horizontal
    }
    if (adaptive) {
      wrap.flexGrow = 1
      wrap.flexShrink = 1
    }
    return { wrap, line, lineMask }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVertical])
  return (
    <View style={Styles.wrap}>
      <View style={Styles.line} />
    </View>
  )
}

export default memo(DividerLine)
