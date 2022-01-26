import React, { isValidElement, memo } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Popup from '../popup/popup'
import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers'
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
  const THEME_VAR = useTheme()

  const STYLES = widthStyle(THEME_VAR, createStyles)

  const messageJSX = isDef(message) ? (
    isValidElement(message) ? (
      message
    ) : (
      <Text
        style={[
          STYLES.text,
          {
            color: isDef(color) ? color : THEME_VAR.notify_text_color,
          },
          textStyle,
        ]}
        numberOfLines={1}>
        {message}
      </Text>
    )
  ) : (
    children
  )

  return (
    <Popup {...restProps} overlay={false} position="top">
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            STYLES.notify,
            {
              backgroundColor: isDef(backgroundColor)
                ? backgroundColor
                : THEME_VAR[`notify_${type}_background_color`] ||
                  THEME_VAR.notify_primary_background_color,
              paddingTop:
                insets.top > THEME_VAR.notify_padding_vertical
                  ? insets.top
                  : THEME_VAR.notify_padding_vertical,
            },
            style,
          ]}>
          {messageJSX}
        </View>
      </TouchableWithoutFeedback>
    </Popup>
  )
}

export default memo<typeof Notify>(Notify)
