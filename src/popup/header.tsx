import React, { memo } from 'react'

import { usePersistFn } from '../hooks'
import { CrossOutline } from '../icon'
import NavBar from '../nav-bar'
import { useTheme, widthStyle } from '../theme'

import type { PopupHeaderProps } from './interface'
import { createStyles } from './style.header'

const PopupHeader: React.FC<PopupHeaderProps> = ({
  showClose = true,
  onClose,

  rightExtra,
  ...restProps
}) => {
  const onClosePersistFn = usePersistFn(onClose)
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const rightExtraJSX = (
    <>
      {rightExtra}
      {showClose ? (
        <CrossOutline
          style={STYLES.icon}
          color={THEME_VAR.popup_close_icon_color}
          size={THEME_VAR.popup_close_icon_size}
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
