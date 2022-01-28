import type React from 'react'
import type { ImageSourcePropType } from 'react-native'

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

  [index: string]: any
}

export interface UploaderProps<T> {
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
  imageComponent?: React.ComponentType<{
    source: ImageSourcePropType
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
  uploadIcon?: React.ReactNode

  /**
   * 点击选择按钮
   */
  onPressUpload?: () => void

  /**
   * 缩略图尺寸
   * @default 80
   */
  imageSize?: number

  /**
   * 点击某一个图片
   */
  onPressImage?: (
    current: UploaderValue,
    index: number,
    list: UploaderValue[],
  ) => void

  /**
   * 点击删除文件
   */
  onPressDelete?: (
    current: UploaderValue,
    index: number,
    list: UploaderValue[],
  ) => void

  /**
   * 点击上传出错的文件
   */
  onPressError?: (
    current: UploaderValue,
    index: number,
    list: UploaderValue[],
  ) => void
}

export interface UploaderImageProps
  extends Partial<Pick<UploaderValue, 'filepath' | 'status'>>,
    Pick<UploaderProps<UploaderValue>, 'imageComponent' | 'deletable'> {
  /**
   * 缩略图尺寸
   * @default 80
   */
  size?: number

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
