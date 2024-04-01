---
title: Form 表单
nav:
  title: 组件
group:
  title: 表单组件
  order: 2
---

# Form 表单

> 基于 [rc-field-form](https://github.com/react-component/field-form) 的表单，使用体验大致与 Antd Form 一致。

## 何时使用

适用于表单场景。

## 代码演示

<code src="./__fixtures__/base.tsx"></code>

<code src="./__fixtures__/ref.tsx"></code>

<code src="./__fixtures__/context.tsx"></code>

<code src="./__fixtures__/deps.tsx"></code>

<code src="./__fixtures__/list.tsx"></code>

<code src="./__fixtures__/use-form-instance.tsx"></code>

## Hooks

### Form.useForm

`type Form.useForm = (): [FormInstance]`

创建 Form 实例，用于管理所有数据状态。

### Form.useFormInstance <Badge>0.2.50+</Badge>

`type Form.useFormInstance = (): FormInstance`

获取当前上下文正在使用的 Form 实例，常见于封装子组件消费无需透传 Form 实例。

```js | pure
const Sub = () => {
  const form = Form.useFormInstance()

  return <Button onClick={() => form.setFieldsValue({})} />
}

export default () => {
  const [form] = Form.useForm()

  return (
    <Form form={form}>
      <Sub />
    </Form>
  )
}
```

### Form.useWatch <Badge>0.2.45+</Badge>

`type Form.useWatch = (namePath: NamePath, formInstance: FormInstance): Value`

用于直接获取 form 中字段对应的值。通过该 Hooks 可以与诸如 useSWR 进行联动从而降低维护成本。

```js | pure
const Demo = () => {
  const [form] = Form.useForm()
  const userName = Form.useWatch('username', form)

  const { data: options } = useSWR(`/api/user/${userName}`, fetcher)

  return (
    <Form form={form}>
      <Form.Item name="username">
        <AutoComplete options={options} />
      </Form.Item>
    </Form>
  )
}
```
