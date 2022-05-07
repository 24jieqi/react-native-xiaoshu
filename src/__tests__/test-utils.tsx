import type { RenderOptions } from '@testing-library/react-native'
import { render } from '@testing-library/react-native'
import React from 'react'
// import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'
export * from '@testing-library/react-native'

import Provider from '../provider'

// jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

const AllTheProviders: React.FC = ({ children }) => {
  return <Provider>{children}</Provider>
}

export const customRender = (
  component: React.ReactElement<any>,
  options?: RenderOptions,
) =>
  render(component, {
    wrapper: AllTheProviders,
    ...options,
  })

describe('TestUtils', () => {
  it('run => ', () => {
    expect(true)
  })
})
