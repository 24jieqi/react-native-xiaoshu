import TOKENS from '@fruits-chain/design-tokens-bailu'
import React from 'react'
import type { ViewStyle } from 'react-native'
import type { ReactTestInstance } from 'react-test-renderer'
import { create } from 'react-test-renderer'

import Button from '../'
import { customRender, fireEvent } from '../../__tests__/test-utils'

describe('Button', () => {
  it('render snapshot', () => {
    const tree = create(
      <Button accessibilityLabel="button" type="primary" text="primary" />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('color', () => {
    const { getByA11yLabel } = customRender(
      <>
        <Button accessibilityLabel="button-primary" text="primary" />
        <Button accessibilityLabel="button-#000" text="primary" color="#000" />
        <Button accessibilityLabel="button-ghost" type="ghost" text="primary" />
      </>,
    )

    const buttonPrimary = getByA11yLabel('button-primary')
    const buttonPrimaryStyle: ViewStyle = buttonPrimary.props.style
    const buttonPrimaryText = buttonPrimary.children[0] as ReactTestInstance

    expect(buttonPrimaryStyle.backgroundColor).toEqual(TOKENS.brand_6)
    expect(buttonPrimaryStyle.borderColor).toEqual(TOKENS.brand_6)
    expect(buttonPrimaryText.props.style.color).toEqual(TOKENS.white)

    const button000 = getByA11yLabel('button-#000')
    const button000Style: ViewStyle = button000.props.style
    const button000Text = buttonPrimary.children[0] as ReactTestInstance

    expect(button000Style.backgroundColor).toEqual('#000')
    expect(button000Style.borderColor).toEqual('#000')
    expect(button000Text.props.style.color).toEqual(TOKENS.white)

    const buttonGhost = getByA11yLabel('button-ghost')
    const buttonGhostStyle: ViewStyle = buttonGhost.props.style
    const buttonGhostText = buttonGhost.children[0] as ReactTestInstance

    expect(buttonGhostStyle.backgroundColor).toEqual('transparent')
    expect(buttonGhostStyle.borderColor).toEqual(TOKENS.brand_6)
    expect(buttonGhostText.props.style.color).toEqual(TOKENS.brand_6)
  })

  it('onPress', () => {
    const buttonOnPress = jest.fn()
    const { getByA11yLabel } = customRender(
      <Button
        accessibilityLabel="button-primary"
        text="primary"
        onPress={buttonOnPress}
      />,
    )

    const buttonPrimary = getByA11yLabel('button-primary')

    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')

    expect(buttonOnPress).toHaveBeenCalled()
  })

  it('onPress:disabled', () => {
    const buttonOnPress = jest.fn()
    const { getByA11yLabel } = customRender(
      <Button
        accessibilityLabel="button-primary"
        text="primary"
        onPress={buttonOnPress}
        disabled
      />,
    )

    const buttonPrimary = getByA11yLabel('button-primary')

    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')

    expect(buttonOnPress).not.toHaveBeenCalled()
  })

  it('onPress:loading', () => {
    const buttonOnPress = jest.fn()
    const { getByA11yLabel } = customRender(
      <Button
        accessibilityLabel="button-primary"
        text="primary"
        onPress={buttonOnPress}
        loading
      />,
    )

    const buttonPrimary = getByA11yLabel('button-primary')

    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')

    expect(buttonOnPress).not.toHaveBeenCalled()
  })
})
