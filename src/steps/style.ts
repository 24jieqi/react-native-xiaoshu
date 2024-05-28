import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    steps_background_color: TOKENS.brand_6,
    steps_padding_vertical: TOKENS.space_4,
    steps_padding_horizontal: TOKENS.space_6,
    steps_icon_dot_size: 10,
    steps_icon_dot_active_size: 16,
    steps_icon_dot_active_background_color: TOKENS.white,
    steps_icon_success_active_size: 16,
    steps_title_size: TOKENS.font_size_4,
    steps_line_normal_color: '#5A9CFF',
    steps_title_color: TOKENS.white,
    steps_title_dot_color: 'rgba(255, 255, 255, 0.4)',
  }
}

export type StepsTheme = ReturnType<typeof varCreator>

export const styleCreator = (cv: StepsTheme, TOKENS: TokensType) => {
  return StyleSheet.create({
    scrollViewBox: {
      width: '100%',
    },
    outWrap: {
      backgroundColor: cv.steps_background_color,
      paddingVertical: cv.steps_padding_vertical,
      paddingHorizontal: cv.steps_padding_horizontal,
    },
    stepsBox: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'relative',
    },

    // step
    stepWrap: {
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    stepIconWrap: {
      height: cv.steps_icon_dot_active_size,
      justifyContent: 'center',
      backgroundColor: cv.steps_background_color,
      paddingHorizontal: TOKENS.space_1,
      position: 'relative',
      zIndex: 10,
      marginBottom: TOKENS.space_2,
    },
    line: {
      position: 'absolute',
      top: cv.steps_icon_dot_active_size / 2,
      zIndex: 1,
      height: 1,
      backgroundColor: cv.steps_icon_dot_active_background_color,
    },
    dot: {
      width: cv.steps_icon_dot_size,
      height: cv.steps_icon_dot_size,
      backgroundColor: cv.steps_title_dot_color,
      borderRadius: cv.steps_icon_dot_size,
      // TODO 新增变量
      // opacity: cv.button_active_opacity,
    },
    dotActive: {
      width: cv.steps_icon_dot_active_size,
      height: cv.steps_icon_dot_active_size,
      backgroundColor: cv.steps_icon_dot_active_background_color,
      borderRadius: cv.steps_icon_dot_size,
    },
    titleText: {
      fontSize: cv.steps_title_size,
      color: cv.steps_title_dot_color,
      // TODO 新增变量
      // opacity: cv.button_active_opacity,
      marginHorizontal: TOKENS.space_1,
    },
    activeTitleText: {
      fontSize: cv.steps_title_size,
      color: cv.steps_title_color,
      marginHorizontal: TOKENS.space_1,
    },
  })
}
