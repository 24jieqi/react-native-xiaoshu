import React, { useRef, useMemo, memo } from 'react'
import type { ColorValue, ViewStyle, ViewProps } from 'react-native'
import { Animated } from 'react-native'
import { Svg, Circle } from 'react-native-svg'
import type { CircleProps } from 'react-native-svg/lib/typescript/elements/Circle'

import { getDefaultValue } from '../helpers'
import Theme from '../theme'

import type { LoadingTheme } from './style'
import { varCreator } from './style'
import useLoop from './useLoop'

const AnimatedCircle =
  Animated.createAnimatedComponent<React.ComponentType<CircleProps>>(Circle)

export interface CircularProps extends ViewProps {
  theme?: Partial<LoadingTheme>
  /**
   * 大小
   */
  size?: number

  /**
   * 颜色
   */
  color?: ColorValue
}

const STROKE_WIDTH = 2

const Circular: React.FC<CircularProps> = ({
  theme,
  size,
  color,
  ...restProps
}) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  })
  const AnimatedCircle0Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle1Value = useRef(new Animated.Value(0)).current
  const AnimatedCircle2Value = useRef(new Animated.Value(0)).current

  let _size: number = getDefaultValue(size, CV.loading_icon_size)!
  color = getDefaultValue(color, CV.loading_icon_color)

  const circle1Props = useMemo(() => {
    const center = Math.floor(_size / 2)
    const radios = Math.floor(center - STROKE_WIDTH / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [_size])

  const circle2Props = useMemo(() => {
    const center = Math.floor(_size / 2)
    const radios = Math.floor(center - STROKE_WIDTH / 2 - center / 2)

    return {
      cy: center,
      cx: center,
      r: radios,
    }
  }, [_size])

  const half1Circle = useMemo(() => circle1Props.r * Math.PI, [circle1Props.r])
  const half2Circle = useMemo(() => circle2Props.r * Math.PI, [circle2Props.r])

  useLoop(AnimatedCircle0Value, 0, {
    toValue: 1,
    duration: CV.loading_icon_animation_duration,
  })

  useLoop(AnimatedCircle1Value, half1Circle, {
    toValue: -half1Circle * 2,
    duration: CV.loading_icon_animation_duration * 1.5,
  })

  useLoop(AnimatedCircle2Value, half2Circle, {
    toValue: -half2Circle * 2,
    duration: CV.loading_icon_animation_duration * 2.5,
  })

  const iconStyle: ViewStyle = {
    justifyContent: 'center',
    alignItems: 'center',
    width: _size,
    height: _size,
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
    <Animated.View {...restProps} style={[iconStyle, restProps.style]}>
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
