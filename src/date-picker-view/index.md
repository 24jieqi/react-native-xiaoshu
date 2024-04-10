---
title: DatePickerView 时间选择器视图
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# DatePickerView 时间选择器视图

> 提供多种时间格式选择，通常与弹出层组件配合使用。

在 [PickerView 选择器视图](./picker-view) 基础上结合时间组合而成。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名       | 描述                     | 类型                   | 默认值   | 版本 |
| :----------- | ------------------------ | ---------------------- | -------- | ---- |
| value        | 选中项                   | `Date`                 | -        | -    |
| defaultValue | 默认选中项               | `Date`                 | -        | -    |
| onChange     | 变化时的回调函数         | `(v: Date) => void`    | -        | -    |
| mode         | 日期选择的类型           | `DatePickerColumnMode` | `'Y-m'`  | -    |
| min          | 最小值                   | `Date`                 | `十年前` | -    |
| max          | 最大值                   | `Date`                 | `十年后` | -    |
| renderLabel  | 自定义渲染每列展示的内容 | `RenderLabel`          | -        | -    |
| loading      | 加载中                   | `boolean`              | -        | -    |
