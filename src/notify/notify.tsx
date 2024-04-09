import isNil from 'lodash/isNil'
import React, { isValidElement, memo } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Popup from '../popup/popup'
import Theme from '../theme'

import type { NotifyProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Notify 消息提示
 * @description 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。
 * @description 原计划 Notify 的 Props 继承 TouchableWithoutFeedbackProps，更贴近 React Native 提供的组件，这里需要把 Popup 中通用的属性提取出来，如果以后涉及到改动，有点麻烦，等大部分组件完整后看看怎么优化。
 */
const Notify: React.FC<React.PropsWithChildren<NotifyProps>> = ({
  children,
  theme,
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
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  const messageJSX = !isNil(message) ? (
    isValidElement(message) ? (
      message
    ) : (
      <Text
        style={[
          STYLES.text,
          {
            color: !isNil(color) ? color : CV.notify_text_color,
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
              backgroundColor: !isNil(backgroundColor)
                ? backgroundColor
                : CV[`notify_${type}_background_color`] ||
                  CV.notify_primary_background_color,
              paddingTop:
                insets.top > CV.notify_padding_vertical
                  ? insets.top
                  : CV.notify_padding_vertical,
            },
            style,
          ]}>
          {messageJSX}
        </View>
      </TouchableWithoutFeedback>
    </Popup>
  )
}

export default memo(Notify)
