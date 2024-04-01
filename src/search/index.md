---
title: Search 搜索
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Search 搜索

> 用于搜索场景的输入框组件。

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

## 主题定制

| 名称                               | 默认值           | 描述 |
| :--------------------------------- | ---------------- | ---- |
| search_background_color            | `TOKENS.white`   | -    |
| search_padding_horizontal          | `TOKENS.space_3` | -    |
| search_padding_vertical            | `TOKENS.space_1` | -    |
| search_gap                         | `TOKENS.space_2` | -    |
| search_back_icon_color             | `TOKENS.gray_8`  | -    |
| search_text_input_background_color | `TOKENS.gray_3`  | -    |

## FAQ

### 输入框聚焦时点击清除按钮不起作用，需要再点击一下

Search 嵌套到 ScrollView 里面会影响点击事件（软键盘出现的状态，点击其他地方默认先收起软键盘，其他地方的点击事件不响应），需要在 ScrollView 组件上添加 keyboardShouldPersistTaps="handled"，handled，当点击事件被子组件捕获时，键盘不会自动收起。这样切换 TextInput 时键盘可以保持状态。

其他 TextInput 的场景（点击按钮不收起软键盘）可以作为参考。
