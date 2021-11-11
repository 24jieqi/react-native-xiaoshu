import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    collapse: {
      backgroundColor: 'transparent',
      overflow: 'hidden',
      // 避免子元素无法渲染
      minHeight: 1,
    },
    title: {
      backgroundColor: themeVar.collapse_title_background_color,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: themeVar.collapse_title_padding_horizontal,
      paddingVertical: themeVar.collapse_title_padding_vertical,
      // 给一个最低高度，避免整个节点不渲染，内部无法自然张开，onLayout 无法获得组件高度
      minHeight:
        themeVar.collapse_title_line_height +
        themeVar.collapse_title_padding_vertical * 2,
      borderBottomWidth: 1,
      borderBottomColor: themeVar.collapse_title_border_color,
    },
    title_text: {
      lineHeight: themeVar.collapse_title_line_height,
      fontSize: themeVar.collapse_title_font_size,
      fontWeight: 'bold',
      color: themeVar.collapse_title_text_color,
    },
    body: {
      backgroundColor: themeVar.collapse_content_background_color,
      borderBottomWidth: 1,
      borderBottomColor: themeVar.collapse_title_border_color,
    },
    body_padding: {
      paddingHorizontal: themeVar.collapse_content_padding_horizontal,
    },
  })
}
