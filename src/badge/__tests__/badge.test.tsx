import React from 'react'
import type { ViewStyle } from 'react-native'
import { StyleSheet, Text } from 'react-native'
import { create } from 'react-test-renderer'
import type { ReactTestInstance } from 'react-test-renderer'

import Badge from '..'
import { customRender } from '../../__tests__/test-utils'

describe('Badge', () => {
  it('render snapshot', () => {
    const tree = create(<Badge accessibilityLabel="badge" count={6} />).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('count', () => {
    const { queryByText } = customRender(
      <>
        <Badge count={6} offset={[10, 10]} />
        <Badge count="哈哈" />
        <Badge count={0} />
        <Badge count={12}>
          <Text>Text</Text>
        </Badge>
      </>,
    )

    expect(queryByText('6')).not.toBeNull()
    expect(queryByText('哈哈')).not.toBeNull()
    expect(queryByText('0')).toBeNull()
    expect(queryByText('Text')).not.toBeNull()
  })

  it('color', () => {
    const color = '#f30'
    const { getByLabelText } = customRender(
      <>
        <Badge accessibilityLabel="badge-f30" count={6} color={color} />
        <Badge count="哈哈" />
        <Badge count={0} />
      </>,
    )

    const badgeF30Style = StyleSheet.flatten<ViewStyle>(
      (getByLabelText('badge-f30').children[0] as ReactTestInstance).props
        .style,
    )

    expect(badgeF30Style.backgroundColor).toEqual(color)
  })

  it('showZero', () => {
    const { queryByText } = customRender(<Badge count={0} showZero />)

    expect(queryByText('0')).not.toBeNull()
  })

  it('dot', () => {
    const { queryByText } = customRender(
      <Badge count={13} dot>
        <Text>Text2</Text>
      </Badge>,
    )

    expect(queryByText('13')).toBeNull()
  })

  it('max', () => {
    const { queryByText } = customRender(
      <>
        <Badge count={11} max={20} />
        <Badge count={20} max={20} />
        <Badge count={30} max={20} />
      </>,
    )

    expect(queryByText('11')).not.toBeNull()
    expect(queryByText('20')).not.toBeNull()
    expect(queryByText('30')).toBeNull()
  })
})
