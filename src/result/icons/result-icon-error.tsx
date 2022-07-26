import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import type { ResultIconProps } from '../interface'

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const ResultIconError: React.FC<ResultIconProps> = ({
  style,
  width = 90,
  height = 90,
  ...restProps
}) => {
  return (
    <View {...restProps} style={style || SVG_STYLE}>
      {SvgXml ? (
        <SvgXml
          xml={`<svg width="${width}" height="${height}" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1 15)" fill="none" fill-rule="evenodd"><ellipse fill="#EDEFF2" cx="44" cy="61" rx="44" ry="8"/><path d="M33.25.75c.966 0 1.75.784 1.75 1.75l-.001 5.417h18.072V2.5A1.75 1.75 0 0 1 54.678.756L54.82.75H68A3.25 3.25 0 0 1 71.25 4v56A3.25 3.25 0 0 1 68 63.25H20A3.25 3.25 0 0 1 16.75 60V4A3.25 3.25 0 0 1 20 .75zM48.5 0A2.5 2.5 0 0 1 51 2.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2A2.5 2.5 0 0 1 39.5 0h9z" fill="#E1E3E6" fill-rule="nonzero"/><path d="M55.571 8.667V3.25H68a.75.75 0 0 1 .75.75v56a.75.75 0 0 1-.75.75H20a.75.75 0 0 1-.75-.75V4l.007-.102A.75.75 0 0 1 20 3.25h12.499v5.417c0 .967.784 1.75 1.75 1.75h19.572a1.75 1.75 0 0 0 1.75-1.75z" fill="#FFF" fill-rule="nonzero"/><path d="M44 22c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zm.011 17.727a1.477 1.477 0 1 0 0 2.955 1.477 1.477 0 0 0 0-2.955zm.143-13h-.308a2 2 0 0 0-1.99 2.2l.845 8.443a1.306 1.306 0 0 0 2.598 0l.845-8.444a2 2 0 0 0-1.99-2.199z" fill="#E1E3E6"/></g></svg>`}
        />
      ) : null}
    </View>
  )
}

export default memo(ResultIconError)
