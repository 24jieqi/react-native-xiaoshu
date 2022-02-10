import React, { useCallback, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent } from 'react-native'
import {
  TouchableWithoutFeedback,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Cell from '../cell'
import { getDefaultValue } from '../helpers'
import { useControllableValue } from '../hooks'
import useState from '../hooks/useStateUpdate'
import IconSuccessOutline from '../icon/success'
import type { PopupPosition } from '../popup/interface'
import Popup from '../popup/popup'
import Portal from '../portal'

import { useDropdownConfig } from './context'
import type { DropdownItemProps, DropdownItemOption } from './interface'
import DropdownText from './text'

const POPUP_STYLE: ViewStyle = { backgroundColor: 'transparent' }

const DropdownItem: React.FC<DropdownItemProps> = ({
  titleStyle,
  titleTextStyle,
  lazyRender,
  options = [],
  duration,
  zIndex,
  closeOnPressOutside,
  ...restProps
}) => {
  const insets = useSafeAreaInsets()
  const { height: windowHeight } = useWindowDimensions()
  const config = useDropdownConfig()
  const [state, setState] = useState({
    active: false,
    ctxMaxHeight: 0,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    ctxStyle: {} as ViewStyle,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    shadeStyle: {} as ViewStyle,
    position: 'bottom' as PopupPosition,
  })
  const [value, onChange] = useControllableValue(restProps)

  // 修正数据
  lazyRender = getDefaultValue(lazyRender, config.lazyRender)
  duration = getDefaultValue(duration, config.duration)
  zIndex = getDefaultValue(zIndex, config.zIndex)
  closeOnPressOutside = getDefaultValue(
    closeOnPressOutside,
    config.closeOnPressOutside,
  )

  const onPressText = useCallback(() => {
    // 计算 Menu 的 Top 和元素高度
    // eslint-disable-next-line max-params
    config.MenuRef.current.measure((x, y, width, height, pageX, pageY) => {
      const topHeight = pageY - insets.top
      const bottomHeight = windowHeight - pageY - height - insets.bottom

      if (topHeight >= bottomHeight) {
        // 内容在上半部分
        setState({
          active: true,
          position: 'bottom',
          ctxStyle: {
            top: 0,
            height: pageY,
          },
          shadeStyle: {
            top: pageY,
            bottom: 0,
          },
        })
      } else {
        // 内容在下半部分
        setState({
          active: true,
          position: 'top',
          ctxStyle: {
            top: pageY + height,
            bottom: 0,
          },
          shadeStyle: {
            top: 0,
            height: pageY + height,
          },
        })
      }
    })
  }, [config.MenuRef, insets.bottom, insets.top, windowHeight])

  const onPressShade = useCallback(() => {
    setState({
      active: false,
    })
  }, [])

  /** 弹出层可以的最大高度 */
  const onLayoutPlace = useCallback((e: LayoutChangeEvent) => {
    setState({
      ctxMaxHeight: e.nativeEvent.layout.height,
    })
  }, [])

  const genOnPressCell = (o: DropdownItemOption) => () => {
    setState({
      active: false,
    })
    onChange?.(o.value)
  }

  const shadeStyles: ViewStyle[] = [
    {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      // backgroundColor: '#f30', // to test ui
    },
    state.shadeStyle,
  ]
  const boxStyles: ViewStyle[] = [
    {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      overflow: 'hidden',
      // backgroundColor: '#000', // to test ui
    },
    state.ctxStyle,
  ]

  const text = (options.filter(op => op.value === value)[0] || {}).label
  const isContextTop = state.position === 'bottom'
  const placeholderJSX = (
    <TouchableWithoutFeedback onPress={onPressShade}>
      <View style={{ height: insets.top }} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      <DropdownText
        {...restProps}
        style={titleStyle}
        textStyle={titleTextStyle}
        title={text}
        active={state.active}
        onPress={onPressText}
      />

      <Portal>
        {state.active ? (
          <TouchableWithoutFeedback
            onPress={closeOnPressOutside ? onPressShade : undefined}>
            <View style={shadeStyles} />
          </TouchableWithoutFeedback>
        ) : null}

        <View
          style={boxStyles}
          pointerEvents="box-none"
          onLayout={onLayoutPlace}>
          <Popup
            visible={state.active}
            style={POPUP_STYLE}
            lazyRender={lazyRender}
            position={state.position}
            duration={duration}
            onPressOverlay={onPressShade}>
            <View style={{ maxHeight: state.ctxMaxHeight }}>
              {isContextTop ? placeholderJSX : null}

              <ScrollView bounces={false}>
                {options.map(opt => {
                  return (
                    <Cell
                      key={opt.value}
                      title={opt.label}
                      valueExtra={
                        opt.value === value ? (
                          <IconSuccessOutline
                            size={16}
                            color={config.activeColor}
                          />
                        ) : null
                      }
                      onPress={genOnPressCell(opt)}
                    />
                  )
                })}
              </ScrollView>

              {!isContextTop ? placeholderJSX : null}
            </View>
          </Popup>
        </View>
      </Portal>
    </>
  )
}

export default memo(DropdownItem)
