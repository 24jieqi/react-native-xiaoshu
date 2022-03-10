import { StyleSheet } from 'react-native'

import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    uploader_image_gap: TOKENS.border_radius_xl,
    uploader_image_border_radius: TOKENS.border_radius_s,
    uploader_image_delete_size: 16,
    uploader_image_background_color: TOKENS.gray_2,
    uploader_upload_text_color: TOKENS.gray_6,
    uploader_upload_text_font_size: TOKENS.font_size_3,
    uploader_upload_text_line_height: 20,
    uploader_upload_text_margin_top: TOKENS.space_1,
  }
}

export type ComponentVars = ReturnType<typeof varCreator>

export const styleCreator = (cv: ComponentVars) => {
  return StyleSheet.create({
    uploader: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    upload_text: {
      color: cv.uploader_upload_text_color,
      fontSize: cv.uploader_upload_text_font_size,
      lineHeight: cv.uploader_upload_text_line_height,
      marginTop: cv.uploader_upload_text_margin_top,
    },
  })
}
