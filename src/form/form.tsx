import type { FormInstance as RCFormInstance } from 'rc-field-form'
import RCForm from 'rc-field-form'
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface'
import React, { useImperativeHandle, forwardRef, useMemo } from 'react'

import { usePersistFn } from '../hooks'
import Toast from '../toast'

import { FormContext } from './context'
import type { FormProps } from './interface'
import useForm from './useForm'

/**
 * 默认处理错误的回调
 */
const defaultOnFinishFailed = (errorInfo: ValidateErrorEntity<unknown>) => {
  Toast(errorInfo.errorFields[0].errors[0])
}

const InternalForm: React.ForwardRefRenderFunction<
  RCFormInstance,
  FormProps
> = (
  { onFinishFailed = defaultOnFinishFailed, form, onFinish, ...restProps },
  ref,
) => {
  const [wrapForm] = useForm(form)
  const value = useMemo(
    () => ({
      form: wrapForm,
    }),
    [wrapForm],
  )

  useImperativeHandle(ref, () => wrapForm)

  const onFinishPersistFn = usePersistFn(() => {
    onFinish?.(wrapForm.getFieldsValue(true))
  })

  return (
    <FormContext.Provider value={value}>
      <RCForm
        {...restProps}
        component={false}
        form={wrapForm}
        onFinishFailed={onFinishFailed}
        onFinish={onFinishPersistFn}
      />
    </FormContext.Provider>
  )
}

const Form = forwardRef<RCFormInstance, FormProps>(InternalForm) as <
  Values = any,
>(
  props: React.PropsWithChildren<FormProps<Values>> & {
    ref?: React.Ref<RCFormInstance<Values>>
  },
) => React.ReactElement

export default Form
