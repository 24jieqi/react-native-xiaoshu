import isNil from 'lodash/isNil'
import React, { memo, isValidElement } from 'react'
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
  empty,
  showEmpty,

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
  const _empty = getDefaultValue(empty, descriptionContext.empty)
  const _showEmpty = getDefaultValue(showEmpty, descriptionContext.showEmpty)

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

  const renderText = (node: React.ReactNode) =>
    renderTextLikeJSX(
      node,
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
  const contentJSX = isValidElement(children)
    ? children
    : renderText(!isNil(text) ? text : children)

  // 判断是否渲染空数据占位符
  const renderContentJSX =
    (isNil(contentJSX) || text === '' || children === '') && _showEmpty
      ? renderText(_empty)
      : contentJSX

  const renderJSX = !isNil(render) ? (
    render(renderContentJSX, addonBefore, addonAfter)
  ) : (
    <>
      {addonBefore}
      {renderContentJSX}
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

export default memo(Description)
