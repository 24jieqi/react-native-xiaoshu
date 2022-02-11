import type { FormProps as RCFormProps } from 'rc-field-form'

/**
 * Form 组件可用 props
 * @description 暂时不支持自定义 component
 */
export interface FormProps<Values = any>
  extends Omit<RCFormProps<Values>, 'component'> {}
