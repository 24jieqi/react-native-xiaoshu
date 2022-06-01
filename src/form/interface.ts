import type {
  FormProps as RCFormProps,
  FormInstance as RCFormInstance,
} from 'rc-field-form'

export interface FormInstance<Values = any> extends RCFormInstance<Values> {
  validateFieldsWithoutToast?: RCFormInstance<Values>['validateFields']
}

export interface FormContextProps {
  form?: FormInstance
}

/**
 * Form 组件可用 props
 * @description 暂时不支持自定义 component
 */
export interface FormProps<Values = any>
  extends Omit<RCFormProps<Values>, 'component' | 'from'> {
  form?: FormInstance<Values>
}
