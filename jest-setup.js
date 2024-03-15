jest.useFakeTimers()

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
