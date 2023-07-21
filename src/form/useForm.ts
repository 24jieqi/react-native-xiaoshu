import { useForm as useRcForm } from 'rc-field-form'
import { useMemo } from 'react'
import { Keyboard } from 'react-native'

import Toast from '../toast'

import type { FormInstance } from './interface'

export default function <Values = any>(
  form?: FormInstance<Values>,
): [FormInstance<Values>] {
  const [rcForm] = useRcForm<Values>()

  const wrapForm: FormInstance<Values> = useMemo(
    () =>
      form ?? {
        ...rcForm,

        submit: (...args) => {
          // 触发提交的时候收齐软键盘
          Keyboard.dismiss()
          rcForm.submit(...args)
        },
        validateFields: (...args) => {
          return new Promise<Values>((resolve, reject) => {
            rcForm
              .validateFields(...args)
              .then(resolve)
              .catch(e => {
                Toast(e.errorFields[0].errors[0])
                reject(e)
              })
          })
        },
        validateFieldsWithoutToast: rcForm.validateFields,
      },
    [form, rcForm],
  )

  return [wrapForm]
}
