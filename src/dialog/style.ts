import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { DialogProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { messageAlign, width }: Pick<DialogProps, 'messageAlign' | 'width'>,
) => {
  return StyleSheet.create({
    dialog: {
      // position: 'absolute',
      marginTop: '-40%', // margin 是对话框的尺寸，不是屏幕宽度有关系？
      width: width || themeVar.dialog_width,
      overflow: 'hidden',
      backgroundColor: themeVar.dialog_background_color,
      borderRadius: themeVar.dialog_border_radius,
    },

    titleText: {
      textAlign: 'center',
      paddingTop: themeVar.dialog_header_padding_top,
      lineHeight: themeVar.dialog_header_line_height,
      fontWeight: themeVar.dialog_header_font_weight,
      fontSize: themeVar.dialog_font_size,
    },

    contentIsolated: {
      minHeight: 104,
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
    },

    messageText: {
      paddingHorizontal: themeVar.dialog_message_padding_horizontal,
      paddingVertical: themeVar.dialog_message_padding_vertical,
      fontSize: themeVar.dialog_message_font_size,
      lineHeight: themeVar.dialog_message_line_height,
      textAlign: messageAlign,
    },

    messageTextHasTitle: {
      paddingTop: themeVar.dialog_has_title_message_padding_top,
      color: themeVar.dialog_has_title_message_text_color,
    },

    footer: {
      flexDirection: 'row',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderColor: themeVar.border_color,
    },

    btn: {
      flex: 1,
      marginHorizontal: 0,
      marginVertical: 0,
      borderWidth: 0,
      borderRadius: 0,
      height: themeVar.dialog_button_height,
      backgroundColor: 'transparent',
    },

    btnLeft: {
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderColor: themeVar.border_color,
    },
  })
}
