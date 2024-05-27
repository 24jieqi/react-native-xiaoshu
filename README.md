<div align="center">
<img src="./logo-xiaoshu.svg" width="120" />
</div>
<h1 align="center">小暑 xiǎo shǔ</h1>

<div align="center">
React Native UI library
</div>

[xiaoshu-npm-url]: https://www.npmjs.com/package/@fruits-chain/react-native-xiaoshu

<div align="center">

[![](https://img.shields.io/npm/v/@fruits-chain/react-native-xiaoshu.svg)][xiaoshu-npm-url]
[![](https://img.shields.io/npm/dm/@fruits-chain/react-native-xiaoshu.svg)][xiaoshu-npm-url]
[![](https://img.shields.io/badge/language-typescript-blue.svg)](https://www.typescriptlang.org/)
[![install size](https://packagephobia.com/badge?p=@fruits-chain/react-native-xiaoshu)](https://packagephobia.com/result?p=@fruits-chain/react-native-xiaoshu)
<br>
[![Platform - Android](https://img.shields.io/badge/platform-Android-3ddc84.svg?logo=android)](https://www.android.com)
[![Platform - iOS](https://img.shields.io/badge/platform-iOS-000.svg?logo=apple)](https://developer.apple.com/ios)

</div>

![](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

![](./snapshoot.png)

## 特点

- 🛡 纯 TypeScript 实现
- 🌈 部分交互/组件支持函数方式调用
- 🎨 支持自定义主题

## 安装

```bash
## react-native-svg 需大于 12.4.1，结合项目的 React Native 选择一个合适的版本
yarn add @fruits-chain/react-native-xiaoshu react-native-safe-area-context react-native-svg rc-field-form
```

## 使用

```tsx
import React from 'react'
import { Provider, Button } from '@fruits-chain/react-native-xiaoshu'

const App: React.FC = () => {
  return (
    <Provider>
      <Button text="普通按钮" type="primary" />
    </Provider>
  )
}
```

## Expo

- **Expo demo app**

SDK 51+

<img src="https://qr.expo.dev/eas-update?slug=exp&projectId=610e3121-d086-4484-8023-130dca7937ec&groupId=2bad6cb6-d148-4935-959e-bd8717f4d9a5" alt="react-native-xiaoshu" width="200">

## 参与开发 [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

阅读更多[开发约定](./CONTRIBUTING.md)。
