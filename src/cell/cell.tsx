import noop from 'lodash/noop'
import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Text, View, TouchableHighlight } from 'react-native'

import Divider from '../divider'
import { renderTextLikeJSX, getDefaultValue, getArrowOutline } from '../helpers'
import { useDebounceFn } from '../hooks'
import Theme from '../theme'

import type { CellProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Cell 单元格
 * @description 单元格为列表中的单个展示项。
 */
const Cell: React.FC<CellProps> = ({
  innerStyle,
  title,
  titleStyle,
  titleTextStyle,
  titleExtra,
  value,
  valueStyle,
  valueTextStyle,
  valueExtra,
  extra,
  extraTextStyle,
  contentStyle,
  divider = true,
  dividerLeftGap,
  dividerRightGap,
  isLink = false,
  onPressLink,
  center = false,
  arrowDirection = 'right',
  required = false,
  vertical = false,
  valueTextNumberOfLines,
  titleTextNumberOfLines,
  textAlign = 'right',
  onPressDebounceWait = 0,

  // 原生组件属性
  underlayColor,
  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const { run: runOnPress } = useDebounceFn(restProps.onPress || noop, {
    wait: onPressDebounceWait,
    leading: true,
    trailing: false,
  })

  // 一定要绑定 Press 事件才有这个效果
  underlayColor = getDefaultValue(underlayColor, CV.cell_active_color)
  dividerLeftGap = getDefaultValue(
    dividerLeftGap,
    CV.cell_group_title_padding_horizontal,
  )
  dividerRightGap = getDefaultValue(
    dividerRightGap,
    CV.cell_group_title_padding_horizontal,
  )

  if (vertical) {
    textAlign = 'left'
  }

  const centerStyle: ViewStyle = center ? { alignSelf: 'center' } : {}

  const requiredJSX = required ? (
    <View style={STYLES.title_required} testID="CELL_REQUIRED">
      <Text style={STYLES.title_required_text}>*</Text>
    </View>
  ) : null
  const titleJSX = renderTextLikeJSX(
    title,
    [STYLES.title_text, titleTextStyle],
    {
      numberOfLines: titleTextNumberOfLines,
    },
  )
  const valueJSX = renderTextLikeJSX(
    value,
    [
      STYLES.value_text,
      {
        textAlign,
      },
      valueTextStyle,
    ],
    {
      numberOfLines: valueTextNumberOfLines,
    },
  )
  const extraJSX = renderTextLikeJSX(extra, [STYLES.extra_text, extraTextStyle])
  const IconArrow = getArrowOutline(arrowDirection)
  const linkJSX = isLink ? (
    <IconArrow
      testID="CELL_LINK_ARROW"
      size={CV.cell_icon_size}
      color={CV.cell_icon_color}
      onPress={onPressLink}
      style={STYLES.icon_link}
    />
  ) : null

  const ctxJSX = (
    <>
      <View
        style={[
          STYLES.value,
          valueJSX ? STYLES.hasValue : undefined,
          centerStyle,
          valueStyle,
        ]}>
        {valueJSX}
      </View>
      {valueExtra}
      {linkJSX}
    </>
  )

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor}
      style={[STYLES.cell, style]}
      onPress={
        restProps.onPress
          ? onPressDebounceWait
            ? runOnPress
            : restProps.onPress
          : undefined
      }>
      <>
        <View
          style={[
            STYLES.cell_inner,
            vertical ? null : STYLES.cell_inner_row,
            extra ? STYLES.cell_inner_has_extra : null,
            innerStyle,
          ]}>
          <View style={[STYLES.title, centerStyle, titleStyle]}>
            {requiredJSX}
            {titleExtra}
            {titleJSX}
          </View>

          {vertical ? (
            <View style={[STYLES.content, contentStyle]}>{ctxJSX}</View>
          ) : (
            ctxJSX
          )}
        </View>
        {extraJSX}
        {divider ? (
          <Divider
            style={{
              marginLeft: dividerLeftGap,
              marginRight: dividerRightGap,
            }}
          />
        ) : null}
      </>
    </TouchableHighlight>
  )
}

export default memo(Cell)
