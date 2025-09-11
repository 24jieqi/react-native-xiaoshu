import type { SelectorOption } from './interface'

/**
 * 转换为侧边数据
 * @param d 位置数组
 * @param value value 的字段
 * @param label 文案的字段
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const conversionSelectorOptions = <T = Record<string, any>>(
  d: T[],
  value: keyof T,
  label: keyof T,
): SelectorOption[] =>
  (d || []).map(dt => ({
    // TODO fix 类型不合适
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    label: dt[label] as any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: dt[value] as any,
  }))
