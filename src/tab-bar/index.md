---
title: TabBar 标签栏
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# TabBar 标签栏

> 底部导航栏，用于在不同页面之间进行切换。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>
<code src="./__fixtures__/indicator.tsx"></code>
<code src="./__fixtures__/align.tsx"></code>
<code src="./__fixtures__/label.tsx"></code>

## API

继承 BottomBarProps。

| 属性名          | 描述                                                             | 类型                | 默认值                      | 版本 |
| :-------------- | ---------------------------------------------------------------- | ------------------- | --------------------------- | ---- |
| textColor       | 文案颜色                                                         | `ColorValue`        | `tab_bar_text_color`        | -    |
| iconColor       | 图标颜色                                                         | `ColorValue`        | `tab_bar_icon_color`        | -    |
| activeTextColor | 激活的文案颜色                                                   | `ColorValue`        | `tab_bar_active_text_color` | -    |
| activeIconColor | 激活的图标颜色                                                   | `ColorValue`        | `tab_bar_active_icon_color` | -    |
| value           | 受控模式所显示的值                                               | `T`                 | -                           | -    |
| defaultValue    | 非受控模式的初始值                                               | `T`                 | -                           | -    |
| onChange        | 变化时的回调函数                                                 | `(value:T) => void` | -                           | -    |
| options         | tab 数据，数组 memo 一下，避免错误                               | `TabItem<T>[]`      | -                           | -    |
| indicator       | 是否采用指示器模式                                               | `boolean`           | `false`                     | -    |
| indicatorWidth  | 指示器宽（0 表示撑满，其他数值标识固定，不填写与文字同宽）       | `number`            | -                           | -    |
| indicatorHeight | 指示器高度（设置为 0 就是不出现）                                | `number`            | `3`                         | -    |
| indicatorColor  | 指示器颜色                                                       | `ColorValue`        | `tab_bar_indicator_color`   | -    |
| tabAlign        | 排列方式，left 标识自适应宽、有滚动条，center 标识居中、无滚动条 | `'left'\| 'center'` | `'center'`                  | -    |
| labelBulge      | label 文字突出，scale 缩放倍数，默认 1.2                         | `boolean\|number`   | `1.2`                       | -    |

## 主题定制

| 名称                            | 默认值               | 描述 |
| :------------------------------ | -------------------- | ---- |
| tab_bar_item_padding_horizontal | `TOKENS.space_2`     | -    |
| tab_bar_text_font_size          | `TOKENS.font_size_1` | -    |
| tab_bar_text_alone_font_size    | `TOKENS.font_size_4` | -    |
| tab_bar_text_margin_top         | `TOKENS.space_1`     | -    |
| tab_bar_text_color              | `TOKENS.gray_6`      | -    |
| tab_bar_text_font_weight        | `'normal'`           | -    |
| tab_bar_badge_font_size         | `TOKENS.font_size_4` | -    |
| tab_bar_badge_color             | `TOKENS.red_6`       | -    |
| tab_bar_icon_color              | `TOKENS.gray_6`      | -    |
| tab_bar_active_text_color       | `TOKENS.brand_6`     | -    |
| tab_bar_active_text_font_weight | `'500'`              | -    |
| tab_bar_active_icon_color       | `TOKENS.brand_6`     | -    |
| tab_bar_indicator_color         | `TOKENS.brand_6`     | -    |
