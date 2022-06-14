---
title: StepSelector 步骤选择器
nav:
  title: 组件
  path: /component
group:
  title: 表单组件
  path: /form
  order: 1
---

# StepSelector 步骤选择器 <Badge>0.2.9+</Badge>

> 可以用作层级选择，例如组织层级、省市区

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Selector 函数

<API hideTitle src="./step-selector-method.tsx"></API>

### Selector.Component

### Selector.StepSelectorComponent

`Selector.Component` 与 `Selector.StepSelectorComponent` 属性相同，`Selector.Component` 被 `Portal` 组件包裹，在根节点渲染。

<API hideTitle src="./step-selector.tsx"></API>

## 主题定制

| 名称                                      | 默认值               | 描述 |
| :---------------------------------------- | -------------------- | ---- |
| step_selector_active_color                | `TOKENS.brand_6`     | -    |
| step_selector_option_index_width          | `TOKENS.space_6`     | -    |
| step_selector_option_index_text_color     | `TOKENS.gray_6`      | -    |
| step_selector_option_index_text_font_size | `TOKENS.font_size_5` | -    |
