---
title: Dialog 对话框
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Dialog 对话框

> 弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

## 何时使用

需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 `Dialog` 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/input.tsx"></code>

<code src="./__fixtures__/other.tsx"></code>

<code src="./__fixtures__/keyboard.tsx"></code>

## API

### Dialog 公共属性

继承 Popup 公共属性。

| 属性名                | 描述                                              | 类型                                       | 默认值     | 版本 |
| :-------------------- | ------------------------------------------------- | ------------------------------------------ | ---------- | ---- |
| style                 | 最外层的样式                                      | `StyleProp<ViewStyle>`                     | -          | -    |
| title                 | 标题                                              | `React.ReactNode`                          | -          | -    |
| width                 | 弹窗宽度                                          | `DimensionValue`                           | `300`      | -    |
| message               | 文本内容，支持通过\n换行                          | `React.ReactNode`                          | -          | -    |
| messageAlign          | 内容对齐方式，可选值为`'center'\|'left'\|'right'` | `MessageAlign`                             | `'center'` | -    |
| showConfirmButton     | 是否展示确认按钮                                  | `boolean`                                  | `true`     | -    |
| showCancelButton      | 是否展示取消按钮                                  | `boolean`                                  | -          | -    |
| confirmButtonText     | 确认按钮文案                                      | `string`                                   | `'确认'`   | -    |
| confirmButtonColor    | 确认按钮颜色                                      | `ColorValue`                               | -          | -    |
| confirmButtonTextBold | 确认按钮文案 粗体                                 | `boolean`                                  | `true`     | -    |
| cancelButtonText      | 取消按钮文案                                      | `string`                                   | `'取消'`   | -    |
| cancelButtonColor     | 取消按钮颜色                                      | `ColorValue`                               | -          | -    |
| cancelButtonTextBold  | 取消按钮文案 粗体                                 | `boolean`                                  | `false`    | -    |
| showClose             | 是否显示关闭按钮                                  | `boolean`                                  | `false`    | -    |
| onPressClose          | 点击关闭按钮                                      | `TouchableWithoutFeedbackProps['onPress']` | -          | -    |
| buttonReverse         | 按钮翻转顺序                                      | `boolean`                                  | `false`    | -    |

### Dialog.Component

继承 Dialog 公共属性。

| 属性名               | 描述           | 类型         | 默认值  | 版本 |
| :------------------- | -------------- | ------------ | ------- | ---- |
| cancelButtonLoading  | 取消按钮加载中 | `boolean`    | `false` | -    |
| confirmButtonLoading | 确定按钮加载中 | `boolean`    | `false` | -    |
| onPressCancel        | 点击取消       | `() => void` | -       | -    |
| onPressConfirm       | 点击确定       | `() => void` | -       | -    |

### Dialog

去掉 Dialog 公共属性的 visible、onPressOverlay、onPressClose、onRequestClose。

| 属性名      | 描述                                                      | 类型                                                 | 默认值 | 版本 |
| :---------- | --------------------------------------------------------- | ---------------------------------------------------- | ------ | ---- |
| beforeClose | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action:DialogAction) => boolean\|Promise<boolean>` | -      | -    |

### Dialog.Keyboard <Badge>0.2.48+</Badge>

### Dialog.KeyboardComponent <Badge>0.2.48+</Badge>

`Dialog.KeyboardComponent` 内部没有嵌套 `Portal`。

继承 DialogProps 的属性。

| 属性名      | 描述               | 类型     | 默认值               | 版本 |
| :---------- | ------------------ | -------- | -------------------- | ---- |
| safeAreaTop | 自定义顶部安全边距 | `number` | `safeAreaInsets.top` | -    |

### Dialog.input

去掉 Dialog 公共属性的 visible、onPressOverlay、messageAlign、onPressClose。

| 属性名         | 描述                                                      | 类型                                                                                   | 默认值               | 版本 |
| :------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------- | ---- |
| safeAreaTop    | 自定义顶部安全边距                                        | `number`                                                                               | `safeAreaInsets.top` | -    |
| beforeClose    | 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action:Exclude<DialogAction, 'overlay'>, text: string) => boolean\|Promise<boolean>` | -                    | -    |
| onPressCancel  | 点击取消                                                  | `(text: string) => boolean\|Promise<boolean>\|void\|Promise<void>`                     | -                    | -    |
| onPressConfirm | 点击确定                                                  | `(text: string) => boolean\|Promise<boolean>\|void\|Promise<void>`                     | -                    | -    |
| defaultValue   | 默认值                                                    | `string`                                                                               | -                    | -    |
| placeholder    | 提示文案                                                  | `string`                                                                               | -                    | -    |
| type           | 输入框类型                                                | `TextInputProps['type']\|NumberInputProps['type']`                                     | `'text'`             | -    |
| autoFocus      | 自动对焦输入框                                            | `boolean`                                                                              | `true`               | -    |
| textInput      | 自定义 TextInput 属性                                     | `Omit<TextInputProps, 'defaultValue'\|'placeholder'\|'type'\|'autoFocus'>`             | -                    | -    |
| numberInput    | 自定义 NumberInput 属性                                   | `Omit<NumberInputProps, 'defaultValue'\|'placeholder'\|'type'\|'autoFocus'>`           | -                    | -    |

## 主题定制

| 名称                              | 默认值                           | 描述 |
| :-------------------------------- | -------------------------------- | ---- |
| dialog_width                      | 300                              | -    |
| dialog_transition                 | `TOKENS.animation_duration_base` | -    |
| dialog_border_radius              | `TOKENS.border_radius_xl`        | -    |
| dialog_background_color           | `TOKENS.white`                   | -    |
| dialog_close_color                | `TOKENS.gray_8`                  | -    |
| dialog_close_size                 | 20                               | -    |
| dialog_header_font_weight         | 'bold'                           | -    |
| dialog_header_line_height         | `TOKENS.line_height_3`           | -    |
| dialog_header_padding_top         | `TOKENS.space_6`                 | -    |
| dialog_header_padding_bottom      | `TOKENS.space_4`                 | -    |
| dialog_header_font_size           | `TOKENS.font_size_7`             | -    |
| dialog_header_color               | `TOKENS.gray_8`                  | -    |
| dialog_message_padding_horizontal | `TOKENS.space_6`                 | -    |
| dialog_message_font_size          | `TOKENS.font_size_5`             | -    |
| dialog_message_line_height        | `TOKENS.line_height_1`           | -    |
| dialog_message_text_color         | `TOKENS.gray_7`                  | -    |
| dialog_footer_margin_top          | `TOKENS.space_4`                 | -    |
| dialog_footer_divider_color       | `TOKENS.gray_4`                  | -    |
| dialog_confirm_button_text_color  | `TOKENS.brand_6`                 | -    |
| dialog_cancel_button_text_color   | `TOKENS.gray_8`                  | -    |
| dialog_input_gap                  | `TOKENS.space_4`                 | -    |
