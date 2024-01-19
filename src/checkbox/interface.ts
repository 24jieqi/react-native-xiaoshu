import type { ReactNode } from 'react'
import type {
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
  ViewProps,
  ColorValue,
} from 'react-native'

import type { SpaceProps } from '../space/interface'

interface CheckboxIconPrivateProps {
  /**
   * 是否选中、高亮
   */
  active?: boolean

  /**
   * 选中状态颜色
   * @default TOKENS.gray_6
   */
  activeColor?: ColorValue

  /**
   * 图标大小，默认单位为 px
   * @default 20
   */
  size?: number
}

export interface CheckboxIconProps
  extends TouchableOpacityProps,
    CheckboxIconPrivateProps {}

interface RenderIconProps extends CheckboxIconPrivateProps {
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: TouchableOpacityProps['onPress']
}

export interface CheckboxProps<ActiveValueT = any, InactiveValueT = any>
  extends Pick<CheckboxIconPrivateProps, 'activeColor'>,
    ViewProps {
  /**
   * 文案样式
   */
  labelTextStyle?: StyleProp<TextStyle>

  /**
   * 图标样式
   */
  iconStyle?: StyleProp<ViewStyle>

  /**
   * 默认值
   */
  defaultValue?: ActiveValueT | InactiveValueT

  /**
   * 当前是否选择
   */
  value?: ActiveValueT | InactiveValueT

  /**
   * 状态变化
   */
  onChange?: (value: ActiveValueT | InactiveValueT) => void

  /**
   * 选中时对应的值
   * @default true
   */
  activeValue?: ActiveValueT

  /**
   * 未选中时对应的值
   * @default false
   */
  inactiveValue?: InactiveValueT

  /**
   * 文案
   */
  label?: ReactNode

  /**
   * 是否禁用复选框文本点击
   */
  labelDisabled?: boolean

  /**
   * 文本位置，可选值为 `'left' | 'right'`
   */
  labelPosition?: 'left' | 'right'

  /**
   * 图标大小
   * @default 20
   */
  iconSize?: number

  /**
   * 是否禁用复选框
   */
  disabled?: boolean

  /**
   * 自定义图标
   */
  renderIcon?: (p: RenderIconProps) => ReactNode

  /**
   * 文字与图标之间的间距
   * @default TOKENS.space_2
   */
  gap?: number
}

export interface CheckboxGroupProps<ActiveValueT = any>
  extends SpaceProps,
    Partial<Pick<CheckboxProps, 'activeColor' | 'iconSize'>> {
  checkboxLabelTextStyle?: CheckboxProps['labelTextStyle']
  checkboxIconLabelGap?: number
  options: ({
    value: ActiveValueT
    label: string
  } & Partial<
    Pick<
      CheckboxProps,
      'gap' | 'labelTextStyle' | 'disabled' | 'iconSize' | 'activeColor'
    >
  >)[]

  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean

  value?: ActiveValueT | ActiveValueT[]

  defaultValue?: ActiveValueT | ActiveValueT[]

  onChange?: (
    value: ActiveValueT[] | ActiveValueT,
    options: { value: ActiveValueT; label: string; disabled?: boolean }[],
  ) => void
  /**
   * 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果
   * @default true
   */
  editable?: boolean

  /**
   * 是否可滚动，主要用于横向排版
   * @default false
   */
  scrollable?: boolean

  /**
   * 单选的情况下是否可以取消选择
   * @default true
   */
  deselect?: boolean
}
