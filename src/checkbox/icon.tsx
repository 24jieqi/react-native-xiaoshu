import React, { memo } from 'react'

import { useTheme } from '../theme'
import { CircleOutline, CheckedFill } from '../icon'
import { getDefaultValue } from '../helpers'
import type { CheckboxIconProps } from './interface'

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  active,
  activeColor,
  size,
  disabled,
  ...restProps
}) => {
  const THEME_VAR = useTheme()

  // 从配置中拿默认值
  size = getDefaultValue(size, THEME_VAR.checkbox_icon_size)
  activeColor = getDefaultValue(
    activeColor,
    THEME_VAR.checkbox_checked_icon_color,
  )

  if (active) {
    return (
      <CheckedFill
        {...restProps}
        size={size}
        color={
          disabled
            ? THEME_VAR.checkbox_checked_icon_disabled_color
            : activeColor
        }
        disabled={disabled}
      />
    )
  }

  return (
    <CircleOutline
      {...restProps}
      size={size}
      disabled={disabled}
      color={
        disabled
          ? THEME_VAR.checkbox_icon_disabled_color
          : THEME_VAR.checkbox_icon_color
      }
    />
  )
}

export default memo(CheckboxIcon)
