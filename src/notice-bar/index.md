---
title: NoticeBar 通知栏
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# NoticeBar 通知栏

> 用于展示一组消息通知。

## 何时使用

常在页面刷新后 立即出现，一般用于警告或通知，用户不会手动关闭，若提示非常重要可常驻。

可使用功能色匹配四种信息情感色彩：蓝色（提醒信息）、绿色（成功信息）、红色（错误信息）、黄色（警告信息）。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/status.tsx"></code>

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/mode.tsx"></code>

<code src="./__fixtures__/custom.tsx"></code>

## API

| 属性名           | 描述                                       | 类型                                                 | 默认值                        | 版本 |
| :--------------- | ------------------------------------------ | ---------------------------------------------------- | ----------------------------- | ---- |
| messageTextStyle | 通知文本文字样式                           | `StyleProp<TextStyle>`                               | -                             | -    |
| message          | 通知文本内容                               | `React.ReactNode`                                    | -                             | -    |
| status           | 内置状态                                   | `NoticeBarStatus`                                    | `'warning'`                   | -    |
| mode             | 通知栏模式，可选值为 `'closeable'\|'link'` | `NoticeBarMode`                                      | -                             | -    |
| bordered         | 是否显示边框                               | `boolean`                                            | `false`                       | -    |
| color            | 通知文本颜色                               | `ColorValue`                                         | `notice_bar_text_color`       | -    |
| backgroundColor  | 通知背景颜色                               | `ColorValue`                                         | `notice_bar_background_color` | -    |
| iconColor        | 图标颜色                                   | `ColorValue`                                         | `notice_bar_text_color`       | -    |
| wrapable         | 是否开启文本换行                           | `boolean`                                            | `false`                       | -    |
| square           | 是否为方形                                 | `boolean`                                            | `true`                        | -    |
| size             | 大小                                       | `'m'\|'s'`                                           | `'m'`                         | -    |
| renderLeftIcon   | 渲染左侧图标                               | `(color:ColorValue, size:number) => React.ReactNode` | -                             | -    |
| renderRightIcon  | 渲染右侧图标                               | `(color:ColorValue, size:number) => React.ReactNode` | -                             | -    |
| onPressClose     | 点击关闭按钮                               | `() => void`                                         | -                             | -    |

## 主题定制

| 名称                                  | 默认值                   | 描述 |
| :------------------------------------ | ------------------------ | ---- |
| notice_bar_m_padding_vertical         | `TOKENS.space_2`         | -    |
| notice_bar_m_padding_horizontal       | `TOKENS.space_3`         | -    |
| notice_bar_s_padding_vertical         | `TOKENS.space_1`         | -    |
| notice_bar_s_padding_horizontal       | `TOKENS.space_2`         | -    |
| notice_bar_text_line_height           | `TOKENS.line_height_1`   | -    |
| notice_bar_border_radius              | `TOKENS.border_radius_s` | -    |
| notice_bar_text_font_size             | `TOKENS.font_size_3`     | -    |
| notice_bar_icon_size                  | `TOKENS.font_size_3`     | -    |
| notice_bar_icon_margin_horizontal     | `TOKENS.space_1`         | -    |
| notice_bar_primary_text_color         | `TOKENS.brand_6`         | -    |
| notice_bar_success_text_color         | `TOKENS.green_6`         | -    |
| notice_bar_warning_text_color         | `TOKENS.yellow_6`        | -    |
| notice_bar_error_text_color           | `TOKENS.red_6`           | -    |
| notice_bar_background_color_lightness | 95                       | -    |
