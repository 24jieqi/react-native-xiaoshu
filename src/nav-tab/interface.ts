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
   * 点击切换回调
   */
  onChange?: (value: T) => void
}
