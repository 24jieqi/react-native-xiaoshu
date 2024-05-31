import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    step_selector_active_color: TOKENS.brand_6,
    step_selector_option_index_width: TOKENS.space_6,
    step_selector_option_index_text_color: TOKENS.gray_6,
    step_selector_option_index_text_font_size: TOKENS.font_size_5,
  }
}

export type StepSelector = ReturnType<typeof varCreator>

export const styleCreator = (cv: StepSelector) => {
  return StyleSheet.create({
    selected_cell: {
      paddingVertical: 0,
    },

    selected_cell_title_text: {
      paddingVertical: 12,
    },

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

    line: {
      width: 20,
      height: '100%',
    },

    line_dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      borderColor: cv.step_selector_active_color,
      borderWidth: 1,
      position: 'absolute',
      left: '50%',
      top: '50%',
      marginLeft: -5,
      marginTop: -5,
      backgroundColor: '#fff',
    },

    line_dot_active: {
      backgroundColor: cv.step_selector_active_color,
      borderWidth: 0,
    },

    line_bar: {
      width: 1,
      height: '50%',
      marginLeft: -0.5,
      position: 'absolute',
      left: '50%',
      backgroundColor: cv.step_selector_active_color,
    },

    line_bar_top: {
      top: 0,
    },

    line_bar_bottom: {
      bottom: 0,
    },
  })
}
