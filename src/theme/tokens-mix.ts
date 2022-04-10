import TOKENS from '@fruits-chain/design-tokens-bailu'

export default {
  ...TOKENS,
  /**
   * 动画过渡时间
   * @default 300
   */
  animation_duration_base: 300,
  /**
   * 动画过渡时间
   * @default 200
   */
  animation_duration_fast: 200,
  /**
   * 通用边框颜色 gray_4
   * @default #E3E5E8
   */
  border_color: TOKENS.gray_4,

  /**
   * 点击反馈背景颜色
   * @default 'transparent'
   */
  underlay_color: 'transparent',
}
