import React from 'react'
import type { FlexStyle } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'

import { attachPropertiesToComponent } from '../helpers'

import FlexItem from './flex-item'
import type { FlexProps, FlexAlign, FlexJustify } from './interface'

const Flex: React.FC<FlexProps> = props => {
  const {
    style,
    direction = 'row',
    wrap = 'nowrap',
    justify = 'start',
    align = 'center',
    children,
    ...restProps
  } = props
  const transferConst: [FlexJustify, FlexAlign] = [justify, align]
  const transferConstStyle = transferConst.map<
    FlexStyle['justifyContent'] | FlexStyle['alignItems']
  >(tc => {
    switch (tc) {
      case 'start':
        return 'flex-start'
      case 'end':
        return 'flex-end'
      case 'between':
        return 'space-between'
      case 'around':
        return 'space-around'
      default:
        return tc
    }
  }) as [FlexStyle['justifyContent'], FlexStyle['alignItems']]

  const flexStyle = {
    flexDirection: direction,
    flexWrap: wrap,
    justifyContent: transferConstStyle[0],
    alignItems: transferConstStyle[1],
  }

  const inner = (
    <View style={[flexStyle, style]} {...restProps}>
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
  } else {
    return inner
  }
}

export default attachPropertiesToComponent(Flex, { Item: FlexItem })
