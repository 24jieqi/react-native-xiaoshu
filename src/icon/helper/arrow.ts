import ArrowDownOutline from '../arrow-down'
import ArrowDownFill from '../arrow-down.fill'
import ArrowLeftOutline from '../arrow-left'
import ArrowLeftFill from '../arrow-left.fill'
import ArrowRightOutline from '../arrow-right'
import ArrowRightFill from '../arrow-right.fill'
import ArrowUpOutline from '../arrow-up'
import ArrowUpFill from '../arrow-up.fill'

type DirectionValue = 'left' | 'up' | 'right' | 'down'

export const getArrowOutline = (x: DirectionValue) => {
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

export const getArrowFill = (x: DirectionValue) => {
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
