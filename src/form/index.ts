import type { FormInstance } from 'rc-field-form'
import {
  List,
  FormProvider,
  FieldContext,
  ListContext,
  useWatch,
} from 'rc-field-form'
import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface'
import type { ListProps } from 'rc-field-form/lib/List'

import InternalForm from './form'
import type { FormItemProps } from './form-item'
import Item from './form-item'
import type { FormProps } from './interface'
import useForm from './useForm'

type InternalFormType = typeof InternalForm

interface FormInterface extends InternalFormType {
  useForm: typeof useForm
  useWatch: typeof useWatch
  Item: typeof Item
  List: typeof List
  Provider: typeof FormProvider
}

const Form = InternalForm as FormInterface
const FormItemContext = FieldContext

Form.Item = Item
Form.List = List
Form.useForm = useForm
Form.useWatch = useWatch
Form.Provider = FormProvider

export type {
  FormInstance,
  FormProps,
  FormItemProps,
  ListProps,
  Rule,
  RuleObject,
  RuleRender,
}

export { FormItemContext, ListContext }

export default Form
