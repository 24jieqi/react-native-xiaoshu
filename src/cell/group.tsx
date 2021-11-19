import React, { isValidElement, memo } from 'react'
import { View, Text } from 'react-native'

import { isDef } from '../helpers/typeof'
import { useTheme, widthStyle } from '../theme'
import type { CellGroupProps } from './interface'
import { createStyles } from './style.group'

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<CellGroupProps> = ({
  children,
  title,
  style,
  textStyle,
  bordered = true,
  onPressTitleText,
  extra,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  /** 标题 可能是自定义 JSX */
  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={[STYLES.text, textStyle]} onPress={onPressTitleText}>
        {title}
      </Text>
    )
  ) : null

  return (
    <>
      {titleJSX || isDef(extra) ? (
        <View style={[STYLES.title, style]}>
          {titleJSX}
          {extra}
        </View>
      ) : null}
      {bordered ? <View style={STYLES.body}>{children}</View> : children}
    </>
  )
}

export default memo<typeof CellGroup>(CellGroup)
