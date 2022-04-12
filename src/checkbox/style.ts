import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    checkbox_icon_size: 20,
    checkbox_icon_color: TOKENS.gray_6,
    checkbox_icon_disabled_color: TOKENS.gray_7,
    checkbox_checked_icon_color: TOKENS.brand_6,
    checkbox_checked_icon_disabled_color: TOKENS.gray_7,
    checkbox_label_color: TOKENS.gray_8,
    checkbox_label_margin: TOKENS.space_2,
    checkbox_disabled_label_color: TOKENS.gray_6,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    checkbox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: cv.checkbox_label_color,
      lineHeight: cv.checkbox_icon_size,
      minHeight: cv.checkbox_icon_size,
    },
    label_disabled: {
      color: cv.checkbox_disabled_label_color,
    },
  })
}
