import React, { memo, useMemo, useRef } from 'react'
import type { ScrollViewProps } from 'react-native'
import { View, ScrollView } from 'react-native'

import type { ExcludeUndefined } from '../helpers/types'
import { usePersistFn, useDifferentState, useUpdateEffect } from '../hooks'
import TabBar from '../tab-bar'

import { ElevatorContextProvider, useElevator } from './context'
import type { ElevatorNavProps } from './interface'
import STYLES from './style'

const ElevatorNavInner: React.FC<React.PropsWithChildren<ElevatorNavProps>> = ({
  triggerOffset = 100,
  tabBarHeight = 40,
  scrollComponent = ScrollView,

  children,
  onScroll,
  onMomentumScrollEnd,
  ...restProps
}) => {
  const ScrollComponent = scrollComponent
  const { registerScroll, elevator } = useElevator()
  const ScrollViewRef = useRef<ScrollView>()
  const ScrollTop = useRef(0)
  const [showNav, setShowNav] = useDifferentState(false)
  const [tabBarValue, setTabBarValue] = useDifferentState<string | undefined>(
    undefined,
  )
  const tabBarOptions = useMemo(
    () =>
      elevator.map(item => ({
        value: item.label,
        label: item.label,
      })),
    [elevator],
  )
  const tabBarKey = useMemo(
    () => JSON.stringify(tabBarOptions),
    [tabBarOptions],
  )
  const ActionChangeTabBarValue = useRef(false)
  const initTabBar = usePersistFn((y: number) => {
    const _showNav = y >= triggerOffset - tabBarHeight

    // 滚动距离增加 tabBarHeight，UI 上已经滚动过去了
    // TODO 从体验上看，top 过了内容高度的三之一就算滚到了
    const overElevators = elevator.filter(item => item.top <= y + tabBarHeight)

    const _tabBarValue = overElevators[overElevators.length - 1]?.label

    setShowNav(_showNav)
    if (_showNav && _tabBarValue && !ActionChangeTabBarValue.current) {
      setTabBarValue(_tabBarValue)
    }
  })

  useUpdateEffect(() => {
    // 当布局变化时重新定位
    initTabBar(ScrollTop.current)
  }, [tabBarOptions])

  // TODO 修复类型报错
  registerScroll(ScrollViewRef as React.MutableRefObject<ScrollView>)

  const onScrollPersist = usePersistFn<
    ExcludeUndefined<ScrollViewProps['onScroll']>
  >(e => {
    onScroll?.(e)

    ScrollTop.current = e.nativeEvent.contentOffset.y

    initTabBar(ScrollTop.current)
  })
  const onChangeTabBar = usePersistFn((v: string) => {
    setTabBarValue(v)

    ActionChangeTabBarValue.current = true

    ScrollViewRef.current?.scrollTo({
      y: elevator.filter(item => item.label === v)[0].top,
      animated: true,
    })
  })
  const onMomentumScrollEndPersist = usePersistFn<
    ExcludeUndefined<ScrollViewProps['onMomentumScrollEnd']>
  >(e => {
    onMomentumScrollEnd?.(e)
    ActionChangeTabBarValue.current = false
  })

  return (
    <View style={STYLES.wrapper} collapsable={false}>
      {showNav && tabBarValue ? (
        <View style={STYLES.nav}>
          <TabBar
            key={tabBarKey}
            indicator
            safeAreaInsetBottom={false}
            value={tabBarValue}
            onChange={onChangeTabBar}
            options={tabBarOptions}
          />
        </View>
      ) : null}
      <ScrollComponent
        scrollEventThrottle={16}
        bounces={false}
        {...restProps}
        // TODO 修复类型报错
        ref={ScrollViewRef as React.MutableRefObject<ScrollView>}
        onScroll={onScrollPersist}
        onMomentumScrollEnd={onMomentumScrollEndPersist}>
        {children}
      </ScrollComponent>
    </View>
  )
}

const ElevatorNav: React.FC<
  React.PropsWithChildren<ElevatorNavProps>
> = props => {
  return (
    <ElevatorContextProvider>
      <ElevatorNavInner {...props} />
    </ElevatorContextProvider>
  )
}

export default memo(ElevatorNav)
