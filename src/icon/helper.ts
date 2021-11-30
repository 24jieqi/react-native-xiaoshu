import type { ViewStyle } from 'react-native'

/** icon 触摸/可点击的区域大小 */
const TOUCH_AREA_SIZE = 44

/** icon 默认尺寸 */
export const DEFAULT_SIZE = 24

/** icon 默认小尺寸 */
export const SMALL_SIZE = 24

/** icon hitSlop 向外扩大触摸/可点击的范围 */
const DEFAULT_HIT_SLOP_SIZE = (TOUCH_AREA_SIZE - DEFAULT_SIZE) / 2

/** icon 小尺寸 hitSlop 向外扩大触摸/可点击的范围 */
const SMALL_HIT_SLOP_SIZE = (TOUCH_AREA_SIZE - SMALL_SIZE) / 2

export const ICON_DEFAULT_STYLE: ViewStyle = {
  alignSelf: 'center',
}

export const DEFAULT_HIT_SLOP = {
  left: DEFAULT_HIT_SLOP_SIZE,
  right: DEFAULT_HIT_SLOP_SIZE,
  top: DEFAULT_HIT_SLOP_SIZE,
  bottom: DEFAULT_HIT_SLOP_SIZE,
}

export const SMALL_HIT_SLOP = {
  left: SMALL_HIT_SLOP_SIZE,
  right: SMALL_HIT_SLOP_SIZE,
  top: SMALL_HIT_SLOP_SIZE,
  bottom: SMALL_HIT_SLOP_SIZE,
}

export const DEFAULT_COLOR = '#666'

export const STROKE_WIDTH = 2
