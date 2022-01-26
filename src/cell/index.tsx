import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Text, View, TouchableHighlight } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { getArrowOutline } from '../icon/helper/arrow'
import { renderTextLikeJSX } from '../helpers'
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
  bordered = true,
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

  const requiredJSX = required ? (
    <View style={STYLES.title_required}>
      <Text style={STYLES.title_required_text}>*</Text>
    </View>
  ) : null
  const titleJSX = renderTextLikeJSX(title, [STYLES.title_text, titleTextStyle])
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
  const IconArrow = getArrowOutline(arrowDirection)
  const linkJSX = isLink ? (
    <IconArrow
      size={THEME_VAR.cell_icon_size}
      color={THEME_VAR.cell_icon_color}
      onPress={onPressLink}
      style={STYLES.icon_link}
    />
  ) : null

  const ctxJSX = (
    <>
      <View style={[STYLES.value, centerStyle, valueStyle]}>{valueJSX}</View>
      {valueExtra}
      {linkJSX}
    </>
  )

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor}
      style={[STYLES.cell, style]}>
      <View
        style={[
          STYLES.cell_inner,
          bordered ? STYLES.cell_inner_border : null,
          vertical ? null : STYLES.cell_inner_row,
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
    </TouchableHighlight>
  )
}

export default memo(Cell)
