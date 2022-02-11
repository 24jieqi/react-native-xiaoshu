import React, { memo } from 'react'
import { Keyboard } from 'react-native'

import { isArray, isValue } from '../helpers'
import { usePersistFn } from '../hooks'
import Selector from '../selector'
import type { SelectorValue } from '../selector/interface'
import { useTheme } from '../theme'

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

  isLink = true,
  ...restProps
}) => {
  const THEME_VAR = useTheme()

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
      isLink={isLink}
    />
  )
}

export default memo(FieldSelector)
