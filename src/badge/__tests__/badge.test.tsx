import React from 'react'
import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
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
        <Badge count={6} />
        <Badge count="哈哈" />
        <Badge count={0} />
      </>,
    )

    expect(queryByText('6')).not.toBeNull()
    expect(queryByText('哈哈')).not.toBeNull()
    expect(queryByText('0')).toBeNull()
  })

  it('color', () => {
    const color = '#f30'
    const { getByA11yLabel } = customRender(
      <>
        <Badge accessibilityLabel="badge-f30" count={6} color={color} />
        <Badge count="哈哈" />
        <Badge count={0} />
      </>,
    )

    console.log(getByA11yLabel('badge-f30').children)

    const badgeF30Style = StyleSheet.flatten<ViewStyle>(
      (getByA11yLabel('badge-f30').children[0] as ReactTestInstance).props
        .style,
    )

    expect(badgeF30Style.backgroundColor).toEqual(color)
  })

  it('showZero', () => {
    const { queryByText } = customRender(<Badge count={0} showZero />)

    expect(queryByText('0')).not.toBeNull()
  })
})
