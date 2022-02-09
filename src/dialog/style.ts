import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    dialog: {
      // position: 'absolute',
      marginTop: '-40%', // margin 是对话框的尺寸，不是屏幕宽度有关系？
      // width: width || themeVar.dialog_width,
      overflow: 'hidden',
      backgroundColor: themeVar.dialog_background_color,
      borderRadius: themeVar.dialog_border_radius,
    },

    title_text: {
      textAlign: 'center',
      marginTop: themeVar.dialog_header_margin_top,
      lineHeight: themeVar.dialog_header_line_height,
      fontWeight: themeVar.dialog_header_font_weight,
      fontSize: themeVar.dialog_header_font_size,
      paddingHorizontal: themeVar.dialog_message_padding_horizontal,
      // backgroundColor: '#f30',
    },

    content_isolated: {
      marginTop:
        themeVar.dialog_footer_margin_top - themeVar.dialog_message_margin_top,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    message_text: {
      paddingHorizontal: themeVar.dialog_message_padding_horizontal,
      marginTop: themeVar.dialog_message_margin_top,
      fontSize: themeVar.dialog_message_font_size,
      lineHeight: themeVar.dialog_message_line_height,
      color: themeVar.dialog_message_text_color,
      // backgroundColor: '#f30',
    },

    footer: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: themeVar.divider_color_dark,
      marginTop: themeVar.dialog_footer_margin_top,
    },

    btn: {
      flex: 1,
      marginHorizontal: 0,
      marginVertical: 0,
    },

    btn_confirm: {
      fontWeight: 'bold',
    },
  })
}
