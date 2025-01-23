import omit from 'lodash/omit'
import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

import type { PopupPosition } from './interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    popup_background_color: TOKENS.white,
    popup_round_border_radius: TOKENS.border_radius_xl,
    popup_close_icon_size: 24,
    popup_close_icon_color: TOKENS.gray_7,
    popup_close_icon_margin_left: TOKENS.space_2,
  }
}

export type PopupTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: PopupTheme) => {
  return StyleSheet.create({
    popup: {
      backgroundColor: cv.popup_background_color,
      overflow: 'hidden',
    },
    popup_hide: {
      position: 'relative',
      height: 0,
    },
    popup_active: {
      position: 'absolute',
      height: 'auto',
    },
  })
}

export const getBorderRadius = (
  cv: PopupTheme,
  position: PopupPosition,
  round: boolean,
): ViewStyle => {
  const borderRadius = round ? cv.popup_round_border_radius : 0
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
