import React, { memo, isValidElement, Children, cloneElement } from 'react'
import { ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { Popover as Pop, PopoverController } from 'react-native-modal-popover'

import { varCreator as varCreatorButton } from '../button/style'
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

const Popover: React.FC<PopoverProps> = ({
  children,
  triggerStyle,
  arrowStyle,
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
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const STYLES = createStyle(CV, styleCreator)

  const _onSelect = (value: any, closePopover: any) => {
    if (onSelect) {
      onSelect(value)
    }
    closePopover()
  }

  const renderOverlay = (closePopover: any) => {
    const items = Children.map(overlay, child => {
      if (!isValidElement(child)) {
        return child
      }
      return cloneElement(child, {
        onSelect: (v: any) => _onSelect(v, closePopover),
      } as any)
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
            style={triggerStyle}
            disabled={disabled}
            activeOpacity={CV_BUTTON.button_active_opacity}>
            {children}
          </TouchableOpacity>

          <Pop
            contentStyle={STYLES.content}
            arrowStyle={[STYLES.arrow, arrowStyle]}
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

export default memo<typeof Popover>(Popover)
