import React, { useMemo, memo } from 'react'
import { View } from 'react-native'

import DescriptionContext from './context'
import type { DescriptionGroupProps } from './interface'

const DescriptionGroup: React.FC<DescriptionGroupProps> = ({
  colon = true,
  contentStyle,
  contentTextStyle,
  labelStyle,
  labelTextStyle,
  labelWidth,
  layout = 'horizontal',
  size = 'm',

  ...restProps
}) => {
  const value = useMemo(
    () => ({
      colon,
      contentStyle,
      contentTextStyle,
      labelStyle,
      labelTextStyle,
      labelWidth,
      layout,
      size,
    }),
    [
      colon,
      contentStyle,
      contentTextStyle,
      labelStyle,
      labelTextStyle,
      labelWidth,
      layout,
      size,
    ],
  )

  return (
    <DescriptionContext.Provider value={value}>
      <View {...restProps} />
    </DescriptionContext.Provider>
  )
}

// TODO: 临时解决 dumi 文档解析错误
const DescriptionGroupMemo: typeof DescriptionGroup =
  memo<typeof DescriptionGroup>(DescriptionGroup)

export default DescriptionGroupMemo
