---
title: Badge 徽标
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Badge 徽标

> 在右上角展示徽标数字或小红点。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/status.tsx"></code>

## API

| 属性名         | 描述                                                     | 类型                                       | 默认值                   | 版本 |
| :------------- | -------------------------------------------------------- | ------------------------------------------ | ------------------------ | ---- |
| countStyle     | 文案样式                                                 | `StyleProp<ViewStyle>`                     | -                        | -    |
| countTextStyle | 文案文字样式                                             | `StyleProp<TextStyle>`                     | -                        | -    |
| count          | 徽标内容/展示的数字                                      | `number\|string`                           | -                        | -    |
| color          | 徽标背景颜色                                             | `ColorValue`                               | `badge_background_color` | -    |
| dot            | 不展示数字，只有一个小红点                               | `boolean`                                  | `false`                  | -    |
| max            | 最大值，超过最大值会显示 {max}+，仅当 count 为数字时有效 | `number`                                   | -                        | -    |
| loading        | 数据是否在加载中，如果在加载中就暂时不显示 count         | `boolean`                                  | `false`                  | -    |
| showZero       | 当数值为 0 时，是否展示 Badge                            | `boolean`                                  | `false`                  | -    |
| offset         | 设置状态点的位置偏移                                     | `[number, number]`                         | -                        | -    |
| status         | 内置颜色，优先级低于自定义 color                         | `'primary'\|'success'\|'warning'\|'error'` | -                        | -    |

## 主题定制

| 名称                      | 默认值                     | 描述 |
| :------------------------ | -------------------------- | ---- |
| badge_size                | 16                         | -    |
| badge_color               | `TOKENS.white`             | -    |
| badge_padding_vertical    | 0                          | -    |
| badge_padding_horizontal  | 3                          | -    |
| badge_font_size           | `TOKENS.font_size_1`       | -    |
| badge_font_weight         | 'bold'                     | -    |
| badge_background_color    | `TOKENS.red_6`             | -    |
| badge_count_border_radius | `TOKENS.border_radius_max` | -    |
| badge_dot_size            | 8                          | -    |
| badge_status_primary      | `TOKENS.brand_6`           | -    |
| badge_status_success      | `TOKENS.green_6`           | -    |
| badge_status_warning      | `TOKENS.yellow_6`          | -    |
| badge_status_error        | `TOKENS.red_6`             | -    |
