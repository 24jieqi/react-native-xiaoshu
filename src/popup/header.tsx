import React, { memo } from 'react'
import { TouchableOpacity } from 'react-native'

import usePersistFn from '../hooks/usePersistFn'
import { CrossOutline } from '../icon'
import { useTheme, widthStyle } from '../theme'
import NavBar from '../nav-bar'
import type { PopupHeaderProps } from './interface'
import { createStyles } from './style.header'

const CLOSE_HIT_SLOP = {
  left: 4,
  right: 4,
  top: 4,
  bottom: 4,
}

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
        <TouchableOpacity
          style={STYLES.icon}
          onPress={onClosePersistFn}
          activeOpacity={THEME_VAR.active_opacity}
          hitSlop={CLOSE_HIT_SLOP}>
          <CrossOutline
            color={THEME_VAR.popup_close_icon_color}
            size={THEME_VAR.popup_close_icon_size}
          />
        </TouchableOpacity>
      ) : null}
    </>
  )

  return (
    <NavBar
      {...restProps}
      rightExtra={rightExtraJSX}
      showBackArrow={false}
      bordered={false}
    />
  )
}

export default memo(PopupHeader)
