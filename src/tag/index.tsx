import Color from 'color'
import isNil from 'lodash/isNil'
import React, { memo, useMemo } from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import CrossOutline from '../icon/cross'
import Theme from '../theme'

import type { TagProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Tag 标签
 */
const Tag: React.FC<TagProps> = ({
  children,
  style,
  innerStyle,
  closable = false,
  onClose,
  size = 'm',
  type = 'primary',
  visible = true,
  closeIcon,
  icon,
  color,
  textColor,
  hairline,
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const mainColor = !isNil(color) ? color : CV.tag_primary_color
  const { innerTypeStyle, textTypeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = {}
    const tempTextStyle: TextStyle = {}
    switch (type) {
      case 'primary': {
        tempInnerStyle.backgroundColor = mainColor
        tempInnerStyle.borderColor = mainColor
        tempTextStyle.color = CV.tag_text_color
        break
      }
      case 'ghost': {
        tempInnerStyle.backgroundColor = CV.tag_ghost_background_color
        tempInnerStyle.borderColor = mainColor
        tempInnerStyle.borderWidth = hairline ? StyleSheet.hairlineWidth : 1
        tempTextStyle.color = mainColor
        break
      }
      case 'hazy': {
        const hazyColor = Color(mainColor)
          .lightness(CV.tag_hazy_lightness)
          .hex()
        tempInnerStyle.backgroundColor = hazyColor
        tempInnerStyle.borderColor = hazyColor
        tempTextStyle.color = mainColor
        break
      }
      default:
        break
    }
    return {
      innerTypeStyle: tempInnerStyle,
      textTypeStyle: tempTextStyle,
    }
  }, [
    CV.tag_text_color,
    CV.tag_ghost_background_color,
    CV.tag_hazy_lightness,
    hairline,
    type,
    mainColor,
  ])
  const { innerSizeStyle, textSizeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = STYLES[`tag_inner_${size}`]
    const tempTextStyle: TextStyle = STYLES[`tag_text_${size}`]
    return {
      innerSizeStyle: tempInnerStyle,
      textSizeStyle: tempTextStyle,
    }
  }, [STYLES, size])

  const textStyle = StyleSheet.flatten<TextStyle>([
    /** 类型样式 */
    textTypeStyle,
    textSizeStyle,
    /** 外部样式 */
    !isNil(textColor) && {
      color: textColor,
    },
  ])
  // 关闭的图标
  const renderChildren = () => {
    const childJSX = <Text style={textStyle}>{children}</Text>
    return childJSX
  }
  // 关闭的图标
  const renderCloseIcon = () => {
    if (closable) {
      return closeIcon ? (
        <TouchableOpacity onPress={onClose}>{closeIcon}</TouchableOpacity>
      ) : (
        <CrossOutline
          onPress={onClose}
          size={CV[`tag_${size}_close_icon`]}
          color={textStyle.color as string}
        />
      )
    }
    return null
  }
  return visible ? (
    <View style={[STYLES.tag, style]}>
      <View
        style={[
          /** 类型样式 */
          STYLES.tag_inner,
          innerTypeStyle,
          innerSizeStyle,
          innerStyle,
        ]}>
        {icon}
        {renderChildren()}
        {renderCloseIcon()}
      </View>
    </View>
  ) : null
}

export default memo<typeof Tag>(Tag)
