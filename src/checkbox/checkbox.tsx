import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'
import { View, Text } from 'react-native'

import { isDef } from '../helpers'
import { useControllableValue } from '../hooks'
import { useThemeTokens, createVar, createStyle } from '../theme'

import CheckboxIcon from './checkbox-icon'
import type { CheckboxProps } from './interface'
import { varCreator, styleCreator } from './style'

function Checkbox<ActiveValueT = boolean, InactiveValueT = boolean>({
  labelTextStyle,
  iconStyle,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  label,
  labelDisabled = false,
  labelPosition = 'right',
  iconSize = 20,
  renderIcon,
  disabled,
  activeColor,

  style,
  children,

  ...restProps
}: PropsWithChildren<CheckboxProps<ActiveValueT, InactiveValueT>>) {
  if (disabled) {
    labelDisabled = disabled
  }

  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    },
  )
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)

  const active = value === activeValue
  const onChangeValue = () => {
    const newValue = active ? inactiveValue : activeValue
    onChange(newValue)
  }

  const labelJSX = isDef(label) ? (
    <Text
      suppressHighlighting
      style={[
        STYLES.label,
        {
          [labelPosition === 'left' ? 'marginRight' : 'marginLeft']:
            CV.checkbox_label_margin,
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
  const iconProps = {
    style: iconStyle,
    active,
    activeColor,
    disabled,
    size: iconSize,
    onPress: onChangeValue,
  }
  const iconJSX = renderIcon ? (
    renderIcon(iconProps)
  ) : (
    <CheckboxIcon {...iconProps} />
  )

  return (
    <View style={[STYLES.checkbox, style]}>
      {labelPosition === 'left' ? labelJSX : null}
      {iconJSX}
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
