import omit from 'lodash/omit'
import React, { memo } from 'react'

import Cell from '../cell'
import Checkbox from '../checkbox'
import { useControllableValue } from '../hooks'
import Space from '../space'
import { useThemeTokens, createVar } from '../theme'

import type { FieldCheckboxProps, FieldCheckboxValue } from './interface'
import { varCreator } from './style'

const FieldCheckbox: React.FC<FieldCheckboxProps> = ({
  multiple = false,
  options,
  editable = true,

  ...restProps
}) => {
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)

  const [value, onChange] = useControllableValue<
    FieldCheckboxValue | FieldCheckboxValue[]
  >(restProps, {
    defaultValue: multiple ? [] : undefined,
  })

  return (
    <Cell
      {...omit(restProps, ['value', 'defaultValue', 'onChange'])}
      center
      value={
        <Space
          direction="horizontal"
          gapVertical={0}
          gapHorizontal={CV.field_checkbox_gap}
          justify="flex-end">
          {options.map(item => {
            const selected = multiple
              ? (value as FieldCheckboxValue[]).indexOf(item.value) > -1
              : value === item.value

            return (
              <Checkbox<FieldCheckboxValue, null>
                key={item.value}
                activeValue={item.value}
                inactiveValue={null}
                value={selected ? item.value : null}
                label={item.label}
                disabled={!editable}
                onChange={_value => {
                  const isReset = _value !== item.value

                  if (multiple) {
                    const oldValue = value as FieldCheckboxValue[]
                    const newValue = isReset
                      ? oldValue.filter(v => v !== item.value)
                      : [item.value, ...oldValue]
                    const newLabel = newValue.map(v => {
                      const optionIndex = options.findIndex(o => o.value === v)

                      return {
                        ...options[optionIndex],
                      }
                    })

                    onChange(newValue, newLabel)
                  } else {
                    const newValue = isReset ? undefined : _value
                    const newLabel = isReset
                      ? undefined
                      : {
                          ...options.filter(o => o.value === _value)[0],
                        }

                    onChange(newValue, newLabel)
                  }
                }}
              />
            )
          })}
        </Space>
      }
    />
  )
}

export default memo(FieldCheckbox)
