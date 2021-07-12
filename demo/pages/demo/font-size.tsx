import React from 'react'
import type { TextStyle } from 'react-native'
import { Text } from 'react-native'

const fontSizes = new Array(9)
  .fill(0)
  .map((_, index) => ((index + 1) * 100).toString() as TextStyle['fontWeight'])

fontSizes.push('bold')

const FontSize: React.FC = () => {
  return (
    <>
      {fontSizes.map(fs => {
        return (
          <Text key={fs} style={{ fontSize: 14, fontWeight: fs }}>
            font size: {fs} 字体大小：{fs}
          </Text>
        )
      })}
    </>
  )
}

export default FontSize
