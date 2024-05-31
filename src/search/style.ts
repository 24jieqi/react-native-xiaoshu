import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    search_background_color: TOKENS.white,
    search_padding_horizontal: TOKENS.space_3,
    search_padding_vertical: TOKENS.space_1,
    search_gap: TOKENS.space_2,
    search_back_icon_color: TOKENS.gray_8,
    search_text_input_background_color: TOKENS.gray_3,
  }
}

export type SearchTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: SearchTheme) => {
  return StyleSheet.create({
    search: {
      backgroundColor: cv.search_background_color,
      paddingHorizontal: cv.search_padding_horizontal,
      paddingVertical: cv.search_padding_vertical,
      flexDirection: 'row',
      alignItems: 'center',
    },

    search_back: {
      paddingLeft: cv.search_gap,
    },

    text_input: {
      marginLeft: cv.search_gap,
    },

    text_input_group: {
      flex: 1,
      backgroundColor: cv.search_text_input_background_color,
      borderRadius: 4,
    },
    search_btn: {
      marginLeft: cv.search_gap,
    },
    icon_back: {
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: cv.search_gap,
      // backgroundColor: '#f30',
    },
  })
}
