import React, { memo } from 'react'

import { isDef } from '../helpers'
import Result from '../result'
import ResultIconEmpty from '../result/icons/result-icon-empty'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { EmptyProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Empty 空元素
 * @description 用于填充空白数据。
 */
const Empty: React.FC<EmptyProps> = ({
  text = '暂无数据',
  style,
  textStyle,
  iconStyle,
  icon,
  full = false,
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)

  const iconJSX = isDef(icon) ? (
    icon
  ) : (
    <ResultIconEmpty style={[STYLES.icon, iconStyle]} />
  )

  return (
    <Result
      status="info"
      renderIcon={() => iconJSX}
      style={[STYLES.empty, full ? STYLES.emptyFull : null, style]}
      subtitle={text}
      subtitleTextStyle={[STYLES.text, textStyle]}
    />
  )
}

export default memo(Empty)
