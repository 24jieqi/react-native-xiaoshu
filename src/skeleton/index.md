---
title: Skeleton 骨架屏
nav:
  title: 组件

group:
  title: 反馈组件
  path: /feedback
  order: 3
---

# Skeleton 骨架屏

> 使用 [rn-placeholder](https://github.com/mfrachet/rn-placeholder) 实现。

在需要等待加载内容的位置提供一个占位图形组合。

## 何时使用

- 网络较慢，需要长时间等待加载处理的情况下。
- 只在第一次加载数据的时候使用。
- 图文信息内容较多的列表/卡片中。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Skeleton

### SkeletonAvatarProps

### SkeletonParagraphProps

## 主题定制

| 名称                          | 默认值                   | 描述 |
| :---------------------------- | ------------------------ | ---- |
| skeleton_color                | `TOKENS.gray_3`          | -    |
| skeleton_color_active         | `TOKENS.gray_1`          | -    |
| skeleton_avatar_border_radius | `TOKENS.border_radius_s` | -    |
