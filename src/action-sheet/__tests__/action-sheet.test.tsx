import React from 'react'
// import type { ViewStyle } from 'react-native'
// import { StyleSheet, Text } from 'react-native'
import { create } from 'react-test-renderer'
// import type { ReactTestInstance } from 'react-test-renderer'

// import { customRender } from '../../__tests__/test-utils'
import ActionSheet from '../action-sheet'

describe('Badge', () => {
  it('render snapshot', () => {
    const tree = create(<ActionSheet visible actions={[]} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  // it('count', () => {
  //   const { queryByText } = customRender(
  //     <>
  //       <Badge count={6} offset={[10, 10]} />
  //       <Badge count="哈哈" />
  //       <Badge count={0} />
  //       <Badge count={12}>
  //         <Text>Text</Text>
  //       </Badge>
  //     </>,
  //   )

  //   expect(queryByText('6')).not.toBeNull()
  //   expect(queryByText('哈哈')).not.toBeNull()
  //   expect(queryByText('0')).toBeNull()
  //   expect(queryByText('Text')).not.toBeNull()
  // })
})
