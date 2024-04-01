---
title: PickerView 选择器视图
nav:
  title: 组件

group:
  title: 表单组件
  path: /form
  order: 2
---

# PickerView 选择器视图

> 提供多个选项集合视图，支持单列选择和多列级联，通常与弹出层组件配合使用。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

## 主题定制

| 名称                                     | 默认值                  | 描述 |
| :--------------------------------------- | ----------------------- | ---- |
| picker_view_background_color             | `TOKENS.white`          | -    |
| picker_view_column_mask_background_color | 'rgba(255,255,255,0.8)' | -    |
| picker_view_column_text_color            | `TOKENS.gray_8`         | -    |
| picker_view_column_text_disabled_color   | `TOKENS.gray_6`         | -    |
| picker_view_column_text_font_size        | `TOKENS.font_size_5`    | -    |

## FAQ

### web 端不触发 `onChange`

[ScrollView event handlers not working: onScrollBeginDrag, onScrollEndDrag, onMomentumScrollBegin, onMomentumScrollEnd](https://github.com/necolas/react-native-web/issues/2249)
