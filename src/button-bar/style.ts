import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    button_bar_padding_horizontal: TOKENS.space_3,
    button_bar_button_space: 8,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    button_bar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: cv.button_bar_padding_horizontal,
    },

    button_bar_alone: {
      flexDirection: 'column',
      alignItems: 'stretch',
      justifyContent: 'center',
    },

    btn: {
      minWidth: 84,
    },
  })
}
