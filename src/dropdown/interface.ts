import type React from 'react'
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

export interface DropdownTextProps extends TouchableOpacityProps {
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
  extends Partial<Pick<DropdownTextProps, 'iconStyle' | 'disabled'>> {
  /**
   * 标题样式
   */
  titleStyle?: StyleProp<ViewStyle>

  /**
   * 标题文案样式
   */
  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 是否在首次展开时才渲染菜单内容
   * @default true
   */
  lazyRender?: boolean

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
   * 每个选项是否显示分割线
   */
  divider?: boolean

  /**
   * 候选项加载中
   */
  loading?: boolean
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
        | 'lazyRender'
        | 'duration'
        | 'zIndex'
        | 'closeOnPressOutside'
      >
    > {
  /**
   * 菜单的 Ref，内部使用不向外暴露
   */
  MenuRef: React.MutableRefObject<View>
}

export interface DropdownMenuProps
  extends Omit<Partial<DropdownContext>, 'MenuRef'>,
    ViewProps {}
