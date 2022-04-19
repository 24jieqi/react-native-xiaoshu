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
  confirmButtonText,
  cancelButtonText,
  mode = 'Y-m',
  min,
  max,
  renderLabel,
  isLink = true,
  editable = true,
  clearable = false,
  formatValueText,

  ...restProps
}) => {
  const [value, onChange] = useControllableValue<Date>(restProps)
  const valueText = useMemo(
    () => (value ? renderDate(value, mode) : undefined),
    [value, mode],
  )

  const onPress = usePersistFn(() => {
    if (editable) {
      Keyboard.dismiss()

      DatePicker({
        defaultValue: value || new Date(),
        confirmButtonText,
        cancelButtonText,
        mode,
        min,
        max,
        renderLabel,
      }).then(({ action, value: _value }) => {
        if (action === 'confirm') {
          onChange(_value)
        }
      })
    }
  })

  return (
    <FieldText
      {...omit(restProps, ['value', 'defaultValue', 'onChange'])}
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
                onChange(undefined)
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
