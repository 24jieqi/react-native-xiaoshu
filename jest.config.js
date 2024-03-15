module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.nodejs.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/jest-setup.js'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$', 'test-utils'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|react-native-gesture-handler|react-native-safe-area-context/jest)/)',
  ],
}
