import isDate from 'lodash/isDate'
import { useMemo } from 'react'

import { serializeMode, getMonthDays } from './helper'
import type { DatePickerColumnMode, DatePickerColumnType } from './interface'

const useDateMinMax = (mode: DatePickerColumnMode, min?: Date, max?: Date) => {
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

  return [
    isDate(min) ? min : defaultMinDate,
    isDate(max) ? max : defaultMaxDate,
  ]
}

export default useDateMinMax
