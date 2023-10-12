import { type FC, useRef, useEffect, useState, useMemo } from 'react'
import type { NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { View, ScrollView, StyleSheet } from 'react-native'

import ElevatorNavProvider, { useAnchorsContext } from './elevator-nav-provider'
import ElevatorNavTabs from './elevator-nav-tabs'
import type { ElevatorNavProps } from './interface'

const ElevatorNavComponent: FC<ElevatorNavProps> = ({
  triggerOffset = 42,
  children,
}) => {
  const { registerScroll, targetRefs, scrollTo, getCurrentKey } =
    useAnchorsContext()
  const [navIndex, setNavIndex] = useState<string>()
  const currentScrollRef = useRef<ScrollView>(null)
  const [offsetY, setOffsetY] = useState(0)
  useEffect(() => {
    registerScroll(currentScrollRef.current)
  }, [currentScrollRef, registerScroll])

  const onScroll: (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => void = event => {
    setOffsetY(event.nativeEvent.contentOffset.y)
    getCurrentKey(event.nativeEvent.contentOffset.y).then(key => {
      if (key) {
        setNavIndex(key)
      }
    })
  }

  const options = useMemo(() => {
    let resOptions = []
    // let index = 0
    for (const key in targetRefs) {
      if (Object.hasOwn(targetRefs, key)) {
        resOptions.push({ value: key, label: key })
      }
    }

    return resOptions
  }, [targetRefs])
  useEffect(() => {
    if (options?.[0]?.value) {
      setNavIndex(options?.[0]?.value)
    }
  }, [options])

  return (
    <View style={styles.wrap}>
      {offsetY > triggerOffset ? (
        <View style={styles.tabs}>
          {navIndex ? (
            <ElevatorNavTabs
              options={options}
              value={navIndex}
              onChange={(v: string) => {
                scrollTo(v)
                setNavIndex(v)
              }}
            />
          ) : null}
        </View>
      ) : null}
      <ScrollView
        ref={currentScrollRef}
        scrollEventThrottle={16}
        onScroll={onScroll}>
        {children}
      </ScrollView>
    </View>
  )
}

const ElevatorNav: FC<ElevatorNavProps> = ({ children, ...otherProps }) => {
  return (
    <ElevatorNavProvider>
      <ElevatorNavComponent {...otherProps}>{children}</ElevatorNavComponent>
    </ElevatorNavProvider>
  )
}
export default ElevatorNav
const styles = StyleSheet.create({
  wrap: {
    height: '100%',
  },
  tabs: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 99,
  },
})
