import React, { memo } from 'react'

import { usePersistFn } from '../hooks'
import CrossOutline from '../icon/cross'
import NavBar from '../nav-bar'
import Theme from '../theme'

import type { PopupHeaderProps } from './interface'
import { varCreator } from './style'
import { styleCreator } from './style.header'

const PopupHeader: React.FC<PopupHeaderProps> = ({
  showClose = true,
  onClose,

  rightExtra,
  ...restProps
}) => {
  const onClosePersistFn = usePersistFn(onClose)
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

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
