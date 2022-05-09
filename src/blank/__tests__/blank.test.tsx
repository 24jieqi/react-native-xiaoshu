import TOKENS from '@fruits-chain/design-tokens-bailu'
import React from 'react'
import type { ViewStyle } from 'react-native'
import { Text, StyleSheet } from 'react-native'
import { create } from 'react-test-renderer'

import Blank from '..'
import { customRender } from '../../__tests__/test-utils'
import type { BlankProps } from '../interface'

describe('Blank', () => {
  it('render snapshot', () => {
    const tree = create(
      <Blank>
        <Text>Content</Text>
      </Blank>,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  const sizes: {
    label: BlankProps['size']
    value: number
  }[] = [
    {
      value: TOKENS.space_3,
      label: 'm',
    },
    {
      value: TOKENS.space_2,
      label: 's',
    },
    {
      value: TOKENS.space_4,
      label: 'l',
    },
  ]

  sizes.forEach(({ value, label }) => {
    it(`${label} size margin is ${value}`, () => {
      const { getByTestId, update } = customRender(
        <Blank testID="blank" size={label}>
          <Text>Content</Text>
        </Blank>,
      )

      const node = getByTestId('blank')
      const nodeStyle = StyleSheet.flatten<ViewStyle>(node.props.style)

      expect(nodeStyle.marginLeft).toEqual(value)
      expect(nodeStyle.marginRight).toEqual(value)
      expect(nodeStyle.marginTop).toEqual(0)
      expect(nodeStyle.marginBottom).toEqual(0)

      update(
        <Blank testID="blank" size={label} top bottom>
          <Text>Content</Text>
        </Blank>,
      )

      const node2 = getByTestId('blank')
      const nodeStyle2 = StyleSheet.flatten<ViewStyle>(node2.props.style)

      expect(nodeStyle2.marginLeft).toEqual(value)
      expect(nodeStyle2.marginRight).toEqual(value)
      expect(nodeStyle2.marginTop).toEqual(value)
      expect(nodeStyle2.marginBottom).toEqual(value)

      update(
        <Blank
          testID="blank"
          size={label}
          top
          bottom
          left={false}
          right={false}>
          <Text>Content</Text>
        </Blank>,
      )

      const node3 = getByTestId('blank')
      const nodeStyle3 = StyleSheet.flatten<ViewStyle>(node3.props.style)

      expect(nodeStyle3.marginLeft).toEqual(0)
      expect(nodeStyle3.marginRight).toEqual(0)
      expect(nodeStyle3.marginTop).toEqual(value)
      expect(nodeStyle3.marginBottom).toEqual(value)
    })
  })

  it('custom size', () => {
    const { getByTestId, update } = customRender(
      <Blank testID="blank">
        <Text>Content</Text>
      </Blank>,
    )

    const node = getByTestId('blank')
    const nodeStyle = StyleSheet.flatten<ViewStyle>(node.props.style)

    expect(nodeStyle.marginLeft).toEqual(TOKENS.space_3)
    expect(nodeStyle.marginRight).toEqual(TOKENS.space_3)
    expect(nodeStyle.marginTop).toEqual(0)
    expect(nodeStyle.marginBottom).toEqual(0)

    update(
      <Blank testID="blank" left={6} right={10} top={2} bottom={6}>
        <Text>Content</Text>
      </Blank>,
    )

    const node2 = getByTestId('blank')
    const nodeStyle2 = StyleSheet.flatten<ViewStyle>(node2.props.style)

    expect(nodeStyle2.marginLeft).toEqual(6)
    expect(nodeStyle2.marginRight).toEqual(10)
    expect(nodeStyle2.marginTop).toEqual(2)
    expect(nodeStyle2.marginBottom).toEqual(6)
  })

  it('custom style', () => {
    const { getByTestId } = customRender(
      <Blank
        testID="blank"
        top={20}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          marginTop: 16,
          marginBottom: 8,
        }}>
        <Text>Content</Text>
      </Blank>,
    )

    const node = getByTestId('blank')
    const nodeStyle = StyleSheet.flatten<ViewStyle>(node.props.style)

    expect(nodeStyle.marginLeft).toEqual(TOKENS.space_3)
    expect(nodeStyle.marginRight).toEqual(TOKENS.space_3)
    expect(nodeStyle.marginTop).toEqual(16)
    expect(nodeStyle.marginBottom).toEqual(8)
  })
})
