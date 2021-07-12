import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Popup from '../popup/popup'
import { useTheme } from '../theme'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { NotifyProps } from './interface'

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 * @description 原计划 Notify 的 Props 继承 TouchableWithoutFeedbackProps，更贴近 React Native 提供的组件，这里需要把 Popup 中通用的属性提取出来，如果以后涉及到改动，有点麻烦，等大部分组件完整后看看怎么优化。
 */
const Notify: React.FC<NotifyProps> = ({
  children,
  style,
  textStyle,
  type = 'primary',
  message,
  color,
  backgroundColor,
  onPress,
  ...restProps
}) => {
  const insets = useSafeAreaInsets()
  const themeVar = useTheme()

  const Styles = createStyles(themeVar, {
    type,
    color,
    backgroundColor,
  })

  const messageStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.notify,
    {
      paddingTop: insets.top,
    },
    style,
  ])
  const messageTextStyleSummary: TextStyle = StyleSheet.flatten([
    Styles.text,
    textStyle,
  ])

  const messageJSX = isDef(message) ? (
    isValidElement(message) ? (
      message
    ) : (
      <Text style={messageTextStyleSummary} numberOfLines={1}>
        {message}
      </Text>
    )
  ) : (
    children
  )

  return (
    <Popup {...restProps} overlay={false} position="top">
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={messageStyleSummary}>{messageJSX}</View>
      </TouchableWithoutFeedback>
    </Popup>
  )
}

export default memo<typeof Notify>(Notify)
