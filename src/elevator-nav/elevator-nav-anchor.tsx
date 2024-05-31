import React, { memo, useEffect, useRef } from 'react'
import type { ViewProps } from 'react-native'
import { View } from 'react-native'

import type { ExcludeUndefined } from '../helpers/types'
import { usePersistFn } from '../hooks'

import { useElevator } from './context'
import type { ElevatorNavAnchorProps } from './interface'

const ElevatorNavAnchor: React.FC<
  React.PropsWithChildren<ElevatorNavAnchorProps>
> = ({ title, children, onLayout, ...restProps }) => {
  const { cancelTarget, registerTarget } = useElevator()
  const ViewRef = useRef<View>(null)

  useEffect(() => {
    return () => {
      cancelTarget(title)
    }
  }, [cancelTarget, title])

  const onLayoutPersistFn = usePersistFn<
    ExcludeUndefined<ViewProps['onLayout']>
  >(e => {
    onLayout?.(e)
    registerTarget(title, ViewRef)
  })

  return (
    <View
      collapsable={false}
      {...restProps}
      ref={ViewRef}
      onLayout={onLayoutPersistFn}>
      {children}
    </View>
  )
}

export default memo(ElevatorNavAnchor)
