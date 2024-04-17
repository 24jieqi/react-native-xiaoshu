---
title: Overlay 遮罩层
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Overlay 遮罩层

> 创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名          | 描述                                    | 类型                   | 默认值                     | 版本      |
| :-------------- | --------------------------------------- | ---------------------- | -------------------------- | --------- |
| style           | 最外层样式                              | `StyleProp<ViewStyle>` | -                          | -         |
| overlayStyle    | overlay 样式                            | `StyleProp<ViewStyle>` | -                          | -         |
| visible         | 是否展示遮罩层                          | `boolean`              | `false`                    | -         |
| zIndex          | z-index 层级                            | `number`               | `1`                        | -         |
| duration        | 动画时长，单位毫秒                      | `number`               | `animation_duration_base`  | -         |
| onPress         | 点击弹层                                | `number`               | `() => void`               | -         |
| onRequestClose  | 当点击返回按钮时触发 `@support Android` | `() => boolean`        | -                          | -         |
| backgroundColor | 点击弹层                                | `ColorValue`           | `overlay_background_color` | `0.2.17+` |

## 主题定制

| 名称                     | 默认值               | 描述 |
| :----------------------- | -------------------- | ---- |
| overlay_z_index          | 10                   | -    |
| overlay_background_color | 'rgba(0, 0, 0, 0.7)' | -    |
