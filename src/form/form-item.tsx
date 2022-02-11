import type { FormInstance } from 'rc-field-form'
import { Field } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'
import type { NamePath } from 'rc-field-form/lib/interface'
import React from 'react'

type RenderChildren<Values = any> = (
  form: FormInstance<Values>,
) => React.ReactNode
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, 'children'>
type ChildrenType<Values = any> = RenderChildren<Values> | React.ReactNode

export interface FormItemProps<Values = any> extends RcFieldProps<Values> {
  children?: ChildrenType<Values>
}

function hasValidName(name?: NamePath): Boolean {
  return !(name === undefined || name === null)
}

function FormItem<Values = any>(
  props: FormItemProps<Values>,
): React.ReactElement {
  const { children, ...restProps } = props

  const hasName = hasValidName(restProps.name)
  const isRenderProps = typeof children === 'function'

  return (
    <Field {...restProps}>
      {!hasName &&
      (restProps.shouldUpdate || restProps.dependencies) &&
      isRenderProps
        ? (_, __, context) => (children as RenderChildren)(context)
        : (children as React.ReactElement)}
    </Field>
  )
}

export default FormItem
