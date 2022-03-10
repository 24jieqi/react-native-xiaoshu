import { StyleSheet } from 'react-native'

import type { ComponentVars } from './style.menu'

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: cv.dropdown_menu_title_font_size,
      paddingHorizontal: cv.dropdown_menu_title_padding_horizontal,
    },
  })
}
