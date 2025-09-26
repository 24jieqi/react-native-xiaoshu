import { render, screen } from '@testing-library/react-native';
import React from 'react';
// import type { ViewStyle } from 'react-native'
// import { StyleSheet, Text } from 'react-native'

import { customRender } from '../../__tests__/test-utils';
import ActionSheet from '../action-sheet';

describe('ActionSheet', () => {
  it('render snapshot', () => {
    const tree = render(
      <ActionSheet
        visible
        actions={[
          {
            name: '一个',
          },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('element', () => {
    customRender(
      <ActionSheet
        visible
        actions={[
          {
            name: '一个',
          },
        ]}
      />,
    );

    expect(screen.getByText('一个')).not.toBeNull();
  });
});
