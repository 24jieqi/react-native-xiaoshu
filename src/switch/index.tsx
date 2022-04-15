import isUndefined from 'lodash/isUndefined'
import React, { useEffect, useRef, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, Animated } from 'react-native'

import { getDefaultValue, callInterceptor } from '../helpers'
import { useControllableValue } from '../hooks'
import LoadingCircular from '../loading/loading-circular'
import { varCreator as varCreatorLoading } from '../loading/style'
import Theme from '../theme'

import type { SwitchProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Switch 开关
 * @description 用于在打开和关闭状态之间进行切换。
 */
function Switch<ActiveValueT = boolean, InactiveValueT = boolean>({
  size,
  disabled = false,
  loading = false,
  activeValue = true as unknown as ActiveValueT,
  inactiveValue = false as unknown as InactiveValueT,
  inactiveColor,
  activeColor,
  onPress,
  beforeChange,

  ...restProps
}: SwitchProps<ActiveValueT, InactiveValueT>) {
  const translateX = useRef(new Animated.Value(0))
  const [value, onChange] = useControllableValue<ActiveValueT | InactiveValueT>(
    restProps,
    {
      defaultValue: inactiveValue,
    },
  )
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_LOADING = Theme.createVar(TOKENS, varCreatorLoading)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const [
    switchWidth,
    switchHeight,
    nodeSize,
    translateXValueEnd,
    translateXValueStart,
  ] = useMemo(() => {
    const _innerMiniPadding = 2
    const _unitSize = getDefaultValue(size, CV.switch_size)
    const _switchWidth = _unitSize * CV.switch_width_ratio
    const _switchHeight = _unitSize * CV.switch_height_ratio
    const _nodeSize = _unitSize * CV.switch_node_size_ratio
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
    CV.switch_height_ratio,
    CV.switch_node_size_ratio,
    CV.switch_size,
    CV.switch_width_ratio,
    size,
  ])

  const active = value === activeValue

  const onPressTouchable = () => {
    onPress?.()
    if (!disabled && !loading) {
      const newValue = active ? inactiveValue : activeValue
      callInterceptor(beforeChange, {
        args: [newValue],
        done: () => {
          onChange(newValue)
        },
      })
    }
  }

  useEffect(() => {
    const actionValue = Animated.timing(
      translateX.current, // 动画中的变量值
      {
        toValue: active ? translateXValueEnd : translateXValueStart,
        duration: CV.switch_transition_duration,
        useNativeDriver: false,
      },
    )

    actionValue.start()

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop()
      }
    }
  }, [
    active,
    translateXValueStart,
    translateXValueEnd,
    CV.switch_transition_duration,
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
        ? activeColor || CV.switch_on_background_color
        : inactiveColor || CV.switch_background_color,
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
                  ? !isUndefined(activeColor)
                    ? activeColor
                    : CV.switch_on_background_color
                  : !isUndefined(inactiveColor)
                  ? inactiveColor
                  : CV_LOADING.loading_text_color
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
