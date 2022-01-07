import type { FormProps as RCFormProps } from 'rc-field-form'
import type { FieldProps } from 'rc-field-form/lib/Field'

/**
 * Form 组件可用 props
 * @description 暂时不支持自定义 component
 */
export interface FormProps<Values = any>
  extends Omit<RCFormProps<Values>, 'component'> {}

/**
 * FormItem 组件可用 props
 * @description 将 Field 重命名一下
 */
export interface FormItemProps extends FieldProps {}
