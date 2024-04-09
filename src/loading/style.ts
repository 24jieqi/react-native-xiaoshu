import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    loading_gap: TOKENS.space_2,
    loading_text_color: TOKENS.gray_6,
    loading_text_font_size: TOKENS.font_size_4,
    loading_icon_color: TOKENS.gray_6,
    loading_icon_size: 24,
    loading_icon_animation_duration: 800,
  }
}

export type LoadingTheme = ReturnType<typeof varCreator>
