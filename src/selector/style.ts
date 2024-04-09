import { StyleSheet } from 'react-native'

import { varCreator as varCreatorCell } from '../cell/style'
import Theme from '../theme'
import type { TokensType } from '../theme/interface'

export const varCreator = () => {
  return {}
}

export type SelectorTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: SelectorTheme, TOKENS: TokensType) => {
  const CV_CELL = Theme.createVar(TOKENS, varCreatorCell)

  return StyleSheet.create({
    text: {
      justifyContent: 'center',
    },

    text_text: {
      fontSize: CV_CELL.cell_font_size,
      color: CV_CELL.cell_value_text_color,
    },
  })
}
