import React from 'react'
import type { ViewStyle } from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
// eslint-disable-next-line import/no-named-as-default-member,import/namespace,import/no-named-as-default
import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter'
import { create } from 'react-test-renderer'

import BottomBar from '..'
import { customRender, act, mockPlatform } from '../../__tests__/test-utils'

describe('Blank', () => {
  it('render snapshot', () => {
    const tree = create(
      <SafeAreaProvider>
        <BottomBar>
          <Text>Content</Text>
        </BottomBar>
      </SafeAreaProvider>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('android:keyboardDidXxx', () => {
    mockPlatform('android', 23)

    customRender(
      <BottomBar height={60} testID="height">
        <Text>Content</Text>
      </BottomBar>,
    )

    act(() => {
      RCTDeviceEventEmitter.emit('keyboardDidShow', {})
    })

    act(() => {
      RCTDeviceEventEmitter.emit('keyboardDidHide', {})
    })
  })

  it('height', () => {
    const { getByTestId } = customRender(
      <BottomBar height={60} testID="height">
        <Text>Content</Text>
      </BottomBar>,
    )

    const style = StyleSheet.flatten<ViewStyle>(
      getByTestId('height').props.style,
    )

    expect(style.height).toEqual(60)
  })

  it('hidden', () => {
    customRender(
      <BottomBar hidden testID="hidden">
        <Text>Content</Text>
      </BottomBar>,
    )
  })
})
