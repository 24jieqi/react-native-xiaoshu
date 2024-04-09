import Color from 'color'
import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    tree_indent: TOKENS.space_6,
    tree_active_color: TOKENS.brand_6,
    tree_active_color_lightness: 95,
    tree_min_height: 200,
    tree_item_height: 50,
    tree_item_padding_horizontal: TOKENS.space_3,
    tree_item_text_margin_horizontal: TOKENS.space_1,
    tree_item_text_font_size: TOKENS.font_size_4,
    tree_item_text_color: TOKENS.gray_8,
    tree_item_switcher_color: TOKENS.brand_6,
    tree_item_switcher_size: 16,
    tree_item_switcher_lightness: 95,
    tree_item_disabled_text_color: TOKENS.gray_5,
    tree_item_highlight_text_color: TOKENS.brand_6,
  }
}

export type TreeTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: TreeTheme) => {
  return StyleSheet.create({
    tree_item: {
      flexDirection: 'row',
      alignItems: 'center',
      minHeight: cv.tree_item_height,
      paddingHorizontal: cv.tree_item_padding_horizontal,
    },

    tree_item_switcher: {
      backgroundColor: Color(cv.tree_item_switcher_color)
        .lightness(cv.tree_item_switcher_lightness)
        .hex(),
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 4,
      alignSelf: 'center',
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
