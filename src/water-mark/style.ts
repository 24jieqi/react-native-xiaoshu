import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    water_mark_text_font_size: TOKENS.font_size_2,
    water_mark_text_color: TOKENS.gray_6,
    water_mark_text_opacity: TOKENS.opacity_10,
  }
}

export type WaterMarkTheme = ReturnType<typeof varCreator>
