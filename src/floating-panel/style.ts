import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    floating_panel_border_radio: TOKENS.border_radius_xl,
    floating_panel_background_color: TOKENS.white,
    floating_panel_header_padding: TOKENS.space_3,
    floating_panel_header_text_font_size: TOKENS.font_size_7,
    floating_panel_header_text_color: TOKENS.gray_8,
  }
}

export type FloatingPanelTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: FloatingPanelTheme) => {
  return StyleSheet.create({
    floatingPanel: {
      borderTopLeftRadius: cv.floating_panel_border_radio,
      borderTopRightRadius: cv.floating_panel_border_radio,
      backgroundColor: cv.floating_panel_background_color,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
    },

    header: {
      padding: cv.floating_panel_header_padding,
    },

    headerText: {
      fontSize: cv.floating_panel_header_text_font_size,
      color: cv.floating_panel_header_text_color,
    },

    indicator: {
      position: 'absolute',
      width: 24,
      height: 4,
      backgroundColor: '#6F6F6F',
      borderRadius: 2,
      top: 10,
      left: '50%',
      marginLeft: -12,
    },

    wrapper: {
      flex: 1,
    },
  })
}
