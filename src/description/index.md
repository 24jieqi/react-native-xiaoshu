---
title: Description 描述列表
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Description 描述列表

> 成组展示多个只读字段。

`Description` 渲染优先级顺序

- `children` 是 `ReactElement`
- `text` 非 null、undefined 的字符串
- `children`

## 何时使用

常见于详情页的信息展示。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/size.tsx"></code>

<code src="./__fixtures__/other.tsx"></code>

<code src="./__fixtures__/empty.tsx"></code>

## API

### Description.Group

| 属性名           | 描述                         | 类型                          | 默认值         | 版本 |
| :--------------- | ---------------------------- | ----------------------------- | -------------- | ---- |
| colon            | label 和 text 之间是否有冒号 | `boolean`                     | `true`         | -    |
| contentStyle     | 内容样式                     | `StyleProp<ViewStyle>`        | -              | -    |
| contentTextStyle | 内容文字样式                 | `StyleProp<TextStyle>`        | -              | -    |
| labelStyle       | 标签样式                     | `StyleProp<ViewStyle>`        | -              | -    |
| labelTextStyle   | 标签文字样式                 | `StyleProp<TextStyle>`        | -              | -    |
| labelWidth       | 标签文字宽                   | `number`                      | -              | -    |
| layout           | label 与 text 的排版、布局   | `'horizontal'\|'vertical'`    | `'horizontal'` | -    |
| size             | 文案大小                     | `'s'\|'m'\|'l'`               | `'m'`          | -    |
| numberOfLines    | 右侧文案显示几行             | `number`                      | -              | -    |
| justify          | 主轴对齐方式                 | `FlexStyle['justifyContent']` | -              | -    |
| align            | 交叉轴对齐方式               | `FlexStyle['alignItems']`     | -              | -    |
| empty            | 空数据占位符                 | `React.ReactNode`             | `'--'`         | -    |
| showEmpty        | 显示空数据占位符             | `boolean`                     | `false`        | -    |

### Description

继承 DescriptionGroupProps。

| 属性名      | 描述                                       | 类型                                                                                                    | 默认值  | 版本 |
| :---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------- | ---- |
| label       | 内容的描述                                 | `string`                                                                                                | -       | -    |
| text        | 内容，自定义内容使用子元素的方式           | `string`                                                                                                | -       | -    |
| hidden      | 是否隐藏                                   | `boolean`                                                                                               | `false` | -    |
| bold        | 是否加粗显示内容，样式优先级低于自定义样式 | `boolean`                                                                                               | `false` | -    |
| color       | 字体颜色，样式优先级低于自定义样式         | `ColorValue`                                                                                            | -       | -    |
| addonBefore | 内容前置标签                               | `React.ReactElement`                                                                                    | -       | -    |
| addonAfter  | 内容前置标签                               | `React.ReactElement`                                                                                    | -       | -    |
| renderLabel | 自定义渲染描述                             | `(colon:string) => React.ReactNode`                                                                     | -       | -    |
| render      | 自定义渲染函数，适用于自定义排版           | `(content:React.ReactNode, addonBefore:React.ReactNode, addonAfter:React.ReactNode) => React.ReactNode` | -       | -    |
| empty       | 空数据占位符                               | `React.ReactNode`                                                                                       | -       | -    |
| showEmpty   | 显示空数据占位符                           | `boolean`                                                                                               | -       | -    |

### Description.Thousand

去掉 DescriptionProps 的 text。

| 属性名 | 描述       | 类型     | 默认值 | 版本 |
| :----- | ---------- | -------- | ------ | ---- |
| text   | 显示的数字 | `number` | -      | -    |

### Description.Date

去掉 DescriptionProps 的 text。

| 属性名 | 描述       | 类型                   | 默认值  | 版本 |
| :----- | ---------- | ---------------------- | ------- | ---- |
| text   | 显示的时间 | `Date`                 | -       | -    |
| mode   | 时间格式   | `DatePickerColumnMode` | `'Y-m'` | -    |

### Description.DateRange

去掉 DescriptionDateProps 的 text。

| 属性名 | 描述           | 类型           | 默认值 | 版本 |
| :----- | -------------- | -------------- | ------ | ---- |
| text   | 显示的时间     | `[Date, Date]` | -      | -    |
| split  | 时间分割字符串 | `string`       | `'至'` | -    |

## 主题定制

| 名称                      | 默认值                 | 描述 |
| :------------------------ | ---------------------- | ---- |
| description_l_font_size   | `TOKENS.font_size_5`   | -    |
| description_l_line_height | `TOKENS.line_height_4` | -    |
| description_m_font_size   | `TOKENS.font_size_4`   | -    |
| description_m_line_height | `TOKENS.line_height_2` | -    |
| description_s_font_size   | `TOKENS.font_size_4`   | -    |
| description_s_line_height | `TOKENS.line_height_1` | -    |
| description_label_color   | `TOKENS.gray_7`        | -    |
| description_text_color    | `TOKENS.gray_8`        | -    |
