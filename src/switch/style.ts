import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    switch_size: 30,
    switch_width_ratio: 2, // 原变量中使用了 em，这里改成对应的比例
    switch_height_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
    switch_node_size_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
    switch_node_background_color: TOKENS.white,
    switch_background_color: TOKENS.gray_5,
    switch_on_background_color: TOKENS.brand_6,
    switch_transition_duration: TOKENS.animation_duration_base,
    switch_disabled_opacity: TOKENS.opacity_60,
    switch_children_text_font_size: TOKENS.font_size_3,
    switch_children_text_color: TOKENS.white,
  }
}

export type SwitchTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: SwitchTheme) => {
  return StyleSheet.create({
    switch: {
      position: 'relative',
    },

    switch_wrap: {
      flexDirection: 'row',
      overflow: 'visible',
    },

    node: {
      position: 'absolute',
      backgroundColor: cv.switch_node_background_color,
      alignItems: 'center',
      justifyContent: 'center',
    },

    children_wrap: {
      position: 'relative',
      overflow: 'hidden',
    },

    children_text: {
      fontSize: cv.switch_children_text_font_size,
      color: cv.switch_children_text_color,
    },

    disabled: {
      opacity: cv.switch_disabled_opacity,
    },
  })
}
