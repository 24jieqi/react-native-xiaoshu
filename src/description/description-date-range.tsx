import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import type { StyleProp, TextStyle } from 'react-native'
import { View } from 'react-native'

import { formatDate } from '../date-picker-view/helper'
import { renderTextLikeJSX, getDefaultValue } from '../helpers'
import Locale from '../locale'
import Theme from '../theme'

import { useDescription } from './context'
import Description from './description'
import type { DescriptionDateRangeProps } from './interface'
import { varCreator, styleCreator } from './style'

const DescriptionDateRange: React.FC<DescriptionDateRangeProps> = ({
  text,
  mode = 'Y-m',
  split,

  ...restProps
}) => {
  const start = !isNil(text?.[0]) ? formatDate(mode, text![0]) : null
  const end = !isNil(text?.[1]) ? formatDate(mode, text![1]) : null

  const locale = Locale.useLocale().DescriptionDateRange
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme: restProps.theme,
  })
  const descriptionContext = useDescription()

  const _contentTextStyle = getDefaultValue(
    restProps.contentTextStyle,
    descriptionContext.contentTextStyle,
  )
  const _size = getDefaultValue(restProps.size, descriptionContext.size)
  const textSizeStyle = STYLES[`size_${_size}_text`]

  const textStyles: StyleProp<TextStyle> = [
    STYLES.content_text,
    textSizeStyle,
    restProps.bold
      ? {
          fontWeight: 'bold',
        }
      : null,

    restProps.color
      ? {
          color: restProps.color,
        }
      : null,
    _contentTextStyle,
  ]
  const line1JSX = renderTextLikeJSX(
    [start, split ?? locale.split].join(' '),
    textStyles,
  )
  const line2JSX = renderTextLikeJSX(end, textStyles)

  if (isNil(start) && isNil(end)) {
    return <Description {...restProps} />
  }

  return (
    <Description {...restProps}>
      <View style={STYLES.content_date_range}>
        {line1JSX}
        {line2JSX}
      </View>
    </Description>
  )
}

export default memo(DescriptionDateRange)
