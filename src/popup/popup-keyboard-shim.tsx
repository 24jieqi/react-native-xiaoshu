import React, { memo, useEffect, useRef } from 'react'
import { Animated, Keyboard, Platform, useWindowDimensions } from 'react-native'
import type { KeyboardEvent, KeyboardEventName, View } from 'react-native'

import type { PopupKeyboardShimProps } from './interface'

const listenerEventType : {  show: KeyboardEventName ; hide: KeyboardEventName} = Platform.select({
  ios: {
    show: 'keyboardWillShow',
    hide: 'keyboardWillHide'
  },
  android: {
    show: 'keyboardDidShow',
    hide: 'keyboardDidHide'
  },
  default: {
    show: 'keyboardWillShow',
    hide: 'keyboardWillHide'
  }
})

const PopupKeyboardShim: React.FC<PopupKeyboardShimProps> = props => {
  const KeyboardHeight = useRef(new Animated.Value(0))
  const ViewHeight = useRef<View>(null)
  const { height } = useWindowDimensions()

  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      const keyboardDidShow = (e: KeyboardEvent) => {
        // eslint-disable-next-line max-params
        ViewHeight.current?.measure(
          // eslint-disable-next-line max-params
          (_x, _y, _width, _height, _pageX, pageY) => {
            Animated.timing(KeyboardHeight.current, {
              toValue: e.endCoordinates.height - (height - pageY - _height),
              duration: 300,
              useNativeDriver: false,
            }).start()
          },
        )

        Animated.timing(KeyboardHeight.current, {
          toValue: e.endCoordinates.height,
          duration: 300,
          useNativeDriver: false,
        }).start()
      }
      const keyboardDidHide = () => {
        Animated.timing(KeyboardHeight.current, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }).start()
      }
      const _keyboardDidShow = Keyboard.addListener(
        listenerEventType.show,
        keyboardDidShow,
      )
      const _keyboardDidHide = Keyboard.addListener(
        listenerEventType.hide,
        keyboardDidHide,
      )

      return () => {
        // TODO 旧版本如何做兼容
        // @ts-ignore
        if (Keyboard.removeListener) {
          // @ts-ignore
          Keyboard.removeListener(listenerEventType.show, keyboardDidShow)
          // @ts-ignore
          Keyboard.removeListener(listenerEventType.hide, keyboardDidHide)
        } else {
          _keyboardDidShow.remove?.()
          _keyboardDidHide.remove?.()
        }
      }
    }
  }, [height])

  return (
    <Animated.View
      {...props}
      ref={ViewHeight}
      style={[{ height: KeyboardHeight.current }, props.style]}
    />
  )
}

export default memo(PopupKeyboardShim)
