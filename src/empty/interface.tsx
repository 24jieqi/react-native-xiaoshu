import type {
  StyleProp,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageProps,
  ImageSourcePropType,
} from 'react-native'

export interface EmptyProps {
  /**
   * 最外层 View 的样式
   */
  style?: StyleProp<ViewStyle>

  /**
   * 文案样式
   */
  textStyle?: StyleProp<TextStyle>

  /**
   * 图片样式
   */
  imageStyle?: StyleProp<ImageStyle>

  /**
   * 空数据图片 Image 的 props，除去 style、source，暂时开放所有，应该只需要有几个改动就好了
   */
  imageProps?: Omit<ImageProps, 'style' | 'source'>

  /**
   * 空数据提示文案
   * @default '暂无数据'
   */
  text?: string

  /**
   * 自定义图片
   * @default '默认图片'
   */
  source?: ImageSourcePropType
}
