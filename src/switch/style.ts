import { StyleSheet, Platform } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { SwitchProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  { size }: Pick<SwitchProps, 'size'>,
) => {
  const unitSize = size || themeVar.switch_size
  const switchWidth = unitSize * themeVar.switch_width_ratio
  const switchHeight = unitSize * themeVar.switch_height_ratio
  const nodeSize =
    unitSize * themeVar.switch_node_size_ratio -
    themeVar.switch_border_width * 2

  return StyleSheet.create({
    switch: {
      width: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight / 2,
      justifyContent: 'center',
      // backgroundColor: '#f30', // to test ui
      borderWidth: themeVar.switch_border_width,
      borderStyle: themeVar.switch_border_style,
      borderColor: themeVar.switch_border_color,
    },

    node: {
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      backgroundColor: themeVar.switch_node_background_color,
      alignItems: 'center',
      justifyContent: 'center',
      ...Platform.select({
        android: {
          elevation: 2,
        },
        ios: {
          shadowColor: 'rgba(0,0,0,0.2)',
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 1,
          shadowRadius: 2,
        },
      }),
    },

    nodeLeft: {
      left: themeVar.switch_border_width,
    },

    nodeRight: {
      left: switchWidth - nodeSize - themeVar.switch_border_width * 2,
    },

    disabled: {
      opacity: themeVar.switch_disabled_opacity,
    },
  })
}
