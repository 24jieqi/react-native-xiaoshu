import type { PropsWithChildren } from 'react'
import React, { useCallback, useState, memo } from 'react'
import { View, Text } from 'react-native'

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
  const [localValue, setLocalValue] = useState<ActiveValueT | InactiveValueT>(
    isValue(value)
      ? value
      : isValue(defaultValue)
      ? defaultValue
      : inactiveValue,
  )
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  // 同步状态
  useUpdateEffect(() => {
    setLocalValue(value)
  }, [value])

  const onChangeValue = useCallback(() => {
    setLocalValue(s => {
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
      style={[
        STYLES.label,
        {
          [labelPosition === 'left' ? 'marginRight' : 'marginLeft']:
            THEME_VAR.checkbox_label_margin,
        },
        disabled ? STYLES.label_disabled : null,
        labelTextStyle,
      ]}
      onPress={labelDisabled ? undefined : onChangeValue}>
      {label}
    </Text>
  ) : (
    children
  )

  return (
    <View style={[STYLES.checkbox, style]}>
      {labelPosition === 'left' ? labelJSX : null}
      <CheckboxIcon
        style={iconStyle}
        icon={icon}
        active={localValue === activeValue}
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

export default memo(Checkbox) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: PropsWithChildren<CheckboxProps<ActiveValueT, InactiveValueT>>,
) => JSX.Element
