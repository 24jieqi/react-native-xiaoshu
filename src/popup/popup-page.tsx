import React, { memo } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { getDefaultValue } from '../helpers'

import type { PopupPageProps } from './interface'
import Popup from './popup'

const PopupPage: React.FC<PopupPageProps> = ({
  safeAreaInsetTop,
  style,
  ...restProps
}) => {
  const insets = useSafeAreaInsets()

  const _safeAreaInsetTop = getDefaultValue(safeAreaInsetTop, insets.top)

  return (
    <Popup
      {...restProps}
      style={[{ top: _safeAreaInsetTop }, style]}
      position="bottom"
    />
  )
}

export default memo(PopupPage)
