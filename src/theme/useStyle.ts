import { useMemo } from 'react'

import useOriginalDeepCopy from '../hooks/useOriginalDeepCopy'

import type { ComponentVar } from './create-style'
import { createStyle } from './create-style'
import { createVar } from './create-var'
import type { TokensType } from './interface'
import { useThemeTokens } from './theme'

export const useStyle = <CV extends ComponentVar, CS>({
  theme,
  varCreator,
  styleCreator,
}: {
  theme?: Partial<CV>
  varCreator: (t: TokensType) => CV
  styleCreator?: (cv: CV, t: TokensType) => CS
}): [CV, CS, TokensType] => {
  const TOKENS = useThemeTokens()
  const cv = createVar(TOKENS, varCreator)
  const cvMerge = useOriginalDeepCopy<CV>({
    ...cv,
    ...theme,
  })
  const styles = useMemo(() => {
    if (styleCreator) {
      if (theme) {
        return styleCreator(cvMerge, TOKENS)
      }

      return createStyle(cv, styleCreator, TOKENS)
    }
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {} as CS
  }, [TOKENS, cv, cvMerge, styleCreator, theme])

  return [cvMerge, styles, TOKENS]
}
