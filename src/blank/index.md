---
title: Blank 留白
nav:
  title: 组件
group:
  title: 基础组件
  order: 1
---

# Blank 留白 <Badge>0.2.3+</Badge>

> 布局控件。

## 何时使用

常用于内容左右留白，或列表上下留白。

## 代码演示

<code src="./__fixtures__/direction.tsx"></code>
<code src="./__fixtures__/size.tsx"></code>

## API

| 属性名 | 描述         | 类型                  | 默认值     | 版本 |
| :----- | ------------ | --------------------- | ---------- | ---- |
| top    | 上边距       | `boolean\|number`     | `false`    | -    |
| bottom | 下边距       | `boolean\|number`     | `false`    | -    |
| left   | 左边距       | `boolean\|number`     | `true`     | -    |
| right  | 右边距       | `boolean\|number`     | `true`     | -    |
| size   | 默认留白大小 | `'s'\|'m'\|'l'`       | `'m'`      | -    |
| type   | 边距类型     | `'margin'\|'padding'` | `'margin'` | -    |

## 主题定制

| 名称         | 默认值           | 描述 |
| :----------- | ---------------- | ---- |
| blank_size_s | `TOKENS.space_2` | -    |
| blank_size_m | `TOKENS.space_3` | -    |
| blank_size_l | `TOKENS.space_4` | -    |
