import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { isValidElement } from 'react'
import type {
  TextStyle,
  StyleProp,
  TextProps,
  TouchableWithoutFeedbackProps,
  ViewProps,
} from 'react-native'
import { Text } from 'react-native'

export * from './z-index'
export { default as easing } from './easing'
export * from './interceptor'
export * from './typeof'
export * from './format/number'
export * from './attach-properties-to-component'
export * from './arrow'
export { default as childrenToArray } from './children/to-array'

/** 获取默认值 */
export const getDefaultValue = <T,>(value: T, defaultValue: T): T => {
  return !isUndefined(value) ? value : defaultValue
}

/** 渲染类文字的 JSX */
export const renderTextLikeJSX = (
  node: React.ReactNode,
  style: StyleProp<TextStyle>,
  restProps?: Omit<TextProps, 'style'>,
) => {
  return !isNil(node) ? (
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
      !isNil(props[k])
    ) {
      return true
    }
    return false
  })
}

/**
 * 挑选出点击事件的属性
 */
export const pickTouchablePropsField = (
  props: Partial<ViewProps & TouchableWithoutFeedbackProps>,
) => {
  return pick(props, touchablePropsFields)
}

/**
 * 排除点击事件的属性
 */
export const omitTouchablePropsField = (props: ViewProps) => {
  return omit(props, touchablePropsFields)
}
