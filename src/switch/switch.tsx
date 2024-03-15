import isUndefined from 'lodash/isUndefined'
import React, { useEffect, useRef, useMemo, memo } from 'react'
import type { ViewStyle, ViewProps } from 'react-native'
import { TouchableWithoutFeedback, Animated, View } from 'react-native'

import { getDefaultValue, callInterceptor, renderTextLikeJSX } from '../helpers'
import { useControllableValue, usePersistFn, useDifferentState } from '../hooks'
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
  activeColor,
  inactiveColor,
  activeChildren,
  inactiveChildren,
  onPress,
  beforeChange,

  testID,
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

  const unitSize = getDefaultValue(size, CV.switch_size)
  const nodeEdgeDistance = 2

  const [switchWidth, setSwitchWidth] = useDifferentState(
    unitSize * CV.switch_width_ratio,
  )
  const [switchHeight, nodeSize, translateXValueEnd, translateXValueStart] =
    useMemo(() => {
      const _switchHeight = unitSize * CV.switch_height_ratio
      const _nodeSize = unitSize * CV.switch_node_size_ratio
      const _isInnerNode = _switchHeight - _nodeSize < nodeEdgeDistance * 2
      const _nodeRealSize = _isInnerNode
        ? _nodeSize - nodeEdgeDistance * 2
        : _nodeSize
      const _innerPadding = _isInnerNode
        ? nodeEdgeDistance
        : (_switchHeight - _nodeSize) / 2
      const _translateXValueEnd = switchWidth - _nodeRealSize - _innerPadding
      const _translateXValueStart = _innerPadding

      return [
        _switchHeight,
        _nodeRealSize,
        _translateXValueEnd,
        _translateXValueStart,
      ]
    }, [
      CV.switch_height_ratio,
      CV.switch_node_size_ratio,
      switchWidth,
      unitSize,
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
        toValue: active ? 1 : 0,
        duration: CV.switch_transition_duration,
        useNativeDriver: true,
      },
    )

    actionValue.start()

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop()
      }
    }
  }, [active, CV.switch_transition_duration])

  const switchStyles: ViewStyle[] = [
    STYLES.switch,
    {
      minWidth: switchWidth,
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
      top: nodeEdgeDistance,
      width: nodeSize,
      height: nodeSize,
      borderRadius: nodeSize / 2,
      transform: [
        {
          translateX: translateX.current.interpolate({
            inputRange: [0, 1],
            outputRange: [translateXValueStart, translateXValueEnd],
          }) as any,
        },
      ],
    },
  ]

  const childrenMinEdgeDistance = switchHeight / 3
  const childrenMaxEdgeDistance = nodeSize + nodeEdgeDistance * 3
  const activeChildrenStyle: ViewStyle = {
    height: switchHeight,
    paddingLeft: childrenMinEdgeDistance,
    paddingRight: childrenMaxEdgeDistance,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateX: translateX.current.interpolate({
          inputRange: [0, 1],
          outputRange: [-switchWidth, 0],
        }) as any,
      },
    ],
  }
  const inactiveChildrenStyle: ViewStyle = {
    marginTop: -switchHeight,
    height: switchHeight,
    paddingLeft: childrenMaxEdgeDistance,
    paddingRight: childrenMinEdgeDistance,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        translateX: translateX.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, switchWidth],
        }) as any,
      },
    ],
  }

  const onLayoutChildren = usePersistFn<ViewProps['onLayout']>(e => {
    setSwitchWidth(v => Math.max(v, e.nativeEvent.layout.width))
  })

  const activeChildrenJSX = renderTextLikeJSX(activeChildren, [
    STYLES.children_text,
  ])
  const inactiveChildrenJSX = renderTextLikeJSX(inactiveChildren, [
    STYLES.children_text,
  ])

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable} testID={testID}>
      <View style={STYLES.switch_wrap} collapsable={false}>
        <View style={switchStyles} collapsable={false}>
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
          <View style={STYLES.children_wrap} collapsable={false}>
            <Animated.View
              style={activeChildrenStyle}
              onLayout={onLayoutChildren}>
              {activeChildrenJSX}
            </Animated.View>
            <Animated.View
              style={inactiveChildrenStyle}
              onLayout={onLayoutChildren}>
              {inactiveChildrenJSX}
            </Animated.View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default memo(Switch) as <
  ActiveValueT = boolean,
  InactiveValueT = boolean,
>(
  p: SwitchProps<ActiveValueT, InactiveValueT>,
) => JSX.Element
