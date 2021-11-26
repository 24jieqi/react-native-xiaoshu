import React, { memo } from 'react'
import { View } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import { SuccessOutLine, WarnFill, CrossOutline } from '../icon'
import { renderTextLikeJSX } from '../helpers'
import type { ResultProps, ResultStatus } from './interface'
import { createStyles } from './style'

const renderStatusIcon = (status: ResultStatus, size: number) => {
  const props = {
    size,
    color: '#fff',
  }

  switch (status) {
    case 'success':
      return <SuccessOutLine {...props} />

    case 'warning':
    case 'info':
      return <WarnFill {...props} />

    case 'error':
      return <CrossOutline {...props} />

    default:
      return null
  }
}

/**
 * Result结果
 * @description 用于反馈一系列操作任务的处理结果。
 */
const Result: React.FC<ResultProps> = ({
  subtitleTextStyle,
  titleTextStyle,
  title,
  subtitle,
  extra,
  renderIcon,
  status,
  style,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const color = THEME_VAR[`result_${status}_color`] || THEME_VAR.primary
  const iconSize = (THEME_VAR.result_icon_size / 4) * 3

  const iconJSX = renderIcon ? (
    renderIcon(color, iconSize)
  ) : (
    <View
      style={[
        STYLES.icon,
        {
          backgroundColor: color,
        },
      ]}>
      {renderStatusIcon(status, iconSize)}
    </View>
  )
  const titleJSX = renderTextLikeJSX(title, [STYLES.titleText, titleTextStyle])
  const subtitleJSX = renderTextLikeJSX(subtitle, [
    STYLES.subtitleText,
    subtitleTextStyle,
  ])

  return (
    <View {...restProps} style={[STYLES.result, style]}>
      {iconJSX}
      {titleJSX}
      {subtitleJSX}
      {extra}
    </View>
  )
}

export default memo(Result)
