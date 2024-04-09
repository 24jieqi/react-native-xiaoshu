import { StyleSheet } from 'react-native'

import type { UploaderTheme } from './style'

export const styleCreator = (cv: UploaderTheme) => {
  return StyleSheet.create({
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: cv.uploader_image_border_radius,
      overflow: 'hidden',
      backgroundColor: cv.uploader_image_background_color,
    },

    delete: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: cv.uploader_image_delete_size,
      height: cv.uploader_image_delete_size,
      borderBottomLeftRadius: cv.uploader_image_border_radius,
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
