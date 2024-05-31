import { CrossOutline } from '@fruits-chain/icons-react-native'
import noop from 'lodash/noop'
import React, { memo } from 'react'

import { usePersistFn } from '../hooks'
import NavBar from '../nav-bar'
import Theme from '../theme'

import type { PopupHeaderProps } from './interface'
import { varCreator } from './style'
import { styleCreator } from './style.header'

const PopupHeader: React.FC<PopupHeaderProps> = ({
  theme,
  showClose = true,
  onClose,

  rightExtra,
  ...restProps
}) => {
  const onClosePersistFn = usePersistFn(onClose || noop)
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  const rightExtraJSX = (
    <>
      {rightExtra}
      {showClose ? (
        <CrossOutline
          style={STYLES.icon}
          color={CV.popup_close_icon_color}
          size={CV.popup_close_icon_size}
          onPress={onClosePersistFn}
        />
      ) : null}
    </>
  )

  return (
    <NavBar
      {...restProps}
      rightExtra={rightExtraJSX}
      showBackArrow={false}
      divider={false}
    />
  )
}

export default memo(PopupHeader)
