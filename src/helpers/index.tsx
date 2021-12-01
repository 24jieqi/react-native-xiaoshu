import React, { isValidElement } from 'react'
import type { TextStyle, StyleProp, TextProps } from 'react-native'
import { Text } from 'react-native'

export * from './color'
export { getNextZIndex } from './z-index'
export { default as easing } from './easing'
export { callInterceptor } from './interceptor'

import { isValue, isDef } from './typeof'

/** 空函数，用于一些没有必要实际需要的回调，同时避免抛出错误 */
export function noop() {}

/** 获取默认值 */
export const getDefaultValue = <T,>(value: T, defaultValue: T): T => {
  return isValue(value) ? value : defaultValue
}

/** 渲染类文字的 JSX */
export const renderTextLikeJSX = (
  node: React.ReactNode,
  style: StyleProp<TextStyle>,
  restProps?: Omit<TextProps, 'style'>,
) => {
  return isDef(node) ? (
    isValidElement(node) ? (
      node
    ) : (
      <Text {...restProps} style={style}>
        {node}
      </Text>
    )
  ) : null
}
