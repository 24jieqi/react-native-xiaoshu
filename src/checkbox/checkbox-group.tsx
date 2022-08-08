import omit from 'lodash/omit'
import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import { useControllableValue } from '../hooks'
import Space from '../space'

import Checkbox from './checkbox'
import type { CheckboxGroupProps } from './interface'

function CheckboxGroup<T = any>({
  options,
  multiple,
  editable = true,
  scrollable = false,
  ...restProps
}: CheckboxGroupProps<T>) {
  const [value, onChange] = useControllableValue<T | T[]>(restProps, {
    defaultValue: multiple ? [] : undefined,
  })

  const contentJSX = (
    <Space {...omit(restProps, ['value', 'defaultValue', 'onChange'])}>
      {options.map(item => {
        const selected = multiple
          ? (value as T[]).indexOf(item.value) > -1
          : value === item.value

        return (
          <Checkbox
            key={`${item.value}`}
            activeValue={item.value}
            inactiveValue={null}
            value={selected ? item.value : null}
            label={item.label}
            disabled={item.disabled}
            onChange={_value => {
              if (!editable) {
                return
              }

              const isReset = _value !== item.value

              if (multiple) {
                const oldValue = value as T[]
                const newValue = isReset
                  ? oldValue.filter(v => v !== item.value)
                  : [item.value, ...oldValue]
                const newOptions = newValue.map(v => {
                  const optionIndex = options.findIndex(o => o.value === v)

                  return {
                    ...options[optionIndex],
                  }
                })

                onChange(newValue, newOptions)
              } else {
                const newValue = isReset ? undefined : _value
                const newOptions = isReset
                  ? undefined
                  : options.filter(o => o.value === _value)

                onChange(newValue, newOptions)
              }
            }}
          />
        )
      })}
    </Space>
  )

  if (scrollable && restProps.direction === 'horizontal' && !restProps.wrap) {
    return (
      <ScrollView
        horizontal
        bouncesZoom={false}
        showsHorizontalScrollIndicator={false}>
        {contentJSX}
      </ScrollView>
    )
  }

  return contentJSX
}

export default memo(CheckboxGroup) as <ActiveValueT = any>(
  p: CheckboxGroupProps<ActiveValueT>,
) => JSX.Element
