import React from 'react'
import { View, Text } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers/typeof'
import type { EmptyProps } from './interface'
import { createStyles } from './style'
import IconEmpty from './icon'

const Empty: React.FC<EmptyProps> = ({
  text = '暂无数据',
  style,
  textStyle,
  iconStyle,
  icon,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const iconJSX = isDef(icon) ? (
    icon
  ) : (
    <IconEmpty style={[STYLES.icon, iconStyle]} />
  )

  return (
    <View style={[STYLES.empty, style]}>
      {iconJSX}
      <Text style={[STYLES.text, textStyle]}>{text}</Text>
    </View>
  )
}

export default Empty
