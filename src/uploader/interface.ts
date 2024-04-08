import type { PropsWithChildren, ComponentType, ReactNode } from 'react'
import type { ImageSourcePropType, ViewProps } from 'react-native'

export type UploaderValue = {
  /**
   * 当前资源的唯一标识
   */
  key: string

  /**
   * 文件路径
   */
  filepath: string

  /**
   * 文件状态
   * @default 'done'
   */
  status?: 'loading' | 'done' | 'error'

  /**
   * 是否展示删除按钮
   * @default true
   */
  deletable?: boolean

  [index: string]: any
}

export interface UploaderProps<T extends UploaderValue> extends ViewProps {
  /**
   * 图片数组
   */
  list: T[]

  /**
   * 文件上传数量限制
   * @default Number.MAX_SAFE_INTEGER
   */
  maxCount?: number

  /**
   * 图片展示组件
   * @default Image
   */
  imageComponent?: ComponentType<{
    source?: ImageSourcePropType
    [index: string]: any
  }>

  /**
   * 是否展示删除按钮
   * @default true
   */
  deletable?: boolean

  /**
   * 是否展示上传区域
   * @default true
   */
  showUpload?: boolean

  /**
   * 上传区域文字提示
   * @default '图片'
   */
  uploadText?: string

  /**
   * 上传图标
   */
  uploadIcon?: ReactNode

  /**
   * 点击选择按钮
   */
  onPressUpload?: () => void

  /**
   * 一行多少个列/图片
   * @default 4
   */
  colCount?: number

  /**
   * 列/图片之间的间距
   */
  colGap?: number | 's' | 'm' | 'l'

  /**
   * 点击某一个图片
   */
  onPressImage?: (current: T, index: number, list: T[]) => void

  /**
   * 点击删除文件
   */
  onPressDelete?: (current: T, index: number, list: T[]) => void

  /**
   * 点击上传出错的文件
   */
  onPressError?: (current: T, index: number, list: T[]) => void
}

export interface UploaderImageProps
  extends Partial<Pick<UploaderValue, 'filepath' | 'status'>>,
    Pick<UploaderProps<UploaderValue>, 'imageComponent' | 'deletable'>,
    PropsWithChildren<{}> {
  /**
   * 缩略图尺寸
   */
  size?: number

  /**
   * 右边距
   */
  marginRight?: number

  /**
   * 下边距
   */
  marginBottom?: number

  /**
   * 点击图片
   */
  onPress?: () => void

  /**
   * 点击删除图片
   */
  onPressDelete?: () => void

  /**
   * 是否是上传按钮
   */
  isUpload?: boolean
}

export interface RegularCount {
  text?: string
  icon?: ReactNode
}

export interface UploaderRegularProps<T extends UploaderValue>
  extends ViewProps,
    Pick<
      UploaderProps<T>,
      'imageComponent' | 'colCount' | 'colGap' | 'deletable'
    > {
  list: (T | null)[]

  /**
   * 点击某一个图片
   */
  onPressImage?: (current: T, index: number, list: (T | null)[]) => void

  /**
   * 点击删除文件
   */
  onPressDelete?: (current: T, index: number, list: (T | null)[]) => void

  /**
   * 点击上传出错的文件
   */
  onPressError?: (current: T, index: number, list: (T | null)[]) => void

  /**
   * 共多少个上传，请保持数组引用不变
   */
  count: number | (RegularCount | null)[]

  /**
   * 点击某个按钮
   */
  onPressUpload?: (index: number) => void
}
