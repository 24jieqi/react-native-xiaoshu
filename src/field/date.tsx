import omit from 'lodash/omit'
import React, { useMemo, memo } from 'react'
import { Keyboard } from 'react-native'

import DatePicker from '../date-picker'
import { renderDate } from '../date-picker/range-view'
import { useControllableValue, usePersistFn } from '../hooks'
import IconSvgCross from '../icon/cross'
import { createStyles as createTextInputStyles } from '../text-input/style'
import { useTheme, widthStyle } from '../theme'

import type { FieldDateProps } from './interface'
import FieldText from './text'

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

  ...restProps
}) => {
  const [value, onChange] = useControllableValue(restProps, {})
  const valueText = useMemo(
    () => (value ? renderDate(value, mode) : undefined),
    [value, mode],
  )
  const THEME_VAR = useTheme()
  const TEXT_INPUT_STYLES = widthStyle(THEME_VAR, createTextInputStyles)

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
      value={valueText}
      isLink={value && clearable ? false : isLink}
      valueExtra={
        value && clearable ? (
          <>
            {restProps.valueExtra}
            <IconSvgCross
              style={TEXT_INPUT_STYLES.clearable}
              color={THEME_VAR.text_input_clearable_color}
              size={(THEME_VAR.text_input_clearable_size / 4) * 3}
              onPress={() => {
                console.log('???')
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
