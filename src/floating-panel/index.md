---
title: FloatingPanel 浮动面板
nav:
  title: 组件
  path: /component
group:
  title: 反馈组件
  path: /feedback
  order: 3
---

# FloatingPanel 浮动面板 <Badge>0.3.16+</Badge>

> 内容型面板。

## 何时使用

用户可自由灵活上下滑动浏览内容，常用于地图导航。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>
<code src="./__fixtures__/base2.tsx"></code>
<code src="./__fixtures__/scroll.tsx"></code>

## API

### FloatingPanel

### FloatingPanel.Component

`FloatingPanel` 与 `Popup.Component` 属性相同，`FloatingPanel` 被 `Portal` 组件包裹，在根节点渲染。

### FloatingPanel.ScrollView

### FloatingPanel.ScrollViewComponent

`FloatingPanel.ScrollView` 与 `Popup.ScrollViewComponent` 属性相同，`FloatingPanel.ScrollView` 被 `Portal` 组件包裹，在根节点渲染。

## 主题定制

| 名称                                 | 默认值                    | 描述 |
| :----------------------------------- | ------------------------- | ---- |
| floating_panel_border_radio          | `TOKENS.border_radius_xl` | -    |
| floating_panel_background_color      | `TOKENS.white`            | -    |
| floating_panel_header_padding        | `TOKENS.space_3`          | -    |
| floating_panel_header_text_font_size | `TOKENS.font_size_7`      | -    |
| floating_panel_header_text_color     | `TOKENS.gray_8`           | -    |
