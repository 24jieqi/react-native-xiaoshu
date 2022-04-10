import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    popover_border_radius: TOKENS.border_radius_s,
    popover_item_padding_horizontal: TOKENS.space_3,
    popover_item_padding_vertical: TOKENS.space_3,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    content: {
      backgroundColor: '#fff',
      borderRadius: cv.popover_border_radius,
      padding: 0,
      elevation: 3,
    },
    arrow: {
      borderTopColor: 'transparent',
    },
    background: {
      backgroundColor: 'transparent',
    },

    item: {
      paddingHorizontal: cv.popover_item_padding_horizontal,
      paddingVertical: cv.popover_item_padding_vertical,
    },
  })
}
