type TabValue<T> = { value: T; label: string }

export interface NavTabProps<T> {
  /**
   * 当前选中的值
   */
  value?: T

  /**
   * 默认数据
   */
  defaultValue?: T

  /**
   * tab 数据
   */
  options?: TabValue<T>[]

  /**
   * 改变时的回调函数
   */
  onChange?: (value: T) => void
}
