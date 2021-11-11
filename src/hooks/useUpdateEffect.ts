import type React from 'react'
import { useEffect, useRef } from 'react'

/**
 * 页面更新后执行副作用操作
 * @param effect 副作用操作
 * @param deps 更新触发依赖
 */
const useUpdateEffect = (
  effect: React.EffectCallback,
  deps: React.DependencyList,
) => {
  const mounted = useRef(false)
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
    } else {
      return effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export default useUpdateEffect
