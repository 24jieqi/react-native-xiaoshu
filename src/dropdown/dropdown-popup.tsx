import React, { useCallback, useMemo, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent } from 'react-native'
import {
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import useState from '../hooks/useStateUpdate'
import Popup from '../popup/popup'

import type { DropdownPopupProps } from './interface'

const POPUP_STYLE: ViewStyle = { backgroundColor: 'transparent' }

const DropdownPopup: React.FC<DropdownPopupProps> = ({
  zIndex,
  closeOnPressOutside = true,
  targetHeight,
  targetPageY,
  onPressShade,
  safeAreaInset = true,

  children,
  ...restProps
}) => {
  const insets = useSafeAreaInsets()
  const { height: windowHeight } = useWindowDimensions()

  const [wrapperStyle, setWrapperStyle] = useState<ViewStyle>({
    maxHeight: 0,
  })

  /** 弹出层可以的最大高度 */
  const onLayoutPlace = useCallback((e: LayoutChangeEvent) => {
    setWrapperStyle({
      maxHeight: e.nativeEvent.layout.height,
    })
  }, [])

  const [_isBottom, _shadeStyles, _boxStyles] = useMemo(() => {
    const topHeight = targetPageY - insets.top
    const bottomHeight =
      windowHeight - targetPageY - targetHeight - insets.bottom
    const isBottom = topHeight >= bottomHeight

    const shadeStyles: ViewStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      // backgroundColor: '#f30', // to test ui

      // state.shadeStyle,
      ...(isBottom
        ? { top: targetPageY, bottom: 0 }
        : { top: 0, height: targetPageY + targetHeight }),
    }

    const boxStyles: ViewStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      overflow: 'hidden',
      // backgroundColor: '#000', // to test ui

      // state.ctxStyle,
      ...(isBottom
        ? { top: 0, height: targetPageY }
        : { top: targetPageY + targetHeight, bottom: 0 }),
    }

    return [isBottom, shadeStyles, boxStyles]
  }, [
    insets.bottom,
    insets.top,
    targetHeight,
    targetPageY,
    windowHeight,
    zIndex,
  ])

  const placeholderJSX = (
    <TouchableWithoutFeedback
      onPress={closeOnPressOutside ? onPressShade : undefined}>
      <View style={{ height: _isBottom ? insets.top : insets.bottom }} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      {restProps.visible ? (
        <TouchableWithoutFeedback
          onPress={closeOnPressOutside ? onPressShade : undefined}>
          <View style={_shadeStyles} />
        </TouchableWithoutFeedback>
      ) : null}

      <View
        style={_boxStyles}
        pointerEvents="box-none"
        onLayout={onLayoutPlace}>
        <Popup
          {...restProps}
          style={POPUP_STYLE}
          position={_isBottom ? 'bottom' : 'top'}>
          <View style={wrapperStyle}>
            {_isBottom && safeAreaInset ? placeholderJSX : null}
            {children}
            {!_isBottom && safeAreaInset ? placeholderJSX : null}
          </View>
        </Popup>
      </View>
    </>
  )
}

export default memo<typeof DropdownPopup>(DropdownPopup)
