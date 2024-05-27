---
title: Field 输入项
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Field 输入项

> 与表单进行交互，包含 onChange、value、defaultValue。

## 何时使用

适用于表单场景。

该系列组件采用单元格+其他组件组合而成，以单元格属性为主，其他组件属性为辅。

## 元素结构

```bash
## Field.Text
|-- Cell  ## 几乎就是一个单元格，右侧内容显示 value 或 placeholder

## Field.Selector | Field.Date
|-- Field.Text  ## 几乎就是一个 Field.Text

## Field.TextInput | Field.NumberInput | Field.Switch | Field.Password
|-- Cell
|--|-- value:TextInput|NumberInput|Switch|PasswordInput ## value 自定义元素

## Field.Checkbox
|-- Cell
|--|-- value:Space ## value 自定义元素
|--|--|-- Checkbox ## 遍历选项数组
```

## 代码演示

<code src="./__fixtures__/text.tsx"></code>

<code src="./__fixtures__/selector.tsx"></code>

<code src="./__fixtures__/text-input.tsx"></code>

<code src="./__fixtures__/number-input.tsx"></code>

<code src="./__fixtures__/switch.tsx"></code>

<code src="./__fixtures__/date.tsx"></code>

<code src="./__fixtures__/date-range.tsx"></code>

<code src="./__fixtures__/checkbox.tsx"></code>

<code src="./__fixtures__/password.tsx"></code>

<code src="./__fixtures__/button-option.tsx"></code>

## API

### Field.Text

去掉 CellProps 的 value。

| 属性名               | 描述                     | 类型                              | 默认值                              | 版本 |
| :------------------- | ------------------------ | --------------------------------- | ----------------------------------- | ---- |
| placeholder          | 没有值时提示文案         | `string`                          | -                                   | -    |
| placeholderTextColor | 占位字符串显示的文字颜色 | `ColorValue`                      | `text_input_placeholder_text_color` | -    |
| value                | 显示的文案               | `string\|number\|React.ReactNode` | -                                   | -    |

### Field.Selector

去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value，继承 SelectorProps 的 value、multiple、options、onChange、search。

| 属性名               | 描述                                                       | 类型                                                                                  | 默认值                              | 版本 |
| :------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------- | ---- |
| placeholder          | 没有值时提示文案                                           | `string`                                                                              | -                                   | -    |
| placeholderTextColor | 占位字符串显示的文字颜色                                   | `ColorValue`                                                                          | `text_input_placeholder_text_color` | -    |
| optionsLoading       | 候选项是否在加载中                                         | `boolean`                                                                             | `false`                             | -    |
| editable             | 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果 | `boolean`                                                                             | `true`                              | -    |
| clearable            | 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value | `boolean`                                                                             | `false`                             | -    |
| selectorTitle        | 选择器标题                                                 | `string`                                                                              | `'请选择'`                          | -    |
| renderResultText     | 自定义渲染选择后的结果文案                                 | `(value:SelectorProps['value'], options:SelectorProps['options']) => React.ReactNode` | -                                   | -    |
| isLink               | 是否展示右侧箭头                                           | `boolean`                                                                             | `true`                              | -    |

### Field.TextInput

去掉 TextInputProps 的 style、bordered、size、textAlign，以，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、valueTextStyle、valueTextNumberOfLines、onPressDebounceWait。

> TextInput 也有 textAlign，以 TextInput 为准。如果是 textarea 会锁定竖向排版、文字左对齐、出现输入框边框。

| 属性名            | 描述                                                                  | 类型                          | 默认值    | 版本 |
| :---------------- | --------------------------------------------------------------------- | ----------------------------- | --------- | ---- |
| textInputStyle    | 自定义输入框的样式，TextInputProps 的 style                           | `StyleProp<TextStyle>`        | -         | -    |
| textInputBordered | 是否显示输入框 border，自定义输入框的样式，TextInputProps 的 bordered | `boolean`                     | -         | -    |
| textAlign         | 文字对齐，TextInputProps 的 textAlign                                 | `TextInputProps['textAlign']` | `'right'` | -    |

### Field.NumberInput

去掉 NumberInputProps 的 style、bordered、size、textAlign，以，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、valueTextStyle、valueTextNumberOfLines、onPressDebounceWait。

> NumberInput 也有 textAlign，以 NumberInput 为准。

| 属性名            | 描述                                                                    | 类型                            | 默认值    | 版本 |
| :---------------- | ----------------------------------------------------------------------- | ------------------------------- | --------- | ---- |
| textInputStyle    | 自定义输入框的样式，NumberInputProps 的 style                           | `StyleProp<TextStyle>`          | -         | -    |
| textInputBordered | 是否显示输入框 border，自定义输入框的样式，NumberInputProps 的 bordered | `boolean`                       | -         | -    |
| textAlign         | 文字对齐，NumberInputProps 的 textAlign                                 | `NumberInputProps['textAlign']` | `'right'` | -    |

### Field.Switch

继承 SwitchProps，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、valueTextStyle、valueTextNumberOfLines。

### Field.Date

去掉 FieldTextProps 的 value、onPress、isLink、disabled，继承 DatePickerSingleMethodProps 的 min、max、renderLabel、confirmButtonText、cancelButtonText。

