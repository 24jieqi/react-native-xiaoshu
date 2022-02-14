import React, { useMemo, useRef, useState, memo } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Button from '../button'
import DatePickerView from '../date-picker-view'
import type {
  DatePickerColumnMode,
  DatePickerColumnType,
} from '../date-picker-view/interface'
import { serializeMode, toDateObject } from '../date-picker-view/useDatePicker'
import { Row, Col } from '../grid'
import { usePersistFn } from '../hooks'
import { createStyles } from '../picker/style'
import { useTheme, widthStyle } from '../theme'

import type { DatePickerRangeViewProps } from './interface'

const renderDate = (day: Date, mode: DatePickerColumnMode) => {
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

const DatePickerRangeView: React.FC<DatePickerRangeViewProps> = ({
  defaultValue,
  confirmButtonText = '确定',
  resetButtonText = '重置',
  onConfirm,
  placeholder = '请选择',
  onChange,

  // DateView
  mode = 'Y-D',
  min,
  max,
  renderLabel,
  loading,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const btnStyle = useMemo(
    () => ({
      paddingHorizontal: THEME_VAR.picker_action_gap,
    }),
    [THEME_VAR.picker_action_gap],
  )

  const nullDate = useMemo(() => new Date(), [])
  const [dayActive, setDayActive] = useState<0 | 1>(0)
  const Values = useRef<[Date, Date]>(
    defaultValue && defaultValue.length === 2 ? defaultValue : [null, null],
  )
  const OriginalValues = useRef(Values.current.concat([]) as [Date, Date])
  const [value, setValue] = useState(Values.current[0])
  const [limitDates, setLimitDates] = useState<[Date, Date]>([
    min,
    Values.current[1] || max,
  ])

  const onChangePickView = usePersistFn((v: Date) => {
    Values.current[dayActive] = v
    setValue(v)
    onChange?.(Values.current)
  })

  const onPressConfirm = usePersistFn(() => {
    onConfirm?.(Values.current)
  })

  const onPressDay1 = usePersistFn(() => {
    setDayActive(0)
    setValue(Values.current[0])
    setLimitDates([min, Values.current[1] || max])
  })

  const onPressDay2 = usePersistFn(() => {
    setDayActive(1)
    setValue(Values.current[1])
    setLimitDates([Values.current[0] || min, max])
  })

  const onPressReset = usePersistFn(() => {
    Values.current = OriginalValues.current.concat([]) as [Date, Date]
    onPressDay1()

    onChange?.(Values.current)
  })

  return (
    <>
      <View style={STYLES.data_range}>
        <View style={STYLES.data_range_item}>
          <TouchableOpacity onPress={onPressDay1}>
            <Text style={STYLES.data_range_text}>开始时间</Text>
            <Text
              style={[
                STYLES.data_range_day,
                dayActive === 0 ? STYLES.data_range_day_active : null,
              ]}>
              {Values.current[0]
                ? renderDate(Values.current[0], mode)
                : placeholder}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={STYLES.data_range_item}>
          <TouchableOpacity
            style={STYLES.data_range_touch}
            onPress={onPressDay2}>
            <Text style={STYLES.data_range_text}>结束时间</Text>
            <Text
              style={[
                STYLES.data_range_day,
                dayActive === 1 ? STYLES.data_range_day_active : null,
              ]}>
              {Values.current[1]
                ? renderDate(Values.current[1], mode)
                : placeholder}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <DatePickerView
        mode={mode}
        value={value || nullDate}
        renderLabel={renderLabel}
        onChange={onChangePickView}
        min={limitDates[0]}
        max={limitDates[1]}
        loading={loading}
      />

      <Row gap={THEME_VAR.picker_action_gap} style={btnStyle}>
        <Col span={12}>
          <Button
            type="hazy"
            text={resetButtonText}
            onPress={loading ? undefined : onPressReset}
          />
        </Col>
        <Col span={12}>
          <Button
            text={confirmButtonText}
            onPress={loading ? undefined : onPressConfirm}
          />
        </Col>
      </Row>
    </>
  )
}

export default memo(DatePickerRangeView)
