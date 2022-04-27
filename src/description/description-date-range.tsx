import React, { memo } from 'react'
import type { StyleProp, TextStyle } from 'react-native'
import { View } from 'react-native'

import { formatDate } from '../date-picker-view/helper'
import { renderTextLikeJSX, getDefaultValue } from '../helpers'
import Theme from '../theme'

import { useDescription } from './context'
import Description from './description'
import type { DescriptionDateRangeProps } from './interface'
import { varCreator, styleCreator } from './style'

const DescriptionDateRange: React.FC<DescriptionDateRangeProps> = ({
  text,
  mode = 'Y-m',
  split = '至',

  bold = false,
  color,
  contentTextStyle,

  ...restProps
}) => {
  const start = formatDate(mode, text[0])
  const end = formatDate(mode, text[1])

  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const descriptionContext = useDescription()

  const _contentTextStyle = getDefaultValue(
    contentTextStyle,
    descriptionContext.contentTextStyle,
  )
  const _size = getDefaultValue(restProps.size, descriptionContext.size)
  const textSizeStyle = STYLES[`size_${_size}_text`]

  const textStyles: StyleProp<TextStyle> = [
    STYLES.content_text,
    textSizeStyle,
    bold
      ? {
          fontWeight: 'bold',
        }
      : null,

    color
      ? {
          color,
        }
      : null,
    _contentTextStyle,
  ]
  const line1JSX = renderTextLikeJSX([start, split].join(' '), textStyles)
  const line2JSX = renderTextLikeJSX(end, textStyles)

  return (
    <Description {...restProps}>
      <View style={STYLES.content_date_range}>
        {line1JSX}
        {line2JSX}
      </View>
    </Description>
  )
}

export default memo<typeof DescriptionDateRange>(DescriptionDateRange)
