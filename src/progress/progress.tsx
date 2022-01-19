import React, { useState, useCallback, useRef, useEffect, memo } from 'react'
import type { LayoutChangeEvent, ViewStyle } from 'react-native'
import { View, Text, Animated } from 'react-native'

import { useTheme } from '../theme'
import { getDefaultValue } from '../helpers'
import * as helpers from '../helpers'
import { usePersistFn } from '../hooks'
import type { ProgressProps } from './interface'

type ViewLayout = { width: number; height: number }

/**
 * Progress 进度条
 */
const Progress: React.FC<ProgressProps> = ({
  percentage = 0,
  pivotText,
  color,
  trackColor,
  pivotColor,
  textColor,
  strokeWidth,
  inactive = false,
  showPivot = true,
  square = false,
  animated = false,
  animationDuration,
  onAnimationEnd,
}) => {
  const AnimatedValue = useRef(new Animated.Value(0)).current
  const StartPercentage = useRef(percentage)
  const onAnimationEndPersistFn = usePersistFn(() => {
    onAnimationEnd?.()
  })
  const themeVar = useTheme()

  // 默认值
  color = getDefaultValue(color, themeVar.progress_color)

  if (inactive) {
    color = '#cacaca'
  }

  trackColor = getDefaultValue(trackColor, themeVar.progress_background_color)
  pivotColor = getDefaultValue(pivotColor, color)
  textColor = getDefaultValue(textColor, themeVar.progress_pivot_text_color)
  pivotText = getDefaultValue(pivotText, `${percentage}%`)
  strokeWidth = getDefaultValue(strokeWidth, themeVar.progress_height)
  animationDuration = getDefaultValue(
    animationDuration,
    themeVar.animation_duration_base,
  )

  const borderRadius = square ? 0 : strokeWidth / 2

  const [progressLayout, setProgressLayout] = useState<ViewLayout>({
    width: 0,
    height: 0,
  })
  const [textLayout, setTextLayout] = useState<ViewLayout>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const action = Animated.timing(AnimatedValue, {
      toValue: (progressLayout.width * percentage) / 100,
      duration: animated ? animationDuration : 0,
      easing: helpers.easing.easeInCubic,
      useNativeDriver: false,
    })

    action.start(({ finished }) => {
      if (finished) {
        onAnimationEndPersistFn()
      }
    })

    return () => {
      action.stop()
    }
  }, [
    AnimatedValue,
    percentage,
    animationDuration,
    progressLayout.width,
    animated,
    onAnimationEndPersistFn,
  ])

  const barStyle: ViewStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: AnimatedValue as unknown as number,
    height: strokeWidth,
    backgroundColor: color,
    borderRadius: borderRadius,
  }
  const textBoxStyle: ViewStyle = {
    position: 'absolute',
    left: AnimatedValue as unknown as number,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: pivotColor,
    paddingHorizontal: themeVar.progress_pivot_padding_horizontal,
    borderRadius: themeVar.border_radius_max,
    transform: [
      {
        translateX: -textLayout.width / 2,
      },
      {
        translateY: -(textLayout.height - strokeWidth) / 2,
      },
    ],
  }

  const onLayoutProgress = useCallback(
    (e: LayoutChangeEvent) => {
      AnimatedValue.setValue(
        (e.nativeEvent.layout.width * StartPercentage.current) / 100,
      )
      setProgressLayout(e.nativeEvent.layout)
    },
    [AnimatedValue],
  )

  const onLayoutText = useCallback((e: LayoutChangeEvent) => {
    setTextLayout(e.nativeEvent.layout)
  }, [])

  return (
    <View
      onLayout={onLayoutProgress}
      style={{
        height: strokeWidth,
        backgroundColor: trackColor,
        borderRadius: borderRadius,
      }}>
      <Animated.View style={barStyle} />
      {showPivot ? (
        <Animated.View onLayout={onLayoutText} style={textBoxStyle}>
          <Text
            style={{
              color: textColor,
              fontSize: themeVar.progress_pivot_font_size,
              lineHeight:
                themeVar.progress_pivot_line_height_scale *
                themeVar.progress_pivot_font_size,
            }}>
            {pivotText}
          </Text>
        </Animated.View>
      ) : null}
    </View>
  )
}

export default memo(Progress)
