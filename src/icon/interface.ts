import type { SvgProps } from 'react-native-svg'

export interface IconCommonProps extends SvgProps {
  size?: number
  color?: string
}

export interface IconCommonOutlineProps extends IconCommonProps {
  strokeWidth?: number
}

export interface IconCommonFillProps extends IconCommonProps {}
