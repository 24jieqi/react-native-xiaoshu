import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native'

export interface DropdownContext {
  /**
   * 当前组件具体 顶部的距离
   */
  top: number

  /**
   * 菜单标题和选项的选中态颜色
   */
  activeColor: string

  /**
   * 菜单展开方向
   * @default 'down'
   */
  direction: 'up' | 'down'

  /**
   * 菜单栏 z-index 层级
   * @default 10
   */
  zIndex: number

  /**
   * 动画时长，单位秒
   * @default 200
   */
  duration: number

  /**
   * 是否显示遮罩层
   * @default true
   */
  overlay: boolean

  /**
   * 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnPressOverlay: boolean

  /**
   * 是否在点击外部元素后关闭菜单
   * @default true
   */
  closeOnPressOutside: boolean
}

export interface DropdownMenuProps
  extends Omit<Partial<DropdownContext>, 'top'> {
  /**
   * 当前组件具体 顶部的距离
   */
  top: number
}

export interface DropdownItemOption {
  /**
   * 文字
   */
  text: string

  /**
   * 标识符
   */
  value: string | number
}

export interface DropdownItemProps {
  titleStyle?: StyleProp<ViewStyle>

  titleTextStyle?: StyleProp<TextStyle>

  /**
   * 是否禁用菜单
   * @default false
   */
  disabled?: boolean | null

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
  value: string | number

  /**
   * 点击选项导致 value 变化时触发
   */
  onChange?: (v: string | number) => void
}

export interface DropdownTextProps
  extends Partial<Pick<DropdownContext, 'activeColor' | 'direction'>>,
    Partial<
      Pick<DropdownItemProps, 'titleStyle' | 'titleTextStyle' | 'disabled'>
    >,
    TouchableOpacityProps {
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
}
