import { useMemo } from 'react'
import { Keyboard } from 'react-native'
import type { FormInstance } from 'rc-field-form'
import { useForm as useRcForm } from 'rc-field-form'

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
      },
    [form, rcForm],
  )

  return [wrapForm]
}
