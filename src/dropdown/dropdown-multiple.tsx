import isNil from 'lodash/isNil'
import React, { useMemo, memo } from 'react'

import { getDefaultValue } from '../helpers'
import { useControllableValue, usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import Locale from '../locale'

import { useDropdownConfig } from './context'
import DropdownSelector from './dropdown-selector'
import DropdownText from './dropdown-text'
import type { DropdownMultipleProps, DropdownItemOption } from './interface'

const DropdownMultiple = <T,>({
  popupTestID,
  titleStyle,
  titleTextStyle,
  options,
  duration,
  zIndex,
  closeOnPressOutside,
  loading,
  placeholder = '',
  beforeChecked,

  search,
  onSearch,
  cancellable,
  multipleMode,

  ...restProps
}: DropdownMultipleProps<T>) => {
  const locale = Locale.useLocale().DropdownItem
  const config = useDropdownConfig()
  const [active, setActive] = useState(false)
  const [value, onChange] = useControllableValue<T[]>(restProps)
  const _selectOptionLabel = useMemo(() => {
    if (loading) {
      return locale.labelLoadingText
    }

    const _label: string[] = []

    const findX = (list: DropdownItemOption<T>[]) => {
      list.forEach(item => {
        if (value?.indexOf(item.value) > -1) {
          _label.push(item.label)
        }
        if (item.children?.length) {
          findX(item.children)
        }
      })
    }

    findX(options)

    return _label.join('、')
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
        defaultValue: !isNil(value) ? value : [],
        options,
        duration,
        zIndex,
        closeOnPressOutside,
        activeColor: config.activeColor,
        search,
        onSearch,
        cancellable,
        multiple: true,
        multipleMode,
        testID: popupTestID,
        beforeChecked,
      })
        .then(d => {
          onChange(d.value as T[], d.data)
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
      title={
        !isNil(_selectOptionLabel) && !!_selectOptionLabel
          ? _selectOptionLabel
          : placeholder
      }
      active={active}
      onPress={onPressText}
      disabled={restProps.disabled || loading}
    />
  )
}

export default memo(DropdownMultiple) as <T>(
  p: DropdownMultipleProps<T>,
) => React.ReactElement
