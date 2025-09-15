import { render, screen } from '@testing-library/react-native';
import React from 'react';
import type { ViewStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import type { ReactTestInstance } from 'react-test-renderer';

import Badge from '..';
import { customRender } from '../../__tests__/test-utils';

describe('Badge', () => {
  it('render snapshot', () => {
    const tree = render(
      <Badge accessibilityLabel="badge" count={6} />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('count', () => {
    customRender(
      <>
        <Badge count={6} offset={[10, 10]} />
        <Badge count="哈哈" />
        <Badge count={0} />
        <Badge count={12}>
          <Text>Text</Text>
        </Badge>
      </>,
    );

    expect(screen.getByText('6')).not.toBeNull();
    expect(screen.getByText('哈哈')).not.toBeNull();
    expect(screen.queryByText('0')).toBeNull();
    expect(screen.getByText('Text')).not.toBeNull();
  });

  it('color', () => {
    const color = '#f30';
    customRender(
      <>
        <Badge accessibilityLabel="badge-f30" count={6} color={color} />
        <Badge count="哈哈" />
        <Badge count={0} />
      </>,
    );

    const badgeF30Style = StyleSheet.flatten<ViewStyle>(
      (screen.getByLabelText('badge-f30').children[0] as ReactTestInstance)
        .props.style,
    );

    expect(badgeF30Style.backgroundColor).toEqual(color);
  });

  it('showZero', () => {
    customRender(<Badge count={0} showZero />);

    expect(screen.getByText('0')).not.toBeNull();
  });

  it('dot', () => {
    customRender(
      <Badge count={13} dot>
        <Text>Text2</Text>
      </Badge>,
    );

    expect(screen.queryByText('13')).toBeNull();
  });

  it('max', () => {
    customRender(
      <>
        <Badge count={11} max={20} />
        <Badge count={20} max={20} />
        <Badge count={30} max={20} />
      </>,
    );

    expect(screen.getByText('11')).not.toBeNull();
    expect(screen.getByText('20')).not.toBeNull();
    expect(screen.queryByText('30')).toBeNull();
  });
});
