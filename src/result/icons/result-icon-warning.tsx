import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View } from 'react-native'
import { SvgXml } from 'react-native-svg'

import type { ResultIconProps } from '../interface'

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const ResultIconWarning: React.FC<ResultIconProps> = ({
  style,
  width = 90,
  height = 90,
  ...restProps
}) => {
  return (
    <View {...restProps} style={style || SVG_STYLE}>
      {SvgXml ? (
        <SvgXml
          xml={`<svg width="${width}" height="${height}" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg"><g transform="translate(5.917 11.274)" fill="none" fill-rule="evenodd"><ellipse fill="#EDEFF2" cx="38.083" cy="67.726" rx="32" ry="6"/><g fill="#E1E3E6"><path d="M40.243 35.355c9.294 9.294 14.228 18.185 13.109 18.97-6.265 4.393-14.172 5.415-21.202 3.068l.827 8.6a1 1 0 0 1-.995 1.095h-5.799a1 1 0 0 1-.995-1.096l1.106-11.508a23.93 23.93 0 0 1-3.415-2.836c-8.351-8.35-9.199-21.365-2.542-30.662.752-1.05 10.612 5.075 19.906 14.369z"/><path d="M44.93 29.597a4.104 4.104 0 0 1 .188 5.603l-5.79-5.79a4.104 4.104 0 0 1 5.603.187zm.995-10.924a9.933 9.933 0 0 0-.636 3.02l-.16-.08a16.821 16.821 0 0 0-8.831-1.623A1.5 1.5 0 1 1 36.036 17a19.83 19.83 0 0 1 9.889 1.672zM57.044 32.07c.499 2.056.668 4.195.489 6.342a1.5 1.5 0 0 1-2.99-.25 16.877 16.877 0 0 0-.582-6.024 10.06 10.06 0 0 0 3.083-.068zm-3.371-19.716a9.925 9.925 0 0 0-3.548 1.298l-.034-.02a26.603 26.603 0 0 0-13.19-3.554 1.5 1.5 0 1 1 .013-3 29.58 29.58 0 0 1 16.759 5.276zm10.814 13.768a29.663 29.663 0 0 1 1.96 10.226 1.5 1.5 0 1 1-3 .041 26.742 26.742 0 0 0-1.065-7.129 10.014 10.014 0 0 0 2.105-3.138z" fill-rule="nonzero"/></g><g transform="translate(45.275 12.226)"><circle fill="#FFF" cx="10" cy="10" r="8"/><path d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm.007 10.91a.91.91 0 1 0 0 1.817.91.91 0 0 0 0-1.818zm-.007-8a1.316 1.316 0 0 0-1.31 1.446l.51 5.102a.804.804 0 0 0 1.6 0l.51-5.102A1.316 1.316 0 0 0 10 4.91z" fill="#E1E3E6"/></g></g></svg>`}
        />
      ) : null}
    </View>
  )
}

export default memo(ResultIconWarning)
