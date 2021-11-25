import React from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'
import FlexItem from './flexItem'
import type { FlexPropsType } from './interface'

export interface FlexItemProps extends FlexPropsType {
  onPress?: () => void
  onLongPress?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  style?: StyleProp<ViewStyle>
}
const Flex: React.FC<FlexItemProps> = props => {
  const {
    style,
    direction = 'row',
    wrap = 'nowrap',
    justify = 'start',
    align = 'center',
    children,
    ...restProps
  } = props
  const transferConst = [justify, align]
  const transferConstStyle = transferConst.map(el => {
    let tempTxt
    switch (el) {
      case 'start':
        tempTxt = 'flex-start'
        break
      case 'end':
        tempTxt = 'flex-end'
        break
      case 'between':
        tempTxt = 'space-between'
        break
      case 'around':
        tempTxt = 'space-around'
        break
      default:
        tempTxt = el
        break
    }

    return tempTxt
  })
  const flexStyle: any = {
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

export default Object.assign(Flex, { Item: FlexItem })
