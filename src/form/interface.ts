import type {
  FormProps as RCFormProps,
  FormInstance as RCFormInstance,
} from 'rc-field-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormInstance<Values = any> extends RCFormInstance<Values> {
  validateFieldsWithoutToast?: RCFormInstance<Values>['validateFields'];
}

export interface FormContextProps {
  form?: FormInstance;
}

/**
 * Form 组件可用 props
 * @description 暂时不支持自定义 component
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps<Values = any>
  extends Omit<RCFormProps<Values>, 'component' | 'from'> {
  form?: FormInstance<Values>;
}
