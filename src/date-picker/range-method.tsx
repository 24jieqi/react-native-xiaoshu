import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  memo,
} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import DatePickerView from '../date-picker-view'
import type {
  DatePickerColumnMode,
  DatePickerColumnType,
} from '../date-picker-view/interface'
import { serializeMode, toDateObject } from '../date-picker-view/useDatePicker'
import { callInterceptor } from '../helpers'
import { usePersistFn } from '../hooks'
import { createStyles } from '../picker/style'
import Popup from '../popup'
import Space from '../space'
import { useTheme, widthStyle } from '../theme'

import type { DatePickerRangeMethodProps, DatePickerAction } from './interface'

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

const DatePickerRangeMethod: React.FC<DatePickerRangeMethodProps> = ({
  defaultValue,
  title,
  confirmButtonText = '确定',
  cancelButtonText = '取消',
  resetButtonText = '重置',
  onCancel,
  onConfirm,
  onPressOverlay,
  beforeClose,
  placeholder = '请选择',
  // DateView
  mode = 'Y-D',
  min,
  max,
  renderLabel,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const insets = useSafeAreaInsets()

  const nullDate = useMemo(() => new Date(), [])
  const [visible, setVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dayActive, setDayActive] = useState<0 | 1>(0)
  const Values = useRef<[Date, Date]>(
    defaultValue && defaultValue.length === 2
      ? defaultValue
      : [new Date(), new Date()],
  )
  const OriginalValues = useRef(Values.current.concat([]) as [Date, Date])
  const [value, setValue] = useState(Values.current[0])
  const [limitDates, setLimitDates] = useState<[Date, Date]>([
    min,
    Values.current[1] || max,
  ])

  useEffect(() => {
    setVisible(true)
  }, [])

  const onChange = usePersistFn((v: Date) => {
    Values.current[dayActive] = v
    setValue(v)
  })

  const doAction = usePersistFn((action: DatePickerAction) => {
    setLoading(true)

    callInterceptor(beforeClose, {
      args: [action, Values.current],
      done: () => {
        switch (action) {
          case 'cancel':
            onCancel?.(Values.current)
            break
          case 'confirm':
            onConfirm?.(Values.current)
            break
          case 'overlay':
            onPressOverlay?.(Values.current)
            break
          default:
            break
        }

        setLoading(false)
        setVisible(false)
      },
      canceled: () => {
        setLoading(false)
      },
    })
  })

  const onPressCancel = useCallback(() => {
    doAction('cancel')
  }, [doAction])

  const onPressConfirm = useCallback(() => {
    doAction('confirm')
  }, [doAction])

  const onPressPopupOverlay = useCallback(() => {
    doAction('overlay')
  }, [doAction])

  const onPressReset = usePersistFn(() => {
    Values.current = OriginalValues.current.concat([]) as [Date, Date]
    setValue(Values.current[dayActive])
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

  return (
    <Popup
      {...restProps}
      visible={visible}
      onPressOverlay={onPressPopupOverlay}
      position="bottom"
      round>
      <Popup.Header
        showClose={false}
        title={title}
        leftExtra={
          <Text
            style={STYLES.cancel_text}
            onPress={loading ? undefined : onPressCancel}>
            {cancelButtonText}
          </Text>
        }
        rightExtra={
          <Space
            direction="horizontal"
            align="center"
            gapVertical={0}
            gapHorizontal={24}>
            <Text
              style={STYLES.reset_text}
              onPress={loading ? undefined : onPressReset}>
              {resetButtonText}
            </Text>
            <Text
              style={STYLES.confirm_text}
              onPress={loading ? undefined : onPressConfirm}>
              {confirmButtonText}
            </Text>
          </Space>
        }
      />

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
        loading={loading}
        renderLabel={renderLabel}
        onChange={onChange}
        min={limitDates[0]}
        max={limitDates[1]}
      />

      <View style={{ height: insets.bottom + THEME_VAR.picker_bottom_gap }} />
    </Popup>
  )
}

export default memo(DatePickerRangeMethod)
