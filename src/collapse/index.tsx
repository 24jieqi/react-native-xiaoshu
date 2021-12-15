import React, { useRef, useCallback, useState, memo } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import { Animated, View, TouchableHighlight } from 'react-native'

import { getArrowOutline } from '../icon/helper/arrow'
import { usePersistFn, useUpdateEffect } from '../hooks'
import { easing, renderTextLikeJSX, isValue } from '../helpers'
import { useTheme, widthStyle } from '../theme'
import type { CollapseProps } from './interface'
import { createStyles } from './style'

/**
 * Collapse 折叠面板
 */
const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
  titleStyle,
  titleTextStyle,
  iconStyle,
  iconColor,
  iconSize,
  bodyStyle,
  renderTitle,
  renderBody,
  defaultCollapse,
  collapse,
  onAnimationEnd,
  bodyPadding = true,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const onAnimationEndPersistFn = usePersistFn((v: boolean) => {
    onAnimationEnd?.(v)
  })
  /** 记录当前是否课件，在不断 onLayout 的时候可以有一个判断的依据 */
  const Visible = useRef(
    isValue(collapse)
      ? collapse
      : isValue(defaultCollapse)
      ? defaultCollapse
      : false,
  )
  const HeightMap = useRef({
    start: 0,
    end: 0,
  })
  const [show, setShow] = useState(Visible.current)
  const AnimatedValue = useRef(new Animated.Value(0)).current
  const setVisible = useCallback(
    (v: boolean) => {
      Visible.current = v

      // 展开的时候立即响应
      if (v) {
        setShow(v)
      }

      const action = Animated.timing(AnimatedValue, {
        toValue: v
          ? HeightMap.current.start + HeightMap.current.end
          : HeightMap.current.start,
        duration: THEME_VAR.collapse_transition_duration,
        useNativeDriver: false,
        easing: v ? easing.easeOutCirc : easing.easeInCubic,
      })

      action.start(({ finished }) => {
        if (finished) {
          // 收起的时候等待动画结束再响应
          if (!v) {
            setShow(v)
          }
          onAnimationEndPersistFn(v)
        }
      })
    },
    [
      AnimatedValue,
      onAnimationEndPersistFn,
      THEME_VAR.collapse_transition_duration,
    ],
  )

  useUpdateEffect(() => {
    if (collapse !== Visible.current) {
      // 同步外界状态
      setVisible(!Visible.current)
    }
  }, [collapse, setVisible])

  // title 是否要自定义渲染
  if (renderTitle) {
    title = renderTitle(show)
  }

  const onPressTitle = useCallback(() => {
    setVisible(!Visible.current)
  }, [setVisible])

  const onLayoutTitle = useCallback(
    (e: LayoutChangeEvent) => {
      HeightMap.current.start = e.nativeEvent.layout.height

      if (!Visible.current) {
        setVisible(false)
      }
    },
    [setVisible],
  )

  const onLayoutBody = useCallback(
    (e: LayoutChangeEvent) => {
      // 有点疑惑，折叠的过程中，高度在动态变化
      HeightMap.current.end = e.nativeEvent.layout.height

      if (Visible.current) {
        setVisible(true)
      }
    },
    [setVisible],
  )

  const titleJSX = renderTextLikeJSX(title, [STYLES.title_text, titleTextStyle])
  const ArrowOutline = getArrowOutline(show ? 'up' : 'down')

  return (
    <Animated.View style={[STYLES.collapse, { height: AnimatedValue }]}>
      <TouchableHighlight
        underlayColor={THEME_VAR.cell_active_color}
        onPress={onPressTitle}
        onLayout={onLayoutTitle}>
        <View style={[STYLES.title, titleStyle]}>
          {titleJSX}
          <ArrowOutline
            style={iconStyle}
            color={
              isValue(iconColor)
                ? iconColor
                : THEME_VAR.collapse_title_icon_color
            }
            size={
              isValue(iconSize) ? iconSize : THEME_VAR.collapse_title_icon_size
            }
          />
        </View>
      </TouchableHighlight>

      <View
        collapsable={false}
        onLayout={onLayoutBody}
        style={[
          STYLES.body,
          bodyPadding ? STYLES.body_padding : null,
          bodyStyle,
        ]}>
        {renderBody ? renderBody(show) : children}
      </View>
    </Animated.View>
  )
}

export default memo<typeof Collapse>(Collapse)
