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

const darkTextColor = '#f9f9f9'
const darkSubtextColor = '#B9BEC5'

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

  badge_color: darkTextColor,

  button_text_color: darkTextColor,

  dialog_footer_divider_color: '#5A6068',
  dialog_confirm_button_text_color: darkTextColor,
  dialog_cancel_button_text_color: darkSubtextColor,

  nav_tab_background_color: '#5A6068',

  notify_text_color: darkTextColor,

  picker_header_cancel_text_color: darkSubtextColor,
  picker_header_confirm_text_color: darkTextColor,
  picker_date_range_day_color: darkSubtextColor,
  picker_date_range_day_color_active: darkTextColor,

  progress_pivot_text_color: darkTextColor,

  sidebar_background_color: '#11151A',
  sidebar_item_background_color: '#5A6068',
  sidebar_item_underlay_color: '#5A6068',
  sidebar_item_disabled_inactive_text_color: darkSubtextColor,

  skeleton_color_active: '#5A6068',

  steps_title_color: darkTextColor,
  steps_icon_dot_active_background_color: darkTextColor,

  switch_background_color: '#5A6068',
  switch_node_background_color: darkTextColor,
  switch_children_text_color: darkTextColor,

  tag_text_color: darkTextColor,

  toast_background_color: 'rgb(229,229,231)',
}
