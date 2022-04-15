import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { Text } from 'react-native'

import Theme from '../theme'

import type { DropdownBadgeProps } from './interface'
import { varCreator, styleCreator } from './style'

const DropdownBadge: React.FC<DropdownBadgeProps> = ({
  count,
  style,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  if (isNil(count)) {
    return null
  }

  if (count === true) {
    return <Text {...restProps} style={[STYLES.badge_dot, style]} />
  }

  return (
    <Text {...restProps} style={[STYLES.badge_text, style]}>
      {count}
    </Text>
  )
}

export default memo(DropdownBadge)
