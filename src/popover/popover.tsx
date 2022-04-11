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
import { ScrollView, TouchableOpacity } from 'react-native'
import RNPopoverView from 'react-native-popover-view'

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { PopoverProps } from './interface'
import { varCreator, styleCreator } from './style'

const defaultOnSelect = () => {}

const Popover = <T,>({
  children,
  content,
  dark = false,
  triggerStyle,
  onSelect = defaultOnSelect,
  disabled,
  renderContentComponent,
  duration,

  backgroundStyle,
  popoverStyle,
  ...restProps
}: React.PropsWithChildren<PopoverProps<T>>) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)

  duration = getDefaultValue(duration, TOKENS.animation_duration_base)

  const touchable = useRef<TouchableOpacity>(null)
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

      return cloneElement(child, {
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
        onPress={openPopover}
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
          dark ? STYLES.content_dark : null,
          popoverStyle,
        ]}
        onRequestClose={closePopover}
        animationConfig={animationConfig}>
        {renderContent()}
      </RNPopoverView>
    </>
  )
}

export default memo<typeof Popover>(Popover) as <T>(
  p: React.PropsWithChildren<PopoverProps<T>>,
) => React.ReactElement
