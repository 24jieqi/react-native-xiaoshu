---
title: 🧰 快速上手
order: 1
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

> 通过本章节你可以了解到 `小暑` 的安装方法和基本使用姿势。

# 安装

### 通过 npm 安装

在现有项目中使用 `小暑` 时，可以通过 npm 或 yarn 进行安装。

```bash
## npm
npm i @fruits-chain/react-native-xiaoshu

## yarn
yarn add @fruits-chain/react-native-xiaoshu

## 额外依赖
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

待收集。
