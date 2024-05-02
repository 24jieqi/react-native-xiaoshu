---
title: WaterMark 水印
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# WaterMark 水印 <Badge>0.3.0+</Badge>

> 页面上添加特定的文字。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/foreground.tsx"></code>

## API

| 属性名     | 描述                           | 类型         | 默认值                      | 版本 |
| :--------- | ------------------------------ | ------------ | --------------------------- | ---- |
| text       | 文字内容                       | `string`     | -                           | -    |
| color      | 文字颜色                       | `ColorValue` | `water_mark_text_color`     | -    |
| fontSize   | 字体大小                       | `number`     | `water_mark_text_font_size` | -    |
| opacity    | 文字透明度                     | `number`     | `water_mark_text_opacity`   | -    |
| textWidth  | 文字宽                         | `number`     | `64`                        | -    |
| textHeight | 文字高/行高                    | `number`     | `64`                        | -    |
| rotate     | 水印绘制时，旋转的角度，单位 ° | `number`     | `-45`                       | -    |
| foreground | 否需要前置水印                 | `boolean`    | `false`                     | -    |

## 主题定制

| 名称                      | 默认值               | 描述 |
| :------------------------ | -------------------- | ---- |
| water_mark_text_font_size | `TOKENS.font_size_2` | -    |
| water_mark_text_color     | `TOKENS.gray_6`      | -    |
| water_mark_text_opacity   | `TOKENS.opacity_10`  | -    |
