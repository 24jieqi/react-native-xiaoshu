---
title: Notify 消息提示
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Notify 消息提示

> 在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Notify.Component

### Notify.NotifyComponent

去掉 Popup 公共属性的 overlay、closeOnClickOverlay、onPressOverlay、duration。

| 属性名          | 描述                                                      | 类型                                       | 默认值      | 版本 |
| :-------------- | --------------------------------------------------------- | ------------------------------------------ | ----------- | ---- |
| style           | 最外层样式                                                | `StyleProp<ViewStyle>`                     | -           | -    |
| textStyle       | 文字样式                                                  | `StyleProp<TextStyle>`                     | -           | -    |
| type            | 类型，可选值为 `'primary'\|'success'\|'error'\|'warning'` | `NotifyType`                               | `'primary'` | -    |
| message         | 展示文案                                                  | `React.ReactNode`                          | -           | -    |
| color           | 字体颜色                                                  | `ColorValue`                               | -           | -    |
| backgroundColor | 背景颜色                                                  | `ColorValue`                               | -           | -    |
| onPress         | 点击时的回调函数                                          | `TouchableWithoutFeedbackProps['onPress']` | -           | -    |

### Notify

去掉 NotifyProps 的 visible。

| 属性名   | 描述                                     | 类型     | 默认值 | 版本 |
| :------- | ---------------------------------------- | -------- | ------ | ---- |
| duration | 展示时长(ms)，值为 0 时，notify 不会消失 | `number` | `3000` | -    |

## 主题定制

| 名称                            | 默认值                 | 描述 |
| :------------------------------ | ---------------------- | ---- |
| notify_text_color               | `TOKENS.white`         | -    |
| notify_padding_vertical         | `TOKENS.space_2`       | -    |
| notify_padding_horizontal       | `TOKENS.space_4`       | -    |
| notify_font_size                | `TOKENS.font_size_4`   | -    |
| notify_line_height              | `TOKENS.line_height_1` | -    |
| notify_primary_background_color | `TOKENS.brand_6`       | -    |
| notify_success_background_color | `TOKENS.green_6`       | -    |
| notify_error_background_color   | `TOKENS.red_6`         | -    |
| notify_warning_background_color | `TOKENS.yellow_6`      | -    |
