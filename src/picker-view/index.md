---
title: PickerView 选择器视图
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# PickerView 选择器视图

> 提供多个选项集合视图，支持单列选择和多列级联，通常与弹出层组件配合使用。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名           | 描述                           | 类型                                               | 默认值  | 版本 |
| :--------------- | ------------------------------ | -------------------------------------------------- | ------- | ---- |
| value            | 受控模式所显示的值             | `PickerValue[]`                                    | -       | -    |
| defaultValue     | 非受控模式的初始值             | `PickerValue[]`                                    | -       | -    |
| onChange         | 变化时的回调函数               | `(values:PickerValue[], options:Column[]) => void` | -       | -    |
| columns          | 选项数组，配置每一列显示的数据 | `Column[]`                                         | -       | -    |
| loading          | 是否显示加载状态               | `boolean`                                          | `false` | -    |
| itemHeight       | 选项高度                       | `number`                                           | `50`    | -    |
| visibleItemCount | 可见的选项个数，奇数           | `number`                                           | `5`     | -    |

## 主题定制

| 名称                                     | 默认值               | 描述 |
| :--------------------------------------- | -------------------- | ---- |
| picker_view_background_color             | `TOKENS.white`       | -    |
| picker_view_column_mask_background_color | `TOKENS.white`       | -    |
| picker_view_column_text_color            | `TOKENS.gray_8`      | -    |
| picker_view_column_text_disabled_color   | `TOKENS.gray_6`      | -    |
| picker_view_column_text_font_size        | `TOKENS.font_size_5` | -    |

## FAQ

### web 端不触发 `onChange`

[ScrollView event handlers not working: onScrollBeginDrag, onScrollEndDrag, onMomentumScrollBegin, onMomentumScrollEnd](https://github.com/necolas/react-native-web/issues/2249)
