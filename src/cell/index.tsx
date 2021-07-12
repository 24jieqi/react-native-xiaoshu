import React, { isValidElement, memo } from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import { useTheme } from '../theme'
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
  titleWrapperStyle,
  titleStyle,
  titleTextStyle,
  valueStyle,
  valueTextStyle,
  title,
  value,
  size,
  border = true,
  center = false,
  icon,
  isLink = false,
  arrowDirection = 'right',
  rightIcon,
  required = false,
  vertical = false,
  onPressRightIcon,
  valueTextNumberOfLines,
  textAlign = 'right',

  // 原生组件属性
  underlayColor,
  style,
  ...restProps
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { size, border })

  // 一定要绑定 Press 事件才有这个效果
  underlayColor = underlayColor || themeVar.cell_active_color

  if (vertical) {
    textAlign = 'left'
  }

  const cellWrapperStyle: ViewStyle = {
    borderBottomWidth: border ? 1 : 0,
    alignItems: center ? 'center' : 'flex-start',
  }
  const cellValueStyle: TextStyle = {
    textAlign,
  }

  const cellTouchableSummary: ViewStyle = StyleSheet.flatten([
    Styles.cellTouchable,
    style,
  ])
  const cellStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.cell,
    cellWrapperStyle,
    vertical ? Styles.verticalWrapper : null,
    innerStyle,
  ])
  const titleWrapperSummary: ViewStyle = StyleSheet.flatten([
    vertical ? Styles.verticalHeader : Styles.titleWrapper,
    titleWrapperStyle,
  ])
  const titleSummary: ViewStyle = StyleSheet.flatten([Styles.title, titleStyle])
  const titleTextSummary: TextStyle = StyleSheet.flatten([
    Styles.titleText,
    titleTextStyle,
  ])
  const valueSummary: ViewStyle = StyleSheet.flatten([Styles.value, valueStyle])
  const valueTextSummary: TextStyle = StyleSheet.flatten([
    Styles.valueText,
    cellValueStyle,
    valueTextStyle,
  ])

  /** 左侧标题 可能是自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={titleTextSummary}>{title}</Text>
    )
  ) : null
  const titleJSXView = titleJSX ? (
    <View style={titleSummary}>{titleJSX}</View>
  ) : null

  /** 右侧文案 可能是自定义 JSX */
  const valueJSX = isDef(value) ? (
    isValidElement(value) ? (
      value
    ) : (
      <Text style={valueTextSummary} numberOfLines={valueTextNumberOfLines}>
        {value}
      </Text>
    )
  ) : null
  const valueJSXView = <View style={valueSummary}>{valueJSX}</View>

  /** 箭头 */
  const arrowJSX = isLink ? (
    <IconArrow
      direction={arrowDirection}
      size={themeVar.cell_icon_size}
      color={themeVar.cell_icon_color}
    />
  ) : rightIcon ? (
    rightIcon
  ) : null
  const arrowJSXView = arrowJSX ? (
    <TouchableOpacity style={Styles.arrow} onPress={onPressRightIcon}>
      {arrowJSX}
    </TouchableOpacity>
  ) : null

  /** 必填、红点 */
  const RequiredJSX = required ? (
    <View style={Styles.required}>
      <Text style={Styles.requiredText}>*</Text>
    </View>
  ) : null

  return (
    <TouchableHighlight
      {...restProps}
      underlayColor={underlayColor}
      style={cellTouchableSummary}>
      <View style={cellStyleSummary}>
        <View style={titleWrapperSummary}>
          {RequiredJSX}

          {icon ? <Text style={Styles.iconLeft}>{icon}</Text> : null}

          {titleJSXView}
        </View>

        {vertical ? (
          <View style={Styles.verticalBody}>
            {valueJSXView}
            {arrowJSXView}
          </View>
        ) : (
          <>
            {valueJSXView}
            {arrowJSXView}
          </>
        )}
      </View>
    </TouchableHighlight>
  )
}

export default memo(Cell)
