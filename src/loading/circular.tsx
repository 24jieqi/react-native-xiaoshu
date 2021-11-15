import React, { useRef, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { Animated } from 'react-native'
import { Svg, Circle } from 'react-native-svg'

import { useTheme } from '../theme'
import { getDefaultValue } from '../helpers'
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

const STROKE_WIDTH = 2

const Circular: React.FC<CircularProps> = ({ size, color }) => {
  const THEME_VAR = useTheme()
  const AnimatedCircle0Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle1Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle2Value = useRef(new Animated.Value(0)).current

  size = getDefaultValue(size, THEME_VAR.loading_spinner_size)
  color = getDefaultValue(color, THEME_VAR.primary)

  const circle1Props = useMemo(() => {
    const center = Math.floor(size / 2)
    const radios = Math.floor(center - STROKE_WIDTH / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [size])

  const circle2Props = useMemo(() => {
    const center = Math.floor(size / 2)
    const radios = Math.floor(center - STROKE_WIDTH / 2 - center / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [size])

  const half1Circle = useMemo(() => circle1Props.r * Math.PI, [circle1Props.r])
  const half2Circle = useMemo(() => circle2Props.r * Math.PI, [circle2Props.r])

  useLoop(AnimatedCircle0Value, 0, {
    toValue: 1,
    duration: THEME_VAR.loading_spinner_animation_duration * 1000,
  })

  useLoop(AnimatedCircle1Value, half1Circle, {
    toValue: -half1Circle * 2,
    duration: THEME_VAR.loading_spinner_animation_duration * 1000 * 1.5,
  })

  useLoop(AnimatedCircle2Value, half2Circle, {
    toValue: -half2Circle * 2,
    duration: THEME_VAR.loading_spinner_animation_duration * 1000 * 2.5,
  })

  const iconStyleSummary: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
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
    <Animated.View style={iconStyleSummary}>
      <Svg
        width="100%"
        height="100%"
        // style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
      >
        <AnimatedCircle
          {...circle1Props}
          stroke={color}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={`${half1Circle},${half1Circle * 2}`}
          strokeLinecap="round"
          // strokeDashoffset={half1Circle - half1Circle - half1Circle - 10}
          strokeDashoffset={AnimatedCircle1Value}
          fill="none"
        />

        <AnimatedCircle
          {...circle2Props}
          stroke={color}
          strokeWidth={STROKE_WIDTH}
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
