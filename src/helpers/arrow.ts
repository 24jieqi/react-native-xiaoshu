import {
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowRightOutline,
  ArrowUpOutline,
  ArrowDownFill,
  ArrowUpFill,
  ArrowLeftFill,
  ArrowRightFill,
} from '@fruits-chain/icons-react-native'

type DirectionValue = 'left' | 'up' | 'right' | 'down'

export const getArrowOutline = (x: DirectionValue | undefined) => {
  switch (x) {
    case 'down':
      return ArrowDownOutline

    case 'up':
      return ArrowUpOutline

    case 'left':
      return ArrowLeftOutline

    default:
      return ArrowRightOutline
  }
}

export const getArrowFill = (x: DirectionValue | undefined) => {
  switch (x) {
    case 'down':
      return ArrowDownFill

    case 'up':
      return ArrowUpFill

    case 'left':
      return ArrowLeftFill

    default:
      return ArrowRightFill
  }
}
