import omit from 'lodash/omit'
import React, { memo } from 'react'
import { ScrollView } from 'react-native'

import { useControllableValue } from '../hooks'
import Space from '../space'

import Checkbox from './checkbox'
import type { CheckboxGroupProps } from './interface'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CheckboxGroup<T = any>({
  theme,
  options,
  multiple,
  editable = true,
  scrollable = false,
  deselect = true,
  checkboxLabelTextStyle,
  activeColor,
  inactiveColor,
  iconSize,
  checkboxIconLabelGap,
  renderIcon,
  ...restProps
}: CheckboxGroupProps<T>) {
  const [value, onChange] = useControllableValue<T | T[] | undefined | null>(
    restProps,
    {
      defaultValue: multiple ? [] : undefined,
    },
  )

  const contentJSX = (
    <Space {...omit(restProps, ['value', 'defaultValue', 'onChange'])}>
      {options.map(({ value: checkboxValue, ...checkboxProps }) => {
        const selected = multiple
          ? ((value || []) as T[]).indexOf(checkboxValue) > -1
          : value === checkboxValue

        return (
          <Checkbox
            {...checkboxProps}
            theme={theme}
            labelTextStyle={
              checkboxProps.labelTextStyle ?? checkboxLabelTextStyle
            }
            gap={checkboxProps.gap ?? checkboxIconLabelGap}
            activeColor={checkboxProps.activeColor ?? activeColor}
            inactiveColor={checkboxProps.inactiveColor ?? inactiveColor}
            iconSize={checkboxProps.iconSize ?? iconSize}
            renderIcon={checkboxProps.renderIcon ?? renderIcon}
            key={`${checkboxValue}`}
            activeValue={checkboxValue}
            inactiveValue={null}
            value={selected ? checkboxValue : null}
            onChange={_value => {
              if (!editable) {
                return
              }

              const isReset = _value !== checkboxValue

              if (multiple) {
                const oldValue = (value || []) as T[]
                const newValue = isReset
                  ? oldValue.filter(v => v !== checkboxValue)
                  : [checkboxValue, ...oldValue]
                const newOptions = newValue.map(v => {
                  const optionIndex = options.findIndex(o => o.value === v)

                  return {
                    ...options[optionIndex],
                  }
                })

                onChange(newValue, newOptions)
              } else {
                if (!isReset || (isReset && deselect)) {
                  const newValue = isReset ? undefined : _value
                  const newOptions = isReset
                    ? undefined
                    : options.filter(o => o.value === _value)

                  onChange(newValue, newOptions)
                }
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default memo(CheckboxGroup) as <ActiveValueT = any>(
  p: CheckboxGroupProps<ActiveValueT>,
) => React.ReactElement
