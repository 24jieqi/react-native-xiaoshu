import isUndefined from 'lodash/isUndefined'
import omit from 'lodash/omit'
import React, { useMemo, memo } from 'react'
import { Keyboard } from 'react-native'

import DatePicker from '../date-picker'
import { renderDate } from '../date-picker/date-picker-range-view'
import { useControllableValue, usePersistFn } from '../hooks'
import TextInputClear from '../text-input/text-input-clear'

import FieldText from './field-text'
import type { FieldDateProps } from './interface'

const FieldDate: React.FC<FieldDateProps> = ({
  mode = 'Y-m',
  min,
  max,
  renderLabel,
  confirmButtonText,
  cancelButtonText,
  formatValueText,
  datePickerTitle,
  isLink = true,
  editable = true,
  clearable = false,

  ...restProps
}) => {
  const [value, onChange] = useControllableValue<Date>(restProps)
  const valueText = useMemo(
    () => (value ? renderDate(value, mode) : undefined),
    [value, mode],
  )

  const onPress = usePersistFn(() => {
    Keyboard.dismiss()

    DatePicker({
      defaultValue: value || new Date(),
      confirmButtonText,
      cancelButtonText,
      mode,
      min,
      max,
      renderLabel,
      title: datePickerTitle,
    }).then(({ action, value: _value }) => {
      if (action === 'confirm') {
        onChange(_value)
      }
    })
  })

  return (
    <FieldText
      {...omit(restProps, ['value', 'defaultValue', 'onChange'])}
      disabled={!editable}
      onPress={onPress}
      value={
        formatValueText && !isUndefined(valueText)
          ? formatValueText(value, mode, valueText)
          : valueText
      }
      isLink={value && clearable ? false : isLink}
      valueExtra={
        value && clearable ? (
          <>
            {restProps.valueExtra}
            <TextInputClear
              onPress={() => {
                onChange(null)
              }}
            />
          </>
        ) : (
          restProps.valueExtra
        )
      }
    />
  )
}

export default memo(FieldDate)
