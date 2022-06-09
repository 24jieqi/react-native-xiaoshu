import {
  CrossOutline,
  SuccessOutline,
  // TODO 替换成 WarningOutline
  WarningCircleOutline,
} from '@fruits-chain/icons-react-native'
import React, { memo } from 'react'
import { View } from 'react-native'

import { renderTextLikeJSX } from '../helpers'
import Space from '../space'
import Theme from '../theme'

import type { ResultProps, ResultStatus } from './interface'
import { varCreator, styleCreator } from './style'

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
      return <WarningCircleOutline {...props} />

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
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
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
    <Space {...restProps}>
      {iconJSX}
      {titleJSX}
      {subtitleJSX}
      {extra}
    </Space>
  )
}

export default memo(Result)