| 属性名                 | 描述                                                       | 类型                                                                          | 默认值  | 版本 |
| :--------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------- | ------- | ---- |
| mode                   | 日期选择的类型                                             | `DatePickerSingleMethodProps['mode']`                                         | `'Y-m'` | -    |
| value                  | 受控模式所显示的值                                         | `Date`                                                                        | -       | -    |
| defaultValue           | 非受控模式初始化的值                                       | `Date`                                                                        | -       | -    |
| onChange               | 变化时的回调函数                                           | `(v:Date) => void`                                                            | -       | -    |
| formatValueText        | 自定义格式化文案                                           | `(v:Date, mode:DatePickerSingleMethodProps['mode'], str:string) => string`    | -       | -    |
| datePickerTitle        | 时间选择器顶部标题                                         | `string`                                                                      | -       | -    |
| datePickerCustomOption | 自定义时间选择器配置                                       | `(opt: object) => Omit<DatePickerSingleMethodProps, 'onCancel'\|'onConfirm'>` | -       | -    |
| isLink                 | 是否展示右侧箭头                                           | `boolean`                                                                     | `true`  | -    |
| editable               | 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果 | `boolean`                                                                     | `true`  | -    |
| clearable              | 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value | `boolean`                                                                     | `false` | -    |

### Field.DateRange

去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign，继承 DatePickerRangeMethodProps 的 min、max、renderLabel、confirmButtonText、cancelButtonText。

> 如果是竖向排版，文字锁定左对齐。

| 属性名                 | 描述                                                                | 类型                                                                              | 默认值                              | 版本 |
| :--------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------- | ---- |
| mode                   | 日期选择的类型                                                      | `DatePickerRangeMethodProps['mode']`                                              | `'Y-D'`                             | -    |
| value                  | 受控模式所显示的值                                                  | `[Date, Date]`                                                                    | -                                   | -    |
| defaultValue           | 非受控模式初始化的值                                                | `[Date, Date]`                                                                    | -                                   | -    |
| onChange               | 变化时的回调函数                                                    | `(v:[Date, Date]) => void`                                                        | -                                   | -    |
| formatValueText        | 自定义格式化文案                                                    | `(v:[Date, Date], mode:DatePickerRangeMethodProps['mode'], str:string) => string` | -                                   | -    |
| datePickerTitle        | 时间选择器顶部标题                                                  | `string`                                                                          | -                                   | -    |
| dataPickerBeforeClose  | 时间选择器关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `DatePickerRangeMethodProps['beforeClose']`                                       | -                                   | -    |
| datePickerCustomOption | 自定义时间选择器配置                                                | `(opt: object) => Omit<DatePickerRangeMethodProps, 'onCancel'\|'onConfirm'>`      | -                                   | -    |
| placeholder            | 没有值时提示文案                                                    | `[string, string]`                                                                | -                                   | -    |
| placeholderTextColor   | 占位字符串显示的文字颜色                                            | `ColorValue`                                                                      | `text_input_placeholder_text_color` | -    |
| isLink                 | 是否展示右侧箭头                                                    | `boolean`                                                                         | `true`                              | -    |
| editable               | 是否可以编辑，readonly 相似，保持 TextInput 自带的属性效果          | `boolean`                                                                         | `true`                              | -    |
| clearable              | 是否启用清除图标，且箭头会消失，点击清除图标后会清空 value          | `boolean`                                                                         | `false`                             | -    |

### Field.Checkbox

继承 CheckboxGroupProps 的 value、defaultValue、options、onChange、multiple、editable、scrollable、checkboxLabelTextStyle、checkboxIconLabelGap、activeColor、iconSize、deselect，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、isLink、center。

### Field.Password

去掉 PasswordInputProps 的 style、bordered、size、textAlign，以，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、valueTextStyle、valueTextNumberOfLines、onPressDebounceWait。

> PasswordInput 也有 textAlign，以 PasswordInput 为准。

| 属性名            | 描述                                                                      | 类型                              | 默认值    | 版本 |
| :---------------- | ------------------------------------------------------------------------- | --------------------------------- | --------- | ---- |
| textInputStyle    | 自定义输入框的样式，PasswordInputProps 的 style                           | `StyleProp<TextStyle>`            | -         | -    |
| textInputBordered | 是否显示输入框 border，自定义输入框的样式，PasswordInputProps 的 bordered | `boolean`                         | -         | -    |
| textAlign         | 文字对齐，PasswordInputProps 的 textAlign                                 | `PasswordInputProps['textAlign']` | `'right'` | -    |

### Field.ButtonOption

继承 ButtonOptionGroupProps 的 value、defaultValue、options、onChange、multiple、editable、type、deselect、activeHighlight、round、scrollable，去掉 CellProps 点击事件相关属性(TouchableHighlightProps)、value、textAlign、isLink、center。

## 主题定制

| 名称               | 默认值           | 描述 |
| :----------------- | ---------------- | ---- |
| field_checkbox_gap | `TOKENS.space_6` | -    |

## FAQ

### Field.TextInput 使用 vertical 上下排列的时候，addonAfter 不显示

`Field.TextInput` 竖向排版时默认它的内部是 textarea 多行文本输入框。[可以使用 Cell 和 TextInput 组合一下](https://github.com/24jieqi/react-native-xiaoshu/issues/46#issuecomment-1851336433)，可以实现想要的排版。
