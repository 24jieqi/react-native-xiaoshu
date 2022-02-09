import React, { memo, forwardRef } from 'react'

import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import { EyeOutline, EyeCloseOutline } from '../icon'
import { useTheme } from '../theme'
import { useControllableValue, usePersistFn } from '../hooks'
import { getDefaultValue } from '../helpers'
import type { PasswordInputProps } from './interface'

/**
 * 密码输入
 */
const PasswordInput = forwardRef<TextInputInstance, PasswordInputProps>(
  (
    {
      iconSize = 20,
      iconColor,

      ...restProps
    },
    ref,
  ) => {
    const THEME_VAR = useTheme()
    const [secure, onChangeSecureTextEntry] = useControllableValue(restProps, {
      valuePropName: 'secureTextEntry',
      defaultValuePropName: 'defaultSecureTextEntry',
      defaultValue: true,
      trigger: 'onChangeSecureTextEntry',
    })

    iconColor = getDefaultValue(iconColor, THEME_VAR.gray_6)

    const onPressIcon = usePersistFn(() => {
      onChangeSecureTextEntry(!secure)
    })

    const IconSuffix = secure ? EyeCloseOutline : EyeOutline

    return (
      <TextInput
        {...restProps}
        ref={ref}
        secureTextEntry={secure}
        suffix={
          <IconSuffix size={iconSize} color={iconColor} onPress={onPressIcon} />
        }
      />
    )
  },
)

export default memo(PasswordInput)
