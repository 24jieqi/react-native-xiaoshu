---
title: Search 搜索
nav:
  title: 组件
  path: /component
group:
  path: /form
  order: 1
---

# Search 搜索

> 用于搜索场景的输入框组件。

<Alert type="info">
Search 嵌套到 ScrollView 里面会影响 clearable 响应，需要在 ScrollView 组件上添加 keyboardShouldPersistTaps="handled"
</Alert>
<Alert type="info">
handled，当点击事件被子组件捕获时，键盘不会自动收起。这样切换 TextInput 时键盘可以保持状态。多数带有 TextInput 的情况下你应该选择此项。
</Alert>

## 元素结构

```bash
|-- View  ## style
|--|-- ArrowLeftOutline
|--|-- TextInput
|--|--|-- prefix:SearchOutline
|--|-- Button
```

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

<API hideTitle src="./search.tsx"></API>

## 主题定制

| 名称                               | 默认值           | 描述 |
| :--------------------------------- | ---------------- | ---- |
| search_background_color            | `TOKENS.white`   | -    |
| search_padding_horizontal          | `TOKENS.space_3` | -    |
| search_padding_vertical            | `TOKENS.space_1` | -    |
| search_gap                         | `TOKENS.space_2` | -    |
| search_back_icon_color             | `TOKENS.gray_8`  | -    |
| search_text_input_background_color | `TOKENS.gray_3`  | -    |
