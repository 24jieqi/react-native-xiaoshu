import React, { memo } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import Divider from '../divider'
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
  extra,
  style,
  titleTextStyle,
  bodyStyle,
  bodyTopDivider = false,
  bodyBottomDivider = false,
  bodyPaddingHorizontal = false,
  onPressTitle,
  onPressTitleText,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  /** 标题 可能是自定义 JSX */
  const titleJSX = renderTextLikeJSX(title, [STYLES.text, titleTextStyle], {
    onPress: onPressTitleText,
  })

  const groupNameJSX = (
    <View style={[STYLES.title, style]}>
      {titleJSX}
      {extra}
    </View>
  )

  return (
    <>
      {titleJSX || isDef(extra) ? (
        isDef(onPressTitle) ? (
          <TouchableWithoutFeedback onPress={onPressTitle}>
            {groupNameJSX}
          </TouchableWithoutFeedback>
        ) : (
          groupNameJSX
        )
      ) : null}

      <View
        style={[
          bodyPaddingHorizontal ? STYLES.body_padding_horizontal : null,
          bodyStyle,
        ]}>
        {bodyTopDivider ? <Divider /> : null}
        {children}
        {bodyBottomDivider ? <Divider /> : null}
      </View>
    </>
  )
}

export default memo<typeof CellGroup>(CellGroup)
