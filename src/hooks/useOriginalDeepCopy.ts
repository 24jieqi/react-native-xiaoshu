import deepEquals from 'fast-deep-equal'

import useOriginalCopyFn from './useOriginalCopyFn'

const useOriginalDeepCopy = <T>(value: T): T => {
  return useOriginalCopyFn(value, deepEquals)
}

export default useOriginalDeepCopy
