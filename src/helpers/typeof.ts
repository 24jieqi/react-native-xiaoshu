import isFunction from 'lodash/isFunction'

// [object Promise] Promise 在 JSC 中是 object，在浏览器端是 Promise
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

/** 是一个 Promise */
export const isPromise = <T = any>(val: any): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
