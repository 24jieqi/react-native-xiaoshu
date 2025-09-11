const { defineConfig } = require('eslint/config')
const { fixupPluginRules } = require('@eslint/compat')

const eslint = require('@eslint/js')
const tseslint = require('typescript-eslint')
const reactPlugin = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const reactNative = require('eslint-plugin-react-native')
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended')
const eslintConfigPrettier = require('eslint-config-prettier/flat')
const importPlugin = require('eslint-plugin-import')

module.exports = defineConfig([
  {
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactHooks.configs['recommended-latest'],
      eslintConfigPrettier,
      eslintPluginPrettierRecommended,
      importPlugin.flatConfigs.recommended,
    ],
    plugins: {
      'react-native': fixupPluginRules(reactNative),
    },
    // // 解决 TypeScript 内置类型 no-undef
    // overrides: [
    //   {
    //     files: ["**/*.ts?(x)"],
    //     rules: {
    //       // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
    //       "default-case": "off",
    //       // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
    //       "no-dupe-class-members": "off",
    //       // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
    //       "no-undef": "off",
    //       // 'react/jsx-fragments': ['error', 'syntax'],
    //     },
    //   },
    // ],

    // "off" 或 0 - 关闭规则
    // "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
    // "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

    rules: {
      // eslint-plugin-react-native  ---  start
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-inline-styles': 1,
      'react-native/no-color-literals': 0,
      'react-native/no-raw-text': 0,
      'react-native/no-single-element-style-arrays': 2,
      // eslint-plugin-react-native  ---  end
      // 自定义你的规则
      // interface 是一个空，继承其他申明可能不会做扩展
      '@typescript-eslint/no-empty-object-type': 0,
      // 数据转换 !!var +var
      'no-implicit-coercion': 0,
      'import/order': [
        1,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/default': 0,
      'no-unused-vars': 0,
      /**
       * 禁止变量名与上层作用域内的已定义的变量重复
       */
      '@typescript-eslint/no-shadow': 2,
      /**
       * 必须使用 import type 导入类型
       */
      '@typescript-eslint/consistent-type-imports': 1,
      '@typescript-eslint/no-unused-vars': [
        1,
        { vars: 'all', argsIgnorePattern: '^_' },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
      // 'import/parsers': {
      //   // 使用 TypeScript parser
      //   '@typescript-eslint/parser': ['.ts', '.tsx'],
      // },
      'import/resolver': {
        typescript: true,
        node: true,
      },
      // 'import/extensions': ['.js', '.jsx', 'ts', 'tsx'],
    },
    // parserOptions: {
    //   project: true,
    // },
    ignores: [
      'src/**/__fixtures__',
      'src/__fixtures__',
      'lib',
      'changelog.config.js',
      'eslint.config.js',
    ],
  },
])
