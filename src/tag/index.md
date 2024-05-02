---
title: Tag 标签
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Tag 标签

> 用于标记关键词和概括主要内容。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名     | 描述                                     | 类型                   | 默认值      | 版本 |
| :--------- | ---------------------------------------- | ---------------------- | ----------- | ---- |
| innerStyle | 内部包裹层样式，可以对文案、图标排版影响 | `StyleProp<ViewStyle>` | -           | -    |
| closable   | 是否为可关闭标签                         | `boolean`              | `false`     | -    |
| onClose    | 关闭时的回调                             | `() => void`           | -           | -    |
| size       | 大小                                     | `TagSize`              | `'m'`       | -    |
| type       | 类型                                     | `TagType`              | `'primary'` | -    |
| visible    | 是否显示标签                             | `boolean`              | `true`      | -    |
| color      | 标签色                                   | `ColorValue`           | -           | -    |
| textColor  | 按钮文案颜色                             | `ColorValue`           | -           | -    |
| closeIcon  | 自定义关闭按钮                           | `React.ReactNode`      | -           | -    |
| icon       | 自定义图标                               | `React.ReactNode`      | -           | -    |
| hairline   | 细边框                                   | `boolean`              | -           | -    |

## 主题定制

| 名称                       | 默认值                    | 描述 |
| :------------------------- | ------------------------- | ---- |
| tag_l_close_icon           | `TOKENS.font_size_5`      | -    |
| tag_l_height               | 24                        | -    |
| tag_l_font_size            | `TOKENS.font_size_3`      | -    |
| tag_l_padding_horizontal   | `TOKENS.space_2`          | -    |
| tag_m_close_icon           | `TOKENS.font_size_3`      | -    |
| tag_m_height               | 20                        | -    |
| tag_m_font_size            | `TOKENS.font_size_2`      | -    |
| tag_m_padding_horizontal   | 4                         | -    |
| tag_s_close_icon           | `TOKENS.font_size_2`      | -    |
| tag_s_height               | 16                        | -    |
| tag_s_font_size            | `TOKENS.font_size_2`      | -    |
| tag_s_padding_horizontal   | 2                         | -    |
| tag_padding_horizontal     | `TOKENS.space_1`          | -    |
| tag_text_color             | `TOKENS.white`            | -    |
| tag_border_radius          | `TOKENS.border_radius_xs` | -    |
| tag_primary_color          | `TOKENS.brand_6`          | -    |
| tag_ghost_background_color | 'transparent'             | -    |
| tag_hazy_lightness         | 95                        | -    |
