import type { ReactNode } from 'react'
import React from 'react'
// import {} from ''

import Space from '../space'

export const renderAlignCenter = (
  context: ReactNode,
  addonBefore: ReactNode,
  addonAfter: ReactNode,
) => {
  return (
    <Space direction="horizontal" align="center">
      {addonBefore}
      {context}
      {addonAfter}
    </Space>
  )
}

export const renderDateRangeAlignFlexStart = (
  context: ReactNode,
  addonBefore: ReactNode,
  addonAfter: ReactNode,
) => {
  return (
    <Space direction="horizontal" align="flex-start">
      {addonBefore}
      {context}
      {addonAfter}
    </Space>
  )
}
