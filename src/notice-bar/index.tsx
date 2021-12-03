import React, { memo, useState } from 'react'
import type { TextStyle, ViewStyle } from 'react-native'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Icon } from 'react-native-xiaoshu'
import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { NoticeBarProps } from './interface'

/**
 * 通知栏
 */
const NoticeBar: React.FC<NoticeBarProps> = ({
  type = 'default',
  size = 'normal',
  style,
  textColor,
  TextBackgroundColor,
  showIcon,
  rightIcon,
  renderLeftIcon,
  renderRightIcon,
  children,
  numberOfLines = 1,
  onPress,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const [visible, setVisible] = useState(true)
  const iconSize = THEME_VAR[`noticeBar_${size}_font_size`]
  const iconColor = THEME_VAR[`noticeBar_icon_${type}_color`] as string

  const showIconJSX = renderLeftIcon ? (
    renderLeftIcon(iconColor, iconSize)
  ) : (
    <Icon.CheckedFill size={iconSize} color={iconColor} />
  )
  const rightIconJSX = renderRightIcon ? (
    renderRightIcon(iconColor, iconSize)
  ) : (
    <Icon.CrossOutline
      size={iconSize}
      color={iconColor}
      onPress={handlePress}
    />
  )

  const tipIconJSX = isDef(showIcon) ? showIconJSX : null
  const iconJSX = isDef(rightIcon) ? rightIconJSX : null

  const mainNoticeBarStyles = StyleSheet.flatten<ViewStyle>([
    STYLES.noticeBar,
    {
      backgroundColor: TextBackgroundColor
        ? TextBackgroundColor
        : THEME_VAR[`noticeBar_${type}_background_color`] ||
          THEME_VAR.noticeBar_default_background_color,
    },
  ])
  const noticeBarTextStyles = StyleSheet.flatten<TextStyle>([
    STYLES.title,
    {
      color: textColor
        ? textColor
        : THEME_VAR[`noticeBar_${type}_color`] ||
          THEME_VAR.noticeBar_default_color,
    },
    showIcon ? STYLES.textPadding : null,
    rightIcon ? STYLES.textPaddingRight : null,
  ])

  const mainJSX = (
    <View style={[mainNoticeBarStyles, style]}>
      {tipIconJSX}
      <Text numberOfLines={numberOfLines} style={noticeBarTextStyles}>
        {children}
      </Text>
      {iconJSX}
    </View>
  )

  function handlePress() {
    if (rightIcon && !renderRightIcon) {
      setVisible(false)
    }
    if (onPress) {
      onPress()
    } else {
      return false
    }
  }

  return visible ? (
    rightIcon ? (
      mainJSX
    ) : (
      <TouchableHighlight onPress={onPress ? handlePress : null}>
        {mainJSX}
      </TouchableHighlight>
    )
  ) : null
}

export default memo<typeof NoticeBar>(NoticeBar)
