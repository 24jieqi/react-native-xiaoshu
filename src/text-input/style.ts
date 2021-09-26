import { StyleSheet } from 'react-native'

// import type { TextInputProps } from './interface';
import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  /**
   * 文字行高
   * @description iOS 如果直接行高，会出现怪异现象，这里需要使用文字大小做行高，然后再 padding
   * @description +2 让中文显示完整
   */
  const lineHeight = themeVar.text_input_font_size + 2
  const diffMiniHeight = themeVar.text_input_min_height - lineHeight

  return StyleSheet.create({
    wrapperClearable: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    addon: {
      flexDirection: 'row',
    },

    addonText: {
      lineHeight:
        themeVar.text_input_min_height +
        themeVar.text_input_padding_horizontal * 2,
      color: themeVar.text_color_1,
      fontSize: themeVar.text_input_font_size,
    },

    addonBeforeText: {
      marginRight: themeVar.padding_sm,
    },

    addonAfterText: {
      marginLeft: themeVar.padding_sm,
    },

    addonInput: {
      flex: 1,
    },

    textInput: {
      color: themeVar.text_input_color,
      fontSize: themeVar.text_input_font_size,
      lineHeight: lineHeight,
      paddingHorizontal: themeVar.text_input_padding_horizontal,
      paddingVertical:
        diffMiniHeight / 2 + themeVar.text_input_padding_vertical,
      // backgroundColor: '#f30', // to test ui
    },

    textInputBorder: {
      paddingHorizontal: themeVar.text_input_padding_horizontal - 1,
      paddingVertical:
        diffMiniHeight / 2 + themeVar.text_input_padding_vertical - 1,
    },

    textInputClearable: {
      flex: 1,
    },

    clearableWrapper: {
      // backgroundColor: '#f30',
      paddingHorizontal:
        (themeVar.text_input_min_height - themeVar.text_input_clearable_size) /
        4,
      paddingVertical:
        (themeVar.text_input_min_height - themeVar.text_input_clearable_size) /
        4,
      zIndex: 3,
    },

    clearable: {
      width: themeVar.text_input_clearable_size,
      height: themeVar.text_input_clearable_size,
      borderRadius: themeVar.text_input_clearable_size / 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: themeVar.text_input_clearable_background_color,
    },

    wordLimit: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      fontSize: themeVar.font_size_text,
      color: themeVar.text_color_2,
    },

    border: {
      borderWidth: 1,
      borderColor: themeVar.border_color,
      borderRadius: themeVar.border_radius_md,
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
  })
}
