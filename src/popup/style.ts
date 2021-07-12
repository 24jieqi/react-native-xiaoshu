import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
import { omit } from 'lodash'

import type { ThemeVarType } from '../theme'
import type { PopupProps, PopupPosition } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { round, position }: Pick<PopupProps, 'round' | 'position'>,
) => {
  const borderRadius = round ? themeVar.popup_round_border_radius : 0

  return StyleSheet.create({
    popup: {
      position: 'relative',
      borderTopLeftRadius:
        position === 'bottom' || position === 'right' ? borderRadius : 0,
      borderTopRightRadius:
        position === 'bottom' || position === 'left' ? borderRadius : 0,
      borderBottomLeftRadius:
        position === 'top' || position === 'right' ? borderRadius : 0,
      borderBottomRightRadius:
        position === 'top' || position === 'left' ? borderRadius : 0,
      backgroundColor: themeVar.popup_background_color,
      overflow: 'hidden',
      height: 0,
    },
    popupActive: {
      position: 'absolute',
      height: 'auto',
    },
  })
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
