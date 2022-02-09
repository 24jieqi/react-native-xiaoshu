import React, { useRef, useCallback, useEffect, memo } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import { Animated, View } from 'react-native'

import { getArrowOutline } from '../icon/helper/arrow'
import Cell from '../cell'
import Divider from '../divider'
import Card from '../card'
import { useTheme, widthStyle } from '../theme'
import { usePersistFn, useControllableValue } from '../hooks'
import { easing, isValue, getDefaultValue } from '../helpers'
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
  renderTitleExtra,
  renderBody,
  type = 'cell',
  onAnimationEnd,
  bodyPadding = true,
  headerDivider = true,
  bodyDivider,
  lazyRender = true,

  ...restProps
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  bodyDivider = getDefaultValue(bodyDivider, type === 'cell')

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
  const BodyHeight = useRef(0)
  const MountedRef = useRef(false)
  const AnimatedValue = useRef(new Animated.Value(0)).current
  const toggleBody = useCallback(
    (v: boolean, immediately: boolean) => {
      const action = Animated.timing(AnimatedValue, {
        toValue: v ? BodyHeight.current : 0,
        duration: immediately ? 0 : THEME_VAR.collapse_transition_duration,
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

  // 初始化好组件
  useEffect(() => {
    MountedRef.current = true
  }, [])

  useEffect(() => {
    // 同步当前的状态
    Visible.current = collapse

    toggleBody(collapse, false)
  }, [collapse, toggleBody])

  const onPressTitle = useCallback(() => {
    onCollapse(!Visible.current)
  }, [onCollapse])

  const onLayoutBody = useCallback(
    (e: LayoutChangeEvent) => {
      // 有点疑惑，折叠的过程中，高度在动态变化，通过 absolute 布局解决无法完全渲染
      BodyHeight.current = e.nativeEvent.layout.height
      // 当收齐的时候已知高度
      toggleBody(Visible.current, Visible.current)
    },
    [toggleBody],
  )

  const ArrowOutline = getArrowOutline(collapse ? 'up' : 'down')
  const arrowJSX = (
    <ArrowOutline
      style={iconStyle}
      color={
        isValue(iconColor) ? iconColor : THEME_VAR.collapse_title_icon_color
      }
      size={isValue(iconSize) ? iconSize : THEME_VAR.collapse_title_icon_size}
    />
  )
  const titleJSX = renderTitle ? renderTitle(collapse) : title
  const titleExtraJSX = renderTitleExtra
    ? renderTitleExtra(collapse, arrowJSX)
    : arrowJSX
  const bodyJSX =
    lazyRender && !MountedRef.current && !collapse
      ? null
      : renderBody
      ? renderBody()
      : children

  const ctxJSX = (
    <Animated.View style={[STYLES.collapse, { height: AnimatedValue }]}>
      <View collapsable={false} style={STYLES.body} onLayout={onLayoutBody}>
        <View
          style={[bodyPadding ? STYLES.body_padding : undefined, bodyStyle]}>
          {bodyJSX}
        </View>

        {bodyDivider ? <Divider type="light" style={STYLES.divider} /> : null}
      </View>
    </Animated.View>
  )

  if (type === 'card') {
    return (
      <Card
        square
        title={titleJSX}
        extra={titleExtraJSX}
        headerStyle={headerDivider ? undefined : STYLES.header_no_divider}
        titleStyle={titleStyle}
        titleTextStyle={titleTextStyle}
        bodyPadding={false}
        onPressHeader={onPressTitle}>
        {ctxJSX}
      </Card>
    )
  }

  return (
    <>
      <Cell
        title={titleJSX}
        style={titleStyle}
        titleTextStyle={[STYLES.title_text, titleTextStyle]}
        valueExtra={titleExtraJSX}
        onPress={onPressTitle}
        divider={headerDivider}
      />

      {ctxJSX}
    </>
  )
}

export default memo<typeof Collapse>(Collapse)
