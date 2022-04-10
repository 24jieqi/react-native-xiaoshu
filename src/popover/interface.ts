import type { StyleProp, ViewStyle } from 'react-native'
import type { PopoverProps as PopProps } from 'react-native-modal-popover'

export interface PopoverItemProps {
  value: any
  [key: string]: any
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

export interface PopoverProps {
  triggerStyle?: StyleProp<ViewStyle>
  arrowStyle?: StyleProp<ViewStyle>
  onSelect?: (node: any, index?: number) => void
  overlay: React.ReactNode
  disabled?: boolean
  renderOverlayComponent?: (
    node: React.ReactNode,
    closePopover: () => void,
  ) => React.ReactNode
  placement?: PopProps['placement']
  duration?: number
  easing?: (show: boolean) => (value: number) => number
  useNativeDriver?: boolean
  onDismiss?: () => void
  calculateStatusBar?: boolean | number
}
