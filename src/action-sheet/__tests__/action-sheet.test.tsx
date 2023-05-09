import React from 'react'
// import type { ViewStyle } from 'react-native'
// import { StyleSheet, Text } from 'react-native'
import { create } from 'react-test-renderer'
// import type { ReactTestInstance } from 'react-test-renderer'

import { customRender } from '../../__tests__/test-utils'
import ActionSheet from '../action-sheet'

describe('ActionSheet', () => {
  it('render snapshot', () => {
    const tree = create(<ActionSheet visible actions={[]} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('element', () => {
    const { queryByText } = customRender(
      <ActionSheet
        visible
        actions={[
          {
            name: '一个',
          },
        ]}
      />,
    )

    expect(queryByText('一个')).not.toBeNull()
  })
})
