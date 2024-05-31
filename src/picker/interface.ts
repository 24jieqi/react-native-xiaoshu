import type React from 'react'
import type { TextProps } from 'react-native'

import type {
  PickerViewProps,
  PickerValue,
  Column,
} from '../picker-view/interface'
import type { PopupPropsCommon } from '../popup/interface'

import type { PickerTheme } from './style'

export type PickerAction = 'cancel' | 'confirm' | 'overlay'

export interface PickerProps
  extends Omit<PickerViewProps, 'theme'>,
    PopupPropsCommon {
  theme?: Partial<PickerTheme>
  /**
   * 顶部标题
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
   * 标题、工具栏位置
   * @default 'top'
   */
  toolbarPosition?: 'top' | 'bottom'

  /**
   * 是否显示标题、工具栏
   * @default true
   */
  showToolbar?: boolean

  /**
   * 点击取消按钮时触发
   */
  onCancel?: TextProps['onPress']

  /**
   * 点击完成按钮时触发
   */
  onConfirm?: TextProps['onPress']
}

export interface PickerMethodProps
  extends Omit<
    PickerProps,
    | 'visible'
    | 'value'
    | 'onChange'
    | 'loading'
    | 'onCancel'
    | 'onConfirm'
    | 'onPressOverlay'
    | 'onRequestClose'
  > {
  /**
   * 点击取消
   */
  onCancel?: (values: PickerValue[], columns: Column[]) => void

  /**
   * 点击确定
   */
  onConfirm?: (values: PickerValue[], columns: Column[]) => void

  /**
   * 点击遮罩层
   */
  onPressOverlay?: (values: PickerValue[], columns: Column[]) => void

  /**
   * 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (
    action: PickerAction,
    values: PickerValue[],
    columns: Column[],
  ) => boolean | Promise<boolean>
}
