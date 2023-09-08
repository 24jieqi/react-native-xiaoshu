import { memo, useCallback, useRef, useState } from 'react'
import type { ScrollViewProps } from 'react-native'
import { View, ScrollView } from 'react-native'

import Theme from '../theme'

import FloatingPanel from './floating-panel'
import type { FloatingPanelScrollViewProps } from './interface'
import { varCreator, styleCreator } from './style'

const FloatingPanelScrollView: React.FC<
  React.PropsWithChildren<FloatingPanelScrollViewProps>
> = ({
  onAnimationEnd,

  children,
  ...restProps
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const [scrollEnabled, setScrollEnabled] = useState(false)

  const scrollTopRef = useRef(0)
  const _onMoveShouldSetPanResponder = useCallback(() => {
    if (scrollTopRef.current > 0) {
      return false
    }
  }, [])
  const _onAnimationEnd = useCallback(
    (opened: boolean) => {
      setScrollEnabled(opened)
      onAnimationEnd?.(opened)
    },
    [onAnimationEnd],
  )
  const onScroll = useCallback<Exclude<ScrollViewProps['onScroll'], undefined>>(
    e => {
      scrollTopRef.current = e.nativeEvent.contentOffset.y
    },
    [],
  )

  return (
    <FloatingPanel
      {...restProps}
      _onMoveShouldSetPanResponder={_onMoveShouldSetPanResponder}
      onAnimationEnd={_onAnimationEnd}>
      <View style={STYLES.wrapper}>
        <ScrollView
          scrollEventThrottle={16}
          scrollEnabled={scrollEnabled}
          onScroll={onScroll}>
          {children}
        </ScrollView>
      </View>
    </FloatingPanel>
  )
}

export default memo(FloatingPanelScrollView)
