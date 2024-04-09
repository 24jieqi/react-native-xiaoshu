// import type { TokensType } from '../theme/interface'

export const varCreator = () => {
  return {
    overlay_z_index: 10,
    overlay_background_color: 'rgba(0, 0, 0, 0.7)',
  }
}

export type OverlayTheme = ReturnType<typeof varCreator>
