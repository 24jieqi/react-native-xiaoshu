import TOKENS from '@fruits-chain/design-tokens-bailu'
import Color from 'color'

import type { ThemeProviderProps, TokensType } from './interface'

const graded = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
const colors = ['brand', 'yellow', 'green', 'red'] as const

const resetColorKey: string[] = colors
  .map(key => {
    return graded.map(i => `${key}_${i}`)
  })
  .reduce((prev, curr) => {
    return [...prev, ...curr]
  }, [])

const resetColorMap: Partial<TokensType> = {}

resetColorKey.forEach(key => {
  const color = TOKENS[key]

  // TODO 找到一个合适的颜色
  resetColorMap[key] = Color(color).darken(0.3).hex()
})

export const dark: ThemeProviderProps['theme'] = {
  white: '#2b2b2b',
  black: 'rgb(229, 229, 231)',
  gray_1: '#11151A',
  gray_2: '#5A6068',
  gray_3: '#8C9199',
  gray_4: '#B9BEC5',
  gray_5: '#E3E5E8',
  gray_6: '#EDEFF2',
  gray_7: '#EFF3F9',
  gray_8: '#F7F9FC',

  ...resetColorMap,

  button_text_color: '#f9f9f9',
  dialog_footer_divider_color: '#5A6068',
  notify_text_color: '#f9f9f9',
  skeleton_color_active: '#5A6068',
  switch_node_background_color: '#f9f9f9',
  switch_children_text_color: '#f9f9f9',
  tag_text_color: '#f9f9f9',
  toast_background_color: 'rgba(229,229,231,0.7)',
}
