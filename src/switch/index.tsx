import React, { useEffect, useState, useRef, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, Animated } from 'react-native'

import { useTheme, widthStyle } from '../theme'
import LoadingCircular from '../loading/circular'
import { useUpdateEffect } from '../hooks'
import { getDefaultValue, isPromise, isValue } from '../helpers'
import { createStyles } from './style'
import type { SwitchProps } from './interface'

/**
 * Switch 开关
 * @description 用于在打开和关闭状态之间进行切换。
 */
function Switch<ActiveValueT = boolean, InactiveValueT = boolean>({
  size,
  disabled = false,
  loading = false,
  value,
  defaultValue,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  inactiveColor,
  activeColor,
  onPress,
  onChange,
  beforeChange,
}: SwitchProps<ActiveValueT, InactiveValueT>) {
  const translateX = useRef(new Animated.Value(0))
  const [localValue, setLocalValue] = useState<ActiveValueT | InactiveValueT>(
    isValue(value)
      ? value
      : isValue(defaultValue)
      ? defaultValue
      : inactiveValue,
  )
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const [
    switchWidth,
    switchHeight,
    nodeSize,
    translateXValueEnd,
    translateXValueStart,
  ] = useMemo(() => {
    const _innerMiniPadding = 2
    const _unitSize = getDefaultValue(size, THEME_VAR.switch_size)
    const _switchWidth = _unitSize * THEME_VAR.switch_width_ratio
    const _switchHeight = _unitSize * THEME_VAR.switch_height_ratio
    const _nodeSize = _unitSize * THEME_VAR.switch_node_size_ratio
    const _isInnerNode = _switchHeight - _nodeSize < _innerMiniPadding * 2
    const _nodeRealSize = _isInnerNode
      ? _nodeSize - _innerMiniPadding * 2
      : _nodeSize
    const _innerPadding = _isInnerNode
      ? _innerMiniPadding
      : (_switchHeight - _nodeSize) / 2
    const _translateXValueEnd = _switchWidth - _nodeRealSize - _innerPadding
    const _translateXValueStart = _innerPadding

    return [
      _switchWidth,
      _switchHeight,
      _nodeRealSize,
      _translateXValueEnd,
      _translateXValueStart,
    ]
  }, [
    THEME_VAR.switch_height_ratio,
    THEME_VAR.switch_node_size_ratio,
    THEME_VAR.switch_size,
    THEME_VAR.switch_width_ratio,
    size,
  ])

  // 同步值
  useUpdateEffect(() => {
    setLocalValue(value)
  }, [value])

  const active = localValue === activeValue

  const onPressTouchable = () => {
    onPress?.()
    if (!disabled && !loading) {
      const newValue = active ? inactiveValue : activeValue
      const doChange = () => {
        setLocalValue(newValue)
        onChange?.(newValue)
      }

      if (beforeChange) {
        const beforeChangeValue = beforeChange(newValue)
        if (isPromise(beforeChangeValue)) {
          beforeChangeValue.then(v => {
            if (v) {
              doChange()
            }
          })
        } else {
          if (beforeChangeValue) {
            doChange()
          }
        }
      } else {
        doChange()
      }
    }
  }

  useEffect(() => {
    let actionValue: Animated.CompositeAnimation | null

    actionValue = Animated.timing(
      translateX.current, // 动画中的变量值
      {
        toValue: active ? translateXValueEnd : translateXValueStart,
        duration: THEME_VAR.switch_transition_duration,
        useNativeDriver: false,
      },
    )

    actionValue.start(({ finished }) => {
      if (finished) {
        actionValue = null
      }
    })

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop()
        actionValue = null
      }
    }
  }, [
    active,
    translateXValueStart,
    translateXValueEnd,
    THEME_VAR.switch_transition_duration,
  ])

  const switchStyles: ViewStyle[] = [
    STYLES.switch,
    {
      width: switchWidth,
      height: switchHeight,
      borderRadius: switchHeight / 2,
      // 当前过渡不支持 color/backgroundColor
      // 参考：https://stackoverflow.com/a/60586628
      backgroundColor: active
        ? activeColor || THEME_VAR.switch_on_background_color
        : inactiveColor || THEME_VAR.switch_background_color,
    },
    disabled ? STYLES.disabled : null,
  ]
  const nodeStyleSummary: ViewStyle[] = [
    STYLES.node,
    {
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      transform: [
        {
          translateX: translateX.current as unknown as number,
        },
      ],
    },
  ]

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <Animated.View style={switchStyles}>
        <Animated.View style={nodeStyleSummary}>
          {loading ? (
            <LoadingCircular
              size={(nodeSize / 4) * 3}
              color={
                active
                  ? isValue(activeColor)
                    ? activeColor
                    : THEME_VAR.switch_on_background_color
                  : isValue(inactiveColor)
                  ? inactiveColor
                  : THEME_VAR.loading_text_color
              }
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default memo(Switch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: SwitchProps<ActiveValueT, InactiveValueT>,
) => JSX.Element
