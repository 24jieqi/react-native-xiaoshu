import type React from 'react'
import type { ColorValue, TouchableOpacityProps } from 'react-native'

import type { TreeTheme } from './style'
import type { TreeMultipleMode } from './var'

export type TreeValue = number | string

export interface TreeOption {
  /**
   * 显示的文案
   */
  label: string

  /**
   * 唯一标识
   */
  value: TreeValue

  /**
   * 是否禁用
   */
  disabled?: boolean

  /**
   * 自定义渲染
   */
  render?: (p: {
    label: string
    disabled?: boolean
    labelHighlight?: boolean
    active: boolean
    activeColor: ColorValue
  }) => React.ReactNode

  /**
   * 自定义渲染树节点的展开/折叠图标
   */
  renderSwitcherIcon?: (p: {
    color: ColorValue
    size: number
    // disabled?: boolean
  }) => React.ReactNode

  /**
   * 文案是否加粗
   */
  bold?: boolean

  /**
   * Switcher 图标是否旋转
   * @default true
   */
  switcherIconRotatable?: boolean

  /**
   * 展开/折叠图标是否高亮
   * @default true
   */
  switcherHighlight?: boolean

  children?: TreeOption[]
}

export interface TreeSearchListData extends TreeOption {
  labels: {
    text: string
    highlight: boolean
  }[]
}

export interface TreeItemProps extends TouchableOpacityProps {
  theme?: Partial<TreeTheme>
  /**
   * 缩进
   */
  indent: number

  /**
   * 层级，从 0 开始
   */
  tier: number

  /**
   * 自定义渲染树节点的展开/折叠图标
   */
  switcherIcon?: React.ReactNode

  /**
   * 展开/折叠图标是否高亮
   * @default true
   */
  switcherHighlight?: boolean

  /**
   * 是否选中、高亮
   */
  active: boolean

  /**
   * 选中状态颜色
   */
  activeColor: ColorValue

  /**
   * 多选模式
   */
  multiple: boolean

  /**
   * 文案是否加粗
   */
  bold?: boolean

  /**
   * 显示的文案
   */
  label: string

  /**
   * 自定义渲染
   */
  renderLabel?: TreeOption['render']

  /**
   * 文字高亮
   */
  labelHighlight?: boolean

  /**
   * 是否还有子节点
   */
  hasChildren?: boolean

  /**
   * 点击展开/折叠图标区域
   */
  onPressSwitcherIcon?: TouchableOpacityProps['onPress']
}

export interface TreeProps {
  theme?: Partial<TreeTheme>
  /**
   * 支持点选多个节点
   */
  multiple?: boolean

  /**
   * 多选的模式
   * @default TreeMultipleMode.NORMAL
   */
  multipleMode?: TreeMultipleMode

  /**
   * 指定当前选中的条目
   */
  value?: TreeValue[] | TreeValue

  /**
   * 指定默认选中的条目
   */
  defaultValue?: TreeValue[] | TreeValue

  /**
   * 选中树节点时调用此函数
   */
  onChange?: (
    v: TreeValue[] | TreeValue,
    option: TreeOption[],
    event: {
      checked: boolean
      option: TreeOption
    },
  ) => void

  /**
   * 当前的选项
   */
  options: TreeOption[]

  /**
   * 自定义渲染树节点的展开/折叠图标
   */
  renderSwitcherIcon?: TreeOption['renderSwitcherIcon']

  /**
   * 缩进
   * @default tree_indent
   */
  indent?: number

  /**
   * 选中状态颜色
   * @default tree_active_color
   */
  activeColor?: ColorValue

  /**
   * 默认展开指定的树节点
   */
  defaultExpandedValues?: TreeValue[]

  /**
   * 默认展开所有树节点
   * @default false
   */
  defaultExpandAll?: boolean

  /**
   * 支持搜索
   */
  search?: boolean

  /**
   * 自定义搜索方案
   */
  onSearch?: (
    keyword: string,
    /**
     * 当前的选项
     */
    options: TreeOption[],
  ) => TreeSearchListData[]

  /**
   * 搜索提示文案
   */
  placeholder?: string

  /**
   * 最小高度
   * @default true
   */
  minHeight?: boolean | number

  /**
   * 单选的情况下再次点击选中可以取消
   * @default false
   */
  cancellable?: boolean

  /**
   * 是否可以编辑 命名与 TextInput 保持一致
   * @default true
   */
  editable?: boolean
}
