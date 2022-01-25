import React, { memo, useMemo } from 'react'
import {
  TextStyle,
  ViewStyle,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from 'react-native'
import { CrossOutline } from '../icon'
import { useTheme, widthStyle } from '../theme'
import { hex2rgba, isDef } from '../helpers'
import type { TagProps } from './interface'
import { createStyles } from './style'

/**
 * Tag 标签
 */
const Tag: React.FC<TagProps> = ({
  children,
  style,
  closable = false,
  onClose,
  size = 'm',
  type = 'primary',
  visible = true,
  closeIcon,
  icon,
  color,
  textColor,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const mainColor = isDef(color) ? color : THEME_VAR.tag_primary_color
  const { innerTypeStyle, textTypeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = {}
    const tempTextStyle: TextStyle = {}
    switch (type) {
      case 'primary':
        tempInnerStyle.backgroundColor = mainColor
        tempInnerStyle.borderColor = mainColor
        tempTextStyle.color = THEME_VAR.tag_text_color
        break
      case 'ghost':
        tempInnerStyle.backgroundColor = THEME_VAR.tag_ghost_bg_color
        tempInnerStyle.borderColor = mainColor
        tempInnerStyle.borderWidth = StyleSheet.hairlineWidth
        tempTextStyle.color = mainColor
        break
      case 'hazy':
        tempInnerStyle.backgroundColor = hex2rgba(mainColor, 0.1)
        tempInnerStyle.borderColor = hex2rgba(mainColor, 0.1)
        tempTextStyle.color = mainColor
        break
      default:
        break
    }
    return {
      innerTypeStyle: tempInnerStyle,
      textTypeStyle: tempTextStyle,
    }
  }, [type, mainColor, THEME_VAR.tag_text_color, THEME_VAR.tag_ghost_bg_color])
  const { innerSizeStyle, textSizeStyle } = useMemo(() => {
    const tempInnerStyle: ViewStyle = STYLES[`tag_wrap_${size}`]
    const tempTextStyle: TextStyle = STYLES[`tag_text_${size}`]
    return {
      innerSizeStyle: tempInnerStyle,
      textSizeStyle: tempTextStyle,
    }
  }, [size])
  const wrapStyle: ViewStyle = StyleSheet.flatten<TextStyle>([
    /** 类型样式 */
    STYLES.tag_wrap,
    innerTypeStyle,
    innerSizeStyle,
  ])

  const textStyle = StyleSheet.flatten<TextStyle>([
    /** 类型样式 */
    textTypeStyle,
    textSizeStyle,
    /** 外部样式 */
    isDef(textColor) && {
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
          size={THEME_VAR[`tag_close_icon_${size}`]}
          color={textStyle.color as string}
        />
      )
    }
    return null
  }
  return visible ? (
    <View style={[STYLES.tag, style]}>
      <View style={wrapStyle}>
        {icon}
        {renderChildren()}
        {renderCloseIcon()}
      </View>
    </View>
  ) : null
}

export default memo<typeof Tag>(Tag)
