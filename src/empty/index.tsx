import React, { memo } from 'react'

import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers'
import ResultIconEmpty from '../result/icons/empty'
import Result from '../result'
import type { EmptyProps } from './interface'
import { createStyles } from './style'

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
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

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
