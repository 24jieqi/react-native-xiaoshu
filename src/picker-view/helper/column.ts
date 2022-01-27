import type { PickerOption } from '../interface'

/**
 * 按照某个方向找到可用选项的下标
 */
const findAvailableOptionsIndex = (
  options: PickerOption[],
  start: number,
  end: number,
) => {
  const isNext = end - start >= 0

  for (
    let iii = start;
    isNext ? iii <= end : iii >= end;
    iii += isNext ? 1 : -1
  ) {
    const item = options[iii]
    if (!item.disabled) {
      return iii
    }
  }

  return -1
}

export const findUsableOptionIndex = (
  options: PickerOption[],
  /** 向下查找还是向上 */
  next: boolean,
  /** 起点下标 */
  index: number,
  /** 是否可以翻转查找 */
  reverse = true,
  // eslint-disable-next-line max-params
) => {
  const maxIndex = options.length - 1
  // 两端的情况不能反转查找
  if (reverse && (index === 0 || index === maxIndex)) {
    reverse = false
  }

  // 顶端不能继续向上找
  if (index === 0 && !next) {
    next = true
  }

  // 末端不能继续向下找
  if (index === maxIndex && next) {
    next = false
  }

  const getEnd = (cNext: boolean) => {
    return cNext ? maxIndex : 0
  }

  // 以当前为起点向某个方向找
  let nIndex = findAvailableOptionsIndex(options, index, getEnd(next))

  if (nIndex === -1 && reverse) {
    nIndex = findAvailableOptionsIndex(options, index, getEnd(!next))
  }

  return nIndex
}
