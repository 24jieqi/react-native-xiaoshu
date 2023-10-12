import { useEffect, type FC, useRef } from 'react'
import { View } from 'react-native'

import { useAnchorsContext } from './elevator-nav-provider'
import type { ElevatorNavItemProps } from './interface'

const ElevatorNavItem: FC<ElevatorNavItemProps> = ({
  children,
  title,
  ...otherProps
}) => {
  const { registerTarget } = useAnchorsContext()
  const currentTargetRef = useRef<View>(null)
  useEffect(() => {
    if (currentTargetRef.current) {
      registerTarget(title, currentTargetRef.current)
    }
  }, [currentTargetRef.current, title, registerTarget])
  return (
    <View {...otherProps} ref={currentTargetRef}>
      {children}
    </View>
  )
}
export default ElevatorNavItem
