import React, { useRef, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Animated, StyleSheet, Easing } from 'react-native'

import { useTheme } from '../theme'
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

const petalCount = 12
const petals = new Array(petalCount).fill(0)

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  const themeVar = useTheme()
  const AnimatedSpinnerValue = useRef(new Animated.Value(0)).current

  const resetSize = size || themeVar.loading_spinner_size
  const resetColor = color || themeVar.primary

  useLoop(AnimatedSpinnerValue, 0, {
    toValue: 1,
    duration: themeVar.loading_spinner_animation_duration * 1000,
    easing: Easing.linear,
  })

  const wrapperStyleSummary: ViewStyle = StyleSheet.flatten([
    Styles.wrapperStyle,
    {
      width: resetSize,
      height: resetSize,
      transform: [
        {
          rotateZ: AnimatedSpinnerValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          }) as any,
        },
      ],
    },
  ])

  const petalInnerStyleSummary = StyleSheet.flatten([
    Styles.petalInnerStyle,
    {
      backgroundColor: resetColor,
    },
  ])

  return (
    <Animated.View style={wrapperStyleSummary}>
      {petals.map((_, i) => {
        return (
          <View
            key={i}
            style={StyleSheet.flatten([
              Styles.petalStyle,
              {
                opacity: (1 / petalCount) * (i + 1),
                transform: [
                  {
                    rotate: `${(360 / petalCount) * i}deg`,
                  },
                ],
              },
            ])}>
            <View style={petalInnerStyleSummary} />
          </View>
        )
      })}
    </Animated.View>
  )
}

const Styles = StyleSheet.create({
  wrapperStyle: {
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

  petalStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    // backgroundColor: '#f30', // to test ui
  },

  petalInnerStyle: {
    width: 2,
    height: '25%',
    borderRadius: 1,
    backgroundColor: '#000',
  },
})

export default memo(Spinner)
