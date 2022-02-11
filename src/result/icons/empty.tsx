import React, { memo } from 'react'
import type { ViewStyle } from 'react-native'
import type { SvgProps } from 'react-native-svg'
import { SvgXml } from 'react-native-svg'

interface ResultIconEmptyProps extends SvgProps {
  width?: number
  height?: number
}

const SVG_STYLE: ViewStyle = {
  alignSelf: 'center',
}

const ResultIconEmpty: React.FC<ResultIconEmptyProps> = ({
  style,
  width = 150,
  height = 150,
  ...restProps
}) => {
  return SvgXml ? (
    <SvgXml
      {...restProps}
      style={style || SVG_STYLE}
      width={width}
      height={height}
      xml={`<svg width="${width}" height="${height}" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h150v150H0z"/><linearGradient x1="50%" y1="0%" x2="50%" y2="70.234%" id="c"><stop stop-color="#DFE4EB" offset="0%"/><stop stop-color="#E0E4EA" stop-opacity="0" offset="100%"/></linearGradient><filter x="-14.8%" y="-72.2%" width="129.7%" height="244.4%" filterUnits="objectBoundingBox" id="d"><feGaussianBlur stdDeviation="4" in="SourceGraphic"/></filter><linearGradient x1="111.84%" y1="47.188%" x2="50%" y2="54.461%" id="e"><stop stop-color="#DADEE5" offset="0%"/><stop stop-color="#B3BBC7" offset="100%"/></linearGradient><path id="g" d="M18.738 20.013h59.259v64H18.738z"/><filter x="-20.3%" y="-18.8%" width="140.5%" height="137.5%" filterUnits="objectBoundingBox" id="f"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="4" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0.897588315 0 0 0 0 0.897588315 0 0 0 0 0.897588315 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter><linearGradient x1="109.601%" y1="25.282%" x2="-40.169%" y2="118.884%" id="h"><stop stop-color="#F2F4F6" offset="0%"/><stop stop-color="#E0E4EA" offset="100%"/></linearGradient><linearGradient x1="109.601%" y1="49.056%" x2="-40.169%" y2="52.63%" id="i"><stop stop-color="#F2F4F6" offset="0%"/><stop stop-color="#E0E4EA" offset="100%"/></linearGradient><path d="M56.366 2.216v1.31a4.428 4.428 0 0 1-4.427 4.43H27.692l-.221-.005a4.43 4.43 0 0 1-4.21-4.425v-1.31A2.215 2.215 0 0 0 21.047 0L0 .001v24.37a4.431 4.431 0 0 0 4.43 4.43h71.004a4.431 4.431 0 0 0 4.43-4.43V0L58.584 0a2.217 2.217 0 0 0-2.217 2.216z" id="j"/><radialGradient cx="53.842%" cy="25.543%" fx="53.842%" fy="25.543%" r="92.917%" gradientTransform="matrix(0 1 -.43849 0 .65 -.283)" id="k"><stop stop-color="#E2E7EF" offset="0%"/><stop stop-color="#D2DAE7" offset="100%"/></radialGradient><radialGradient cx="53.842%" cy="25.543%" fx="53.842%" fy="25.543%" r="92.917%" gradientTransform="matrix(0 1 -.8 0 .743 -.283)" id="n"><stop stop-color="#E2E7EF" offset="0%"/><stop stop-color="#D2DAE7" offset="100%"/></radialGradient><path d="M0 13.292c0 2.604.937 5.034 2.553 7.084.235.297.316.686.196 1.045l-1.483 4.417 4.814-1.782a1.1 1.1 0 0 1 .927.082c2.713 1.54 6.028 2.447 9.608 2.447 9.177 0 16.616-5.95 16.616-13.293C33.23 5.951 25.79 0 16.615 0 7.44 0 0 5.95 0 13.292z" id="m"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><g transform="translate(27.154 17.862)"><path fill="url(#c)" filter="url(#d)" d="M8.862 101.908h80.862v16.615H8.862z"/><path fill="url(#e)" d="M25.163 54.159h48.369L89.28 73.1H9.415z"/><use fill="#000" filter="url(#f)" xlink:href="#g"/><use fill="#FFF" xlink:href="#g"/><rect fill="url(#h)" x="28.643" y="29.917" width="39.332" height="21.851" rx="2"/><rect fill="url(#i)" x="28.643" y="59.325" width="39.332" height="4.27" rx="1.995"/><rect fill="url(#i)" x="28.643" y="70.035" width="39.332" height="4.27" rx="1.995"/><g transform="translate(9.415 73.119)"><mask id="l" fill="#fff"><use xlink:href="#j"/></mask><path fill="url(#k)" mask="url(#l)" d="M-5.538 34.34h90.941V-5.537H-5.538z"/></g><g transform="translate(84.185)"><mask id="o" fill="#fff"><use xlink:href="#m"/></mask><use fill="url(#n)" xlink:href="#m"/><path fill="#E0E4EA" mask="url(#o)" d="M-5.538 32.123h44.307V-5.538H-5.538z"/><path fill="#FFF" mask="url(#o)" d="M-23.262 8.862h4.431v4.431h-4.431z"/></g><path fill="#FFF" d="M98.803 10.124h4.431v4.431h-4.431z"/><circle fill="#FFF" cx="107.248" cy="12.339" r="2.215"/><path fill="#FFF" d="M94.352 10.124l2.216 4.43h-4.431z"/></g></g></g></svg>`}
    />
  ) : null
}

export default memo(ResultIconEmpty)
