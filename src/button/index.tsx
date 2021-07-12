import React, { memo } from 'react'
import type { GestureResponderEvent } from 'react-native'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import Loading from '../loading'
import * as helpers from '../helpers'
import { createStyles } from './style'
import type { ButtonProps } from './interface'

/**
 * Button 按钮
 * @description 按钮用于触发一个操作，如提交表单。
 */
const Button: React.FC<ButtonProps> = ({
  children,
  style,
  text,
  textStyle,
  type = 'default',
  size = 'normal',
  plain = false,
  hairline = false,
  disabled = false,
  loading = false,
  loadingText,
  square = false,
  round = false,
  icon,
  color,
  onPress,
  ...otherProps
}) => {
  const themeVar = useTheme()

  const Styles = createStyles(themeVar, {
    size,
    color,
    type,
    plain,
    hairline,
    square,
    round,
    disabled,
    loading,
  })

  /**
   * 点击按钮回调
   * @param e event 回调事件
   */
  const onPressTouchable = (e: GestureResponderEvent) => {
    if (!disabled && !loading) {
      onPress && onPress(e)
    }
  }

  const buttonStyleSummary = StyleSheet.flatten([Styles.button, style])
  const textStyleSummary = StyleSheet.flatten([Styles.text, textStyle])

  return (
    <TouchableHighlight
      underlayColor={helpers.hex2rgba(
        (Styles.button.backgroundColor === themeVar.white
          ? themeVar.button_plain_underlay_color
          : Styles.button.backgroundColor || '') as string,
      )}
      onPress={onPressTouchable}
      style={buttonStyleSummary}
      {...otherProps}>
      {loading ? (
        <Loading color={Styles.text.color} size={Styles.text.fontSize}>
          {loadingText ? loadingText : null}
        </Loading>
      ) : (
        <>
          {icon || null}
          <Text style={textStyleSummary}>{text || children}</Text>
        </>
      )}
    </TouchableHighlight>
  )
}

export default memo<typeof Button>(Button)
