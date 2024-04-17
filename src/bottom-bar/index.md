---
title: BottomBar 底部工具
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# BottomBar 底部工具

> 用于固定在屏幕底部。

## API

| 属性名                | 描述                                                                                                   | 类型         | 默认值                        | 版本 |
| :-------------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------- | ---- |
| safeAreaInsetBottom   | 是否开启底部安全区适配                                                                                 | `boolean`    | `true`                        | -    |
| backgroundColor       | 背景色                                                                                                 | `ColorValue` | `bottom_bar_background_color` | -    |
| height                | 元素高度                                                                                               | `number`     | `bottom_bar_height`           | -    |
| hidden                | 是否隐藏                                                                                               | `boolean`    | `false`                       | -    |
| keyboardShowNotRender | 当软键盘弹出来的时候不渲染，BottomBar 固定在底部的布局中，在 Android 机器上 BottomBar 会被软键盘挤上去 | `boolean`    | `true`                        | -    |
| divider               | 是否显示分割线                                                                                         | `boolean`    | `true`                        | -    |

## 主题定制

| 名称                        | 默认值         | 描述 |
| :-------------------------- | -------------- | ---- |
| bottom_bar_background_color | `TOKENS.white` | -    |
| bottom_bar_height           | 50             | -    |
