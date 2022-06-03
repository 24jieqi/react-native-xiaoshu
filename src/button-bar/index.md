---
title: ButtonBar 按钮组
nav:
  title: 组件
  path: /component
group:
  title: 展示组件
  path: /show
  order: 3
---

# ButtonBar 按钮组

> 一组操作按钮。

## 何时使用

一般情况用于详情页底部操作按钮，或列表底部新增按钮。

该组件有两个使用方式。

- `buttons` 参数，内部通过 Boolean 过滤再渲染出按钮，通过 `count` 控制最大显示个数，超过就使用 ActionSheet 的方式交互。
- 嵌套子元素。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

<API hideTitle src="./button-bar.tsx"></API>
