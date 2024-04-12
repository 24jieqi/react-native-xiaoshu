---
title: Checkbox 复选框
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Checkbox 复选框

> 在一组备选项中进行多选。

## 何时使用

适用于勾选某个单项内容，例如是否同意、已读。

适用于受控、非受控两种方式。

## 代码演示

<code src="./__fixtures__/icon.tsx"></code>

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/group.tsx"></code>

## API

### Checkbox

| 属性名         | 描述                                                       | 类型                                           | 默认值                        | 版本 |
| :------------- | ---------------------------------------------------------- | ---------------------------------------------- | ----------------------------- | ---- |
| activeColor    | 选中状态颜色                                               | `ColorValue`                                   | `checkbox_checked_icon_color` | -    |
| labelTextStyle | 文案样式                                                   | `StyleProp<TextStyle>`                         | -                             | -    |
| iconStyle      | 图标样式                                                   | `StyleProp<ViewStyle>`                         | -                             | -    |
| defaultValue   | 默认值                                                     | `ActiveValueT\|InactiveValueT`                 | -                             | -    |
| value          | 当前的值                                                   | `ActiveValueT\|InactiveValueT`                 | -                             | -    |
| onChange       | 变化时的回调函数                                           | `(value:ActiveValueT\|InactiveValueT) => void` | -                             | -    |
| activeValue    | 选中时对应的值                                             | `ActiveValueT`                                 | `true`                        | -    |
| inactiveValue  | 未选中时对应的值                                           | `InactiveValueT`                               | `false`                       | -    |
| label          | 文案                                                       | `React.ReactNode`                              | -                             | -    |
| labelDisabled  | 是否禁用复选框文本点击                                     | `boolean`                                      | `false`                       | -    |
| labelPosition  | 是否禁文本位置，可选值为 `'left'\|'right'`用复选框文本点击 | `'left'\|'right'`                              | `'right'`                     | -    |
| iconSize       | 图标大小                                                   | `number`                                       | `20`                          | -    |
| disabled       | 是否禁用复选框                                             | `boolean`                                      | -                             | -    |
| renderIcon     | 自定义图标                                                 | `(p:RenderIconProps) => React.ReactNode`       | -                             | -    |
| gap            | 文字与图标之间的间距                                       | `number`                                       | `checkbox_label_margin`       | -    |

### Checkbox.Icon

| 属性名      | 描述                    | 类型         | 默认值                        | 版本 |
| :---------- | ----------------------- | ------------ | ----------------------------- | ---- |
| active      | 否选中、高亮            | `boolean`    | -                             | -    |
| activeColor | 选中状态颜色            | `ColorValue` | `checkbox_checked_icon_color` | -    |
| size        | 图标大小，默认单位为 px | `number`     | `20`                          | -    |

### Checkbox.Group

| 属性名                 | 描述                    | 类型                                  | 默认值                        | 版本 |
| :--------------------- | ----------------------- | ------------------------------------- | ----------------------------- | ---- |
| active                 | 否选中、高亮            | `boolean`                             | -                             | -    |
| activeColor            | 选中状态颜色            | `ColorValue`                          | `checkbox_checked_icon_color` | -    |
| size                   | 图标大小，默认单位为 px | `number`                              | `20`                          | -    |
| checkboxLabelTextStyle | 文案样式                | `CheckboxProps['labelTextStyle']`     | -                             | -    |
| checkboxIconLabelGap   | 文字与图标之间的间距    | `number`                              | -                             | -    |
| options                | 选项组                  | `{value:ActiveValueT label:string}[]` | -                             | -    |

## 主题定制

| 名称                                 | 默认值           | 描述 |
| :----------------------------------- | ---------------- | ---- |
| checkbox_icon_size                   | 20               | -    |
| checkbox_icon_color                  | `TOKENS.gray_6`  | -    |
| checkbox_icon_disabled_color         | `TOKENS.gray_5`  | -    |
| checkbox_checked_icon_color          | `TOKENS.brand_6` | -    |
| checkbox_checked_icon_disabled_color | `TOKENS.gray_5`  | -    |
| checkbox_label_color                 | `TOKENS.gray_8`  | -    |
| checkbox_label_margin                | `TOKENS.space_2` | -    |
| checkbox_disabled_label_color        | `TOKENS.gray_6`  | -    |
