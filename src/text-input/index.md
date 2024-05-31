---
title: TextInput 输入框
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# TextInput 输入框

> 针对原生组件做一些扩展。

参考 Antd 桌面端 Input 组件交互、API 实现。

## 事件触发顺序

```bash
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

## 元素结构

```bash
## 状态一 相对纯粹的输入框
|-- TouchableOpacity  ## 属性 inputWidth 会控制该元素的宽
|--|-- RNTextInput  ## style
|--|-- TextInputClear  ## 属性 clearable、clearTrigger 控制是否显示
|--|-- Text  ## 属性 showWordLimit 控制是否显示

## 状态二 bordered、prefix、suffix
|-- View  ## fixGroupStyle，属性 bordered 控制是否显示边框，属性 inputWidth 会控制该元素的宽
|--|-- Text  ## prefixTextStyle，或自定义 prefix
|--|-- 状态一
|--|-- Text  ## suffixTextStyle，或自定义 suffix

## 状态三 addonAfter、addonBefore、
|-- View  ## addonGroupStyle
|--|-- Text  ## addonBeforeTextStyle，或自定义 addonBefore
|--|-- 状态一或状态二
|--|-- Text  ## addonAfterTextStyle，或自定义 addonAfter
```

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名               | 描述                                                                                  | 类型                             | 默认值    | 版本 |
| :------------------- | ------------------------------------------------------------------------------------- | -------------------------------- | --------- | ---- |
| addonGroupStyle      | 当设置 addonXxx 的时候就会出现一个组                                                  | `StyleProp<ViewStyle>`           | -         | -    |
| addonBeforeTextStyle | addonBefore 文案的样式                                                                | `StyleProp<TextStyle>`           | -         | -    |
| addonAfterTextStyle  | addonAfter 文案的样式                                                                 | `StyleProp<TextStyle>`           | -         | -    |
| fixGroupStyle        | xxxfix 相关父组件样式                                                                 | `StyleProp<ViewStyle>`           | -         | -    |
| prefixTextStyle      | prefix 文案的样式                                                                     | `StyleProp<TextStyle>`           | -         | -    |
| suffixTextStyle      | suffix 文案的样式                                                                     | `StyleProp<TextStyle>`           | -         | -    |
| type                 | 输入框的形状                                                                          | `'text'\|'textarea'`             | `'text'`  | -    |
| rows                 | 多行的时候最低多少行的高度                                                            | `number`                         | `2`       | -    |
| clearable            | 是否启用清除图标，点击清除图标后会清空输入框                                          | `boolean`                        | `false`   | -    |
| clearTrigger         | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示 | `'always'\|'focus'`              | `'focus'` | -    |
| formatter            | 输入内容格式化函数                                                                    | `(s:string) => string`           | -         | -    |
| formatTrigger        | 格式化函数触发的时机，可选值为 `onEndEditing\|onChangeText`                           | `'onEndEditing'\|'onChangeText'` | -         | -    |
| showWordLimit        | 是否显示字数统计，需要设置 maxLength 属性，只有 textarea 模式下才有效                 | `boolean`                        | `false`   | -    |
| bordered             | 是否显示边框                                                                          | `boolean`                        | `false`   | -    |
| addonBefore          | 输入框外部前置标签，边框外，textarea 无                                               | `React.ReactNode`                | -         | -    |
| addonAfter           | 输入框外部后置标签，边框外，textarea 无                                               | `React.ReactNode`                | -         | -    |
| prefix               | 输入框内部前缀，边框内部，textarea 无                                                 | `React.ReactNode`                | -         | -    |
| suffix               | 输入框内部后缀，边框内部，textarea 无                                                 | `React.ReactNode`                | -         | -    |
| inputWidth           | 输入框自定义宽                                                                        | `number`                         | -         | -    |
| size                 | 控件大小                                                                              | `'xl'\|'l'\|'m'\|'s'`            | `'m'`     | -    |
| onChange             | 当文本框内容变化时调用此回调函数                                                      | `(value: string) => void`        | -         | -    |

## 主题定制

| 名称                                         | 默认值                   | 描述 |
| :------------------------------------------- | ------------------------ | ---- |
| text_input_xl_font_size                      | `TOKENS.font_size_5`     | -    |
| text_input_xl_min_height                     | 44                       | -    |
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
| text_input_disabled_background_color         | `TOKENS.gray_3`          | -    |
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

## FAQ

### iPhone 读取短信验证码

`iOS12` 以后，输入框可以响应第一条新短信，通过 `textContentType` 属性配置，[详情阅读](https://reactnative.dev/docs/textinput#textcontenttype-ios)。

```tsx | pure
// 读取验证码
<TextInput textContentType="oneTimeCode" />
```
