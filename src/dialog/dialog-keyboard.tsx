import React, { useState, useMemo, useEffect, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Keyboard } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Dialog from './dialog'
import type { DialogProps } from './interface'

const DialogKeyboard: React.FC<DialogProps> = ({ style, ...restProps }) => {
  const insets = useSafeAreaInsets()
  const [keyboardShow, setKeyboardShow] = useState(false)
  const dialogStyle = useMemo<ViewStyle>(
    () => ({
      position: 'absolute',
      top: insets.top,
    }),
    [insets.top],
  )

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardShow(true)
    })
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardShow(false)
    })

    return () => {
      keyboardDidShow.remove()
      keyboardDidHide.remove()
    }
  }, [])

  return (
    <Dialog
      {...restProps}
      style={
        keyboardShow ? (style ? [dialogStyle, style] : dialogStyle) : style
      }
    />
  )
}

export default memo<typeof DialogKeyboard>(DialogKeyboard)
