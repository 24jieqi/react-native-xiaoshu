import { useEffect, useRef } from 'react'

type CustomEquals<T> = (previous: T | undefined, current: T) => boolean

const useOriginalCopyFn = <T>(value: T, equals: CustomEquals<T>): T => {
  const cache = useRef<T>(value)
  const equalsRef = useRef(equals)
  useEffect(() => {
    equalsRef.current = equals
  }, [equals])
  useEffect(() => {
    if (!equalsRef.current(cache.current, value)) {
      cache.current = value
    }
  }, [value])

  return equals(cache.current, value) ? cache.current : value
}

export default useOriginalCopyFn
