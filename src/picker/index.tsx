import React, {
  useMemo,
  useEffect,
  useState,
  memo,
  isValidElement,
} from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { View, Text } from 'react-native'

import Loading from '../loading'
import { useTheme, widthStyle } from '../theme'
import { useUpdateEffect } from '../hooks'
import { isDef, isArray } from '../helpers'
import type {
  PickerProps,
  PickerOptionType,
  PickerValue,
  PickerOption,
  PickerOptionMultipleWidthDefaultValue,
  PickerOptionMultiple,
  PickerOptionCascade,
} from './interface'
import PickerColumn from './column'
import { createStyles } from './style'
import {
  buildValues,
  findNextAllColumns,
  findAllColumnsByValues,
  buildSelectedValue,
} from './helper/picker'

/**
 * 选择器
 */
const Picker: React.FC<PickerProps> = ({
  visibleItemCount = 5,
  itemHeight = 50,
  cancelButtonText = '取消',
  confirmButtonText = '确定',
  title,
  showToolbar = true,
  toolbarPosition = 'top',
  loading = false,
  columns,
  defaultValue,
  value,
  onChange,
  onCancel,
  onConfirm,
}) => {
  /** 选项的高度 */
  const columnsHeight = visibleItemCount * itemHeight
  /** 居中选中的偏移量 */
  const markMargin = itemHeight / 2
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  /**
   * 数据类型
   * @description cascade 联级选择，multiple 多列选择，single 单列选择
   */
  const dataType = useMemo<PickerOptionType>(() => {
    const firstColumn = columns[0]

    if (firstColumn) {
      if ('children' in firstColumn) {
        return 'cascade'
      }

      if ('options' in firstColumn || isArray(firstColumn as PickerOption[])) {
        return 'multiple'
      }
    }

    return 'single'
  }, [columns])

  const [state, setState] = useState<{
    options: PickerOption[][]
    values: PickerValue[]
  }>({
    options: [],
    values: isDef(defaultValue)
      ? buildValues(dataType, defaultValue)
      : buildValues(dataType, value),
  })

  // 初始化数据
  useEffect(() => {
    switch (dataType) {
      // 联级选择
      case 'cascade':
        setState(v => {
          if (!v.values.length) {
            // 没有值得情况
            return {
              ...v,
              ...findNextAllColumns(columns as PickerOptionCascade[]),
            }
          }

          return {
            ...v,
            options: findAllColumnsByValues(
              columns as PickerOptionCascade[],
              v.values,
            ),
          }
        })

        break

      case 'multiple':
        setState(v => {
          const options: PickerOption[][] = []
          const values: PickerValue[] = []

          ;(columns as PickerOptionMultiple[]).forEach(item => {
            const isOption = isArray(item as PickerOption[])

            if (isOption) {
              options.push(item as PickerOption[])
              values.push((item as PickerOption[])[0].value)
            } else {
              const { options: _options, defaultValue: _defaultValue } =
                item as PickerOptionMultipleWidthDefaultValue

              options.push(_options)
              const valueIndex = _options.findIndex(
                // eslint-disable-next-line max-nested-callbacks
                p => p.value === _defaultValue,
              )

              values.push(
                valueIndex > -1
                  ? _options[valueIndex].value
                  : _options[0].value,
              )
            }
          })

          return {
            ...v,
            options,
            values: v.values.length ? v.values : values,
          }
        })

        break

      default: {
        const [firstColumn] = columns as PickerOption[]

        setState(v => ({
          ...v,
          options: [columns as PickerOption[]],
          values: v.values.length
            ? v.values
            : firstColumn
            ? [firstColumn.value]
            : [],
        }))

        break
      }
    }
  }, [columns, dataType])

  // 同步 value
  useUpdateEffect(() => {
    setState(s => ({
      ...s,
      values: buildValues(dataType, value),
    }))
  }, [value, dataType])

  const onPressCancel = () => {
    const [v, o] = buildSelectedValue(state.values, state.options, dataType)
    onCancel?.(v, o)
  }

  const onPressConfirm = () => {
    const [v, o] = buildSelectedValue(state.values, state.options, dataType)
    onConfirm?.(v, o)
  }

  const bodyStyle: ViewStyle = {
    height: columnsHeight,
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
    // marginHorizontal: THEME_VAR.padding_md,
  }
  const maskTopStyleSummary: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: 0,
      bottom: '50%',
      borderBottomWidth: 1,
      transform: [
        {
          translateY: -markMargin,
        },
      ],
    },
  ]
  const maskBottomStyleSummary: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: '50%',
      bottom: 0,
      borderTopWidth: 1,
      transform: [
        {
          translateY: markMargin,
        },
      ],
    },
  ]

  const titleJSX = isDef(title) ? (
    isValidElement(title) ? (
      title
    ) : (
      <Text style={STYLES.title_text}>{title}</Text>
    )
  ) : null

  const headerTitleJSX = (
    <View style={STYLES.header}>
      <Text style={STYLES.cancel_text} onPress={onPressCancel}>
        {cancelButtonText}
      </Text>
      {titleJSX}
      <Text style={STYLES.confirm_text} onPress={onPressConfirm}>
        {confirmButtonText}
      </Text>
    </View>
  )

  return (
    <View style={STYLES.picker}>
      {loading ? <Loading style={STYLES.loading} /> : null}

      {showToolbar && toolbarPosition === 'top' ? headerTitleJSX : null}

      <View style={bodyStyle}>
        <View style={maskTopStyleSummary} pointerEvents="none" />

        <View style={maskBottomStyleSummary} pointerEvents="none" />

        {state.options.map((item, index) => {
          return (
            <PickerColumn
              key={index}
              itemHeight={itemHeight}
              visibleItemCount={visibleItemCount}
              options={item}
              defaultValue={state.values?.[index]}
              onChangeValue={column => {
                // 如果是 cascade 需要重置选项
                switch (dataType) {
                  case 'cascade': {
                    const nextAll = findNextAllColumns(column?.children || [])

                    setState(ss => {
                      const options = ss.options
                        .slice(0, index + 1)
                        .concat(nextAll.options)
                      const values = ss.values
                        .slice(0, index)
                        .concat(column?.value)
                        .concat(nextAll.values)

                      setTimeout(() => {
                        const [v, o] = buildSelectedValue(
                          values,
                          options,
                          dataType,
                        )
                        onChange?.(v, o)
                      })

                      return {
                        ...ss,
                        options,
                        values,
                      }
                    })

                    break
                  }

                  default:
                    setState(ss => {
                      const values = ss.values.map((vValue, vIndex) => {
                        if (index === vIndex) {
                          return column?.value
                        }
                        return vValue
                      })

                      setTimeout(() => {
                        const [v, o] = buildSelectedValue(
                          values,
                          ss.options,
                          dataType,
                        )
                        onChange?.(v, o)
                      })

                      return {
                        ...ss,
                        values,
                      }
                    })
                    break
                }
              }}
            />
          )
        })}
      </View>

      {showToolbar && toolbarPosition === 'bottom' ? headerTitleJSX : null}
    </View>
  )
}

export default memo(Picker)
