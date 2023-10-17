import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
  },

  nav: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 3,
  },
})
