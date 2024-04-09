import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import Divider from '../divider'
import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { CellGroupProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<CellGroupProps> = ({
  children,
  theme,
  title,
  extra,
  style,
  titleTextStyle,
  bodyStyle,
  bodyTopDivider = false,
  bodyBottomDivider = false,
  onPressTitle,
  onPressTitleText,
}) => {
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  /** 标题 可能是自定义 JSX */
  const titleJSX = renderTextLikeJSX(
    title,
    [STYLES.group_title_text, titleTextStyle],
    {
      onPress: onPressTitleText,
    },
  )

  const groupNameJSX = (
    <View style={[STYLES.group_title, style]}>
      {titleJSX}
      {extra}
    </View>
  )

  const bodyJSX = (
    <>
      {bodyTopDivider ? <Divider /> : null}
      {children}
      {bodyBottomDivider ? <Divider /> : null}
    </>
  )

  return (
    <>
      {titleJSX || !isNil(extra) ? (
        !isNil(onPressTitle) ? (
          <TouchableWithoutFeedback onPress={onPressTitle}>
            {groupNameJSX}
          </TouchableWithoutFeedback>
        ) : (
          groupNameJSX
        )
      ) : null}

      {bodyStyle ? <View style={bodyStyle}>{bodyJSX}</View> : bodyJSX}
    </>
  )
}

export default memo(CellGroup)
