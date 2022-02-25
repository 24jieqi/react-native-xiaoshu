import React, { memo } from 'react'
import { View } from 'react-native'

import { isDef, renderTextLikeJSX, getDefaultValue } from '../helpers'
import { useTheme, widthStyle } from '../theme'

import { useDescription } from './context'
import type { DescriptionProps } from './interface'
import { createStyles } from './style'

const Description: React.FC<DescriptionProps> = ({
  colon,
  contentStyle,
  contentTextStyle,
  labelStyle,
  labelTextStyle,
  labelWidth,
  layout,
  size,
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
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
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

  const colonStr = _colon ? '：' : ''
  const textSizeStyle = STYLES[`size_${_size}_text`]
  const flexDirection = _layout === 'horizontal' ? 'row' : 'column'

  const labelJSX = isDef(renderLabel)
    ? renderLabel(colonStr)
    : isDef(label)
    ? renderTextLikeJSX(`${label}${colonStr}`, [
        STYLES.label_text,
        textSizeStyle,
        _labelTextStyle,
      ])
    : null

  const contentJSX = isDef(children)
    ? children
    : renderTextLikeJSX(text, [
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
      ])

  const renderJSX = isDef(render) ? (
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
    <View {...restProps} style={[STYLES.description, { flexDirection }, style]}>
      <View
        style={[
          STYLES.label,
          isDef(_labelWidth) ? { width: _labelWidth } : null,
          _labelStyle,
        ]}>
        {labelJSX}
      </View>
      <View style={[STYLES.content, _contentStyle]}>{renderJSX}</View>
    </View>
  )
}

// TODO: 临时解决 dumi 文档解析错误
const DescriptionMemo: typeof Description =
  memo<typeof Description>(Description)

export default DescriptionMemo
