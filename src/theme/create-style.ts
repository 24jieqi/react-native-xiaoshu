import type { TokensType } from './interface'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentVar = Record<string, any>

type Creator<T> = (v: ComponentVar, t?: TokensType) => T

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KeyType = [ComponentVar, Creator<any>]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyleMap: Map<KeyType, any> = new Map()

export const createStyle = <T>(
  componentVar: ComponentVar,
  creator: Creator<T>,
  tokens?: TokensType,
): T => {
  let myStyle: T

  for (const [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === componentVar) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!myStyle) {
    myStyle = creator(componentVar, tokens)

    StyleMap.set([componentVar, creator], myStyle)
  }

  return myStyle
}
