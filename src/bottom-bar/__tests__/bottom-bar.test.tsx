import { render, screen } from '@testing-library/react-native';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { Text, StyleSheet, Platform } from 'react-native';
// import RCTDeviceEventEmitter from 'react-native/Libraries/EventEmitter/RCTDeviceEventEmitter'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomBar from '..';
import { customRender } from '../../__tests__/test-utils';

describe('Blank', () => {
  it('render snapshot', () => {
    const tree = render(
      <SafeAreaProvider>
        <BottomBar>
          <Text>Content</Text>
        </BottomBar>
      </SafeAreaProvider>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('android:keyboardDidXxx', () => {
    // mockPlatform('android', 23)

    Platform.OS = 'android';

    customRender(
      <BottomBar height={60} testID="height">
        <Text>Content</Text>
      </BottomBar>,
    );

    // act(() => {
    //   // RCTDeviceEventEmitter.DeviceEventEmitter.emit('keyboardDidShow', {})
    // });

    // act(() => {
    //   // DeviceEventEmitter.emit('keyboardDidHide', {})
    // });
  });

  it('height', () => {
    customRender(
      <BottomBar height={60} testID="height">
        <Text>Content</Text>
      </BottomBar>,
    );

    const style = StyleSheet.flatten<ViewStyle>(
      screen.getByTestId('height').props.style,
    );

    expect(style.height).toEqual(60);
  });
});
