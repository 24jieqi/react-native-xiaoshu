---
title: 🧰 快速上手
order: 1
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

> 通过本章节你可以了解到 `小暑` 的安装方法和基本使用方式。

# 安装

### 通过 npm 安装

在现有项目中使用 `小暑` 时，可以通过 npm 或 yarn 进行安装。

> 推荐使用 yarn，npm 可能造成项目中存在多个版本 react native，引入 `小暑` 代码后红屏。

```bash
## npm
npm i @fruits-chain/react-native-xiaoshu

## yarn
yarn add @fruits-chain/react-native-xiaoshu

## 额外依赖
## react-native-svg@^12.4.1 结合项目的 React Native 选择一个合适的版本
yarn add react-native-safe-area-context react-native-svg rc-field-form

## ios 依赖
cd ios && pod install
```

## 引入组件

### 使用组件

```tsx | pure
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

## 常见问题

- [Expo 中引入时报错 Invariant Violation: Module AppRegistry is not a registered callable module](https://github.com/24jieqi/react-native-xiaoshu/issues/41)
- [invalid hook call.hooks can only be called inside of the body of a function component.](https://github.com/24jieqi/react-native-xiaoshu/issues/48)
- [如何在 web 项目中使用](https://github.com/24jieqi/react-native-xiaoshu/issues/67)
