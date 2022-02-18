import React, { memo } from 'react'
import { Keyboard } from 'react-native'

import { isArray, isValue } from '../helpers'
import { usePersistFn } from '../hooks'
import IconSvgCross from '../icon/cross'
import Selector from '../selector'
import type { SelectorValue } from '../selector/interface'
import { createStyles as createTextInputStyles } from '../text-input/style'
import { useTheme, widthStyle } from '../theme'

import type { FieldSelectorProps } from './interface'
import FieldText from './text'

/**
 * 输入框 选择输入
 */
const FieldSelector: React.FC<FieldSelectorProps> = ({
  value,
  options,
  multiple,
  onChange,
  optionsLoading = false,
  innerStyle,
  editable = true,
  clearable = false,

  isLink = true,
  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const TEXT_INPUT_STYLES = widthStyle(THEME_VAR, createTextInputStyles)

  const onPressCell = usePersistFn(() => {
    Keyboard.dismiss()
    if (editable) {
      Selector({
        title: '请选择',
        multiple,
        options,
        value,
        onChange,
      }).catch(() => {})
    }
  })
  const hasValue = multiple
    ? isArray(value as SelectorValue[]) && (value as SelectorValue[]).length > 0
    : isValue(value as SelectorValue)
  const value2text = hasValue
    ? ((multiple ? value : [value]) as SelectorValue[])
        .map(o => {
          const index = options.findIndex(ops => ops.value === o)
          if (index >= 0) {
            return options[index].label
          }
          return null
        })
        .filter(Boolean)
        .join('、')
    : undefined

  return (
    <FieldText
      {...restProps}
      innerStyle={
        optionsLoading
          ? [
              innerStyle,
              {
                opacity: THEME_VAR.button_active_opacity,
              },
            ]
          : innerStyle
      }
      onPress={optionsLoading ? undefined : onPressCell}
      value={value2text}
      isLink={hasValue && clearable ? false : isLink}
      valueExtra={
        hasValue && clearable ? (
          <>
            {restProps.valueExtra}
            <IconSvgCross
              style={TEXT_INPUT_STYLES.clearable}
              color={THEME_VAR.text_input_clearable_color}
              size={(THEME_VAR.text_input_clearable_size / 4) * 3}
              onPress={() => {
                onChange(multiple ? [] : undefined, multiple ? [] : undefined)
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

export default memo(FieldSelector)
