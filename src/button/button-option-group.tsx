import omit from 'lodash/omit'
import React from 'react'
import { ScrollView } from 'react-native'

import { useControllableValue } from '../hooks'
import Space from '../space'

import ButtonOption from './button-option'
import type { ButtonOptionGroupProps } from './interface'

function ButtonOptionGroup<T = any>({
  theme,
  activeHighlight = true,
  type = 'hazy',
  round = false,
  editable = true,
  scrollable = false,
  deselect = true,

  options,
  multiple,

  ...restProps
}: ButtonOptionGroupProps<T>) {
  const [value, onChange] = useControllableValue<T | T[] | null>(restProps, {
    defaultValue: multiple ? [] : undefined,
  })

  const contentJSX = (
    <Space
      {...omit(restProps, ['value', 'defaultValue', 'onChange'])}
      direction="horizontal">
      {options.map(item => {
        const selected = multiple
          ? ((value as T[]) || []).indexOf(item.value) > -1
          : value === item.value

        return (
          <ButtonOption
            theme={theme}
            key={`${item.value}`}
            type={type}
            round={round}
            text={item.label}
            badge={item.badge}
            disabled={item.disabled}
            activeHighlight={activeHighlight}
            active={selected}
            onPress={() => {
              if (!editable) {
                return
              }

              if (multiple) {
                const oldValue = (value as T[]) || []
                const _value = oldValue.filter(v => v !== item.value)
                const newValue =
                  _value.length === oldValue.length
                    ? [item.value, ...oldValue]
                    : _value
                const newOptions = newValue.map(v => {
                  const optionIndex = options.findIndex(o => o.value === v)

                  return {
                    ...options[optionIndex],
                  }
                })

                onChange(newValue, newOptions)
              } else {
                if (item.value === value) {
                  if (deselect) {
                    onChange(null, [])
                  }
                } else {
                  onChange(
                    item.value,
                    options.filter(o => o.value === item.value),
                  )
                }
              }
            }}
          />
        )
      })}
    </Space>
  )

  if (scrollable && !restProps.wrap) {
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

export default ButtonOptionGroup
