import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    step_selector_active_color: TOKENS.brand_6,
    step_selector_option_index_width: TOKENS.space_6,
    step_selector_option_index_text_color: TOKENS.gray_6,
    step_selector_option_index_text_font_size: TOKENS.font_size_5,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    placeholder_text: {
      fontWeight: 'bold',
    },

    option_text_active: {
      color: cv.step_selector_active_color,
    },

    option_index_text: {
      width: cv.step_selector_option_index_width,
      alignSelf: 'center',
      color: cv.step_selector_option_index_text_color,
      fontSize: cv.step_selector_option_index_text_font_size,
    },
  })
}
