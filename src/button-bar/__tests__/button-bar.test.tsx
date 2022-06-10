import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { create } from 'react-test-renderer'

import ButtonBar from '../'

describe('ButtonBar', () => {
  it('render snapshot', () => {
    const tree = create(
      <SafeAreaProvider>
        <ButtonBar
          accessibilityLabel="ButtonBar"
          buttons={[
            {
              text: '文案',
            },
            {
              text: '操作',
            },
          ]}
        />
      </SafeAreaProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
