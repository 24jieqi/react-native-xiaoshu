import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'
import type { CheckboxIconProps } from './interface'

export const createStyles = (
  themeVar: ThemeVarType,
  {
    activeColor,
    shape,
    size,
  }: Required<Pick<CheckboxIconProps, 'activeColor' | 'shape' | 'size'>>,
) => {
  return StyleSheet.create({
    icon: {
      width: size,
      height: size,
      borderRadius: shape === 'round' ? themeVar.border_radius_sm : size / 2,
      borderWidth: 1,
      borderColor: themeVar.checkbox_icon_border_color,
      alignContent: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },

    iconActive: {
      backgroundColor: activeColor,
      borderColor: activeColor,
    },

    iconDisabled: {
      backgroundColor: themeVar.checkbox_disabled_background_color,
      borderColor: themeVar.checkbox_icon_border_color,
    },

    iconStyle: {
      alignSelf: 'center',
    },
  })
}
