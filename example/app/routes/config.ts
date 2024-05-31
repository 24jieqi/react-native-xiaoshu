import TOKENS from '@fruits-chain/design-tokens-bailu'
import type { TextStyle } from 'react-native'

export const buildHeaderTitleStyle = (p?: TextStyle): TextStyle => {
  return {
    fontSize: 18,
    lineHeight: 24,
    // color: '#11151A',
    fontWeight: 'bold',
    ...p,
  }
}

export const darkTheme = {
  dark: true,
  colors: {
    primary: TOKENS.brand_6,
    background: '#1b1b1b',
    card: 'rgb(18, 18, 18)', // header\bottom bar 背景色
    text: 'rgb(229, 229, 231)', // 普通文字
    border: TOKENS.gray_7,
    notification: '#436195',
  },
}

export const lightTheme = {
  dark: false,
  colors: {
    primary: TOKENS.brand_6,
    background: TOKENS.gray_1,
    card: '#fff',
    text: TOKENS.gray_8,
    border: TOKENS.gray_2,
    notification: '#436195',
  },
}
