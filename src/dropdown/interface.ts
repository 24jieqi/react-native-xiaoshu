import type React from 'react'
import type {
  View,
  ViewProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native'
export interface DropdownItemOption {
  /**
   * 文字
   */
  label: string

  /**
   * 标识符
   */
  value: string | number | null
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
   * @default 'dropdown_menu_title_active_text_color'
   */
  activeColor?: string

  /**
   * 箭头默认朝向
   * @default 'down'
   */
  direction?: 'up' | 'down'
}

export interface DropdownItemProps
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
  options: DropdownItemOption[]

  /**
   * 当前选中的选项值
   */
  value?: string | number

  /**
   * 默认值
   */
  defaultValue?: string | number

  /**
   * 点击选项导致 value 变化时触发
   */
  onChange?: (v: string | number) => void

  /**
   * 动画时长，单位秒
   * @default 'animation_duration_fast'
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
}

export interface DropdownContext
  extends Partial<
      Pick<DropdownTextProps, 'iconStyle' | 'activeColor' | 'direction'>
    >,
    Partial<
      Pick<
        DropdownItemProps,
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
