module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'lodash',
    [
      'module-resolver',
      {
        root: ['./demo'],
        alias: {
          '@': './demo',
          'react-native-xiaoshu': './src',
        },
      },
    ],
  ],
}
