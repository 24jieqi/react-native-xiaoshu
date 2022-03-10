import { StyleSheet } from 'react-native'

import { varCreator as varCreatorCell } from '../cell/style'
import type { TokensType } from '../theme'
import { createVar } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    collapse_transition_duration: TOKENS.animation_duration_base,
    collapse_background_color: TOKENS.white,
    collapse_icon_color: TOKENS.gray_6,
    collapse_icon_size: TOKENS.font_size_5,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars, TOKENS: TokensType) => {
  const CV_CELL = createVar(TOKENS, varCreatorCell)

  return StyleSheet.create({
    collapse: {
      overflow: 'hidden',
      backgroundColor: cv.collapse_background_color,
    },
    body: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
    body_padding: {
      paddingHorizontal: CV_CELL.cell_padding_horizontal,
      paddingVertical: CV_CELL.cell_padding_horizontal,
    },
    divider: {
      marginHorizontal: CV_CELL.cell_padding_horizontal,
    },
  })
}
