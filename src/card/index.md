---
title: Card 卡片
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Card 卡片

> 通用卡片容器。

## 何时使用

最基础的卡片容器，可承载文字、列表、图片、段落。

- 列表使用 `size="s"`，并且通过 titleLeftExtra 展示分类信息，配合 footer 呈现更多内容
- 详情页采用默认尺寸 `size="m"`，配合 Space、Collapse 组件完成需求

## 元素结构

```bash
|-- View  ## style
|--|-- View  ## headerStyle
|--|--|-- View  ## titleStyle
|--|--|--|-- titleLeftExtra  ## 属性 titleLeftExtra
|--|--|--|-- Text  ## titleTextStyle，或自定义 title
|--|--|-- extra  ## 属性 extra
|--|-- Divider  ## 属性 headerDivider 控制是否显示
|--|-- CardBody  ## bodyStyle
|--|--|-- Skeleton | children
|--|-- Divider  ## 属性 footerDivider 控制是否显示
|--|-- View  ## footerStyle
|--|--|-- Text  ## footerTextStyle，或自定义 footer
```

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/loading.tsx"></code>

<code src="./__fixtures__/square.tsx"></code>

## API

### Card

| 属性名          | 描述                                                      | 类型                                                                                                              | 默认值  | 版本 |
| :-------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------- | ---- |
| title           | 标题                                                      | `React.ReactNode`                                                                                                 | -       | -    |
| titleLeftExtra  | 标题左侧操作区                                            | `React.ReactNode`                                                                                                 | -       | -    |
| extra           | 卡片右上角的操作区域                                      | `React.ReactNode`                                                                                                 | -       | -    |
| footer          | 底部区域                                                  | `React.ReactNode`                                                                                                 | -       | -    |
| headerStyle     | 自定义标题区域样式                                        | `StyleProp<ViewStyle>`                                                                                            | -       | -    |
| titleStyle      | 头部标题的样式                                            | `StyleProp<ViewStyle>`                                                                                            | -       | -    |
| titleTextStyle  | 头部标题文案样式                                          | `StyleProp<TextStyle>`                                                                                            | -       | -    |
| bodyStyle       | 内容区域自定义样式                                        | `StyleProp<ViewStyle>`                                                                                            | -       | -    |
| footerStyle     | 底部自定义样式                                            | `StyleProp<ViewStyle>`                                                                                            | -       | -    |
| footerTextStyle | 底部文案自定义样式                                        | `StyleProp<TextStyle>`                                                                                            | -       | -    |
| size            | 大小                                                      | `'m'\|'s'`                                                                                                        | `'m'`   | -    |
| square          | 是否为方形                                                | `boolean`                                                                                                         | `false` | -    |
| loading         | 当卡片内容还在加载中时，可以用 loading 展示一个占位       | `boolean`                                                                                                         | `false` | -    |
| headerDivider   | header 区域显示分割线                                     | `boolean`                                                                                                         | `true`  | -    |
| footerDivider   | footer 区域显示分割线                                     | `boolean`                                                                                                         | `true`  | -    |
| bodyPadding     | body 是否有内边距                                         | `boolean\|number\|{left?:boolean\|number, right?:boolean\|number, top?:boolean\|number, bottom?:boolean\|number}` | `true`  | -    |
| onPressHeader   | 点击 header 区域，该区域包含 titleLeftExtra、title、extra | `TouchableWithoutFeedbackProps['onPress']`                                                                        | -       | -    |
| onLayoutHeader  | header 区域渲染完成                                       | `ViewProps['onLayout']`                                                                                           | -       | -    |
| onLayoutBody    | body 区域渲染完成                                         | `ViewProps['onLayout']`                                                                                           | -       | -    |

### Card.Body

| 属性名  | 描述   | 类型                       | 默认值 | 版本 |
| :------ | ------ | -------------------------- | ------ | ---- |
| padding | 内边距 | `CardProps['bodyPadding']` | -      | -    |

## 主题定制

| 名称                           | 默认值                   | 描述 |
| :----------------------------- | ------------------------ | ---- |
| card_background_color          | `TOKENS.white`           | -    |
| card_padding                   | `TOKENS.space_3`         | -    |
| card_header_gap                | `TOKENS.space_2`         | -    |
| card_m_header_height           | 50                       | -    |
| card_m_header_text_font_size   | `TOKENS.font_size_7`     | -    |
| card_m_header_text_line_height | `TOKENS.line_height_2`   | -    |
| card_m_border_radius           | `TOKENS.border_radius_m` | -    |
| card_s_header_height           | 40                       | -    |
| card_s_header_text_font_size   | `TOKENS.font_size_5`     | -    |
| card_s_header_text_line_height | `TOKENS.line_height_1`   | -    |
| card_s_border_radius           | `TOKENS.border_radius_s` | -    |
| card_header_text_color         | `TOKENS.gray_8`          | -    |
| card_footer_text_font_size     | `TOKENS.font_size_3`     | -    |
| card_footer_text_color         | `TOKENS.gray_7`          | -    |
| card_footer_text_line_height   | 20                       | -    |
| card_footer_padding_vertical   | `TOKENS.space_2`         | -    |
