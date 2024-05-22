import { Theme } from '@fruits-chain/react-native-xiaoshu'
import type { TokensType } from '@fruits-chain/react-native-xiaoshu'

import useColorSchemeDark from './useColorSchemeDark'

type Creator<T> = (T: TokensType, isDark: boolean) => T

type KeyType = [TokensType, boolean, Creator<any>]
const StyleMap: Map<KeyType, any> = new Map()

const useStyle = <T>(creator: Creator<T>): T => {
  const TOKENS = Theme.useThemeTokens()
  const isColorSchemeDark = useColorSchemeDark()

  let myStyle: T

  for (let [key, value] of StyleMap) {
    if (key[2] === creator) {
      if (key[0] === TOKENS && key[1] === isColorSchemeDark) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  // @ts-ignore
  if (!myStyle) {
    myStyle = creator(TOKENS, isColorSchemeDark)

    StyleMap.set([TOKENS, isColorSchemeDark, creator], myStyle)
  }

  return myStyle
}

export default useStyle
