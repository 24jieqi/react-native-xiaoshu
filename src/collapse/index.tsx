import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  memo,
  isValidElement,
} from 'react'
import type { LayoutChangeEvent, ViewStyle } from 'react-native'
import {
  Animated,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

import IconSVGArrow from '../icon/arrow'
import usePersistFn from '../hooks/usePersistFn'
import { isDef } from '../helpers/typeof'
import * as helpers from '../helpers'
import { useTheme } from '../theme'
import type { CollapseProps } from './interface'
import { createStyles } from './style'

/**
 * Collapse 折叠面板
 */
const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
  renderTitle,
  renderBody,
  defaultCollapse,
  collapse,
  onAnimationEnd,
  bodyPadding = true,
}) => {
  const themeVar = useTheme()
  const Styles = createStyles(themeVar)

  const onAnimationEndPersistFn = usePersistFn((v: boolean) => {
    onAnimationEnd && onAnimationEnd(v)
  })
  const Visible = useRef(
    isDef(collapse)
      ? collapse
      : isDef(defaultCollapse)
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
        duration: themeVar.collapse_transition_duration,
        useNativeDriver: false,
        easing: v ? helpers.easing.easeOutCirc : helpers.easing.easeInCubic,
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
      themeVar.collapse_transition_duration,
    ],
  )

  useEffect(() => {
    if (isDef(collapse) && collapse !== Visible.current) {
      // 同步外界状态
      setVisible(!Visible.current)
    }
  }, [collapse, setVisible])

  // title 是否要自定义渲染
  if (renderTitle) {
    title = renderTitle(show)
  }

  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={Styles.titleText}>{title}</Text>
    )
  ) : null

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

  const collapseStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.collapse,
    { height: AnimatedValue as unknown as number },
  ])
  const bodyStyleSummary = StyleSheet.flatten<ViewStyle>([
    Styles.body,
    bodyPadding ? Styles.bodyPadding : null,
  ])

  return (
    <Animated.View style={collapseStyleSummary}>
      <TouchableHighlight
        underlayColor={themeVar.cell_active_color}
        onPress={onPressTitle}
        onLayout={onLayoutTitle}>
        <View style={Styles.title}>
          {titleJSX}
          <View style={Styles.icon}>
            <IconSVGArrow
              color={themeVar.collapse_title_icon_color}
              size={themeVar.collapse_title_icon_size}
              direction={show ? 'up' : 'down'}
            />
          </View>
        </View>
      </TouchableHighlight>

      <View
        collapsable={false}
        onLayout={onLayoutBody}
        style={bodyStyleSummary}>
        {renderBody ? renderBody(show) : children}
      </View>
    </Animated.View>
  )
}

export default memo<typeof Collapse>(Collapse)
