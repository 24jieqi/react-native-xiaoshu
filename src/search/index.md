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

继承 TextInputProps 的 value、defaultValue、placeholder、placeholderTextColor、autoFocus、onChangeText。

| 属性名               | 描述                        | 类型                     | 默认值                              | 版本 |
| :------------------- | --------------------------- | ------------------------ | ----------------------------------- | ---- |
| iconSize             | 图标大小                    | `number`                 | `20`                                | -    |
| iconColor            | 图标颜色                    | `ColorValue`             | `text_input_placeholder_text_color` | -    |
| onSearch             | 点击搜索                    | `(value:string) => void` | -                                   | -    |
| showBack             | 显示返回图标                | `boolean`                | `false`                             | -    |
| onPressBack          | 点击返回图标                | `() => void`             | -                                   | -    |
| autoSearch           | 内容变化时自动触发 onSearch | `boolean`                | `false`                             | -    |
| onSearchDebounceWait | onSearch debounce wait      | `number`                 | `300`                               | -    |
| searchText           | 搜索按钮文案                | `string`                 | `'搜索'`                            | -    |
| extra                | 搜索按钮右侧自定义内容      | `React.ReactNode`        | -                                   | -    |
| prefix               | 搜索 icon 左边自定义内容    | `React.ReactNode`        | -                                   | -    |
| suffix               | 搜索框内右边自定义内容      | `React.ReactNode`        | -                                   | -    |
| showSearchButton     | 是否显示搜索按钮            | `boolean`                | `true`                              | -    |

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
