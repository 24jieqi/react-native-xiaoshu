import React, { useRef, useCallback, memo, useEffect } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import { Animated, View } from 'react-native'

import { getArrowOutline } from '../icon/helper/arrow'
import Cell from '../cell'
import Divider from '../divider'
import { useTheme, widthStyle } from '../theme'
import { usePersistFn, useControllableValue } from '../hooks'
import { easing, isValue } from '../helpers'
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
  onAnimationEnd,
  bodyPadding = true,
  bodyBordered = true,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  const [collapse, onCollapse] = useControllableValue(restProps, {
    defaultValuePropName: 'defaultCollapse',
    valuePropName: 'collapse',
    trigger: 'onCollapse',
    defaultValue: false,
  })
  const onAnimationEndPersistFn = usePersistFn((v: boolean) => {
    onAnimationEnd?.(v)
  })
  /** 记录当前是否可见，在不断 onLayout 的时候可以有一个判断的依据 */
  const Visible = useRef(collapse)
  const HeightMap = useRef({
    start: 1,
    end: 2,
  })
  const AnimatedValue = useRef(new Animated.Value(0)).current
  const toggleBody = useCallback(
    (v: boolean) => {
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

  useEffect(() => {
    // 同步当前的状态
    Visible.current = collapse

    toggleBody(collapse)
  }, [collapse, toggleBody])

  const onPressTitle = useCallback(() => {
    onCollapse(!Visible.current)
  }, [onCollapse])

  const onLayoutTitle = useCallback(
    (e: LayoutChangeEvent) => {
      HeightMap.current.start = e.nativeEvent.layout.height

      toggleBody(Visible.current)
    },
    [toggleBody],
  )

  const onLayoutBody = useCallback(
    (e: LayoutChangeEvent) => {
      // 有点疑惑，折叠的过程中，高度在动态变化
      HeightMap.current.end = e.nativeEvent.layout.height

      toggleBody(Visible.current)
    },
    [toggleBody],
  )

  const ArrowOutline = getArrowOutline(collapse ? 'up' : 'down')

  return (
    <Animated.View style={[STYLES.collapse, { height: AnimatedValue }]}>
      <Cell
        title={renderTitle ? renderTitle(collapse) : title}
        style={titleStyle}
        titleTextStyle={[STYLES.title_text, titleTextStyle]}
        valueExtra={
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
        }
        onPress={onPressTitle}
        onLayout={onLayoutTitle}
      />

      <View
        collapsable={false}
        onLayout={onLayoutBody}
        style={[bodyPadding ? STYLES.body_padding : undefined, bodyStyle]}>
        {renderBody ? renderBody(collapse) : children}

        {bodyBordered ? <Divider type="light" /> : null}
      </View>
    </Animated.View>
  )
}

export default memo<typeof Collapse>(Collapse)
