module.exports = {
  root: true,
  extends: '@fruits-chain/eslint-config-rn',
  globals: {
    JSX: true,
  },
  rules: {
    // react-native-builder-bob 无法简单插入 Babel 插件，在开发的时候尽力更加规范
    'no-restricted-imports': [
      'error',
      {
        paths: ['lodash'],
      },
    ],

    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-native/no-unused-styles': 0,
  },
  settings: {
    'import/ignore': ['node_modules/react-native/'],
  },
}
