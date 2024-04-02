---
title: 🎨 Design Tokens
order: 5
nav:
  title: 指南
group:
  title: 开发指南
  path: /guide
---

# Design Tokens

`小暑`目前采用「白露」设计规范。

<code inline src="./code/design-tokens-vars.tsx"></code>

:::warning
以下代码仅用于组件变量转换为 markdown 表格语法，复制到组件文档下方。
:::

```js | pure
var style2md = s => {
  const a = s
    .trim()
    .split(',')
    .map(t => {
      const ts = t.replace(/(\\n|\s)/g, '').split(':')
      return [ts[0], ts[1]]
    })
    .filter(([key]) => !!key)
    .map(([key, value]) => {
      return `| ${key} | ${
        /^TOKENS/.test(value) ? '`' + value + '`' : value
      } | -    |`
    })
    .join('\n')

  console.log(a)
}
```
