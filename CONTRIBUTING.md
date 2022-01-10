# 参与 react-native-xiaoshu 开发

## 准备工作

```bash
## 安装依赖
yarn

## 安装 ios 依赖
cd ios && pod install
```

```bash
## ios
yarn ios

## Android
yarn android

## 提交代码
yarn commit
```

## 预览文档

```bash
## 开发模式
yarn doc

## 打包、上传 github，存到指定分支
## 1.构建文档静态文件
yarn doc:build

## 2.提交
yarn doc:commit

## 3.把 docs-dist 文件夹推送到 gh-pages 分支
yarn doc:pulish

## 3.当前分支回退到文档未提交的时候，且不保存已经构建的静态文件
doc:reset
```

## 组件文件约定

```
|-- button
|--|-- __fixtures__
|--|--|-- basic.tsx  ## 案例、测试代码，用在 DEMO App、在线文档
|--|-- index.tsx  ## 组件实现代码
|--|-- index.md  ## 在线文档入口页面
|--|-- interface.ts  ## 组件对外的接口
|--|-- style.ts  ## 组件样式文件
```

## 组件在线文档

> 参考 `dumi` 的指南 https://d.umijs.org/zh-CN/guide

当前的访问路径是 `/component/basic/button`

```
---
title: Button 按钮  ## 当前页面的标题
nav:  ## 当前页面在某个顶部导航栏下面
  title: 组件
  path: /component
group:  ## 当前页面在某个分类下面
  title: 基础组件
  path: /basic
  order: 0
---
```

`<code />` 引用示例代码，也可以直接在 md 文件里写 DMO，参考 dumi 文档学习。

`<API />` 或 `<API src="./xxx/tsx" />` 组件用来暴露组件的 props 描述。

## 发布

```bash
yarn release
```

构建工具使用的是 `react-native-builder-bob`

## 待优化

- [x] 构建产物不包含 `demo`、`_demo`，已更换文件夹名称为 `__fixtures__`
- [x] 打包时提示静态资源报错（已使用 SVG 的方式代替图片）
- [ ] 文档部署
- [ ] issus 到改 bug 更规范
- [x] 生成 changelog，并且规范化
