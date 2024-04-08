import isNil from 'lodash/isNil'
import React, { useMemo, memo } from 'react'

import { getDefaultValue } from '../helpers'
import { useControllableValue, usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import Locale from '../locale'

import { useDropdownConfig } from './context'
import DropdownSelector from './dropdown-selector'
import DropdownText from './dropdown-text'
import type { DropdownItemProps, DropdownItemOption } from './interface'

const DropdownItem = <T,>({
  popupTestID,
  titleStyle,
  titleTextStyle,
  options,
  duration,
  zIndex,
  closeOnPressOutside,
  loading,
  placeholder = '',

  search,
  onSearch,
  cancellable,

  ...restProps
}: DropdownItemProps<T>) => {
  const locale = Locale.useLocale().DropdownItem
  const config = useDropdownConfig()
  const [active, setActive] = useState(false)
  const [value, onChange] = useControllableValue<T>(restProps)
  const _selectOption = useMemo(() => {
    if (loading) {
      const x: DropdownItemOption<T> = {
        label: locale.labelLoadingText,
        value: null as any,
      }
      return x
    }

    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    let selectOption = {} as DropdownItemOption<T>

    const findX = (list: DropdownItemOption<T>[]) => {
      list.forEach(item => {
        if (item.value === value) {
          selectOption = item
        } else if (item.children?.length) {
          findX(item.children)
        }
      })
    }

    findX(options)

    return selectOption
  }, [loading, locale.labelLoadingText, options, value])

  duration = getDefaultValue(duration, config.duration)
  zIndex = getDefaultValue(zIndex, config.zIndex)
  closeOnPressOutside = getDefaultValue(
    closeOnPressOutside,
    config.closeOnPressOutside,
  )

  const onPressText = usePersistFn(() => {
    // 计算 Menu 的 Top 和元素高度
    // eslint-disable-next-line max-params
    config.MenuRef.current?.measure((x, y, width, height, pageX, pageY) => {
      setActive(true)
      DropdownSelector({
        targetHeight: height,
        targetPageY: pageY,
        defaultValue: value,
        options,
        duration,
        zIndex,
        closeOnPressOutside,
        activeColor: config.activeColor,
        search,
        onSearch,
        cancellable,
        testID: popupTestID,
      })
        .then(d => {
          onChange(d.value as T, d.data[0])
        })
        .catch(() => {})
        .finally(() => {
          setActive(false)
        })
    })
  })

  return (
    <DropdownText
      {...restProps}
      style={titleStyle}
      textStyle={titleTextStyle}
      title={!isNil(_selectOption.label) ? _selectOption.label : placeholder}
      badge={_selectOption.badge}
      active={active}
      onPress={onPressText}
      disabled={restProps.disabled || loading}
    />
  )
}

export default memo(DropdownItem) as <T>(
  p: DropdownItemProps<T>,
) => React.ReactElement
