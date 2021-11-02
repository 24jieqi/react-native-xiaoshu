import type { ThemeVarType } from './interface'

type Creator<T> = (v: ThemeVarType) => T

type KeyType = [ThemeVarType, Creator<any>]

const StyleMap: Map<KeyType, any> = new Map()

export const widthStyle = <T>(vars: ThemeVarType, creator: Creator<T>): T => {
  let myStyle: T

  for (let [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === vars) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  if (!myStyle) {
    myStyle = creator(vars)

    StyleMap.set([vars, creator], myStyle)
  }

  return myStyle
}
