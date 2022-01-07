import {
  FormInstance,
  Field,
  List,
  useForm,
  FormProvider,
  FieldContext,
  ListContext,
} from 'rc-field-form'
import type { Rule, RuleObject, RuleRender } from 'rc-field-form/lib/interface'
import type { ListProps } from 'rc-field-form/lib/List'

import InternalForm from './form'
import type { FormProps, FormItemProps } from './interface'

type InternalFormType = typeof InternalForm

interface FormInterface extends InternalFormType {
  useForm: typeof useForm
  Item: typeof Field
  List: typeof List
  Provider: typeof FormProvider
}

const Form = InternalForm as FormInterface
const FormItemContext = FieldContext

Form.Item = Field
Form.List = List
Form.useForm = useForm
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
