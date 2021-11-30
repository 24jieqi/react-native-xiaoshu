import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import { SvgXml } from 'react-native-svg'

interface ResultIconErrorProps extends SvgProps {
  width?: number
  height?: number
}

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const ResultIconError: React.FC<ResultIconErrorProps> = ({
  style,
  width = 130,
  height = 115,
  ...restProps
}) => {
  return (
    <SvgXml
      {...restProps}
      style={style || SVG_STYLE}
      width={width}
      height={height}
      xml={`<svg width="${width}" height="${height}" viewBox="0 0 130 115" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h130v115H0z"/><filter x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" id="b"><feGaussianBlur in="SourceGraphic"/></filter><radialGradient cx="42.871%" cy="25.423%" fx="42.871%" fy="25.423%" r="46.958%" id="d"><stop stop-color="#F4F6F9" offset="0%"/><stop stop-color="#E0E4EA" offset="100%"/></radialGradient><linearGradient x1="47.689%" y1="79.339%" x2="52.534%" y2="50%" id="e"><stop stop-color="#DCE2EC" offset="0%"/><stop stop-color="#C9D4E5" offset="100%"/></linearGradient><linearGradient x1="20.522%" y1="79.339%" x2="82.327%" y2="50%" id="f"><stop stop-color="#D3DFF3" offset="0%"/><stop stop-color="#C9D4E5" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><mask id="c" fill="#fff"><use xlink:href="#a"/></mask><ellipse fill="#EFEFEF" filter="url(#b)" mask="url(#c)" cx="65" cy="95" rx="43" ry="8"/><g mask="url(#c)"><g transform="translate(29 23)"><circle fill="url(#d)" cx="36" cy="36" r="36"/><g transform="translate(34 17)"><rect fill="#EDF1F8" width="8" height="25" rx="4"/><rect fill="url(#e)" width="7" height="25" rx="3.5"/></g><g transform="translate(33.818 46.942)"><rect fill="#EDF1F8" width="8.4" height="8.4" rx="4.1"/><rect fill="url(#f)" width="7.81" height="7.81" rx="3.905"/></g></g></g></g></svg>`}
    />
  )
}

export default memo(ResultIconError)
