import { useState } from 'react'

import usePersistFn from './usePersistFn'

export interface Options<T> {
  defaultValue?: T
  defaultValuePropName?: string
  valuePropName?: string
  trigger?: string
}

export type Props = Record<string, any>

export interface StandardProps<T> {
  value: T
  defaultValue?: T
  onChange: (val: T) => void
}

function useControllableValue<T = any>(
  props: StandardProps<T>,
): [T, (val: T) => void]
function useControllableValue<T = any>(
  props?: Props,
  options?: Options<T>,
): [T, (v: T, ...args: any[]) => void]
function useControllableValue<T = any>(
  props: Props = {},
  options: Options<T> = {},
) {
  const {
    defaultValue,
    defaultValuePropName = 'defaultValue',
    valuePropName = 'value',
    trigger = 'onChange',
  } = options

  const value = props[valuePropName] as T
  const isControlled = valuePropName in props

  const [localValue, setLocalValue] = useState<T>(() => {
    if (isControlled) {
      return value
    }
    if (defaultValuePropName in props) {
      return props[defaultValuePropName]
    }
    return defaultValue
  })

  const setState = (v: T, ...args: any[]) => {
    if (!isControlled) {
      setLocalValue(v)
    }
    if (props[trigger]) {
      props[trigger](v, ...args)
    }
  }

  return [isControlled ? value : localValue, usePersistFn(setState)] as const
}

export default useControllableValue
