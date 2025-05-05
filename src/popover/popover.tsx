import noop from 'lodash/noop'
import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  memo,
  isValidElement,
  Children,
  cloneElement,
} from 'react'
import type { View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native'
import RNPopoverView from 'react-native-popover-view'

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import type { PopoverProps, PopoverItemProps } from './interface'
import { varCreator, styleCreator } from './style'

const arrowSize = { width: 0, height: 0 }

const Popover = <T,>({
  children,
  theme,
  content,
  dark = false,
  shadow = false,
  arrow = true,
  triggerStyle,
  onSelect = noop,
  disabled,
  renderContentComponent,
  duration,
  trigger = 'onPress',

  backgroundStyle,
  popoverStyle,
  ...restProps
}: React.PropsWithChildren<PopoverProps<T>>) => {
  const [, STYLES, TOKENS] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_BUTTON] = Theme.useStyle({
    varCreator: varCreatorButton,
  })

  duration = getDefaultValue(duration, TOKENS.animation_duration_base)

  const touchable = useRef<View>(null)
  const [showPopover, setShowPopover] = useState(false)
  const animationConfig = useMemo(() => ({ duration }), [duration])

  const openPopover = useCallback(() => {
    setShowPopover(true)
  }, [])
  const closePopover = useCallback(() => {
    setShowPopover(false)
  }, [])

  const _onSelect = (value: T, index: number) => {
    if (onSelect) {
      onSelect(value, index)
    }

    closePopover()
  }

  const renderContent = () => {
    const items = Children.map(content, (child, index) => {
      if (!isValidElement(child)) {
        return child
      }

      return cloneElement(child as React.ReactElement<PopoverItemProps<T>>, {
        onSelect: (v: T) => _onSelect(v, index),
        dark: dark,
      })
    })

    if (typeof renderContentComponent === 'function') {
      return renderContentComponent(items, closePopover)
    }

    return <ScrollView>{items}</ScrollView>
  }

  return (
    <>
      <TouchableOpacity
        ref={touchable}
        onPress={trigger === 'onPress' ? openPopover : undefined}
        onLongPress={trigger === 'onLongPress' ? openPopover : undefined}
        onPressIn={trigger === 'onPressIn' ? openPopover : undefined}
        style={[STYLES.trigger, triggerStyle]}
        disabled={disabled}
        activeOpacity={CV_BUTTON.button_active_opacity}>
        {children}
      </TouchableOpacity>
      <RNPopoverView
        {...restProps}
        from={touchable}
        isVisible={showPopover}
        backgroundStyle={[STYLES.background, backgroundStyle]}
        popoverStyle={[
          STYLES.content,
          // Android 黑色背景的阴影也是黑色，不友好
          dark ? STYLES.content_dark : null,
          shadow ? STYLES.content_shadow : null,
          popoverStyle,
        ]}
        arrowSize={!arrow ? arrowSize : undefined}
        onRequestClose={closePopover}
        animationConfig={animationConfig}>
        {renderContent()}
      </RNPopoverView>
    </>
  )
}

export default memo(Popover) as <T>(
  p: React.PropsWithChildren<PopoverProps<T>>,
) => React.ReactElement
