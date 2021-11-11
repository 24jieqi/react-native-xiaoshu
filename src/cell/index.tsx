import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import IconArrow from '../icon/arrow'
import { isDef } from '../helpers/typeof'
import { createStyles } from './style'
import type { CellProps } from './interface'

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
  contentStyle,
  border = true,
  isLink = false,
  onPressLink,
  center = false,
  arrowDirection = 'right',
  required = false,
  vertical = false,
  valueTextNumberOfLines,
  textAlign = 'right',

  // 原生组件属性
  underlayColor,
  style,
  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  // 一定要绑定 Press 事件才有这个效果
  underlayColor = underlayColor || THEME_VAR.cell_active_color

  if (vertical) {
    textAlign = 'left'
  }

  const centerStyle: ViewStyle = center ? { alignSelf: 'center' } : null

  const cellStyleSummary = StyleSheet.flatten<ViewStyle>([STYLES.cell, style])
  const innerStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.cell_inner,
    border ? STYLES.cell_inner_border : null,
    vertical ? null : STYLES.cell_inner_row,
    innerStyle,
  ])
  const titleStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.title,
    centerStyle,
    titleStyle,
  ])
  const titleTextStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.title_text,
    titleTextStyle,
  ])
  const valueStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.value,
    centerStyle,
    valueStyle,
  ])
  const valueTextStyleSummary = StyleSheet.flatten<TextStyle>([
    STYLES.value_text,
    {
      textAlign,
    },
    valueTextStyle,
  ])
  const contentStyleSummary = StyleSheet.flatten<ViewStyle>([
    STYLES.content,
    contentStyle,
  ])

  const requiredJSX = required ? (
    <View style={STYLES.title_required}>
      <Text style={STYLES.title_required_text}>*</Text>
    </View>
  ) : null
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextStyleSummary}>{title}</Text>
    )
  ) : null
  const valueJSX = isDef(value) ? (
    isValidElement(value) ? (
      value
    ) : (
      <Text
        style={valueTextStyleSummary}
        numberOfLines={valueTextNumberOfLines}>
        {value}
      </Text>
    )
  ) : null
  const linkJSX = isLink ? (
    <IconArrow
      direction={arrowDirection}
      size={THEME_VAR.cell_icon_size}
      color={THEME_VAR.cell_icon_color}
      onPress={onPressLink || restProps.onPress}
      style={STYLES.icon_link}
    />
  ) : null

  const ctxJSX = (
    <>
      <View style={valueStyleSummary}>{valueJSX}</View>
      {valueExtra}
      {linkJSX}
    </>
  )

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor}
      style={cellStyleSummary}>
      <View style={innerStyleSummary}>
        <View style={titleStyleSummary}>
          {requiredJSX}
          {titleExtra}
          {titleJSX}
        </View>

        {vertical ? <View style={contentStyleSummary}>{ctxJSX}</View> : ctxJSX}
      </View>
    </TouchableHighlight>
  )
}

export default memo(Cell)
