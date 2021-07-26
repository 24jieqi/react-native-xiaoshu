import React, { useCallback, useState, useEffect, memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import usePersistFn from '../hooks/usePersistFn'
import { isDef } from '../helpers/typeof'
import { noop } from '../helpers'
import { createStyles } from './style'
import CheckboxIcon from './icon'
import type { CheckboxProps } from './interface'

const Checkbox: React.FC<CheckboxProps> = ({
  defaultValue,
  value,
  onChange,
  label,
  labelDisabled = false,
  labelPosition = 'right',
  iconSize = 20,

  shape,
  disabled,
  activeColor,

  style,
  labelStyle,
  children,
}) => {
  if (disabled) {
    labelDisabled = disabled
  }

  const onChangePersistFn = usePersistFn(onChange || noop)
  const [currentValue, setCurrentValue] = useState(defaultValue)
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const checkboxStyleSummary = StyleSheet.flatten([Styles.checkbox, style])
  const labelStyleSummary = StyleSheet.flatten([
    Styles.label,
    {
      [labelPosition === 'left'
        ? 'marginRight'
        : 'marginLeft']: themeVar.checkbox_label_margin,
    },
    disabled ? Styles.labelDisabled : null,
    labelStyle,
  ])

  // 同步状态
  useEffect(() => {
    if (typeof value === 'boolean') {
      setCurrentValue(value)
    }
  }, [value])

  const onChangeValue = useCallback(() => {
    setCurrentValue(s => {
      const v = !s

      onChangePersistFn(v)

      return v
    })
  }, [onChangePersistFn])

  const labelJSX = isDef(label) ? (
    <Text
      style={labelStyleSummary}
      onPress={labelDisabled ? undefined : onChangeValue}>
      {label}
    </Text>
  ) : (
    children
  )

  return (
    <View style={checkboxStyleSummary}>
      {labelPosition === 'left' ? labelJSX : null}
      <CheckboxIcon
        active={currentValue}
        activeColor={activeColor}
        shape={shape}
        disabled={disabled}
        size={iconSize}
        onPress={onChangeValue}
      />
      {labelPosition === 'right' ? labelJSX : null}
    </View>
  )
}

export default memo<typeof Checkbox>(Checkbox)
