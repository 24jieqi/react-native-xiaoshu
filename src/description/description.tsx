import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View } from 'react-native'

import { renderTextLikeJSX, getDefaultValue } from '../helpers'
import Theme from '../theme'

import { useDescription } from './context'
import type { DescriptionProps } from './interface'
import { varCreator, styleCreator } from './style'

const Description: React.FC<DescriptionProps> = ({
  colon,
  contentStyle,
  contentTextStyle,
  labelStyle,
  labelTextStyle,
  labelWidth,
  layout,
  size,
  numberOfLines,
  justify,
  align,
  label,
  text,
  hidden = false,
  bold = false,
  color,
  addonBefore,
  addonAfter,
  renderLabel,
  render,
  children,

  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const descriptionContext = useDescription()

  // 整理默认值
  const _colon = getDefaultValue(colon, descriptionContext.colon)
  const _contentStyle = getDefaultValue(
    contentStyle,
    descriptionContext.contentStyle,
  )
  const _contentTextStyle = getDefaultValue(
    contentTextStyle,
    descriptionContext.contentTextStyle,
  )
  const _labelStyle = getDefaultValue(labelStyle, descriptionContext.labelStyle)
  const _labelTextStyle = getDefaultValue(
    labelTextStyle,
    descriptionContext.labelTextStyle,
  )
  const _labelWidth = getDefaultValue(labelWidth, descriptionContext.labelWidth)
  const _layout = getDefaultValue(layout, descriptionContext.layout)
  const _size = getDefaultValue(size, descriptionContext.size)
  const _justify = getDefaultValue(justify, descriptionContext.justify)
  const _align = getDefaultValue(align, descriptionContext.align)
  const _numberOfLines = getDefaultValue(
    numberOfLines,
    descriptionContext.numberOfLines,
  )

  const colonStr = _colon ? '：' : ''
  const textSizeStyle = STYLES[`size_${_size}_text`]
  const flexDirection = _layout === 'horizontal' ? 'row' : 'column'

  const labelJSX = !isNil(renderLabel)
    ? renderLabel(colonStr)
    : !isNil(label)
    ? renderTextLikeJSX(`${label}${colonStr}`, [
        STYLES.label_text,
        textSizeStyle,
        _labelTextStyle,
      ])
    : null

  const contentJSX = !isNil(children)
    ? children
    : renderTextLikeJSX(
        text,
        [
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
        ],
        {
          numberOfLines: _numberOfLines,
        },
      )

  const renderJSX = !isNil(render) ? (
    render(contentJSX, addonBefore, addonAfter)
  ) : (
    <>
      {addonBefore}
      {contentJSX}
      {addonAfter}
    </>
  )

  if (hidden) {
    return null
  }

  return (
    <View
      {...restProps}
      style={[
        { flexDirection, justifyContent: _justify, alignItems: _align },
        style,
      ]}>
      <View
        style={[
          !isNil(_labelWidth) ? { width: _labelWidth } : null,
          _labelStyle,
        ]}>
        {labelJSX}
      </View>
      <View style={[STYLES.content, _contentStyle]}>{renderJSX}</View>
    </View>
  )
}

export default memo<typeof Description>(Description)
