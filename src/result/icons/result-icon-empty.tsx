import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import type { ResultIconProps } from '../interface'

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const ResultIconEmpty: React.FC<ResultIconProps> = ({
  style,
  width = 90,
  height = 90,
  ...restProps
}) => {
  return (
    <View {...restProps} style={style || SVG_STYLE}>
      {SvgXml ? (
        <SvgXml
          {...restProps}
          xml={`<svg width="${width}" height="${height}" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 25)" fill="none" fill-rule="evenodd"><ellipse fill="#EDEFF2" cx="44" cy="50" rx="44" ry="8"/><path d="M62.333 0H25.667L11 18v31.75a2 2 0 0 0 2 2h62a2 2 0 0 0 2-2V18L62.333 0z" fill="#FFF"/><path d="M62.333 0L77 18v31.75a2 2 0 0 1-1.85 1.995l-.15.005H13a2 2 0 0 1-1.995-1.85L11 49.75V18L25.667 0h36.666zM50.75 39h-13.5a1.25 1.25 0 0 0 0 2.5h13.5a1.25 1.25 0 0 0 0-2.5zm9.99-36.75H27.26L14.465 18h12.87a2 2 0 0 1 2 2v6.5a2 2 0 0 0 2 2H56.36a2 2 0 0 0 2-2V20a2 2 0 0 1 2-2h13.178L60.739 2.25z" fill="#E1E3E6"/></g></svg>`}
        />
      ) : null}
    </View>
  )
}

export default memo(ResultIconEmpty)
