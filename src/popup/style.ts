import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { omit } from 'lodash'

import type { ThemeVarType } from '../theme'
import type { PopupPosition } from './interface'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    popup: {
      position: 'relative',
      backgroundColor: themeVar.popup_background_color,
      overflow: 'hidden',
      height: 0,
    },
    popup_active: {
      position: 'absolute',
      height: 'auto',
    },
  })
}

export const getBorderRadius = (
  themeVar: ThemeVarType,
  position: PopupPosition,
  round: boolean,
): ViewStyle => {
  const borderRadius = round ? themeVar.popup_round_border_radius : 0
  return {
    borderTopLeftRadius:
      position === 'bottom' || position === 'right' ? borderRadius : 0,
    borderTopRightRadius:
      position === 'bottom' || position === 'left' ? borderRadius : 0,
    borderBottomLeftRadius:
      position === 'top' || position === 'right' ? borderRadius : 0,
    borderBottomRightRadius:
      position === 'top' || position === 'left' ? borderRadius : 0,
  }
}

const absolute = {
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
}

export const PopupPositionMap: Record<PopupPosition, ViewStyle> = {
  center: {
    flex: 1,
    backgroundColor: 'transparent',
    // backgroundColor: 'rgba(0,0,0,0.8)', // to test ui
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: omit(absolute, ['right']),
  right: omit(absolute, ['left']),
  top: omit(absolute, ['bottom']),
  bottom: omit(absolute, ['top']),
}
