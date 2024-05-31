import isUndefined from 'lodash/isUndefined'
import React, { memo } from 'react'

import Locale from '../locale'
import Result from '../result'
import ResultIconEmpty from '../result/icons/result-icon-empty'
import Theme from '../theme'

import type { EmptyProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Empty 空元素
 * @description 用于填充空白数据。
 */
const Empty: React.FC<EmptyProps> = ({
  testID,
  theme,
  text,
  style,
  textStyle,
  iconStyle,
  icon,
  full = false,
}) => {
  const locale = Locale.useLocale().Empty
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  const iconJSX = !isUndefined(icon) ? (
    icon
  ) : (
    <ResultIconEmpty style={[STYLES.icon, iconStyle]} />
  )

  return (
    <Result
      testID={testID}
      status="info"
      renderIcon={() => iconJSX}
      style={[STYLES.empty, full ? STYLES.emptyFull : null, style]}
      subtitle={text ?? locale.text}
      subtitleTextStyle={[STYLES.text, textStyle]}
    />
  )
}

export default memo(Empty)
