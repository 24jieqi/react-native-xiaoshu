import type { PropsWithChildren, MutableRefObject } from 'react'
import type {
  View,
  ViewProps,
  TextProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
  ColorValue,
} from 'react-native'

import type { FixHitSlopProps } from '../helpers/types'
import type { PopupPropsCommon } from '../popup/interface'
import type { TreeOption, TreeProps } from '../tree/interface'

import type { DropdownTheme } from './style'

export interface DropdownBadgeProps extends TextProps {
  /**
   * 徽标内容/展示的数字
   */
  count?: string | number | boolean
}

export interface DropdownItemOption<T> {
  /**
   * 文字
   */
  label: string

  /**
   * 标识符
   */
  value: T

  /**
   * 徽章
   */
  badge?: number | string | boolean

  children?: DropdownItemOption<T>[]
}

export interface DropdownTextProps
  extends FixHitSlopProps<TouchableOpacityProps> {
  /**
   * 标题文案样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 图标样式
   */
  iconStyle?: StyleProp<ViewStyle>

  /**
   * 是否禁用菜单
   * @default false
   */
  disabled?: boolean

  /**
   * 菜单项标题
   */
  title: string

  /**
   * 是否激活状态
   * @default false
   */
  active?: boolean

  /**
   * 是否可点击 配合
   * @default true
   */
  pressable?: boolean

  /**
   * 菜单标题和选项的选中态颜色
   * @default dropdown_active_color
   */
  activeColor?: ColorValue

  /**
   * 箭头默认朝向
   * @default 'down'
   */
  direction?: 'up' | 'down'

  /**
   * 徽章
   */
  badge?: number | string | boolean
}

export interface DropdownItemProps<T>
  extends Partial<Pick<DropdownTextProps, 'iconStyle' | 'disabled' | 'testID'>>,
    Pick<TreeProps, 'search' | 'onSearch' | 'cancellable'> {
  popupTestID?: DropdownTextProps['testID']
  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 选项数组
   */
  options: DropdownItemOption<T>[]

  /**
   * 当前选中的选项值
   */
  value?: T

  /**
   * 默认值
   */
  defaultValue?: T

  /**
   * 点击选项导致 value 变化时触发
   */
  onChange?: (v: T, d: DropdownItemOption<T>) => void

  /**
   * 动画时长，单位秒
   * @default animation_duration_fast
   */
  duration?: number

  /**
   * 菜单栏 z-index 层级
   * @default 10
   */
  zIndex?: number

  /**
   * 是否在点击外部元素后关闭菜单
   * @default true
   */
  closeOnPressOutside?: boolean

  /**
   * 候选项加载中
   */
  loading?: boolean

  /**
   * 没有值时提示文案
   * @default ''
   */
  placeholder?: string
}

export interface DropdownMultipleProps<T>
  extends Omit<DropdownItemProps<T>, 'value' | 'defaultValue' | 'onChange'>,
    Pick<TreeProps, 'multipleMode'> {
  /**
   * 当前选中的选项值
   */
  value?: T[]

  /**
   * 默认值
   */
  defaultValue?: T[]

  /**
   * 点击选项导致 value 变化时触发
   */
  onChange?: (v: T[], d: DropdownItemOption<T>[]) => void

  /**
   * 多选的条件下，点击某个选项，返回自定义新的数据
   */
  beforeChecked?: (event: {
    value: T[]
    option: TreeOption
    checked: boolean
  }) => T[] | Promise<T[]>
}

export interface DropdownContext
  extends Partial<
      Pick<DropdownTextProps, 'iconStyle' | 'activeColor' | 'direction'>
    >,
    Partial<
      Pick<
        DropdownItemProps<any>,
        | 'titleStyle'
        | 'titleTextStyle'
        | 'duration'
        | 'zIndex'
        | 'closeOnPressOutside'
      >
    > {
  /**
   * 菜单的 Ref，内部使用不向外暴露
   */
  MenuRef: MutableRefObject<View | null>

  theme?: Partial<DropdownTheme>
}

export interface DropdownMenuProps
  extends Omit<Partial<DropdownContext>, 'MenuRef'>,
    ViewProps {
  /**
   * 是否显示分割线
   * @default true
   */
  divider?: boolean
}

export interface DropdownPopupProps
  extends Pick<DropdownItemProps<any>, 'zIndex' | 'closeOnPressOutside'>,
    PopupPropsCommon,
    PropsWithChildren<{}> {
  /**
   * 触发目标高度，计算弹出层应该出现的位置（上面、下面）
   */
  targetHeight: number

  /**
   * 触发目标 pageY
   */
  targetPageY: number

  /**
   * 点击非内容的遮罩阴影
   */
  onPressShade?: TouchableOpacityProps['onPress']

  /**
   * 是否开启顶部/底部安全区适配
   * @default true
   */
  safeAreaInset?: boolean

  /**
   * 是否渲染 shade 元素，某些场景不需要遮罩非选项区域
   * @default true
   */
  showShade?: boolean

  /**
   * 内容包裹层的样式
   */
  contentStyle?: StyleProp<ViewStyle>
}

export interface DropdownSelectorMethodProps<T>
  extends Omit<
      DropdownItemProps<T>,
      | 'iconStyle'
      | 'disabled'
      | 'titleStyle'
      | 'titleTextStyle'
      | 'value'
      | 'defaultValue'
      | 'onChange'
      | 'loading'
    >,
    Pick<DropdownMultipleProps<T>, 'beforeChecked'>,
    Pick<TreeProps, 'multiple' | 'multipleMode'>,
    Pick<ViewProps, 'testID'> {
  defaultValue?: T | T[]
  /**
   * 触发目标高度
   */
  targetHeight: number

  /**
   * 触发目标 pageY
   */
  targetPageY: number

  /**
   * 类似确定的回调，当选择到最末端时触发，部分业务需要把选项其他值提取出来
   */
  onConfirm?: (v: T | T[], d: DropdownItemOption<T>[]) => void

  /**
   * 取消
   */
  onCancel?: () => void

  onClosed?: PopupPropsCommon['onClosed']

  /**
   * 菜单标题和选项的选中态颜色
   * @default dropdown_active_color
   */
  activeColor?: ColorValue
}
