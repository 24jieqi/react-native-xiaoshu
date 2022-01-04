import type { SelectorOption } from './interface'

/**
 * 转换为侧边数据
 * @param d 位置数组
 * @param value value 的字段
 * @param label 文案的字段
 */
export const conversionSelectorOptions = <T = Record<string, any>>(
  d: T[],
  value: keyof T,
  label: keyof T,
): SelectorOption[] =>
  (d || []).map(dt => ({
    // TODO fix 类型不合适
    label: dt[label] as any,
    value: dt[value] as any,
  }))
