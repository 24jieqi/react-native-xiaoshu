import React, { memo, isValidElement, Children, cloneElement } from 'react'
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Popover as Pop, PopoverController } from 'react-native-modal-popover'

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { PopoverProps } from './interface'
import { varCreator, styleCreator } from './style'

const getRectY = (y: number, calculateStatusBar?: boolean | number) => {
  const StatusBarHeight = StatusBar.currentHeight || 0
  if (typeof calculateStatusBar === 'boolean') {
    return calculateStatusBar ? y - StatusBarHeight : y
  }
  return y - (calculateStatusBar as number)
}

const defaultOnSelect = () => {}

const Popover = <T,>({
  children,
  dark = false,
  triggerStyle,
  arrowStyle,
  contentStyle,
  onSelect = defaultOnSelect,
  overlay,
  disabled,
  renderOverlayComponent,
  placement,
  duration,
  easing,
  useNativeDriver,
  onDismiss,
  calculateStatusBar = false,
}: React.PropsWithChildren<PopoverProps<T>>) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)

  duration = getDefaultValue(duration, TOKENS.animation_duration_base)

  const _onSelect = (value: T, closePopover: () => void) => {
    if (onSelect) {
      onSelect(value)
    }

    closePopover()
  }

  const renderOverlay = (closePopover: () => void) => {
    const items = Children.map(overlay, child => {
      if (!isValidElement(child)) {
        return child
      }

      return cloneElement(child, {
        onSelect: (v: T) => _onSelect(v, closePopover),
        dark: dark,
      })
    })

    if (typeof renderOverlayComponent === 'function') {
      return renderOverlayComponent(items, closePopover)
    }

    return <ScrollView>{items}</ScrollView>
  }

  return (
    <PopoverController>
      {({
        openPopover,
        closePopover,
        popoverVisible,
        setPopoverAnchor,
        popoverAnchorRect,
      }) => (
        <>
          <TouchableOpacity
            ref={setPopoverAnchor}
            onPress={openPopover}
            style={[STYLES.trigger, triggerStyle]}
            disabled={disabled}
            activeOpacity={CV_BUTTON.button_active_opacity}>
            {children}
          </TouchableOpacity>

          <Pop
            contentStyle={[
              STYLES.content,
              dark ? STYLES.content_dark : null,
              contentStyle,
            ]}
            arrowStyle={[
              STYLES.arrow,
              dark ? STYLES.arrow_dark : null,
              arrowStyle,
            ]}
            backgroundStyle={STYLES.background}
            visible={popoverVisible}
            onClose={closePopover}
            fromRect={{
              ...popoverAnchorRect,
              y: getRectY(popoverAnchorRect.y, calculateStatusBar),
            }}
            supportedOrientations={['portrait', 'landscape']}
            placement={placement}
            duration={duration}
            easing={easing}
            useNativeDriver={useNativeDriver}
            onDismiss={onDismiss}>
            {renderOverlay(closePopover)}
          </Pop>
        </>
      )}
    </PopoverController>
  )
}

export default memo<typeof Popover>(Popover) as <T>(
  p: React.PropsWithChildren<PopoverProps<T>>,
) => React.ReactElement
