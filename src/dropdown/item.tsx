import React, { useCallback, useMemo, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent } from 'react-native'
import {
  TouchableWithoutFeedback,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import useState from '../hooks/useStateUpdate'

import { useTheme } from '../theme'
import Portal from '../portal'
import Popup from '../popup/popup'
import Cell from '../cell'
import IconSuccessOutline from '../icon/success'
import { useDropdownConfig } from './context'
import DropdownText from './text'
import type { DropdownItemProps, DropdownItemOption } from './interface'

const popupStyle: ViewStyle = { backgroundColor: 'transparent' }

const DropdownItem: React.FC<DropdownItemProps> = ({
  lazyRender = true,
  value,
  options = [],
  disabled = false,
  onChange,
  ...restProps
}) => {
  const insets = useSafeAreaInsets()
  const [active, setActive] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const themeVar = useTheme()
  const config = useDropdownConfig()
  const isContextTop = config.direction === 'up'
  const menuBottomValue =
    config.top + (isContextTop ? 0 : themeVar.dropdown_menu_height)
  const optionWrapperStyle = useMemo<ViewStyle>(() => {
    return {
      maxHeight,
    }
  }, [maxHeight])

  const onPressText = useCallback(() => {
    setActive(true)
  }, [])
  const onPressShade = useCallback(() => {
    setActive(false)
  }, [])
  const onLayoutPlace = useCallback((e: LayoutChangeEvent) => {
    setMaxHeight(e.nativeEvent.layout.height)
  }, [])

  const text = options.filter(op => op.value === value)[0].text
  const genOnPressCell = (o: DropdownItemOption) => () => {
    onChange && onChange(o.value)
    setActive(false)
  }

  const shadeStyle = StyleSheet.flatten<ViewStyle>([
    {
      position: 'absolute',
      left: 0,
      right: 0,
      top: isContextTop ? menuBottomValue : 0,
      bottom: isContextTop ? 0 : menuBottomValue,
      zIndex: config.zIndex,
      // backgroundColor: '#f30', // to test ui
      // opacity: 0.2,
    },
    isContextTop
      ? {
          top: menuBottomValue,
          bottom: 0,
        }
      : {
          top: 0,
          height: menuBottomValue,
        },
  ])
  const boxStyle = StyleSheet.flatten<ViewStyle>([
    {
      position: 'absolute',
      left: 0,
      right: 0,
      top: isContextTop ? menuBottomValue : 0,
      bottom: isContextTop ? 0 : menuBottomValue,
      zIndex: config.zIndex,
      overflow: 'hidden',
      // backgroundColor: '#000', // to test ui
      // opacity: 0.2,
    },
    isContextTop
      ? {
          top: 0,
          height: menuBottomValue,
        }
      : {
          top: menuBottomValue,
          bottom: 0,
        },
  ])

  return (
    <>
      <DropdownText
        {...restProps}
        title={text}
        active={active}
        onPress={onPressText}
        direction={config.direction}
        disabled={disabled}
        pressable={!disabled}
      />

      <Portal>
        {active ? (
          <TouchableWithoutFeedback onPress={onPressShade}>
            <View style={shadeStyle} />
          </TouchableWithoutFeedback>
        ) : null}

        <View
          style={boxStyle}
          pointerEvents="box-none"
          onLayout={onLayoutPlace}>
          <Popup
            visible={active}
            style={popupStyle}
            lazyRender={lazyRender}
            position={config.direction === 'up' ? 'bottom' : 'top'}
            duration={config.duration}
            onPressOverlay={onPressShade}>
            <View style={optionWrapperStyle}>
              {isContextTop ? <View style={{ height: insets.top }} /> : null}

              <ScrollView>
                {options.map(opt => {
                  return (
                    <Cell
                      key={opt.value}
                      title={opt.text}
                      rightIcon={
                        opt.value === value ? (
                          <IconSuccessOutline
                            size="16"
                            color={config.activeColor}
                          />
                        ) : null
                      }
                      onPress={genOnPressCell(opt)}
                    />
                  )
                })}
              </ScrollView>

              {!isContextTop ? (
                <View style={{ height: insets.bottom }} />
              ) : null}
            </View>
          </Popup>
        </View>
      </Portal>
    </>
  )
}

export default memo(DropdownItem)
