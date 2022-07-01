---
title: Tree 树形控件
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# Tree 树形控件 <Badge>0.3.0+</Badge>

> 多层次的结构列表。

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 `树控件` 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 代码演示

> web 端有点问题，点击选中不会触发更新，需要触发一下折叠展开才能正确显示界面，App 端没有此问题。

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/multiple.tsx"></code>

<code src="./__fixtures__/multiple-independent.tsx"></code>

## API

<API hideTitle src="./tree.tsx"></API>

## 主题定制

| 名称                             | 默认值               | 描述 |
| :------------------------------- | -------------------- | ---- |
| tree_indent                      | `TOKENS.space_6`     | -    |
| tree_active_color                | `TOKENS.brand_6`     | -    |
| tree_active_color_lightness      | 95                   | -    |
| tree_min_height                  | 200                  | -    |
| tree_item_height                 | 50                   | -    |
| tree_item_padding_horizontal     | `TOKENS.space_3`     | -    |
| tree_item_text_margin_horizontal | `TOKENS.space_1`     | -    |
| tree_item_text_font_size         | `TOKENS.font_size_4` | -    |
| tree_item_text_color             | `TOKENS.gray_8`      | -    |
| tree_item_disabled_text_color    | `TOKENS.gray_5`      | -    |
| tree_item_highlight_text_color   | `TOKENS.brand_6`     | -    |
