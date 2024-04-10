---
title: DatePicker 时间选择器
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# DatePicker 时间选择器

> 提供多种时间格式选择。

在 [DatePickerView 时间选择器视图](./date-picker-view) 基础上添加弹出层。

## 代码演示

<code src="./__fixtures__/single.tsx"></code>

<code src="./__fixtures__/range-view.tsx"></code>

<code src="./__fixtures__/range.tsx"></code>

## API

### DatePicker

去掉 Popup 公共属性 的 visible、onPressOverlay、onRequestClose。去掉 DatePickerViewProps 的 value、onChange、loading。

| 属性名            | 描述                                                      | 类型                                                                               | 默认值   | 版本 |
| :---------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------- | ---- |
| title             | 顶部标题                                                  | `React.ReactNode`                                                                  | -        | -    |
| confirmButtonText | 确认按钮文字                                              | `string`                                                                           | `'确认'` | -    |
| cancelButtonText  | 取消按钮文字                                              | `string`                                                                           | `'取消'` | -    |
| onCancel          | 点击取消                                                  | `(value:Date) => void`                                                             | -        | -    |
| onConfirm         | 点击确定                                                  | `(value:Date) => void`                                                             | -        | -    |
| onPressOverlay    | 点击遮罩层                                                | `(value:Date) => void`                                                             | -        | -    |
| beforeClose       | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `beforeClose?: (action:DatePickerAction, value:Date) => boolean\|Promise<boolean>` | -        | -    |

### DatePicker.RangeView

去掉 DatePickerViewProps 的 value、defaultValue、onChange、mode。

| 属性名            | 描述                             | 类型                                    | 默认值                 | 版本 |
| :---------------- | -------------------------------- | --------------------------------------- | ---------------------- | ---- |
| mode              | 日期选择的类型                   | `DatePickerColumnMode`                  | `'Y-D'`                | -    |
| defaultValue      | 默认时间组                       | `DatePickerRangeValue`                  | -                      | -    |
| value             | 选中时间组                       | `DatePickerRangeValue`                  | -                      | -    |
| initialValue      | 初始值，只有初始化以及重置时生效 | `DatePickerRangeValue`                  | `[null, null]`         | -    |
| confirmButtonText | 确认按钮文字                     | `string`                                | `'确认'`               | -    |
| resetButtonText   | 重置按钮文字                     | `string`                                | `'重置'`               | -    |
| placeholder       | 占位文案                         | `[string, string]`                      | `['请选择', '请选择']` | -    |
| onConfirm         | 点击确定                         | `(values:DatePickerRangeValue) => void` | -                      | -    |
| onChange          | 变化时的回调函数                 | `(values:DatePickerRangeValue) => void` | -                      | -    |
| clearable         | 显示清空按钮                     | `boolean`                               | `false`                | -    |
| onClear           | 点击清空按钮                     | `(values:DatePickerRangeValue) => void` | -                      | -    |
| clearButtonText   | 清空按钮文字                     | `string`                                | `'清空'`               | -    |

### DatePicker.range

去掉 Popup 公共属性 的 visible、onPressOverlay、onRequestClose。去掉 DatePickerRangeViewProps 的 loading、value、onChange、onConfirm。

| 属性名         | 描述                                                      | 类型                                                                                       | 默认值 | 版本 |
| :------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ | ---- |
| title          | 顶部标题                                                  | `React.ReactNode`                                                                          | -      | -    |
| onCancel       | 点击取消                                                  | `(values:DatePickerRangeValue) => void`                                                    | -      | -    |
| onConfirm      | 点击确定                                                  | `(values:DatePickerRangeValue) => void`                                                    | -      | -    |
| onConfirm      | 点击确定                                                  | `(values:DatePickerRangeValue) => void`                                                    | -      | -    |
| onPressOverlay | 点击遮罩层                                                | `(values:DatePickerRangeValue) => void`                                                    | -      | -    |
| beforeClose    | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action: DatePickerRangeAction, value:DatePickerRangeValue) => boolean\|Promise<boolean>` | -      | -    |

## 主题定制

参考 [Picker](./picker) 主题定制，`picker_date_**` 相关。
