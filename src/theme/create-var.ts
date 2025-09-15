import isNil from 'lodash/isNil';

import type { TokensType } from './interface';

type Creator<T> = (v: TokensType) => T;

type KeyType = [TokensType, Creator<unknown>];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyleMap: Map<KeyType, any> = new Map();

export const createVar = <T>(token: TokensType, creator: Creator<T>): T => {
  let myStyle: T;

  for (const [key, value] of StyleMap) {
    if (key[1] === creator) {
      if (key[0] === token) {
        myStyle = value;
      } else {
        StyleMap.delete(key);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!myStyle) {
    myStyle = creator(token);
    // 变量覆盖
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    Object.keys(myStyle).forEach(field => {
      if (!isNil(token[field])) {
        myStyle[field] = token[field];
      }
    });

    StyleMap.set([token, creator], myStyle);
  }

  return myStyle;
};
