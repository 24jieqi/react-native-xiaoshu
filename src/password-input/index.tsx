import React, { useState, useCallback, memo, forwardRef } from 'react'

import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import { EyeOutline, EyeCloseOutline } from '../icon'
import { useTheme } from '../theme'
import { useUpdateEffect } from '../hooks'
import { getDefaultValue } from '../helpers'
import type { PasswordInputProps } from './interface'

/**
 * 密码输入
 */
const PasswordInput = forwardRef<TextInputInstance, PasswordInputProps>(
  (
    {
      secureTextEntry = true,
      iconSize = 20,
      iconColor,

      ...restProps
    },
    ref,
  ) => {
    const THEME_VAR = useTheme()
    const [secure, setSecure] = useState(secureTextEntry)

    iconColor = getDefaultValue(iconColor, THEME_VAR.text_color_3)

    // 同步数据
    useUpdateEffect(() => {
      setSecure(secureTextEntry)
    }, [secureTextEntry])

    const onPressIcon = useCallback(() => {
      setSecure(v => !v)
    }, [])
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
