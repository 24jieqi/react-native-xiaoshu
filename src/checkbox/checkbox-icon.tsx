import { CircleOutline, SuccessFill } from '@fruits-chain/icons-react-native'
import React, { memo } from 'react'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import type { CheckboxIconProps } from './interface'
import { varCreator } from './style'

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  active,
  activeColor,
  size,
  disabled,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)

  // 从配置中拿默认值
  size = getDefaultValue(size, CV.checkbox_icon_size)
  activeColor = getDefaultValue(activeColor, CV.checkbox_checked_icon_color)

  if (active) {
    return (
      <SuccessFill
        {...restProps}
        size={size}
        color={disabled ? CV.checkbox_checked_icon_disabled_color : activeColor}
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
        disabled ? CV.checkbox_icon_disabled_color : CV.checkbox_icon_color
      }
    />
  )
}

export default memo(CheckboxIcon)
