import isNil from 'lodash/isNil'
import React, { memo, Fragment } from 'react'
import { View, TouchableWithoutFeedback } from 'react-native'

import Divider from '../divider'
import { renderTextLikeJSX } from '../helpers'
import Theme from '../theme'

import type { CellGroupProps } from './interface'
import { varCreator } from './style'
import { styleCreator } from './style.group'

/**
 * CellGroup 单元格组
 * @description 一组单元格，可以设置一个标题。
 */
const CellGroup: React.FC<React.PropsWithChildren<CellGroupProps>> = ({
  children,
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
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

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

  const BodyComponent = bodyStyle ? View : Fragment

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

      <BodyComponent style={bodyStyle}>
        {bodyTopDivider ? <Divider /> : null}
        {children}
        {bodyBottomDivider ? <Divider /> : null}
      </BodyComponent>
    </>
  )
}

export default memo(CellGroup)
