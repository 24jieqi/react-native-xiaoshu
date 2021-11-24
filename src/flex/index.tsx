import React, { memo } from 'react'
import { View } from 'react-native'

import type { FlexPropsType } from './interface'

/**
 * Divider 分割线
 * @description 用于将内容分隔为多个区域。
 */
const Divider: React.FC<FlexPropsType> = ({}) => {
  return <View />
}

export default memo<typeof Divider>(Divider)
