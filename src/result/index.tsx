import React, { memo } from 'react'
import { View } from 'react-native'

import { attachPropertiesToComponent, renderTextLikeJSX } from '../helpers'
import Icon from '../icon'
import Space from '../space'
import { useThemeTokens, createVar, createStyle } from '../theme'

import IconBox from './icons/result-icon-box'
import IconEmpty from './icons/result-icon-empty'
import IconError from './icons/result-icon-error'
import IconWarning from './icons/result-icon-warning'
import type { ResultProps, ResultStatus } from './interface'
import { varCreator, styleCreator } from './style'

const renderStatusIcon = (status: ResultStatus, size: number) => {
  const props = {
    size,
    color: '#fff',
  }

  switch (status) {
    case 'success':
      return <Icon.SuccessOutline {...props} />

    case 'warning':
    case 'info':
      return <Icon.WarningOutline {...props} />

    case 'error':
      return <Icon.CrossOutline {...props} />

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
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)
  const color = CV[`result_${status}_color`]
  const iconSize = (CV.result_icon_size / 4) * 3

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
