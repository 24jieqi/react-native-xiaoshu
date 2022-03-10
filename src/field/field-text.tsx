import React, { useMemo, memo } from 'react'
import type { TextStyle, StyleProp } from 'react-native'

import Cell from '../cell'
import { getDefaultValue, isDef } from '../helpers'
import { varCreator as varCreatorTextInput } from '../text-input/style'
import { useThemeTokens, createVar } from '../theme'

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
  const TOKENS = useThemeTokens()
  const CV_TEXT_INPUT = createVar(TOKENS, varCreatorTextInput)

  // 修正数据
  placeholderTextColor = getDefaultValue(
    placeholderTextColor,
    CV_TEXT_INPUT.text_input_placeholder_text_color,
  )

  const valueTextStyles = useMemo<StyleProp<TextStyle>>(() => {
    return [
      valueTextStyle,
      !hasValue
        ? {
            color: placeholderTextColor,
          }
        : null,
    ]
  }, [valueTextStyle, hasValue, placeholderTextColor])

  return <Cell {...restProps} value={text} valueTextStyle={valueTextStyles} />
}

export default memo(FieldText)
