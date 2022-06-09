---
title: TextInput 输入框
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# TextInput 输入框

> 针对原生组件做一些扩展。

参考 Antd 桌面端 Input 组件交互、API 实现。

## 事件触发顺序

```
|-- onFocus =>
|--|-- onChange => onChange => onChangeText =>
|--|-- onChange => onChange => onChangeText =>
|--|--|-- onChange => onEndEditing => onBlur
```

## 各个事件中获取输入框的值

- onFocus `(event) => event.nativeEvent.text`
- onChange `(text) => text`
- onChangeText `(text) => text`
- onEndEditing `(event) => event.nativeEvent.text`
- onBlur `(event) => event.nativeEvent.text`

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

<API hideTitle src="./text-input.tsx"></API>

## 主题定制

| 名称                                         | 默认值                   | 描述 |
| :------------------------------------------- | ------------------------ | ---- |
| text_input_l_font_size                       | `TOKENS.font_size_5`     | -    |
| text_input_l_min_height                      | 40                       | -    |
| text_input_m_font_size                       | `TOKENS.font_size_5`     | -    |
| text_input_m_min_height                      | 32                       | -    |
| text_input_s_font_size                       | `TOKENS.font_size_5`     | -    |
| text_input_s_min_height                      | 24                       | -    |
| text_input_selection_color                   | `TOKENS.brand_6`         | -    |
| text_input_placeholder_text_color            | `TOKENS.gray_5`          | -    |
| text_input_color                             | `TOKENS.gray_8`          | -    |
| text_input_disabled_color                    | `TOKENS.gray_6`          | -    |
| text_input_disabled_background_color         | '#EFEFF1'                | -    |
| text_input_border_radio                      | `TOKENS.border_radius_s` | -    |
| text_input_padding_horizontal                | `TOKENS.space_2`         | -    |
| text_input_clearable_size                    | 16                       | -    |
| text_input_clearable_background_color        | `TOKENS.gray_5`          | -    |
| text_input_clearable_color                   | `TOKENS.white`           | -    |
| text_input_fix_text_color                    | `TOKENS.gray_8`          | -    |
| text_input_addon_text_color                  | `TOKENS.gray_8`          | -    |
| text_input_light_accessory_background_color  | '#f7f7f7'                | -    |
| text_input_dark_accessory_background_color   | '#575757'                | -    |
| text_input_dark_accessory_padding_horizontal | `TOKENS.space_3`         | -    |
| text_input_accessory_font_size               | `TOKENS.font_size_5`     | -    |
| text_input_accessory_height                  | 44                       | -    |
| text_input_accessory_text_color              | `TOKENS.brand_6`         | -    |
| text_input_word_limit_text_font_size         | `TOKENS.font_size_3`     | -    |
| text_input_word_limit_text_color             | `TOKENS.gray_7`          | -    |
