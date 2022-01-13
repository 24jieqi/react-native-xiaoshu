import type { ViewProps } from 'react-native'
import type { TextInputProps } from '../text-input/interface'

export interface SearchProps
  extends Pick<
      TextInputProps,
      | 'value'
      | 'defaultValue'
      | 'placeholder'
      | 'placeholderTextColor'
      | 'autoFocus'
      | 'onChangeText'
    >,
    ViewProps {
  /**
   * 图标大小
   * @default 20
   */
  iconSize?: number

  /**
   * 图标颜色
   * @default text_input_placeholder_text_color
   */
  iconColor?: string

  /**
   * 点击搜索
   */
  onSearch?: (value: string) => void

  /**
   * 显示返回图标
   * @default false
   */
  showBack?: boolean

  /**
   * 点击返回图标
   */
  onPressBack?: () => void

  /**
   * 内容变化时自动触发 onSearch
   * @default false
   */
  autoSearch?: boolean
}
