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
  width = 134,
  height = 115,
  ...restProps
}) => {
  return (
    <SvgXml
      {...restProps}
      style={style || SVG_STYLE}
      width={width}
      height={height}
      xml={`<svg width="${width}" height="${height}" viewBox="0 0 134 115" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M0 0h134v115H0z"/><filter x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" id="c"><feGaussianBlur in="SourceGraphic"/></filter><path d="M50.886 2v1.182a3.998 3.998 0 0 1-3.997 4H25l-.2-.005A3.999 3.999 0 0 1 21 3.182V2a2 2 0 0 0-2-2L0 0v22a4 4 0 0 0 4 4h64.1a4 4 0 0 0 4-4V0H52.887a2.002 2.002 0 0 0-2.001 2z" id="d"/><path d="M0 12c0 2.351.846 4.544 2.305 6.395.212.268.285.619.177.943l-1.339 3.988 4.346-1.609a.993.993 0 0 1 .837.074C8.775 23.182 11.768 24 15 24c8.284 0 15-5.372 15-12S23.284 0 15 0C6.716 0 0 5.372 0 12z" id="f"/></defs><g fill="none" fill-rule="evenodd"><mask id="b" fill="#fff"><use xlink:href="#a"/></mask><g mask="url(#b)"><g transform="translate(22 8)"><ellipse fill="#EFEFEF" filter="url(#c)" cx="44.5" cy="89.693" rx="44.5" ry="9"/><path fill="#B3BBC7" d="M22.717 48.893h43.666l14.217 17.1H8.5z"/><rect fill="#FFF" x="19.55" y="20.193" width="50" height="54" rx="2"/><rect fill="#ECEFF2" x="26.5" y="26.193" width="36" height="20" rx="2"/><rect fill="#ECEFF2" x="26.5" y="52.131" width="36" height="3" rx="1.5"/><rect fill="#ECEFF2" x="26.5" y="60.407" width="36" height="3" rx="1.5"/><g transform="translate(8.5 66.01)"><mask id="e" fill="#fff"><use xlink:href="#d"/></mask><path fill="#E0E4EA" mask="url(#e)" d="M-5 31h82.1V-5H-5z"/></g><g transform="translate(76)"><mask id="g" fill="#fff"><use xlink:href="#f"/></mask><path fill="#E0E4EA" mask="url(#g)" d="M-5 29h40V-5H-5z"/><path fill="#FFF" mask="url(#g)" d="M-21 8h4v4h-4z"/></g><path fill="#FFF" d="M89.197 9.139h4v4h-4z"/><circle fill="#FFF" cx="96.821" cy="11.139" r="2"/><path fill="#FFF" d="M85.18 9.14l2 4h-4z"/></g></g></g></svg>`}
    />
  )
}

export default memo(ResultIconEmpty)
