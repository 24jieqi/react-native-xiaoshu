import { useMemo } from 'react'

import { usePersistFn } from '../hooks'
import Locale from '../locale'
import type { PickerOption, PickerValue } from '../picker-view/interface'

import {
  COLUMN_SERIALIZE_TYPES,
  serializeMode,
  getMonthDays,
  toDateObject,
  getDateBoundary,
} from './helper'
import type {
  DatePickerColumnMode,
  DatePickerColumnType,
  RenderLabel,
} from './interface'
import useDateMinMax from './useDateMinMax'

export interface UseDatePickerOption {
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
      label: renderLabel(mode, index),
    })
  }
  return items
}

const useDatePicker = ({
  mode,
  value,
  onChange,
  min,
  max,
  renderLabel,
}: UseDatePickerOption) => {
  const locale = Locale.useLocale().DatePickerView
  const modes = useMemo(
    () => serializeMode(mode.split('-') as DatePickerColumnType[]),
    [mode],
  )
  const [minDate, maxDate] = useDateMinMax(mode, min, max)
  const renderLabelPersistFn: RenderLabel = usePersistFn((t, n) => {
    if (renderLabel) {
      return renderLabel(t, n)
    }

    switch (t) {
      case 'Y':
        return `${n}${locale.labelYear}`
      case 'M':
        return `${n}${locale.labelMonth}`
      case 'D':
        return `${n}${locale.labelDay}`
      case 'h':
        return `${n}${locale.labelHour}`
      case 'm':
        return `${n}${locale.labelMinute}`
      case 's':
        return `${n}${locale.labelSecond}`

      default:
        return `${n}`
    }
  })
  const [pickerValues, pickerColumns] = useMemo<[Values, Columns]>(() => {
    const _columns: Columns = []
    const _values: Values = []

    const boundary = getDateBoundary(value, modes, {
      defaultMin: minDate,
      defaultMax: maxDate,
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
      _columns.push(buildColumnData(key, a, b, renderLabelPersistFn))
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
  }, [max, maxDate, min, minDate, modes, renderLabelPersistFn, value])

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

    // // 最后边界值判断
    // const _minDate = isDate(min) ? min : defaultMinDate
    // const _maxDate = isDate(max) ? max : defaultMaxDate

    const finallyValue =
      newValue.getTime() >= minDate.getTime() &&
      newValue.getTime() <= maxDate.getTime()
        ? newValue
        : newValue.getTime() < minDate.getTime()
          ? minDate
          : maxDate

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

  return [
    pickerValues,
    pickerColumns,
    onChangePicker,
    minDate,
    maxDate,
  ] as const
}

export default useDatePicker
