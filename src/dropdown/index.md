---
title: Dropdown 下拉菜单
nav:
  title: 组件
group:
  title: 反馈组件
  order: 3
---

# Dropdown 下拉菜单

> 向下弹出的菜单列表。

## 何时使用

适用于列表顶部、底部筛选条件。

## 注意

组件嵌套到 `ScrollView` 组件中，iOS 用户点击到了状态栏会触发滚动区域回到顶部，可以通过 `ScrollView` 组件的 `scrollsToTop` 阻止

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Dropdown

| 属性名              | 描述                         | 类型                   | 默认值                    | 版本 |
| :------------------ | ---------------------------- | ---------------------- | ------------------------- | ---- |
| divider             | 是否显示分割线               | `boolean`              | `true`                    | -    |
| iconStyle           | 图标样式                     | `StyleProp<ViewStyle>` | -                         | -    |
| activeColor         | 菜单标题和选项的选中态颜色   | `ColorValue`           | `dropdown_active_color`   | -    |
| direction           | 箭头默认朝向                 | `'up'\|'down'`         | `'down'`                  | -    |
| titleStyle          | 标题样式                     | `StyleProp<ViewStyle>` | -                         | -    |
| titleTextStyle      | 标题文案样式                 | `StyleProp<TextStyle>` | -                         | -    |
| duration            | 动画时长，单位秒             | `number`               | `animation_duration_fast` | -    |
| zIndex              | 菜单栏 z-index 层级          | `number`               | `10`                      | -    |
| closeOnPressOutside | 是否在点击外部元素后关闭菜单 | `boolean`              | `true`                    | -    |

### Dropdown.Item

- `options` 支持树结构 <Badge>0.2.13+</Badge>

继承 TreeProps 的 search、onSearch、cancellable。

| 属性名              | 描述                         | 类型                                     | 默认值                    | 版本 |
| :------------------ | ---------------------------- | ---------------------------------------- | ------------------------- | ---- |
| titleStyle          | 标题样式                     | `StyleProp<ViewStyle>`                   | -                         | -    |
| titleTextStyle      | 标题文案样式                 | `StyleProp<TextStyle>`                   | -                         | -    |
| options             | 选项数组                     | `DropdownItemOption<T>[]`                | -                         | -    |
| value               | 受控模式所显示的值           | `T`                                      | -                         | -    |
| defaultValue        | 非受控模式的初始值           | `T`                                      | -                         | -    |
| onChange            | 变化时的回调函数             | `(v:T, d:DropdownItemOption<T>) => void` | -                         | -    |
| duration            | 动画时长，单位秒             | `number`                                 | `animation_duration_fast` | -    |
| zIndex              | 菜单栏 z-index 层级          | `number`                                 | `10`                      | -    |
| closeOnPressOutside | 是否在点击外部元素后关闭菜单 | `boolean`                                | `true`                    | -    |
| loading             | 选项数组加载中               | `boolean`                                | -                         | -    |
| placeholder         | 没有值时提示文案             | `string`                                 | -                         | -    |
| iconStyle           | 图标样式                     | `StyleProp<ViewStyle>`                   | -                         | -    |
| disabled            | 是否禁用菜单                 | `boolean`                                | `false`                   | -    |

### Dropdown.Multiple <Badge>0.3.9+</Badge>

去掉 DropdownItemProps 的 value、defaultValue、onChange，继承 TreeProps 的 multipleMode。

| 属性名        | 描述                                           | 类型                                                                            | 默认值 | 版本 |
| :------------ | ---------------------------------------------- | ------------------------------------------------------------------------------- | ------ | ---- |
| value         | 受控模式所显示的值                             | `T[]`                                                                           | -      | -    |
| defaultValue  | 非受控模式的初始值                             | `T[]`                                                                           | -      | -    |
| onChange      | 变化时的回调函数                               | `(v:T[], d:DropdownItemOption<T>[]) => void`                                    | -      | -    |
| beforeChecked | 多选的条件下，点击某个选项，返回自定义新的数据 | `(event: {value:T[], option:TreeOption, checked:boolean}) => T[]\|Promise<T[]>` | -      | -    |

### Dropdown.Popup <Badge>0.2.42+</Badge>

继承 DropdownItemProps 的 zIndex、closeOnPressOutside，继承 Popup 公共属性。

| 属性名        | 描述                                                 | 类型                               | 默认值 | 版本 |
| :------------ | ---------------------------------------------------- | ---------------------------------- | ------ | ---- |
| targetHeight  | 触发目标高度，计算弹出层应该出现的位置（上面、下面） | `number`                           | -      | -    |
| targetPageY   | 触发目标 pageY                                       | `number`                           | -      | -    |
| onPressShade  | 点击非内容的遮罩阴影                                 | `TouchableOpacityProps['onPress']` | -      | -    |
| safeAreaInset | 是否开启顶部/底部安全区适配                          | `boolean`                          | `true` | -    |
| showShade     | 是否渲染 shade 元素，某些场景不需要遮罩非选项区域    | `boolean`                          | `true` | -    |
| contentStyle  | 内容包裹层的样式                                     | `StyleProp<ViewStyle>`             | -      | -    |

## 主题定制

| 名称                          | 默认值               | 描述 |
| :---------------------------- | -------------------- | ---- |
| dropdown_active_color         | `TOKENS.brand_6`     | -    |
| dropdown_background_color     | `TOKENS.white`       | -    |
| dropdown_menu_height          | 40                   | -    |
| dropdown_text_font_size       | `TOKENS.font_size_4` | -    |
| dropdown_text_color           | `TOKENS.gray_7`      | -    |
| dropdown_text_disabled_color  | `TOKENS.gray_6`      | -    |
| dropdown_text_margin_right    | 4                    | -    |
| dropdown_text_icon_size       | 12                   | -    |
| dropdown_text_icon_color      | `TOKENS.gray_6`      | -    |
| dropdown_badge_color          | `TOKENS.red_6`       | -    |
| dropdown_badge_text_font_size | `TOKENS.font_size_3` | -    |
| dropdown_badge_dot_size       | 8                    | -    |
