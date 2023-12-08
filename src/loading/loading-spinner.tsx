import React, { useRef, memo } from 'react'
import type { ColorValue, ViewProps } from 'react-native'
import { View, Animated, StyleSheet, Easing } from 'react-native'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import { varCreator } from './style'
import useLoop from './useLoop'

export interface SpinnerProps extends ViewProps {
  /**
   * 图像大小
   */
  size?: number

  /**
   * 颜色
   */
  color?: ColorValue
}

const PETAL_COUNT = 8
const PETALS = new Array(PETAL_COUNT).fill(0)
const A_OPACITY = 1 / PETAL_COUNT
const A_ROTATE = 360 / PETAL_COUNT

const Spinner: React.FC<SpinnerProps> = ({ size, color, ...restProps }) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const AnimatedSpinnerValue = useRef(new Animated.Value(0)).current

  size = getDefaultValue(size, CV.loading_icon_size)
  color = getDefaultValue(color, CV.loading_icon_color)

  useLoop(AnimatedSpinnerValue, 0, {
    toValue: 1,
    duration: CV.loading_icon_animation_duration,
    easing: Easing.linear,
  })

  return (
    <Animated.View
      {...restProps}
      style={[
        STYLES.icon,
        {
          width: size,
          height: size,
          transform: [
            {
              rotateZ: AnimatedSpinnerValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        },
        restProps.style,
      ]}>
      {PETALS.map((_, i) => {
        return (
          <View
            key={i}
            style={StyleSheet.flatten([
              STYLES.petal,
              {
                opacity: A_OPACITY * (i + 1),
                transform: [
                  {
                    rotate: `${A_ROTATE * i}deg`,
                  },
                ],
              },
            ])}>
            <View
              style={[
                STYLES.inner,
                {
                  backgroundColor: color,
                },
              ]}
            />
          </View>
        )
      })}
    </Animated.View>
  )
}

const STYLES = StyleSheet.create({
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    // backgroundColor: '#999', // to test ui
    // transform: [
    //   {
    //     rotate: '-90deg',
    //   },
    // ],
  },

  petal: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    // backgroundColor: '#f30', // to test ui
  },

  inner: {
    width: 2,
    height: '30%',
    // 高版本 React Native Android 端会出现奇怪的截断
    // borderRadius: 1,
    // backgroundColor: '#000',
  },
})

export default memo(Spinner)
