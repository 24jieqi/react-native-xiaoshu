import { StyleSheet } from 'react-native'

import type { ThemeVarType } from '../theme'

export const createStyles = (themeVar: ThemeVarType) => {
  return StyleSheet.create({
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: themeVar.uploader_image_border_radius,
      marginRight: themeVar.uploader_image_margin_right,
      marginBottom: themeVar.uploader_image_margin_bottom,
      overflow: 'hidden',
      backgroundColor: themeVar.uploader_image_background_color,
    },

    delete: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: themeVar.uploader_image_delete_size,
      height: themeVar.uploader_image_delete_size,
      borderBottomLeftRadius: themeVar.uploader_image_border_radius,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 3,
    },

    mask: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    mask_text: {
      color: '#fff',
      fontSize: 14,
      marginTop: 4,
      lineHeight: 20,
    },
  })
}
