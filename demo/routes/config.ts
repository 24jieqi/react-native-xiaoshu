import type { ViewStyle, TextStyle } from 'react-native'

export const sceneContainerStyle: ViewStyle = {
  backgroundColor: '#EDEFF2',
}

export const buildHeaderTitleStyle = (p?: TextStyle): TextStyle => {
  return {
    fontSize: 18,
    lineHeight: 24,
    // color: '#11151A',
    fontWeight: 'bold',
    ...p,
  }
}
