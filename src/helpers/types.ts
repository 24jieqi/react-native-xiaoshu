import type { ViewProps } from 'react-native'

export type FixHitSlopProps<T> = Omit<T, 'hitSlop'> & Pick<ViewProps, 'hitSlop'>
export type ExcludeUndefined<T> = Exclude<T, undefined>
export type ExcludeUndefinedNull<T> = Exclude<T, undefined | null>
