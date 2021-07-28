import React, { useEffect, useRef, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, Animated, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import LoadingCircular from '../loading/circular'
import { isPromise } from '../helpers/typeof'
import { createStyles } from './style'
import type { SwitchProps } from './interface'

/**
 * Switch 开关
 * @description 用于在打开和关闭状态之间进行切换。
 */
const Switch: React.FC<SwitchProps> = ({
  size,
  disabled = false,
  loading = false,
  value = false,
  activeValue = true,
  inactiveValue = false,
  inactiveColor,
  activeColor,
  onPress,
  onChange,
  beforeChange,
}) => {
  const translateX = useRef(new Animated.Value(0))

  const themeVar = useTheme()
  const Styles = createStyles(themeVar, { size })

  const translateXValueEnd = Styles.nodeRight.left
  const translateXValueStart = Styles.nodeLeft.left
  const duration = themeVar.switch_transition_duration
  const active = value === activeValue

  const onPressTouchable = () => {
    onPress && onPress()
    if (!disabled && !loading) {
      const newValue = active ? inactiveValue : activeValue
      const doChange = () => {
        onChange && onChange(newValue)
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
        duration: duration,
        useNativeDriver: false,
      },
    )

    actionValue.start(() => {
      actionValue = null
    })

    return () => {
      // 停止动画
      if (actionValue) {
        actionValue.stop()
        actionValue = null
      }
    }
  }, [active, translateXValueStart, translateXValueEnd, duration])

  const switchStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.switch,
    {
      // 当前过渡不支持 color/backgroundColor
      // 参考：https://stackoverflow.com/a/60586628
      backgroundColor: active
        ? activeColor || themeVar.switch_on_background_color
        : inactiveColor || themeVar.switch_background_color,
    },
    disabled ? Styles.disabled : null,
  ])
  const nodeStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.node,
    {
      transform: [
        {
          translateX: translateX.current as unknown as number,
        },
      ],
    },
  ])

  return (
    <TouchableWithoutFeedback onPress={onPressTouchable}>
      <Animated.View style={switchStyleSummary}>
        <Animated.View style={nodeStyleSummary}>
          {loading ? (
            <LoadingCircular
              size={(Styles.node.width / 4) * 3}
              color={
                active
                  ? activeColor || themeVar.switch_on_background_color
                  : inactiveColor || themeVar.loading_text_color
              }
            />
          ) : null}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default memo(Switch)
