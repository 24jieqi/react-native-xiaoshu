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
  width = 150,
  height = 150,
  ...restProps
}) => {
  return (
    <SvgXml
      {...restProps}
      style={style || SVG_STYLE}
      width={width}
      height={height}
      xml={`<svg width="${width}" height="${height}" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h150v150H0z"/><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="c"><stop stop-color="#DFE4EB" offset="0%"/><stop stop-color="#E0E4EA" stop-opacity="0" offset="100%"/></linearGradient><filter x="-14%" y="-75%" width="127.9%" height="250%" filterUnits="objectBoundingBox" id="d"><feGaussianBlur stdDeviation="4" in="SourceGraphic"/></filter><radialGradient cx="53.842%" cy="25.543%" fx="53.842%" fy="25.543%" r="92.917%" id="f"><stop stop-color="#E2E7EF" offset="0%"/><stop stop-color="#D2DAE7" offset="100%"/></radialGradient><circle id="e" cx="36" cy="36" r="36"/><filter x="-53.8%" y="-53.8%" width="207.7%" height="207.7%" filterUnits="objectBoundingBox" id="g"><feGaussianBlur stdDeviation="7" in="SourceGraphic"/></filter><linearGradient x1="47.689%" y1="79.339%" x2="52.534%" y2="50%" id="i"><stop stop-color="#D5DDE9" offset="0%"/><stop stop-color="#C8CED7" offset="100%"/></linearGradient><linearGradient x1="20.522%" y1="79.339%" x2="82.327%" y2="50%" id="j"><stop stop-color="#D5DDE9" offset="0%"/><stop stop-color="#C8CED7" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><g transform="translate(32 47)"><ellipse fill="url(#c)" filter="url(#d)" cx="43" cy="72" rx="43" ry="8"/><g transform="translate(7)"><mask id="h" fill="#fff"><use xlink:href="#e"/></mask><use fill="url(#f)" xlink:href="#e"/><circle fill="#FFF" opacity=".397" filter="url(#g)" mask="url(#h)" cx="31" cy="19" r="19.5"/></g><g transform="translate(41 17)"><rect fill="#EDF1F8" width="8" height="25" rx="4"/><rect fill="url(#i)" width="7" height="25" rx="3.5"/></g><g transform="translate(40.818 46.942)"><rect fill="#EDF1F8" width="8.4" height="8.4" rx="4.1"/><rect fill="url(#j)" width="7.81" height="7.81" rx="3.905"/></g></g></g></g></svg>`}
    />
  )
}

export default memo(ResultIconError)
