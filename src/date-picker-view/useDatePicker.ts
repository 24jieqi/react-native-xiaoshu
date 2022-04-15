import isDate from 'lodash/isDate'
import { useMemo } from 'react'

import { usePersistFn } from '../hooks'
import type { PickerOption, PickerValue } from '../picker-view/interface'

import type {
  DatePickerColumnMode,
  DatePickerColumnType,
  RenderLabel,
} from './interface'

interface UseDatePickerOption {
  mode: DatePickerColumnMode
  value: Date
  onChange: (value: Date) => void
  min?: Date
  max?: Date
  renderLabel?: RenderLabel
}

type ColumnItem = PickerOption[]
type Columns = ColumnItem[]
type Values = number[]

/**
 * 可选项序列数组
 */
const COLUMN_SERIALIZE_TYPES: DatePickerColumnType[] = [
  'Y',
  'M',
  'D',
  'h',
  'm',
  's',
]

const defaultRenderLabel: RenderLabel = (t, n) => {
  switch (t) {
    case 'Y':
      return `${n}年`
    case 'M':
      return `${n}月`
    case 'D':
      return `${n}日`
    case 'h':
      return `${n}时`
    case 'm':
      return `${n}分`
    case 's':
      return `${n}秒`

    default:
      return `${n}`
  }
}

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

const buildColumnData = (
  mode: DatePickerColumnType,
  start: number,
  end: number,
  renderLabel: RenderLabel,
  // eslint-disable-next-line max-params
) => {
  const items: PickerOption[] = []
  for (let index = start; index <= end; index++) {
    items.push({
      value: index,
      label: renderLabel
        ? renderLabel(mode, index)
        : defaultRenderLabel(mode, index),
    })
  }
  return items
}

/**
 * 获取某年的某个月有多少天
 * @param year 年
 * @param month 月 1~12
 * @returns 天数
 */
const getMonthDays = (year: number, month: number) => {
  const day = new Date()

  day.setFullYear(year)
  day.setDate(1)
  day.setMonth(month, 0)

  return day.getDate()
}

const getDateBoundary = (
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

const useDatePicker = ({
  mode,
  value,
  onChange,
  min,
  max,
  renderLabel,
}: UseDatePickerOption) => {
  const modes = useMemo(
    () => serializeMode(mode.split('-') as DatePickerColumnType[]),
    [mode],
  )
  const [defaultMinDate, defaultMaxDate] = useMemo(() => {
    const day = new Date()
    const currentYear = day.getFullYear()
    const _defaultMinDate = new Date(day.setFullYear(currentYear - 10))
    const _defaultMaxDate = new Date(day.setFullYear(currentYear + 10))

    // 根据类型修正数据
    if (!modes.includes('s')) {
      _defaultMinDate.setSeconds(0)
      _defaultMaxDate.setSeconds(59)
    }
    if (!modes.includes('m')) {
      _defaultMinDate.setMinutes(0)
      _defaultMaxDate.setMinutes(59)
    }
    if (!modes.includes('h')) {
      _defaultMinDate.setHours(0)
      _defaultMaxDate.setHours(23)
    }
    if (!modes.includes('D')) {
      _defaultMinDate.setDate(1)
      _defaultMaxDate.setDate(
        getMonthDays(
          _defaultMaxDate.getFullYear(),
          _defaultMaxDate.getMonth() + 1,
        ),
      )
    }
    if (!modes.includes('M')) {
      _defaultMinDate.setMonth(0)
      _defaultMaxDate.setMonth(11)
    }

    return [_defaultMinDate, _defaultMaxDate]
  }, [modes])

  const [pickerValues, pickerColumns] = useMemo<[Values, Columns]>(() => {
    const _columns: Columns = []
    const _values: Values = []

    const boundary = getDateBoundary(value, modes, {
      defaultMin: defaultMinDate,
      defaultMax: defaultMaxDate,
      min,
      max,
    })
    const valueDateObject = toDateObject(value)

    // 根据格式化方式挑选值
    COLUMN_SERIALIZE_TYPES.forEach(key => {
      const ab = boundary[key]
      const a = key === 'M' ? ab[0] + 1 : ab[0]
      const b = key === 'M' ? ab[1] + 1 : ab[1]
      const v = key === 'M' ? valueDateObject[key] + 1 : valueDateObject[key]

      _values.push(v)
      _columns.push(buildColumnData(key, a, b, renderLabel))
    })

    // 挑选值
    const _pickerColumns: Columns = []
    const _pickerValues: Values = []
    modes.forEach(key => {
      const keyIndex = COLUMN_SERIALIZE_TYPES.findIndex(cst => cst === key)
      _pickerColumns.push(_columns[keyIndex])
      _pickerValues.push(_values[keyIndex])
    })

    return [_pickerValues, _pickerColumns]
  }, [defaultMaxDate, defaultMinDate, max, min, modes, renderLabel, value])

  const onChangePicker = usePersistFn((v: PickerValue[]) => {
    // console.log('values  =>>>>   ', v)

    const newValue = new Date(value)
    modes.forEach((key, index) => {
      const num = v[index] as number
      switch (key) {
        case 'Y':
          newValue.setFullYear(num)
          break
        case 'M': {
          // 对 D 进行修正
          const days = getMonthDays(newValue.getFullYear(), num)
          const valueDays = newValue.getDate()
          newValue.setMonth(num - 1, valueDays > days ? days : valueDays)
          break
        }
        case 'D': {
          // 对 D 进行修正
          const days = getMonthDays(
            newValue.getFullYear(),
            newValue.getMonth() + 1,
          )

          newValue.setDate(num > days ? days : num)
          break
        }
        case 'h':
          newValue.setHours(num)
          break
        case 'm':
          newValue.setMinutes(num)
          break
        case 's':
          newValue.setSeconds(num)
          break
        default:
          break
      }
    })

    // console.log('newValue？？？？   =>   ', toDateObject(newValue))

    // 最后边界值判断
    const _minDate = isDate(min) ? min : defaultMinDate
    const _maxDate = isDate(max) ? max : defaultMaxDate

    const finallyValue =
      newValue.getTime() >= _minDate.getTime() &&
      newValue.getTime() <= _maxDate.getTime()
        ? newValue
        : newValue.getTime() < _minDate.getTime()
        ? _minDate
        : _maxDate

    // console.log('_minDate   =>   ', toDateObject(_minDate))
    // console.log('_maxDate   =>   ', toDateObject(_maxDate))
    // console.log('newValue   =>   ', toDateObject(newValue))
    // console.log('_minDate  t   =>   ', _minDate.getTime())
    // console.log('_maxDate  t   =>   ', _maxDate.getTime())
    // console.log('newValue  t   =>   ', newValue.getTime())
    // console.log('finallyValue   =>   ', toDateObject(finallyValue))
    // console.log(
    //   newValue.getTime() >= _minDate.getTime() &&
    //     newValue.getTime() <= _maxDate.getTime(),
    // )
    // console.log(newValue.getTime() < _minDate.getTime())
    // console.log('finallyValue   =>>>> ', finallyValue.toString())
    // console.log('finallyValue   =========>>>>>>>>>>>>>>>>>>>>>>>>>')

    onChange(finallyValue)
  })

  return [pickerValues, pickerColumns, onChangePicker] as const
}

export default useDatePicker
