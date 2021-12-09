import React, { isValidElement } from 'react'
import type {
  TextStyle,
  StyleProp,
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native'
import { Text } from 'react-native'
import pick from 'lodash/pick'
import omit from 'lodash/omit'

export * from './color'
export * from './z-index'
export { default as easing } from './easing'
export * from './interceptor'
export * from './typeof'
export * from './format/number'

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

/** 可点击元素的属性字段 */
export const touchablePropsFields: (keyof TouchableWithoutFeedbackProps)[] = [
  'delayLongPress',
  'delayPressIn',
  'delayPressOut',
  'disabled',
  'hitSlop',
  'onBlur',
  'onFocus',
  'onLongPress',
  'onPress',
  'onPressIn',
  'onPressOut',
  'pressRetentionOffset',
]

/**
 * 是一个点击节点
 */
export const isTouchableNode = (props: TouchableWithoutFeedbackProps) => {
  return Object.keys(props).some(k => {
    if (
      touchablePropsFields.indexOf(k as keyof TouchableWithoutFeedbackProps) >
        -1 &&
      isDef(props[k])
    ) {
      return true
    }
    return false
  })
}

/**
 * 挑选出点击事件的属性
 */
export const pickTouchablePropsField = (props: Partial<ViewProps>) => {
  return pick<ViewProps>(props, touchablePropsFields)
}

export const omitTouchablePropsField = (props: ViewProps) => {
  return omit(props, touchablePropsFields)
}
