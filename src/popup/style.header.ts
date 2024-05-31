import { StyleSheet } from 'react-native'

import type { PopupTheme } from './style'

export const styleCreator = (cv: PopupTheme) => {
  return StyleSheet.create({
    icon: {
      marginLeft: cv.popup_close_icon_margin_left,
    },
  })
}
