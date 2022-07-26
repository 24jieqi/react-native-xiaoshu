import React, { memo } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'

import type { FlexItemProps } from './interface'

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

export default memo(FlexItem)
