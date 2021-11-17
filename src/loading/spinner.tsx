import React, { useRef, memo } from 'react'
import { View, Animated, StyleSheet, Easing } from 'react-native'

import { useTheme } from '../theme'
import { getDefaultValue } from '../helpers'
import useLoop from './useLoop'

export interface SpinnerProps {
  /**
   * 图像大小
   */
  size?: number

  /**
   * 颜色
   */
  color?: string
}

const PETAL_COUNT = 12
const PETALS = new Array(PETAL_COUNT).fill(0)
const A_OPACITY = 1 / PETAL_COUNT
const A_ROTATE = 360 / PETAL_COUNT

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const THEME_VAR = useTheme()
  const AnimatedSpinnerValue = useRef(new Animated.Value(0)).current

  size = getDefaultValue(size, THEME_VAR.loading_spinner_size)
  color = getDefaultValue(color, THEME_VAR.primary)

  useLoop(AnimatedSpinnerValue, 0, {
    toValue: 1,
    duration: THEME_VAR.loading_spinner_animation_duration * 1000,
    easing: Easing.linear,
  })

  return (
    <Animated.View
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
    height: '25%',
    borderRadius: 1,
    // backgroundColor: '#000',
  },
})

export default memo(Spinner)
