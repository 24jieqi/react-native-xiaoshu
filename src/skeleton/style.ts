import type { TokensType } from '../theme/interface'

export const varCreator = (TOKENS: TokensType) => {
  return {
    skeleton_color: TOKENS.gray_3,
    skeleton_color_active: TOKENS.gray_1,
    skeleton_avatar_border_radius: TOKENS.border_radius_s,
  }
}

export type SkeletonTheme = ReturnType<typeof varCreator>
