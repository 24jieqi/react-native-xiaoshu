import React, { memo } from 'react'
import { View } from 'react-native'

import Theme from '../theme'

import type { BlankProps } from './interface'
import { varCreator } from './style'

const getGapValue = (v: boolean | number, initialValue: number) => {
  return typeof v === 'boolean' ? (v ? initialValue : 0) : v
}

const Blank: React.FC<BlankProps> = ({
  children,
  size = 'm',
  left = true,
  right = true,
  top = false,
  bottom = false,
  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const defaultGap = CV[`blank_size_${size}`]

  // 重置值
  left = getGapValue(left, defaultGap)
  right = getGapValue(right, defaultGap)
  top = getGapValue(top, defaultGap)
  bottom = getGapValue(bottom, defaultGap)

  return (
    <View
      {...restProps}
      style={[
        {
          marginLeft: left,
          marginRight: right,
          marginTop: top,
          marginBottom: bottom,
        },
        style,
      ]}>
      {children}
    </View>
  )
}

export default memo<typeof Blank>(Blank)
