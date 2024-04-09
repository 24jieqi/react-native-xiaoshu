import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { Text } from 'react-native'

import Theme from '../theme'

import { useDropdownConfig } from './context'
import type { DropdownBadgeProps } from './interface'
import { varCreator, styleCreator } from './style'

const DropdownBadge: React.FC<DropdownBadgeProps> = ({
  count,
  style,
  ...restProps
}) => {
  const { theme } = useDropdownConfig()
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

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
