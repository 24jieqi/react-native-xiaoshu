import React, { memo } from 'react'
import { View } from 'react-native'

import Theme from '../theme'

import type { BlankProps } from './interface'
import { varCreator } from './style'

const getGapValue = (v: boolean | number, initialValue: number) => {
  return typeof v === 'boolean' ? (v ? initialValue : 0) : v
}

const Blank: React.FC<BlankProps> = ({
  theme,
  left = true,
  right = true,
  top = false,
  bottom = false,
  size = 'm',
  type = 'margin',

  children,
  style,
  ...restProps
}) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })

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
          [`${type}Left`]: left,
          [`${type}Right`]: right,
          [`${type}Top`]: top,
          [`${type}Bottom`]: bottom,
        },
        style,
      ]}>
      {children}
    </View>
  )
}

export default memo(Blank)
