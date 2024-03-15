import isUndefined from 'lodash/isUndefined'
import React, { useRef, useCallback, useEffect, memo } from 'react'
import type { LayoutChangeEvent } from 'react-native'
import { Animated, View } from 'react-native'

import Card from '../card'
import Cell from '../cell'
import Divider from '../divider'
import { easing, getDefaultValue, getArrowOutline } from '../helpers'
import { usePersistFn, useControllableValue } from '../hooks'
import Theme from '../theme'

import type { CollapseProps } from './interface'
import { varCreator, styleCreator } from './style'

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
  square = true,

  testID,

  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator, TOKENS)

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
        duration: immediately ? 0 : CV.collapse_transition_duration,
        useNativeDriver: false,
        easing: v ? easing.easeOutCirc : easing.easeInCubic,
      })

      action.start(({ finished }) => {
        if (finished) {
          onAnimationEndPersistFn(v)
        }
      })
    },
    [AnimatedValue, onAnimationEndPersistFn, CV.collapse_transition_duration],
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
      // 展开的过程中才会存在动态高度
      if (Visible.current) {
        // 当收齐的时候已知高度
        toggleBody(Visible.current, Visible.current)
      }
    },
    [toggleBody],
  )

  const ArrowOutline = getArrowOutline(collapse ? 'up' : 'down')
  const arrowJSX = (
    <ArrowOutline
      style={iconStyle}
      color={!isUndefined(iconColor) ? iconColor : CV.collapse_icon_color}
      size={!isUndefined(iconSize) ? iconSize : CV.collapse_icon_size}
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
        square={square}
        title={titleJSX}
        extra={titleExtraJSX}
        headerDivider={headerDivider}
        titleStyle={titleStyle}
        titleTextStyle={titleTextStyle}
        bodyPadding={false}
        onPressHeader={onPressTitle}
        testID={testID}>
        {ctxJSX}
      </Card>
    )
  }

  return (
    <>
      <Cell
        title={titleJSX}
        style={titleStyle}
        titleTextStyle={titleTextStyle}
        valueExtra={titleExtraJSX}
        onPress={onPressTitle}
        divider={headerDivider}
        testID={testID}
      />
      {ctxJSX}
    </>
  )
}

export default memo(Collapse)
