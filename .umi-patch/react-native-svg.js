export * from 'react-native-svg/src/ReactNativeSVG.web'

const SvgXmlStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
}

/**
 * @param {{xml: string}} props
 */
export const SvgXml = props => {
  return (
    <div
      style={SvgXmlStyle}
      dangerouslySetInnerHTML={{
        __html: props.xml,
      }}
    />
  )
}
