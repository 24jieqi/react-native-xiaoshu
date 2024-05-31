import type { ViewProps } from 'react-native'

import type { PickerViewTheme } from './style'

export type PickerOptionType = 'cascade' | 'multiple' | 'single'

export type PickerValue = string | number

/** 单列选择 */
export type PickerOption = {
  value: PickerValue
  label: PickerValue
  disabled?: boolean
  // for custom filed names
  [key: string]: any
}

export type PickerOptionMultipleWidthDefaultValue = {
  defaultValue?: PickerValue
  options: PickerOption[]
}

/** 多列选择 */
export type PickerOptionMultiple =
  | PickerOptionMultipleWidthDefaultValue
  | PickerOption[]

/** 联级选择 */
export type PickerOptionCascade = PickerOption & {
  children?: PickerOptionCascade[]
  // for custom filed names
  [key: string]: any
}

export type Column = PickerOption | PickerOptionMultiple | PickerOptionCascade

export interface PickerViewProps extends Pick<ViewProps, 'testID'> {
  theme?: Partial<PickerViewTheme>

  value?: PickerValue[]

  defaultValue?: PickerValue[]

  /**
   * 变化时的回调函数
   */
  onChange?: (values: PickerValue[], options: Column[]) => void

  /**
   * 选项数组，配置每一列显示的数据
   */
  columns: Column[]

  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 选项高度
   * @default 50
   */
  itemHeight?: number

  /**
   * 可见的选项个数，奇数
   * @default 5
   */
  visibleItemCount?: number
}

export interface PickerViewColumnProps {
  theme?: Partial<PickerViewTheme>
  /**
   * 选项高度
   */
  itemHeight: number

  /**
   * 选项
   */
  options: PickerOption[]

  /**
   * 当前值
   */
  value?: PickerValue

  /**
   * 可见的选项个数
   */
  visibleItemCount: number

  /**
   * 当值变化的时候
   */
  onChange?: (v: PickerOption) => void
}
