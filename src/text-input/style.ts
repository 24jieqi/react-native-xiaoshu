import { StyleSheet } from 'react-native'

// import type { TextInputProps } from './interface';
import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    wrapperClearable: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    textInput: {
      // height: themeVar.text_input_min_height,
      // lineHeight: themeVar.text_input_min_height - themeVar.text_input_padding_vertical * 2,
      color: themeVar.text_input_color,
      fontSize: themeVar.text_input_font_size,
      padding: 0,
      margin: 0,
      paddingVertical: themeVar.text_input_padding_vertical,
      paddingHorizontal: themeVar.text_input_padding_horizontal,
      // backgroundColor: '#f30', // to test ui
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
  })
}
