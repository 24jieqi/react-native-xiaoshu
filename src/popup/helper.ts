import type { ViewStyle } from 'react-native'
import { Dimensions } from 'react-native'

import type { PopupPosition } from './interface'

const isTopOrBottom = (position: PopupPosition) =>
  position === 'top' || position === 'bottom'

export const getTransform = (
  position: PopupPosition,
  value: any,
): ViewStyle => {
  if (position === 'center') {
    return {
      opacity: value,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      // transform: [
      //   {
      //     translateX: 0,
      //   },
      //   {
      //     translateY: 0,
      //   },
      // ],
    }
  }

  const isY = isTopOrBottom(position)

  return {
    transform: [
      isY
        ? {
            translateY: value,
          }
        : {
            translateX: value,
          },
    ],
  }
}

export const getPosition = (visible: boolean, position: PopupPosition) => {
  if (position === 'center') {
    return visible ? 1 : 0
  }

  if (visible) {
    return 0
  }

  const screen = Dimensions.get('window')

  const x = screen.width * (visible ? 0 : 1)
  const y = screen.height * (visible ? 0 : 1)

  switch (position) {
    case 'top':
      return -y

    case 'bottom':
      return y

    case 'left':
      return -x

    case 'right':
      return x

    default:
      return 0
  }
}
