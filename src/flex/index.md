---
title: Flex 布局
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Flex 布局

> Flex 是 CSS flex 布局的一个封装。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Flex

| 属性名    | 描述           | 类型                         | 默认值     | 版本 |
| :-------- | -------------- | ---------------------------- | ---------- | ---- |
| direction | flexDirection  | `FlexStyle['flexDirection']` | `'row'`    | -    |
| wrap      | flexWrap       | `FlexStyle['flexWrap']`      | `'nowrap'` | -    |
| justify   | justifyContent | `FlexJustify`                | `'start'`  | -    |
| align     | alignItems     | `FlexAlign`                  | `'center'` | -    |

### Flex.Item

| 属性名 | 描述 | 类型                | 默认值 | 版本 |
| :----- | ---- | ------------------- | ------ | ---- |
| flex   | flex | `FlexStyle['flex']` | `1`    | -    |
