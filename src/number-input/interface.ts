import type { TextInputProps } from '../text-input/interface'

export interface NumberInputProps
  extends Omit<
    TextInputProps,
    | 'value'
    | 'defaultValue'
    | 'formatTrigger'
    | 'showWordLimit'
    | 'rows'
    | 'type'
    | 'onChange'
    | 'onChangeText'
  > {
  /**
   * 输入内容格式
   * @description digit 整数
   * @description number 允许小数
   * @default 'number'
   */
  type?: 'digit' | 'number'

  /**
   * 当前的值
   */
  value?: number

  /**
   * 默认数字
   */
  defaultValue?: number

  /**
   * 数字变化时的回调
   */
  onChange?: (n: number) => void

  /**
   * 最小值
   * @default Number.MIN_SAFE_INTEGER
   */
  min?: number

  /**
   * 最大值
   * @default Number.MAX_SAFE_INTEGER
   */
  max?: number

  /**
   * 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用，在输入结束的时候调用该运算结果
   */
  parser?: (v: string) => number

  /**
   * 是否限制小数位，-1 不限制
   * @default -1
   */
  limitDecimals?: number
}
