import type { PropsWithChildren } from 'react'
import React, { useCallback, useState, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import usePersistFn from '../hooks/usePersistFn'
import useUpdateEffect from '../hooks/useUpdateEffect'
import { isDef, isValue } from '../helpers/typeof'
import { noop } from '../helpers'
import { createStyles } from './style'
import CheckboxIcon from './icon'
import type { CheckboxProps } from './interface'

function Checkbox<ActiveValueT = boolean, InactiveValueT = boolean>({
  labelTextStyle,
  iconStyle,
  defaultValue,
  value,
  onChange,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  label,
  labelDisabled = false,
  labelPosition = 'right',
  iconSize = 20,
  icon,

  shape,
  disabled,
  activeColor,

  style,
  children,
}: PropsWithChildren<CheckboxProps<ActiveValueT, InactiveValueT>>) {
  if (disabled) {
    labelDisabled = disabled
  }

  const onChangePersistFn = usePersistFn(onChange || noop)
  const [currentValue, setCurrentValue] = useState<
    ActiveValueT | InactiveValueT
  >(
    isValue(value)
      ? value
      : isValue(defaultValue)
      ? defaultValue
      : inactiveValue,
  )
  const themeVar = useTheme()
  const STYLES = widthStyle(themeVar, createStyles)

  const checkboxStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.checkbox,
    style,
  ])
  const labelTextStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.label,
    {
      [labelPosition === 'left' ? 'marginRight' : 'marginLeft']:
        themeVar.checkbox_label_margin,
    },
    disabled ? STYLES.label_disabled : null,
    labelTextStyle,
  ])

  // 同步状态
  useUpdateEffect(() => {
    setCurrentValue(value)
  }, [value])

  const onChangeValue = useCallback(() => {
    setCurrentValue(s => {
      const v = s === activeValue ? inactiveValue : activeValue

      // 做一个延迟，避免父组件更新的时候子组件也在更新
      setTimeout(() => {
        onChangePersistFn(v)
      }, 0)

      return v
    })
  }, [activeValue, inactiveValue, onChangePersistFn])

  const labelJSX = isDef(label) ? (
    <Text
      style={labelTextStyleSummary}
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
        style={iconStyle}
        icon={icon}
        active={currentValue === activeValue}
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
