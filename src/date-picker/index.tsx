import React from 'react'

import Portal from '../portal'

import type { DatePickerInstance } from './interface'
import DatePickerRangeMethodView from './range-method'
import DatePickerRangeViewView from './range-view'
import DatePickerSingleMethodView from './single-method'

const DatePicker: DatePickerInstance = opts => {
  return new Promise(resolve => {
    const key = Portal.add(
      <DatePickerSingleMethodView
        {...opts}
        onCancel={v => {
          opts.onCancel?.(v)
          resolve({
            action: 'cancel',
            value: v,
          })
        }}
        onConfirm={v => {
          opts.onConfirm?.(v)
          resolve({
            action: 'confirm',
            value: v,
          })
        }}
        onPressOverlay={v => {
          opts.onPressOverlay?.(v)
          resolve({
            action: 'overlay',
            value: v,
          })
        }}
        onClosed={() => {
          opts.onClosed?.()
          Portal.remove(key)
        }}
      />,
    )
  })
}

DatePicker.RangeView = DatePickerRangeViewView

DatePicker.range = opts => {
  return new Promise(resolve => {
    const key = Portal.add(
      <DatePickerRangeMethodView
        {...opts}
        onCancel={v => {
          opts.onCancel?.(v)
          resolve({
            action: 'cancel',
            values: v,
          })
        }}
        onConfirm={v => {
          opts.onConfirm?.(v)
          resolve({
            action: 'confirm',
            values: v,
          })
        }}
        onPressOverlay={v => {
          opts.onPressOverlay?.(v)
          resolve({
            action: 'overlay',
            values: v,
          })
        }}
        onClosed={() => {
          opts.onClosed?.()
          Portal.remove(key)
        }}
      />,
    )
  })
}

export default DatePicker
