import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import React, { useState, useRef, memo, useCallback, useEffect } from 'react'
import type { LayoutChangeEvent, LayoutRectangle } from 'react-native'
import { Text, TouchableOpacity, ScrollView, Animated } from 'react-native'

import BottomBar from '../bottom-bar'
import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue } from '../helpers'
import { useControllableValue } from '../hooks'
import Theme from '../theme'

import type { TabBarProps, TabValue } from './interface'
import { varCreator, styleCreator } from './style'

const TabBar: React.FC<TabBarProps> = ({
  textColor,
  iconColor,
  activeTextColor,
  activeIconColor,
  options,
  indicator = false,
  indicatorWidth,
  indicatorHeight = 3,
  indicatorColor,
  tabAlign = 'center',
  labelBulge = false,

  height,
  style,
  ...restProps
}) => {
  const _labelBulge = isNumber(labelBulge) ? labelBulge : labelBulge ? 1.2 : 0
  const tabNum = options.length
  const isTabAdaption = tabAlign === 'center'
  const isTabTextCompact = isNil(indicatorWidth)
  const isIndicatorWidthLayout = isTabTextCompact || indicatorWidth === 0
  const [value, onChange] = useControllableValue(restProps, {
    defaultValue: options[0]?.value,
  })
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const [state, setState] = useState({
    layoutFinish: false,
  })
  const layouts = useRef<{ tab: LayoutRectangle; text: LayoutRectangle }[]>(
    new Array(tabNum).fill({}),
  )
  const AnimatedIndicatorLeft = useRef(new Animated.Value(0))
  const AnimatedIndicatorWidth = useRef(new Animated.Value(0))
  const ScrollViewRef = useRef<ScrollView>(null)
  const scrollViewWidth = useRef(0)

  if (indicator && isNil(height)) {
    height = 40
  }

  textColor = getDefaultValue(textColor, CV.tab_bar_text_color)
  iconColor = getDefaultValue(iconColor, CV.tab_bar_icon_color)
  activeTextColor = getDefaultValue(
    activeTextColor,
    CV.tab_bar_active_text_color,
  )
  activeIconColor = getDefaultValue(
    activeIconColor,
    CV.tab_bar_active_icon_color,
  )
  indicatorColor = getDefaultValue(indicatorColor, CV.tab_bar_indicator_color)

  const navigateTo = useCallback(
    (n: number) => {
      const targetLayout = layouts.current[n]
      const left =
        targetLayout.tab.x +
        (targetLayout.tab.width -
          (isIndicatorWidthLayout ? targetLayout.text.width : indicatorWidth)) /
          2
      const width = isIndicatorWidthLayout
        ? targetLayout.text.width
        : indicatorWidth

      Animated.parallel([
        Animated.timing(AnimatedIndicatorLeft.current, {
          toValue: left,
          useNativeDriver: false,
          duration: TOKENS.animation_duration_base,
        }),
        Animated.timing(AnimatedIndicatorWidth.current, {
          toValue: width,
          useNativeDriver: false,
          duration: TOKENS.animation_duration_base,
        }),
      ]).start()

      if (!isTabAdaption) {
        const hh = scrollViewWidth.current / 2
        ScrollViewRef.current.scrollTo({
          x: targetLayout.tab.x + targetLayout.tab.width / 2 - hh,
          animated: true,
        })
      }
    },
    [
      TOKENS.animation_duration_base,
      indicatorWidth,
      isIndicatorWidthLayout,
      isTabAdaption,
    ],
  )

  const initIndicator = useCallback(() => {
    const layoutItems = layouts.current.filter(item => item.tab && item.text)

    if (layoutItems.length === layouts.current.length) {
      setState(s => ({
        ...s,
        layoutFinish: true,
      }))
    }
  }, [])

  useEffect(() => {
    if (state.layoutFinish) {
      const n = options.findIndex(item => item.value === value)

      navigateTo(n)
    }
  }, [value, options, state.layoutFinish, navigateTo])

  const onLayoutScrollView = useCallback((e: LayoutChangeEvent) => {
    scrollViewWidth.current = e.nativeEvent.layout.width
  }, [])

  const genOnPress = (v: TabValue) => () => {
    onChange(v)
  }

  const genOnLayoutTab = (i: number) => (e: LayoutChangeEvent) => {
    layouts.current[i] = {
      text: layouts.current[i]?.text,
      tab: e.nativeEvent.layout,
    }

    initIndicator()
  }

  const genOnLayoutText = (i: number) => (e: LayoutChangeEvent) => {
    layouts.current[i] = {
      tab: layouts.current[i]?.tab,
      text: e.nativeEvent.layout,
    }

    initIndicator()
  }

  const tabs = options.map((item, index) => {
    const isActive = item.value === value

    return (
      <TouchableOpacity
        key={item.value}
        style={[
          STYLES.item,
          isTabAdaption ? STYLES.item_adaption : null,
          item.iconRender ? null : STYLES.item_no_icon,
        ]}
        activeOpacity={CV_BUTTON.button_active_opacity}
        onPress={isActive ? undefined : genOnPress(item.value)}
        onLayout={genOnLayoutTab(index)}>
        {item.iconRender?.(isActive ? activeIconColor : iconColor)}
        <Text
          style={[
            STYLES.item_text,
            isTabTextCompact ? null : STYLES.item_text_full,
            item.iconRender ? STYLES.item_text_icon : null,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              color: isActive ? activeTextColor : textColor,
              fontWeight: isActive && indicator ? '500' : 'normal',
            },
            isActive && !!_labelBulge
              ? {
                  transform: [
                    {
                      scaleX: _labelBulge,
                    },
                    {
                      scaleY: _labelBulge,
                    },
                  ],
                }
              : {},
          ]}
          onLayout={genOnLayoutText(index)}>
          {item.label}
          {!isNil(item.badge) ? (
            <Text style={STYLES.item_text_badge}>
              {/* React Native Text not support padding or margin, https://reactnative.dev/docs/text.html#containers */}
              {` `}
              {item.badge}
            </Text>
          ) : null}
        </Text>
      </TouchableOpacity>
    )
  })

  const indicatorJSX =
    indicator && state.layoutFinish ? (
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: indicatorHeight,
          width: AnimatedIndicatorWidth.current,
          backgroundColor: indicatorColor,
          position: 'absolute',
          left: AnimatedIndicatorLeft.current,
          bottom: 0,
        }}
      />
    ) : null

  return (
    <BottomBar {...restProps} height={height} style={[STYLES.tab_bar, style]}>
      {isTabAdaption ? (
        <>
          {tabs}
          {indicatorJSX}
        </>
      ) : (
        <ScrollView
          onLayout={onLayoutScrollView}
          ref={ScrollViewRef}
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={STYLES.tab_bar_scroll}
          contentContainerStyle={
            _labelBulge
              ? [
                  STYLES.tab_bar_scroll_content,
                  STYLES.tab_bar_scroll_content_label_bulge,
                ]
              : STYLES.tab_bar_scroll_content
          }>
          {indicatorJSX}
          {tabs}
        </ScrollView>
      )}
    </BottomBar>
  )
}

export default memo(TabBar)
