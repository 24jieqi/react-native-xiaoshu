import React, { useRef, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Animated } from 'react-native'
import { Svg, Circle } from 'react-native-svg'

import { useTheme } from '../theme'
import useLoop from './useLoop'

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

export interface CircularProps {
  /**
   * 图像大小
   */
  size?: number

  /**
   * 颜色
   */
  color?: string
}

const strokeWidth = 2

const Circular: React.FC<CircularProps> = ({ size, color }) => {
  const themeVar = useTheme()
  const AnimatedCircle0Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle1Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle2Value = useRef(new Animated.Value(0)).current

  const resetSize = size || themeVar.loading_spinner_size
  const resetColor = color || themeVar.primary

  const circle1Props = useMemo(() => {
    const center = Math.floor(resetSize / 2)
    const radios = Math.floor(center - strokeWidth / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [resetSize])

  const circle2Props = useMemo(() => {
    const center = Math.floor(resetSize / 2)
    const radios = Math.floor(center - strokeWidth / 2 - center / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [resetSize])

  const half1Circle = useMemo(() => circle1Props.r * Math.PI, [circle1Props.r])
  const half2Circle = useMemo(() => circle2Props.r * Math.PI, [circle2Props.r])

  useLoop(AnimatedCircle0Value, 0, {
    toValue: 1,
    duration: themeVar.loading_spinner_animation_duration * 1000,
  })

  useLoop(AnimatedCircle1Value, half1Circle, {
    toValue: -half1Circle * 2,
    duration: themeVar.loading_spinner_animation_duration * 1000 * 1.5,
  })

  useLoop(AnimatedCircle2Value, half2Circle, {
    toValue: -half2Circle * 2,
    duration: themeVar.loading_spinner_animation_duration * 1000 * 2.5,
  })

  const wrapperStyleSummary: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: resetSize,
    height: resetSize,
    transform: [
      {
        rotateZ: AnimatedCircle0Value.interpolate({
          inputRange: [0, 1],
          outputRange: ['-90deg', '270deg'],
        }) as any,
      },
    ],
  }

  return (
    <Animated.View style={wrapperStyleSummary}>
      <Svg
        width="100%"
        height="100%"
        // style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        <AnimatedCircle
          {...circle1Props}
          stroke={resetColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${half1Circle},${half1Circle * 2}`}
          strokeLinecap="round"
          // strokeDashoffset={half1Circle - half1Circle - half1Circle - 10}
          strokeDashoffset={AnimatedCircle1Value}
          fill="none"
        />

        <AnimatedCircle
          {...circle2Props}
          stroke={resetColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${half2Circle},${half2Circle * 2}`}
          strokeLinecap="round"
          // strokeDashoffset={half1Circle - half1Circle - half1Circle - 10}
          strokeDashoffset={AnimatedCircle2Value}
          fill="none"
        />
      </Svg>
    </Animated.View>
  )
}

export default memo(Circular)
