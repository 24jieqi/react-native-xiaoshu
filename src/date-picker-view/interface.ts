import type { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

/** 时间选择视图数列类型 */
export type DatePickerColumnType = 'Y' | 'M' | 'D' | 'h' | 'm' | 's';

/** 时间选择视图类型 */
export type DatePickerColumnMode =
  | 'Y'
  | 'Y-M'
  | 'Y-D'
  | 'Y-h'
  | 'Y-m'
  | 'Y-s'
  | 'M'
  | 'M-D'
  | 'M-h'
  | 'M-m'
  | 'M-s'
  | 'D'
  | 'D-h'
  | 'D-m'
  | 'D-s'
  | 'h'
  | 'h-m'
  | 'h-s'
  | 'm'
  | 'm-s'
  | 's';

/**
 * 自定义渲染每列展示的内容。
 * @param t 数据类型 年月日时分秒
 * @param n 当前数据 1~n
 */
export type RenderLabel = (t: DatePickerColumnType, n: number) => string;

export interface DatePickerViewProps extends Pick<ViewProps, 'testID'> {
  /**
   * 选中项
   */
  value?: Date;

  /**
   * 默认选中项
   */
  defaultValue?: Date;

  /**
   * 变化时的回调函数
   */
  onChange?: (v: Date) => void;

  /**
   * 日期选择的类型
   * @default 'Y-m'
   */
  mode?: DatePickerColumnMode;

  /**
   * 最小值
   * @default 十年前
   */
  min?: Date;

  /**
   * 最大值
   * @default 十年后
   */
  max?: Date;

  /**
   * 自定义渲染每列展示的内容
   * @param t 数据类型 年月日时分秒
   * @param n 当前数据 月份从 1 开始
   */
  renderLabel?: RenderLabel;

  /**
   * 加载中
   */
  loading?: boolean;
}
