import React, { useImperativeHandle, useRef, forwardRef, memo } from 'react'
import { Keyboard } from 'react-native'
import type { KeyboardAwareScrollViewProps as KeyboardAwareScrollViewPropsRN } from 'react-native-keyboard-aware-scroll-view'
import { KeyboardAwareScrollView as KeyboardAwareScrollViewRN } from 'react-native-keyboard-aware-scroll-view'

export interface KeyboardAwareScrollViewInstance
  extends KeyboardAwareScrollViewRN {}

export interface KeyboardAwareScrollViewProps
  extends KeyboardAwareScrollViewPropsRN {
  children?: React.ReactNode
}

const KeyboardAwareScrollViewCustom = forwardRef<
  KeyboardAwareScrollViewInstance,
  KeyboardAwareScrollViewProps
>(({ onScrollBeginDrag, ...restProps }, ref) => {
  const KeyboardAwareScrollViewRNRef = useRef<KeyboardAwareScrollViewRN>(null)

  useImperativeHandle(
    ref,
    () =>
      KeyboardAwareScrollViewRNRef.current ||
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      ({} as KeyboardAwareScrollViewInstance),
  )

  return (
    <KeyboardAwareScrollViewRN
      {...restProps}
      ref={KeyboardAwareScrollViewRNRef}
      onScrollBeginDrag={onScrollBeginDrag || Keyboard.dismiss}
    />
  )
})

export const KeyboardAwareScrollView = memo(KeyboardAwareScrollViewCustom)
