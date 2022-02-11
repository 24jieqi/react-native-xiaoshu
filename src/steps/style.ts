import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    scrollViewBox: {
      width: '100%',
    },
    outWrap: {
      backgroundColor: themeVar.steps_background_color,
      paddingVertical: themeVar.steps_padding_vertical,
      paddingHorizontal: themeVar.steps_padding_horizontal,
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
      height: themeVar.steps_icon_dot_active_size,
      justifyContent: 'center',
      backgroundColor: themeVar.steps_background_color,
      paddingHorizontal: themeVar.space_1,
      position: 'relative',
      zIndex: 10,
      marginBottom: themeVar.space_2,
    },
    line: {
      position: 'absolute',
      top: themeVar.steps_icon_dot_active_size / 2,
      zIndex: 1,
      height: 1,
      backgroundColor: themeVar.white,
    },
    dot: {
      width: themeVar.steps_icon_dot_size,
      height: themeVar.steps_icon_dot_size,
      backgroundColor: themeVar.steps_title_color,
      borderRadius: themeVar.steps_icon_dot_size,
      opacity: themeVar.button_active_opacity,
    },
    dotActive: {
      width: themeVar.steps_icon_dot_active_size,
      height: themeVar.steps_icon_dot_active_size,
      backgroundColor: themeVar.white,
      borderRadius: themeVar.steps_icon_dot_size,
    },
    titleText: {
      fontSize: themeVar.steps_title_size,
      color: themeVar.steps_title_color,
      opacity: themeVar.button_active_opacity,
      marginHorizontal: themeVar.space_1,
    },
    activeTitleText: {
      fontSize: themeVar.steps_title_size,
      color: themeVar.steps_title_color,
      marginHorizontal: themeVar.space_1,
    },
  })
}
