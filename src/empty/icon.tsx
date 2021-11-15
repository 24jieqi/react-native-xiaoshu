import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import { Svg, G, Mask, Path, Ellipse, Rect, Circle } from 'react-native-svg'

interface IconEmptyProps extends SvgProps {}

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const IconEmpty: React.FC<IconEmptyProps> = ({ style, ...restProps }) => {
  return (
    <Svg
      {...restProps}
      style={style || SVG_STYLE}
      width="130"
      height="115"
      viewBox="0 0 130 115">
      <G fill="none" fill-Rule="evenodd">
        <Mask id="b" fill="#fff">
          <Path id="a" d="M0 0h130v115H0z" />
        </Mask>

        <G mask="url(#b)">
          <Ellipse
            fill="#f1f1f1"
            // filter="url(#c)"
            cx="44.5"
            cy="89.693"
            rx="44.5"
            ry="9"
          />

          <Path fill="#B3BBC7" d="M22.717 48.893h43.666l14.217 17.1H8.5z" />

          <Rect
            fill="#FFF"
            x="19.55"
            y="20.193"
            width="50"
            height="54"
            rx="2"
          />

          <Rect
            fill="#ECEFF2"
            x="26.5"
            y="26.193"
            width="36"
            height="20"
            rx="2"
          />

          <Rect
            fill="#ECEFF2"
            x="26.5"
            y="52.131"
            width="36"
            height="3"
            rx="1.5"
          />

          <Rect
            fill="#ECEFF2"
            x="26.5"
            y="60.407"
            width="36"
            height="3"
            rx="1.5"
          />

          <G transform="translate(8.5 66.01)">
            <Mask id="e" fill="#fff">
              <Path
                d="M50.886 2v1.182a3.998 3.998 0 0 1-3.997 4H25l-.2-.005A3.999 3.999 0 0 1 21 3.182V2a2 2 0 0 0-2-2L0 0v22a4 4 0 0 0 4 4h64.1a4 4 0 0 0 4-4V0H52.887a2.002 2.002 0 0 0-2.001 2z"
                id="d"
              />
            </Mask>
            <Path fill="#E0E4EA" mask="url(#e)" d="M-5 31h82.1V-5H-5z" />
          </G>

          <G transform="translate(76)">
            <Mask id="g" fill="#fff">
              <Path
                d="M0 12c0 2.351.846 4.544 2.305 6.395.212.268.285.619.177.943l-1.339 3.988 4.346-1.609a.993.993 0 0 1 .837.074C8.775 23.182 11.768 24 15 24c8.284 0 15-5.372 15-12S23.284 0 15 0C6.716 0 0 5.372 0 12z"
                id="f"
              />
            </Mask>
            <Path fill="#E0E4EA" mask="url(#g)" d="M-5 29h40V-5H-5z" />
            <Path fill="#FFF" mask="url(#g)" d="M-21 8h4v4h-4z" />
          </G>

          <Path fill="#FFF" d="M89.197 9.139h4v4h-4z" />

          <Circle fill="#FFF" cx="96.821" cy="11.139" r="2" />

          <Path fill="#FFF" d="M85.18 9.14l2 4h-4z" />
        </G>
      </G>
    </Svg>
  )
}

export default memo(IconEmpty)
