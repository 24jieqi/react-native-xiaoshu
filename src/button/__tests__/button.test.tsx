import TOKENS from '@fruits-chain/design-tokens-bailu'
import React from 'react'
import type { ViewStyle } from 'react-native'
import { StyleSheet } from 'react-native'
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

  it('hairline', () => {
    const { getByLabelText, getAllByRole } = customRender(
      <>
        <Button
          accessibilityLabel="button-primary"
          text="primary"
          type="outline"
          hairline
        />
        <Button
          accessibilityLabel="button-primary2"
          text="primary"
          type="outline"
        />
      </>,
    )

    const buttonPrimary = getByLabelText('button-primary')
    const buttonPrimaryStyle: ViewStyle = buttonPrimary.props.style
    expect(buttonPrimaryStyle.borderWidth).toEqual(StyleSheet.hairlineWidth)

    const buttonPrimary2 = getByLabelText('button-primary2')
    const buttonPrimaryStyle2: ViewStyle = buttonPrimary2.props.style
    expect(buttonPrimaryStyle2.borderWidth).toEqual(1)
    expect(getAllByRole('button').length).toEqual(2)
  })

  it('onPress', () => {
    const buttonOnPress = jest.fn()
    const { getByLabelText } = customRender(
      <Button
        accessibilityLabel="button-primary"
        text="primary"
        onPress={buttonOnPress}
      />,
    )

    const buttonPrimary = getByLabelText('button-primary')
    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')
    expect(buttonOnPress).toHaveBeenCalled()
  })

  it('onPress:disabled', () => {
    const buttonOnPress = jest.fn()
    const { getByLabelText } = customRender(
      <Button
        accessibilityLabel="button-primary"
        text="primary"
        onPress={buttonOnPress}
        disabled
      />,
    )

    const buttonPrimary = getByLabelText('button-primary')
    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')
    expect(buttonOnPress).not.toHaveBeenCalled()
  })

  it('onPress:loading', () => {
    const buttonOnPress = jest.fn()
    const { getByLabelText, getByText } = customRender(
      <>
        <Button
          accessibilityLabel="button-primary"
          text="primary"
          onPress={buttonOnPress}
          loading
        />
        <Button
          accessibilityLabel="button-primary2"
          text="primary"
          loading
          loadingText="哎哟哟"
        />
      </>,
    )

    const buttonPrimary = getByLabelText('button-primary')
    fireEvent(buttonPrimary.children[0] as ReactTestInstance, 'press')
    expect(buttonOnPress).not.toHaveBeenCalled()

    expect(getByText('哎哟哟')).not.toBeNull()
  })

  it('square&round', () => {
    const { getByLabelText } = customRender(
      <>
        <Button accessibilityLabel="button-primary" text="primary" square />
        <Button accessibilityLabel="button-primary2" text="primary" round />
      </>,
    )

    const buttonPrimary = getByLabelText('button-primary')
    const buttonPrimaryStyle: ViewStyle = buttonPrimary.props.style
    expect(buttonPrimaryStyle.borderRadius).toEqual(0)

    const buttonPrimary2 = getByLabelText('button-primary2')
    const buttonPrimaryStyle2: ViewStyle = buttonPrimary2.props.style
    expect(buttonPrimaryStyle2.borderRadius).toEqual(9999)
  })

  it('color', () => {
    const { getByLabelText } = customRender(
      <>
        <Button accessibilityLabel="button-primary" text="primary" />
        <Button accessibilityLabel="button-#000" text="primary" color="#000" />
        <Button accessibilityLabel="button-ghost" type="ghost" text="primary" />
        <Button type="link">primary</Button>
        <Button type="hazy" text="primary" />
        <Button type="outline" text="primary" />
      </>,
    )

    const findFirstChild = (b: ReactTestInstance, i = 0) =>
      b.children[i] as ReactTestInstance
    const findText = (b: ReactTestInstance) =>
      findFirstChild(findFirstChild(findFirstChild(findFirstChild(b))))

    const buttonPrimary = getByLabelText('button-primary')
    const buttonPrimaryStyle: ViewStyle = buttonPrimary.props.style
    const buttonPrimaryText = findText(buttonPrimary)

    expect(buttonPrimaryStyle.backgroundColor).toEqual(TOKENS.brand_6)
    expect(buttonPrimaryStyle.borderColor).toEqual(TOKENS.brand_6)
    expect(buttonPrimaryText.props.style.color).toEqual(TOKENS.white)

    const button000 = getByLabelText('button-#000')
    const button000Style: ViewStyle = button000.props.style
    const button000Text = findText(button000)

    expect(button000Style.backgroundColor).toEqual('#000')
    expect(button000Style.borderColor).toEqual('#000')
    expect(button000Text.props.style.color).toEqual(TOKENS.white)

    const buttonGhost = getByLabelText('button-ghost')
    const buttonGhostStyle: ViewStyle = buttonGhost.props.style
    const buttonGhostText = findText(buttonGhost)

    expect(buttonGhostStyle.backgroundColor).toEqual('transparent')
    expect(buttonGhostStyle.borderColor).toEqual(TOKENS.brand_6)
    expect(buttonGhostText.props.style.color).toEqual(TOKENS.brand_6)
  })
})
