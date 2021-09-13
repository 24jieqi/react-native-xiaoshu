export { default as hex2rgba } from './hex2rgba'
export { getNextZIndex } from './z-index'
export { default as easing } from './easing'

import { isDef } from './typeof'

/** 空函数，用于一些没有必要实际需要的回调，同时避免抛出错误 */
export function noop() {}

/** 获取默认值 */
export const getDefaultValue = <T>(value: T, defaultValue: T): T => {
  return isDef(value) ? value : defaultValue
}
