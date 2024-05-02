---
title: NavBar 导航栏
nav:
  title: 组件
group:
  title: 导航组件
  order: 5
---

# NavBar 导航栏

> 为页面提供导航功能，常用于页面顶部。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

| 属性名           | 描述                 | 类型                   | 默认值 | 版本 |
| :--------------- | -------------------- | ---------------------- | ------ | ---- |
| style            | 最外层的样式         | `StyleProp<ViewStyle>` | -      | -    |
| leftStyle        | 左侧布局的样式       | `StyleProp<ViewStyle>` | -      | -    |
| leftExtra        | 左侧自定义内容       | `JSX.Element`          | -      | -    |
| rightStyle       | 右侧布局的样式       | `StyleProp<ViewStyle>` | -      | -    |
| rightExtra       | 右侧自定义内容       | `JSX.Element`          | -      | -    |
| titleTextStyle   | 标题文案样式         | `StyleProp<TextStyle>` | -      | -    |
| title            | 标题文字或自定义 JSX | `React.ReactNode`      | -      | -    |
| showBackArrow    | 显示返回箭头         | `boolean`              | `true` | -    |
| backArrowColor   | 自定义返回按钮颜色   | `ColorValue`           | -      | -    |
| backArrowSize    | 自定义返回按钮尺寸   | `number`               | -      | -    |
| divider          | 是否显示分割线       | `boolean`              | `true` | -    |
| onPressBackArrow | 点击返回按钮的回调   | `() => void`           | -      | -    |

## 主题定制

| 名称                     | 默认值               | 描述 |
| :----------------------- | -------------------- | ---- |
| nav_bar_arrow_size       | 20                   | -    |
| nav_bar_height           | 44                   | -    |
| nav_bar_gap              | `TOKENS.space_3`     | -    |
| nav_bar_background_color | `TOKENS.white`       | -    |
| nav_bar_title_text_color | `TOKENS.gray_8`      | -    |
| nav_bar_title_font_size  | `TOKENS.font_size_5` | -    |
| nav_bar_icon_color       | `TOKENS.gray_8`      | -    |
