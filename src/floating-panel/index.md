---
title: FloatingPanel 浮动面板
nav:
  title: 组件
group:
  title: 反馈组件
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

| 属性名            | 描述                                                       | 类型                        | 默认值                   | 版本 |
| :---------------- | ---------------------------------------------------------- | --------------------------- | ------------------------ | ---- |
| anchorStart       | 起点                                                       | `number`                    | 内部计算一个初始值       | -    |
| anchorEnd         | 终点                                                       | `number`                    | 屏幕高度减去安全顶部边距 | -    |
| title             | 标题                                                       | `React.ReactNode`           | -                        | -    |
| titleDivider      | 头部分割线                                                 | `boolean`                   | `true`                   | -    |
| offsetThreshold   | 滑动偏移阈值，0~1                                          | `number`                    | `0.2`                    | -    |
| zIndex            | 层级                                                       | `number`                    | `10`                     | -    |
| draggingOnContent | 是否会处理面板内容区域的手势事件，禁用后则只能拖拽头部区域 | `boolean`                   | `true`                   | -    |
| onAnimationEnd    | 动画结束时的回调函数                                       | `(opened: boolean) => void` | -                        | -    |

### FloatingPanel.ScrollView

### FloatingPanel.ScrollViewComponent

`FloatingPanel.ScrollView` 与 `Popup.ScrollViewComponent` 属性相同，`FloatingPanel.ScrollView` 被 `Portal` 组件包裹，在根节点渲染。

继承 FloatingPanelProps。

## 主题定制

| 名称                                 | 默认值                    | 描述 |
| :----------------------------------- | ------------------------- | ---- |
| floating_panel_border_radio          | `TOKENS.border_radius_xl` | -    |
| floating_panel_background_color      | `TOKENS.white`            | -    |
| floating_panel_header_padding        | `TOKENS.space_3`          | -    |
| floating_panel_header_text_font_size | `TOKENS.font_size_7`      | -    |
| floating_panel_header_text_color     | `TOKENS.gray_8`           | -    |
