import React, { useMemo, memo } from 'react'
import type { TextStyle, StyleProp } from 'react-native'

import Cell from '../cell'
import { isDef } from '../helpers'
import { useTheme } from '../theme'
import type { FieldTextProps } from './interface'

/**
 * 输入框 纯文字方式
 */
const FieldText: React.FC<FieldTextProps> = ({
  placeholder,
  placeholderTextColor,
  value,

  valueTextStyle,
  ...restProps
}) => {
  const hasValue = isDef(value)
  const text = hasValue ? value : placeholder
  const THEME_VAR = useTheme()
  const valueTextStyles = useMemo<StyleProp<TextStyle>>(() => {
    return [
      valueTextStyle,
      !hasValue
        ? {
            color: THEME_VAR.text_input_placeholder_text_color,
          }
        : null,
    ]
  }, [valueTextStyle, hasValue, THEME_VAR.text_input_placeholder_text_color])

  return <Cell {...restProps} value={text} valueTextStyle={valueTextStyles} />
}

export default memo(FieldText)
