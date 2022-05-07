import TOKENS from '@fruits-chain/design-tokens-bailu'
import React from 'react'
import { create } from 'react-test-renderer'

import Button from '..'
import { customRender } from '../../__tests__/test-utils'

describe('Button', () => {
  it('render snapshot', () => {
    const tree = create(
      <Button accessibilityLabel="button" type="primary" text="primary" />,
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('color id brand_6', () => {
    const { getByA11yLabel } = customRender(
      <Button accessibilityLabel="button" type="primary" text="primary" />,
    )

    expect(getByA11yLabel('button').parent.props.style.backgroundColor).toEqual(
      TOKENS.brand_6,
    )
  })

  it('color id "#098"', () => {
    const { getByA11yLabel } = customRender(
      <Button
        accessibilityLabel="button"
        type="primary"
        color="#098"
        text="primary"
      />,
    )

    expect(getByA11yLabel('button').parent.props.style.backgroundColor).toEqual(
      '#098',
    )
  })
})
