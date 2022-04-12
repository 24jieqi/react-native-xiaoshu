import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    switch_size: 30,
    switch_width_ratio: 2, // 原变量中使用了 em，这里改成对应的比例
    switch_height_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
    switch_node_size_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
    switch_node_background_color: TOKENS.white,
    switch_background_color: TOKENS.gray_3,
    switch_on_background_color: TOKENS.brand_6,
    switch_transition_duration: TOKENS.animation_duration_base,
    switch_disabled_opacity: TOKENS.opacity_60,
  }
}

type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    switch: {
      justifyContent: 'center',
    },

    node: {
      backgroundColor: cv.switch_node_background_color,
      alignItems: 'center',
      justifyContent: 'center',
    },

    disabled: {
      opacity: cv.switch_disabled_opacity,
    },
  })
}
