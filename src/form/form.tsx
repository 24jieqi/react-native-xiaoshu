import React, { useRef, useImperativeHandle, forwardRef } from 'react'
import type { FormInstance as RCFormInstance } from 'rc-field-form'
import RCForm from 'rc-field-form'

import type { FormProps } from './interface'

const InternalForm: React.ForwardRefRenderFunction<
  RCFormInstance,
  FormProps
> = (props, ref) => {
  const FormRef = useRef<RCFormInstance>(null)

  useImperativeHandle(ref, () => FormRef.current)

  return <RCForm {...props} ref={FormRef} component={false} />
}

const Form = forwardRef<RCFormInstance, FormProps>(InternalForm) as <
  Values = any,
>(
  props: React.PropsWithChildren<FormProps<Values>> & {
    ref?: React.Ref<RCFormInstance<Values>>
  },
) => React.ReactElement

export default Form
