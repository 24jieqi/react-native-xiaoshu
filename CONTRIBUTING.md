# 代码贡献规范

有任何疑问，欢迎提交 [issue](https://github.com/24jieqi/react-native-xiaoshu/issues) 或 [PR](https://github.com/24jieqi/react-native-xiaoshu/pulls)!

## 提交 issue

- 确定 issue 的类型。
- 避免提交重复的 issue，在提交之前搜索现有的 issue。
- 在标签、标题或内容中体现明确的意图。

## 提交代码

### 准备工作

```bash
## 安装依赖
yarn

## 安装 ios 依赖
cd ios && pod install
```

```bash
## iOS
yarn ios

## Android
yarn android

## 代码风格检测
yarn lint:ts

## 提交代码
yarn commit
```

### 预览文档

> 参考 `dumi` 的指南 https://d.umijs.org/zh-CN/guide

```bash
## 开发模式
yarn doc
```

## 如何实现一个展示组件

阅读更多[如何创作](./docs/guide/how-to-create.md)。
