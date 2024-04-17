---
title: Result 结果
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Result 结果

> 用于反馈一系列操作任务的处理结果。

react-native-svg-web 并没有提供 SvgXml 组件，web 端看不到部分 SVG 图形。关注 [What about SvgXml for svg from string ?](https://github.com/bakerface/react-native-svg-web/issues/6)

## 代码演示

<code src="./__fixtures__/icon.tsx"></code>
<code src="./__fixtures__/status.tsx"></code>
<code src="./__fixtures__/custom.tsx"></code>

## API

| 属性名            | 描述                       | 类型                                                 | 默认值 | 版本 |
| :---------------- | -------------------------- | ---------------------------------------------------- | ------ | ---- |
| subtitleTextStyle | subtitle 文字样式          | `StyleProp<TextStyle>`                               | -      | -    |
| titleTextStyle    | title 文字样式             | `StyleProp<TextStyle>`                               | -      | -    |
| extra             | 操作区                     | `React.ReactNode`                                    | -      | -    |
| renderIcon        | 自定义 icon                | `(color:ColorValue, size:number) => React.ReactNode` | -      | -    |
| status            | 结果的状态，决定图标和颜色 | `ResultStatus`                                       | -      | -    |
| subtitle          | subtitle 文字              | `React.ReactNode`                                    | -      | -    |
| title             | title 文字                 | `React.ReactNode`                                    | -      | -    |

## 主题定制

| 名称                      | 默认值               | 描述 |
| :------------------------ | -------------------- | ---- |
| result_success_color      | `TOKENS.green_6`     | -    |
| result_error_color        | `TOKENS.red_6`       | -    |
| result_info_color         | `TOKENS.brand_6`     | -    |
| result_warning_color      | `TOKENS.yellow_6`    | -    |
| result_icon_size          | 72                   | -    |
| result_title_font_size    | `TOKENS.font_size_7` | -    |
| result_title_color        | `TOKENS.gray_8`      | -    |
| result_subtitle_font_size | `TOKENS.font_size_3` | -    |
| result_subtitle_color     | `TOKENS.gray_7`      | -    |
