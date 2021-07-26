/**
 * 代码来源：https://github.com/alibaba/hooks/blob/master/packages/hooks/src/usePersistFn/index.ts
 * 关于 this：https://www.jianshu.com/p/8b3a2513d8e5
 */

import { useRef } from 'react'

export type noop = (...args: any[]) => any

/**
 * 持久化 function 的 Hook
 */
function usePersistFn<T extends noop>(fn: T) {
  const fnRef = useRef<T>(fn)
  fnRef.current = fn

  const persistFn = useRef<T>()

  if (!persistFn.current) {
    persistFn.current = function (this: T, ...args) {
      return fnRef.current?.apply(this, args)
    } as T
  }

  return persistFn.current!
}

export default usePersistFn
