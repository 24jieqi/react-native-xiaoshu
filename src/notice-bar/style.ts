import { StyleSheet } from 'react-native'

export const createStyles = () => {
  return StyleSheet.create({
    noticeBar: {
      // position: 'absolute',
      // top: '0',
      paddingVertical: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      // flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      // backgroundColor: '#feede5',
    },
    title: {
      flex: 1,
      fontSize: 14,
      lineHeight: 20,
      // color: '#fe7a33',
    },
    textPadding: {
      paddingLeft: 9,
    },
    textPaddingRight: {
      paddingRight: 11,
    },
  })
}
