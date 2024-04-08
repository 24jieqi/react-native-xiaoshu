import isNil from 'lodash/isNil'

import type { TokensType } from './interface'

type Creator<T> = (v: TokensType) => T

type KeyType = [TokensType, Creator<any>]

const StyleMap: Map<KeyType, any> = new Map()

export const createVar = <T>(token: TokensType, creator: Creator<T>): T => {
  let myStyle: T

  for (let [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === token) {
        myStyle = value
      } else {
        StyleMap.delete(key)
      }
    }
  }

  // @ts-ignore
  if (!myStyle) {
    myStyle = creator(token)
    // 变量覆盖
    // @ts-ignore
    Object.keys(myStyle).forEach(field => {
      if (!isNil(token[field])) {
        myStyle[field] = token[field]
      }
    })

    StyleMap.set([token, creator], myStyle)
  }

  return myStyle
}
