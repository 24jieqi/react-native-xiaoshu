import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tree_indent: TOKENS.space_6,
    tree_active_color: TOKENS.brand_6,
    tree_active_color_lightness: 95,
    tree_item_height: 50,
    tree_item_text_margin_horizontal: TOKENS.space_1,
    tree_item_text_font_size: TOKENS.font_size_4,
    tree_item_text_color: TOKENS.gray_8,
    tree_item_disabled_text_color: TOKENS.gray_5,
    tree_item_highlight_text_color: TOKENS.brand_6,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    tree_item: {
      flexDirection: 'row',
      alignItems: 'center',
      height: cv.tree_item_height,
      paddingHorizontal: 12,
    },

    tree_item_text: {
      flex: 1,
      marginHorizontal: cv.tree_item_text_margin_horizontal,
      fontSize: cv.tree_item_text_font_size,
      color: cv.tree_item_text_color,
    },

    tree_item_disabled_text: {
      color: cv.tree_item_disabled_text_color,
    },

    tree_item_highlight_text: {
      color: cv.tree_item_highlight_text_color,
    },
  })
}
