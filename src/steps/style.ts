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
      paddingHorizontal: themeVar.padding_base,
      position: 'relative',
      zIndex: 10,
      marginBottom: themeVar.padding_xs,
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
      opacity: themeVar.active_img_opacity,
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
      opacity: themeVar.active_opacity,
      marginHorizontal: themeVar.padding_base,
    },
    activeTitleText: {
      fontSize: themeVar.steps_title_size,
      color: themeVar.steps_title_color,
      marginHorizontal: themeVar.padding_base,
    },
  })
}
