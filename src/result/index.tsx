import React, { memo } from 'react'
import { View } from 'react-native'

import { attachPropertiesToComponent, renderTextLikeJSX } from '../helpers'
import { SuccessOutline, WarningOutline, CrossOutline } from '../icon'
import Space from '../space'
import { useTheme, widthStyle } from '../theme'

import IconBox from './icons/box'
import IconEmpty from './icons/empty'
import IconError from './icons/error'
import IconWarning from './icons/warning'
import type { ResultProps, ResultStatus } from './interface'
import { createStyles } from './style'

const renderStatusIcon = (status: ResultStatus, size: number) => {
  const props = {
    size,
    color: '#fff',
  }

  switch (status) {
    case 'success':
      return <SuccessOutline {...props} />

    case 'warning':
    case 'info':
      return <WarningOutline {...props} />

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

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const color = THEME_VAR[`result_${status}_color`]
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
    <Space {...restProps} justify="center" align="center">
      {iconJSX}
      {titleJSX}
      {subtitleJSX}
      {extra}
    </Space>
  )
}

const ResultMemo = memo(Result)

export default attachPropertiesToComponent(ResultMemo, {
  IconBox: IconBox,
  IconEmpty: IconEmpty,
  IconError: IconError,
  IconWarning: IconWarning,
})
