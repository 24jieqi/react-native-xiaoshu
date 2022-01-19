import type React from 'react'

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

export interface PickerProps {
  value?: PickerValue | PickerValue[]

  defaultValue?: PickerValue | PickerValue[]

  /**
   * 对象数组，配置每一列显示的数据
   */
  columns: Column[]

  /**
   * 顶部栏标题
   */
  title?: React.ReactNode

  /**
   * 确认按钮文字
   * @default '确认'
   */
  confirmButtonText?: string

  /**
   * 取消按钮文字
   * @default '取消'
   */
  cancelButtonText?: string

  /**
   * 顶部栏位置
   * @default 'top'
   */
  toolbarPosition?: 'top' | 'bottom'

  /**
   * 是否显示加载状态
   * @default false
   */
  loading?: boolean

  /**
   * 是否显示顶部栏
   * @default true
   */
  showToolbar?: boolean

  /**
   * 选项高度
   * @default 50
   */
  itemHeight?: number

  /**
   * 可见的选项个数
   * @default 5
   */
  visibleItemCount?: number

  /**
   * 选项改变时触发
   */
  onChange?: (
    value: PickerValue | PickerValue[],
    option: Column | Column[],
  ) => void

  /**
   * 点击取消按钮时触发
   */
  onCancel?: (
    value: PickerValue | PickerValue[],
    option: Column | Column[],
  ) => void

  /**
   * 点击完成按钮时触发
   */
  onConfirm?: (
    value: PickerValue | PickerValue[],
    option: Column | Column[],
  ) => void
}

export interface PickerColumnProps {
  /**
   * 选项高度
   */
  itemHeight: number

  /**
   * 选项
   */
  options: PickerOption[]

  /**
   * 默认值
   */
  defaultValue?: string | number

  /**
   * 可见的选项个数
   */
  visibleItemCount?: number

  /**
   * 当值变化的时候
   */
  onChangeValue: (v: PickerOption | undefined) => void
}
