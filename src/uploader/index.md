---
title: Uploader 文件上传
nav:
  title: 组件
group:
  title: 展示组件
  order: 4
---

# Uploader 文件上传

> 展示一组上传文件，不包含任何选择、上传服务器的操作

## 代码演示

<code src="./__fixtures__/basic.tsx"></code>

## API

### Uploader

| 属性名         | 描述               | 类型                                                                | 默认值                    | 版本 |
| :------------- | ------------------ | ------------------------------------------------------------------- | ------------------------- | ---- |
| list           | 图片数组           | `T[]`                                                               | -                         | -    |
| maxCount       | 文件上传数量限制   | `number`                                                            | `Number.MAX_SAFE_INTEGER` | -    |
| imageComponent | 图片展示组件       | `ComponentType<{source?:ImageSourcePropType, [index: string]:any}>` | `Image`                   | -    |
| deletable      | 是否展示删除按钮   | `boolean`                                                           | `true`                    | -    |
| showUpload     | 是否展示上传区域   | `boolean`                                                           | `true`                    | -    |
| uploadText     | 上传区域文字提示   | `string`                                                            | `'图片'`                  | -    |
| uploadIcon     | 上传图标           | `React.ReactNode`                                                   | -                         | -    |
| onPressUpload  | 点击选择按钮       | `() => void`                                                        | -                         | -    |
| colCount       | 一行多少个列/图片  | `number`                                                            | `4`                       | -    |
| colGap         | 列/图片之间的间距  | `number\|'s'\|'m'\|'l'`                                             | `4`                       | -    |
| onPressImage   | 点击某一个图片     | `(current:T, index:number, list:T[]) => void`                       | -                         | -    |
| onPressDelete  | 点击删除文件       | `(current:T, index:number, list:T[]) => void`                       | -                         | -    |
| onPressError   | 点击上传出错的文件 | `(current:T, index:number, list:T[]) => void`                       | -                         | -    |

### Uploader.Regular <Badge>0.2.47+</Badge>

继承 UploaderProps 的 list、imageComponent、colCount、colGap、onPressImage、onPressDelete、onPressError、deletable。

| 属性名        | 描述                                                   | 类型                             | 默认值 | 版本 |
| :------------ | ------------------------------------------------------ | -------------------------------- | ------ | ---- |
| count         | 共多少个上传，请保持数组引用不变，数组可以自定义文案等 | `number\|(RegularCount\|null)[]` | -      | -    |
| onPressUpload | 点击某个按钮                                           | `(index: number) => void`        | -      | -    |

## 主题定制

| 名称                             | 默认值                   | 描述 |
| :------------------------------- | ------------------------ | ---- |
| uploader_image_gap_s             | `TOKENS.space_2`         | -    |
| uploader_image_gap_m             | `TOKENS.space_3`         | -    |
| uploader_image_gap_l             | `TOKENS.space_4`         | -    |
| uploader_image_border_radius     | `TOKENS.border_radius_s` | -    |
| uploader_image_delete_size       | 16                       | -    |
| uploader_image_background_color  | `TOKENS.gray_2`          | -    |
| uploader_upload_text_color       | `TOKENS.gray_6`          | -    |
| uploader_upload_text_font_size   | `TOKENS.font_size_3`     | -    |
| uploader_upload_text_line_height | 20                       | -    |
| uploader_upload_text_margin_top  | `TOKENS.space_1`         | -    |
