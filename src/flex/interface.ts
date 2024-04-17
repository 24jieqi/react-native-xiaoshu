import type { TouchableWithoutFeedbackProps, FlexStyle } from 'react-native'

import type { FixHitSlopProps } from '../helpers/types'

export type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around'

export type FlexAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch'

export interface FlexProps
  extends FixHitSlopProps<TouchableWithoutFeedbackProps> {
  /**
   * flexDirection
   * @default 'row'
   */
  direction?: FlexStyle['flexDirection']

  /**
   * flexWrap
   * @default 'nowrap'
   */
  wrap?: FlexStyle['flexWrap']

  /**
   * justifyContent
   * @default 'start'
   */
  justify?: FlexJustify

  /**
   * alignItems
   * @default 'center'
   */
  align?: FlexAlign
}

export interface FlexItemProps
  extends FixHitSlopProps<TouchableWithoutFeedbackProps> {
  /**
   * @default 1
   */
  flex?: FlexStyle['flex']
}
