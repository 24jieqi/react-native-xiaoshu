import isDate from 'lodash/isDate'

import type { DatePickerColumnType, DatePickerColumnMode } from './interface'

/**
 * 可选项序列数组
 */
export const COLUMN_SERIALIZE_TYPES: DatePickerColumnType[] = [
  'Y',
  'M',
  'D',
  'h',
  'm',
  's',
]

export const serializeMode = (
  modes: DatePickerColumnType[],
): DatePickerColumnType[] => {
  if (modes.length === 1) {
    return modes
  }

  // 起点终点
  const startIndex = COLUMN_SERIALIZE_TYPES.findIndex(k => k === modes[0])
  const endIndex = COLUMN_SERIALIZE_TYPES.findIndex(k => k === modes[1])
  const serializeModes: DatePickerColumnType[] = []

  for (let index = startIndex; index <= endIndex; index++) {
    serializeModes.push(COLUMN_SERIALIZE_TYPES[index])
  }

  return serializeModes
}

export const toDateObject = (d: Date) => ({
  Y: d.getFullYear(),
  M: d.getMonth(),
  D: d.getDate(),
  h: d.getHours(),
  m: d.getMinutes(),
  s: d.getSeconds(),
})

/**
 * 获取某年的某个月有多少天
 * @param year 年
 * @param month 月 1~12
 * @returns 天数
 */
export const getMonthDays = (year: number, month: number) => {
  const day = new Date()

  day.setFullYear(year)
  day.setDate(1)
  day.setMonth(month, 0)

  return day.getDate()
}

export const getDateBoundary = (
  value: Date,
  modes: DatePickerColumnType[],
  {
    defaultMin,
    defaultMax,
    min,
    max,
  }: {
    defaultMin: Date
    defaultMax: Date
    min?: Date
    max?: Date
  },
) => {
  const minDefined = isDate(min)
  const maxDefined = isDate(max)
  const minDateObject = toDateObject(minDefined ? min : defaultMin)
  const maxDateObject = toDateObject(maxDefined ? max : defaultMax)
  const valueDateObject = toDateObject(value)

  // 边界值
  const isInMinYear = valueDateObject.Y === minDateObject.Y
  const isInMaxYear = valueDateObject.Y === maxDateObject.Y
  const isInMinMonth = isInMinYear && valueDateObject.M <= minDateObject.M
  const isInMaxMonth = isInMaxYear && valueDateObject.M >= maxDateObject.M
  const isInMinDate = isInMinMonth && valueDateObject.D <= minDateObject.D
  const isInMaxDate = isInMaxMonth && valueDateObject.D >= maxDateObject.D
  const isInMinHour = isInMinDate && valueDateObject.h <= minDateObject.h
  const isInMaxHour = isInMaxDate && valueDateObject.h >= maxDateObject.h
  const isInMinMinute = isInMinHour && valueDateObject.m <= minDateObject.m
  const isInMaxMinute = isInMaxHour && valueDateObject.m >= maxDateObject.m

  const boundary: Record<DatePickerColumnType, [number, number]> = {
    Y: [minDateObject.Y, maxDateObject.Y],
    M: (() => {
      if (modes[0] === 'M') {
        // 从月开始选
        // 有限制时间根据限制时间选择，没有默认所有月份都可以
        const a = minDefined ? minDateObject.M : 0
        const b = maxDefined ? maxDateObject.M : 11

        // a < b
        if (a >= b) {
          return [0, 11]
        }

        return [a, b]
      }

      const a = isInMinYear ? minDateObject.M : 0
      const b = isInMaxYear ? maxDateObject.M : 11

      return [a, b]
    })(),
    D: (() => {
      if (modes[0] === 'D') {
        const a = minDefined ? minDateObject.D : 1
        const b = maxDefined
          ? maxDateObject.D
          : getMonthDays(valueDateObject.Y, valueDateObject.M + 1)

        // a < b
        if (a >= b) {
          return [1, getMonthDays(valueDateObject.Y, valueDateObject.M + 1)]
        }

        return [a, b]
      }

      const a = isInMinMonth ? minDateObject.D : 1
      const b = isInMaxMonth
        ? maxDateObject.D
        : getMonthDays(valueDateObject.Y, valueDateObject.M + 1)
      return [a, b]
    })(),
    h: (() => {
      if (modes[0] === 'h') {
        const a = minDefined ? minDateObject.h : 0
        const b = maxDefined ? maxDateObject.h : 23

        // a < b
        if (a >= b) {
          return [0, 23]
        }

        return [a, b]
      }

      const a = isInMinDate ? minDateObject.h : 0
      const b = isInMaxDate ? maxDateObject.h : 23

      return [a, b]
    })(),
    m: (() => {
      if (modes[0] === 'm') {
        const a = minDefined ? minDateObject.m : 0
        const b = maxDateObject ? maxDateObject.m : 59

        // a < b
        if (a >= b) {
          return [0, 59]
        }

        return [a, b]
      }

      const a = isInMinHour ? minDateObject.m : 0
      const b = isInMaxHour ? maxDateObject.m : 59

      return [a, b]
    })(),
    s: (() => {
      if (modes[0] === 's') {
        const a = minDefined ? minDateObject.s : 0
        const b = maxDateObject ? maxDateObject.s : 59

        // a < b
        if (a >= b) {
          return [0, 59]
        }

        return [a, b]
      }

      const a = isInMinMinute ? minDateObject.s : 0
      const b = isInMaxMinute ? maxDateObject.s : 59

      return [a, b]
    })(),
  }

  return boundary
}

/**
 * 格式化时间
 */
export const formatDate = (mode: DatePickerColumnMode, day: Date) => {
  const dayDateObject = toDateObject(day)
  const modes = serializeMode(mode.split('-') as DatePickerColumnType[])
  const hasKey = (k: DatePickerColumnType) => modes.includes(k)
  const padStart = (n: number) => `${n}`.padStart(2, '0')
  const time1 = [
    hasKey('Y') ? dayDateObject.Y : null,
    hasKey('M') ? padStart(dayDateObject.M + 1) : null,
    hasKey('D') ? padStart(dayDateObject.D) : null,
  ]
    .filter(Boolean)
    .join('-')
  const time2 = [
    hasKey('h') ? padStart(dayDateObject.h) : null,
    hasKey('m') ? padStart(dayDateObject.m) : null,
    hasKey('s') ? padStart(dayDateObject.s) : null,
  ]
    .filter(Boolean)
    .join(':')

  return [time1, time2].filter(Boolean).join(' ')
}
