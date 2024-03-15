import type { ViewProps } from 'react-native'

export type FixHitSlopProps<T> = Omit<T, 'hitSlop'> & Pick<ViewProps, 'hitSlop'>
