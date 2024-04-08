import { useMemo } from 'react'

import useOriginalDeepCopy from '../hooks/useOriginalDeepCopy'

import { createVar } from './create-var'
import type { TokensType } from './interface'
import { useThemeTokens } from './theme'

const useStyle = <CV, CS>({
  theme,
  varCreator,
  styleCreator,
}: {
  theme?: Partial<CV>
  varCreator: (t: TokensType) => CV
  styleCreator?: (cv: CV, t: TokensType) => CS
}): [CV, CS | undefined, TokensType] => {
  const TOKENS = useThemeTokens()
  const cv = createVar(TOKENS, varCreator)
  const cvMerge = useOriginalDeepCopy<CV>({
    ...cv,
    ...theme,
  })
  const styles = useMemo(
    () => styleCreator?.(cvMerge, TOKENS),
    [TOKENS, cvMerge, styleCreator],
  )

  return [cvMerge, styles, TOKENS]
}

export default useStyle
