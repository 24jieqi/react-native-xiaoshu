import React, { memo, useEffect } from 'react'
import type { ViewProps } from 'react-native'
import { View } from 'react-native'

import { usePersistFn } from '../hooks'

import { useElevator } from './context'
import type { ElevatorNavAnchorProps } from './interface'

const ElevatorNavAnchor: React.FC<
  React.PropsWithChildren<ElevatorNavAnchorProps>
> = ({ title, children, onLayout, ...restProps }) => {
  const { cancelTarget } = useElevator()

  useEffect(() => {
    return () => {
      cancelTarget(title)
    }
  }, [cancelTarget, title])

  const onLayoutPersistFn = usePersistFn<ViewProps['onLayout']>(e => {
    onLayout?.(e)
  })

  return (
    <View collapsable={false} {...restProps} onLayout={onLayoutPersistFn}>
      {children}
    </View>
  )
}

export default memo(ElevatorNavAnchor)
