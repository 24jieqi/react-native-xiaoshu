import type { SelectPopupOption } from './interface'

/**
 * 转换为侧边数据
 * @param d 位置数组
 * @param key key 的字段
 * @param text 文案的字段
 */
export const conversionSelectPopupOptions = <T = Record<string, any>>(
  d: T[],
  key: keyof T,
  text: keyof T,
): SelectPopupOption[] =>
  (d || []).map(dt => ({
    // TOOD fix 类型不合适
    text: dt[text] as any,
    key: dt[key] as any,
  }))
