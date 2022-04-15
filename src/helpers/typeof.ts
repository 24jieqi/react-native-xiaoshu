import isFunction from 'lodash/isFunction'

const isType =
  (
    t:
      | 'Array'
      | 'Object'
      | 'Function'
      | 'Date'
      | 'String'
      | 'Number'
      | 'Null'
      | 'Undefined',
  ) =>
  (v: any) =>
    Object.prototype.toString.call(v) === `[object ${t}]`

/** 是对象 */
export const isObject = <T>(v: T): v is T => isType('Object')(v)

/** 是一个 Promise */
export const isPromise = <T = any>(val: any): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
