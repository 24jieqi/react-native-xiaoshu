---
title: Progress 进度条
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Progress 进度条

> 用于展示操作的当前进度。

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Progress

| 属性名            | 描述                   | 类型                          | 默认值                      | 版本 |
| :---------------- | ---------------------- | ----------------------------- | --------------------------- | ---- |
| percentage        | 进度百分比             | `number`                      | `0`                         | -    |
| strokeHeight      | 进度条粗细             | `number`                      | `progress_height`           | -    |
| color             | 进度条颜色             | `ColorValue`                  | `progress_color`            | -    |
| trackColor        | 轨道颜色               | `ColorValue`                  | `progress_background_color` | -    |
| pivotText         | 进度文字内容           | `string`                      | `${percentage}%`            | -    |
| pivotColor        | 进度文字背景色         | `ColorValue`                  | `color`                     | -    |
| textColor         | 进度文字颜色           | `ColorValue`                  | `progress_pivot_text_color` | -    |
| inactive          | 是否置灰               | `boolean`                     | `false`                     | -    |
| showPivot         | 是否显示进度文字       | `boolean`                     | `true`                      | -    |
| square            | 是否为方形按钮         | `boolean`                     | `false`                     | -    |
| animated          | 是否开启进度条变动动画 | `boolean`                     | `false`                     | -    |
| animationDuration | 动画持续时间           | `number`                      | `animation_duration_base`   | -    |
| onAnimationEnd    | 动画结束时的回调函数   | `(percentage:number) => void` | -                           | -    |

### Progress.Page <Badge>0.2.1+</Badge>

| 属性名             | 描述                              | 类型              | 默认值                           | 版本 |
| :----------------- | --------------------------------- | ----------------- | -------------------------------- | ---- |
| loading            | 页面是否在加载中                  | `boolean`         | `false`                          | -    |
| defaultPercentage  | 初始起点进度百分值                | `number`          | `10`                             | -    |
| backgroundColor    | 背景色，默认会占满个屏幕          | `ColorValue`      | `progress_page_background_color` | -    |
| fail               | 加载出错                          | `boolean`         | -                                | -    |
| failMessage        | 加载失败提示                      | `React.ReactNode` | `'加载失败，请稍后再试～'`       | -    |
| failIcon           | 自定义加载出错的图标              | `React.ReactNode` | -                                | -    |
| onPressReload      | 加载失败点击重新加载              | `() => void`      | -                                | -    |
| refreshText        | 刷新按钮文案                      | `string`          | `'点击刷新'`                     | -    |
| failExtra          | 加载失败额外扩展区域              | `React.ReactNode` | -                                | -    |
| extraLoading       | loading 时自定义显示扩展元素      | `React.ReactNode` | -                                | -    |
| overlayZIndex      | 同步渲染 children 遮罩层的 zIndex | `number`          | `1000`                           | -    |
| syncRenderChildren | 同步渲染 children                 | `boolean`         | `false`                          | -    |

## 主题定制

| 名称                              | 默认值                 | 描述 |
| :-------------------------------- | ---------------------- | ---- |
| progress_height                   | 4                      | -    |
| progress_color                    | `TOKENS.brand_6`       | -    |
| progress_background_color         | `TOKENS.gray_3`        | -    |
| progress_pivot_padding_horizontal | `TOKENS.space_1`       | -    |
| progress_pivot_text_color         | `TOKENS.white`         | -    |
| progress_pivot_font_size          | `TOKENS.font_size_2`   | -    |
| progress_pivot_line_height_scale  | 1.6                    | -    |
| progress_pivot_background_color   | `TOKENS.brand_6`       | -    |
| progress_page_background_color    | `TOKENS.white`         | -    |
| progress_page_text_font_size      | `TOKENS.font_size_4`   | -    |
| progress_page_text_line_height    | `TOKENS.line_height_1` | -    |
| progress_page_text_color          | `TOKENS.gray_6`        | -    |
| progress_page_button_width        | 156                    | -    |
