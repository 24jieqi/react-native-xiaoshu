import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    input: {
      // flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'row',
      // backgroundColor: '#f30', // to test ui
    },

    input_border: {
      borderWidth: 1,
      borderRadius: themeVar.border_radius_sm,
      borderColor: themeVar.border_color,
    },

    text_input: {
      // flex: 1,
      flexGrow: 1,
      flexShrink: 1,
      paddingHorizontal: 0,
      paddingVertical: 0,
      margin: 0,
      borderWidth: 0,
      textAlignVertical: 'center',
    },

    input_fix_group: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: themeVar.text_input_padding_horizontal,
    },

    input_fix_text: {
      color: themeVar.text_color_1,
    },

    input_fix_text_pre: {
      marginRight: themeVar.text_input_padding_horizontal,
    },

    input_fix_text_suf: {
      marginLeft: themeVar.text_input_padding_horizontal,
    },

    clearable: {
      alignSelf: 'center',
      width: themeVar.text_input_clearable_size,
      height: themeVar.text_input_clearable_size,
      borderRadius: themeVar.text_input_clearable_size / 2,
      backgroundColor: themeVar.text_input_clearable_background_color,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: themeVar.text_input_padding_horizontal,
    },

    addon_group: {
      // width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },

    addon_text: {
      color: themeVar.text_color_1,
    },

    addon_text_before: {
      marginRight: themeVar.text_input_padding_horizontal,
    },

    addon_text_after: {
      marginLeft: themeVar.text_input_padding_horizontal,
    },

    word_limit_text: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: themeVar.font_size_text,
      color: themeVar.text_color_2,
    },

    accessory: {
      width: '100%',
      height: themeVar.text_input_accessory_height,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      borderTopColor: themeVar.border_color,
      borderTopWidth: 1,
    },

    accessory_text: {
      color: themeVar.text_input_accessory_text_color,
      fontSize: themeVar.text_input_accessory_font_size,
      paddingHorizontal: themeVar.text_input_dark_accessory_padding_horizontal,
      lineHeight: (themeVar.text_input_accessory_height / 3) * 2,
      fontWeight: 'bold',
    },
  })
}
