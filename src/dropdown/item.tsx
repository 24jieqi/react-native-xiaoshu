import React, { useCallback, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent } from 'react-native'
import {
  TouchableWithoutFeedback,
  View,
  ScrollView,
  useWindowDimensions,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Portal from '../portal'
import type { PopupPosition } from '../popup/interface'
import Popup from '../popup/popup'
import Cell from '../cell'
import IconSuccessOutline from '../icon/success'
import useState from '../hooks/useStateUpdate'
import useUpdateEffect from '../hooks/useUpdateEffect'
import { getDefaultValue } from '../helpers'
import { isValue } from '../helpers/typeof'
import { useDropdownConfig } from './context'
import DropdownText from './text'
import type { DropdownItemProps, DropdownItemOption } from './interface'

const POPUP_STYLE: ViewStyle = { backgroundColor: 'transparent' }

const DropdownItem: React.FC<DropdownItemProps> = ({
  titleStyle,
  titleTextStyle,
  lazyRender,
  options = [],
  value,
  defaultValue,
  onChange,
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
    ctxStyle: {} as ViewStyle,
    shadeStyle: {} as ViewStyle,
    position: 'bottom' as PopupPosition,
    value: getDefaultValue(value, defaultValue),
  })

  // 修正数据
  lazyRender = getDefaultValue(lazyRender, config.lazyRender)
  duration = getDefaultValue(duration, config.duration)
  zIndex = getDefaultValue(zIndex, config.zIndex)
  closeOnPressOutside = getDefaultValue(
    closeOnPressOutside,
    config.closeOnPressOutside,
  )

  // 同步值
  useUpdateEffect(() => {
    if (isValue(value)) {
      setState({
        value,
      })
    }
  }, [value])

  const onPressText = useCallback(() => {
    // 计算 Menu 的 Top 和元素高度
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
      value: o.value,
      active: false,
    })
    onChange && onChange(o.value)
  }

  const shadeStyle: ViewStyle[] = [
    {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      // backgroundColor: '#f30', // to test ui
    },
    state.shadeStyle,
  ]
  const boxStyle: ViewStyle[] = [
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

  const text = (options.filter(op => op.value === state.value)[0] || {}).text
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
            <View style={shadeStyle} />
          </TouchableWithoutFeedback>
        ) : null}

        <View
          style={boxStyle}
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
                      title={opt.text}
                      valueExtra={
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

              {!isContextTop ? placeholderJSX : null}
            </View>
          </Popup>
        </View>
      </Portal>
    </>
  )
}

export default memo(DropdownItem)
