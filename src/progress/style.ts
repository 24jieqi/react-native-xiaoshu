import type { TokensType } from '../theme'

export const varCreator = (TOKENS: TokensType) => {
  return {
    progress_height: 4,
    progress_color: TOKENS.brand_6,
    progress_background_color: TOKENS.gray_3,
    progress_pivot_padding_horizontal: TOKENS.space_1,
    progress_pivot_text_color: TOKENS.white,
    progress_pivot_font_size: TOKENS.font_size_2,
    progress_pivot_line_height_scale: 1.6,
    progress_pivot_background_color: TOKENS.brand_6,
    progress_page_background_color: TOKENS.white,
  }
}
