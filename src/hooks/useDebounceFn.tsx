import debounce from 'lodash/debounce'
import { useRef, useMemo, useEffect } from 'react'

type noop = (...args: any) => any

export interface DebounceOptions {
  wait?: number
  leading?: boolean
  trailing?: boolean
  maxWait?: number
}

const useDebounceFn = <T extends noop>(fn: T, options?: DebounceOptions) => {
  const fnRef = useRef(fn)
  const optionsRef = useRef(options)
  fnRef.current = fn

  const wait = options?.wait ?? 1000

  const debounced = useMemo(
    () =>
      debounce(
        (...args: Parameters<T>): ReturnType<T> => {
          // @ts-ignore
          return fnRef.current?.(...args)
        },
        wait,
        optionsRef.current,
      ),
    [wait],
  )

  useEffect(() => {
    return () => {
      debounced.cancel()
    }
  }, [debounced])

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  }
}

export default useDebounceFn
