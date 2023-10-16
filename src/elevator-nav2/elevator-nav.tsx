import React, { memo, useMemo, useRef } from 'react'
import type { ScrollViewProps } from 'react-native'
import { ScrollView, View } from 'react-native'

import { usePersistFn, useDifferentState } from '../hooks'
import TabBar from '../tab-bar'

import { ElevatorContextProvider, useElevator } from './context'
import type { ElevatorNavProps } from './interface'

const ElevatorNavInner: React.FC<React.PropsWithChildren<ElevatorNavProps>> = ({
  triggerOffset = 100,
  tabBarHeight = 50,

  children,
  onScroll,
  ...restProps
}) => {
  const minTriggerOffset = triggerOffset + tabBarHeight
  const { registerScroll, elevator } = useElevator()
  const ScrollViewRef = useRef<ScrollView>()
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

  registerScroll(ScrollViewRef)

  const onScrollPersist = usePersistFn<ScrollViewProps['onScroll']>(e => {
    onScroll?.(e)
    const y = e.nativeEvent.targetContentOffset.y
    const overElevators = elevator.filter(item => item.top <= y)
    const _showNav = y >= minTriggerOffset
    setShowNav(_showNav)
    if (_showNav) {
      setTabBarValue(overElevators[overElevators.length - 1].label)
    }
  })
  const onChangeTabBar = usePersistFn((v: string) => {
    setTabBarValue(v)
    let top = elevator.filter(item => item.label === v)[0].top

    // 需要出现 TabBar 时保留一些空间
    if (top >= minTriggerOffset) {
      top -= tabBarHeight
    }

    ScrollViewRef.current.scrollTo({
      y: top,
      animated: true,
    })
  })

  return (
    <ScrollView
      scrollEventThrottle={16}
      {...restProps}
      ref={ScrollViewRef}
      onScroll={onScrollPersist}>
      {showNav ? (
        // TODO 定位布局
        <View>
          <TabBar
            value={tabBarValue}
            onChange={onChangeTabBar}
            options={tabBarOptions}
          />
        </View>
      ) : null}
      {children}
    </ScrollView>
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
