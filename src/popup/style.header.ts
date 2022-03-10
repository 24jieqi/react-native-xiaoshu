import { StyleSheet } from 'react-native'

import type { ComponentVars } from './style'

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    icon: {
      marginLeft: cv.popup_close_icon_margin_left,
    },
  })
}
