---
title: Picker 选择器
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Picker 选择器

> 提供多个选项集合供用户选择，支持单列选择和多列级联。

在 [PickerView 选择器视图](./picker-view) 基础上添加弹出层。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Picker.Component

### Picker.PickerComponent

继承了 Popup 公共属性、PickerViewProps。

| 属性名            | 描述                 | 类型                   | 默认值   | 版本 |
| :---------------- | -------------------- | ---------------------- | -------- | ---- |
| title             | 顶部标题             | `React.ReactNode`      | -        | -    |
| confirmButtonText | 确认按钮文字         | `string`               | `'确认'` | -    |
| cancelButtonText  | 取消按钮文字         | `string`               | `'取消'` | -    |
| toolbarPosition   | 标题、工具栏位置     | `'top'\|'bottom'`      | `'top'`  | -    |
| showToolbar       | 是否显示标题、工具栏 | `boolean`              | `true`   | -    |
| onCancel          | 点击取消按钮时触发   | `TextProps['onPress']` | -        | -    |
| onConfirm         | 点击完成按钮时触发   | `TextProps['onPress']` | -        | -    |

### Picker

去掉 PickerProps 的 visible、value、onChange、loading、onCancel、onConfirm、onPressOverlay、onRequestClose。

| 属性名         | 描述                                                    | 类型                                                                                         | 默认值 | 版本 |
| :------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------ | ---- |
| onCancel       | 点击取消                                                | `(values:PickerValue[], columns:Column[]) => void`                                           | -      | -    |
| onConfirm      | 点击确定                                                | `(values:PickerValue[], columns:Column[]) => void`                                           | -      | -    |
| onPressOverlay | 点击遮罩层                                              | `(values:PickerValue[], columns:Column[]) => void`                                           | -      | -    |
| beforeClose    | 闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action:PickerAction, values:PickerValue[], columns:Column[]) => boolean\|Promise<boolean>` | -      | -    |

## 主题定制

| 名称                               | 默认值               | 描述 |
| :--------------------------------- | -------------------- | ---- |
| picker_bottom_gap                  | `TOKENS.space_4`     | -    |
| picker_action_gap                  | `TOKENS.space_3`     | -    |
| picker_header_text_line_height     | 44                   | -    |
| picker_header_action_font_size     | `TOKENS.font_size_5` | -    |
| picker_header_cancel_text_color    | `TOKENS.gray_7`      | -    |
| picker_header_confirm_text_color   | `TOKENS.brand_6`     | -    |
| picker_header_reset_text_color     | `TOKENS.gray_7`      | -    |
| picker_date_range_padding_vertical | `TOKENS.space_3`     | -    |
| picker_date_range_text_font_size   | `TOKENS.font_size_3` | -    |
| picker_date_range_text_color       | `TOKENS.gray_7`      | -    |
| picker_date_range_text_line_height | 20                   | -    |
| picker_date_range_day_margin_top   | `TOKENS.space_1`     | -    |
| picker_date_range_day_font_size    | `TOKENS.font_size_5` | -    |
| picker_date_range_day_color        | `TOKENS.gray_5`      | -    |
| picker_date_range_day_color_active | `TOKENS.brand_6`     | -    |
| picker_date_range_day_line_height  | 22                   | -    |
