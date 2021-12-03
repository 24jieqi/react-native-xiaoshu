import React, { memo } from 'react'
import { View } from 'react-native'

import { renderTextLikeJSX, isDef } from '../helpers'
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
  const titleJSX = renderTextLikeJSX(title, [STYLES.text, textStyle], {
    onPress: onPressTitleText,
  })

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
