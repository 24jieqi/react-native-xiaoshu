import React from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'
import type { FlexItemPropsType } from './interface'

export interface FlexItemProps extends FlexItemPropsType {
  flex?: number
  onPress?: () => void
  onLongPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  style?: StyleProp<ViewStyle>
}
const FlexItem: React.FC<FlexItemProps> = props => {
  const { style, children, flex = 1, ...restProps } = props
  const flexItemStyle = {
    flex,
  }
  const inner = (
    <View style={[flexItemStyle, style]} {...restProps}>
      {children}
    </View>
  )
  const shouldWrapInTouchableComponent =
    restProps.onPress ||
    restProps.onLongPress ||
    restProps.onPressIn ||
    restProps.onPressOut

  if (shouldWrapInTouchableComponent) {
    return (
      <TouchableWithoutFeedback {...restProps}>
        {inner}
      </TouchableWithoutFeedback>
    )
  }

  return inner
}

export default FlexItem
