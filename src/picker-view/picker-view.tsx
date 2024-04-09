import isNil from 'lodash/isNil'
import React, { useMemo, useEffect, useState, useRef, memo } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { View } from 'react-native'

import Divider from '../divider'
import { useControllableValue } from '../hooks'
import Loading from '../loading'
import Theme from '../theme'

import {
  getDataType,
  findDefaultValue,
  buildOptions,
  findNextAllColumns,
  buildSelectedValue,
} from './helper/picker'
import type { PickerViewProps, PickerValue, PickerOption } from './interface'
import PickerColumn from './picker-view-column'
import { varCreator, styleCreator } from './style'

const getVisibleItemCount = (n: number) => {
  if (n % 2 === 0) {
    return n + 1
  }
  return n
}

/**
 * 选择器视图
 */
const PickerView: React.FC<PickerViewProps> = ({
  theme,
  visibleItemCount = 5,
  itemHeight = 50,
  loading = false,
  columns,

  testID,
  ...restProps
}) => {
  const _visibleItemCount = getVisibleItemCount(visibleItemCount)
  /** 选项的高度 */
  const columnsHeight = _visibleItemCount * itemHeight
  /** 居中选中的偏移量 */
  const markMargin = itemHeight / 2
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  /**
   * 数据类型
   * @description cascade 联级选择，multiple 多列选择，single 单列选择
   */
  const dataType = useMemo(() => getDataType(columns), [columns])
  const isControlled = 'value' in restProps
  const isNoDefaultValue = 'defaultValue' in restProps

  const [value, onChange] = useControllableValue<PickerValue[]>(restProps, {
    defaultValue: [],
  })
  const [options, setOptions] = useState<PickerOption[][]>([])
  const ColumnDefaultValues = useRef<PickerValue[]>([])

  // 初始化数据
  useEffect(() => {
    if (dataType !== 'cascade') {
      const [_options, defaultValues] = buildOptions(dataType, columns)
      ColumnDefaultValues.current = defaultValues
      setOptions(_options)

      // 非受控的情况、并且没有默认值才去同步数据
      // 既然有默认数据了，由外面自己负责
      // 把数据同步到内部状态，初始化的时候看起来是选中默认数据或第一个数据的样子
      if (!isControlled && !isNoDefaultValue) {
        const [v, o] = buildSelectedValue(defaultValues, _options)
        onChange(v, o)
      }
    }
  }, [columns, dataType, onChange, isControlled, isNoDefaultValue])

  // 联级依赖 value 单独处理
  useEffect(() => {
    if (dataType === 'cascade') {
      const [_options, , _values] = buildOptions(dataType, columns, value)
      const [v, o] = buildSelectedValue(_values, _options)

      setOptions(_options)

      // 当
      if (value !== _values) {
        onChange(v, o)
      }
    }
  }, [columns, value, dataType, onChange])

  const bodyStyle: ViewStyle = {
    height: columnsHeight,
    backgroundColor: CV.picker_view_background_color,
    flexDirection: 'row',
    overflow: 'hidden',
  }
  const maskTopStyles: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: 0,
      bottom: '50%',
      flexDirection: 'column-reverse',
      transform: [
        {
          translateY: -markMargin,
        },
      ],
    },
  ]
  const maskBottomStyles: StyleProp<ViewStyle> = [
    STYLES.mask,
    {
      top: '50%',
      bottom: 0,
      transform: [
        {
          translateY: markMargin,
        },
      ],
    },
  ]

  return (
    <View testID={testID} style={STYLES.picker}>
      {loading ? <Loading style={STYLES.loading} /> : null}

      <View style={bodyStyle}>
        <View style={maskTopStyles} pointerEvents="none">
          <Divider />
        </View>

        <View style={maskBottomStyles} pointerEvents="none">
          <Divider />
        </View>

        {options.map((optionItem, optionIndex) => {
          const _value = (() => {
            if (!isNil(value[optionIndex])) {
              return value[optionIndex]
            }

            // 默认值
            // 非受控的情况才去同步数据
            // 并且没有默认值
            if (!isControlled && !isNoDefaultValue) {
              if (dataType === 'multiple') {
                return ColumnDefaultValues.current[optionIndex]
              }

              // 真的没有就默认第一个选项
              return findDefaultValue(
                options[optionIndex][0].value,
                optionItem,
              )!
            }

            return undefined
          })()

          return (
            <PickerColumn
              key={optionIndex}
              theme={theme}
              itemHeight={itemHeight}
              visibleItemCount={_visibleItemCount}
              options={optionItem}
              value={_value}
              onChange={column => {
                switch (dataType) {
                  // 联级选择
                  // 如果是 cascade 需要重置选项
                  case 'cascade': {
                    const nextAll = findNextAllColumns(column?.children || [])
                    const _options = options
                      .slice(0, optionIndex + 1)
                      .concat(nextAll.options)
                    const values = value
                      .slice(0, optionIndex)
                      .concat(column?.value)
                      .concat(nextAll.values)

                    const [v, o] = buildSelectedValue(values, _options)
                    onChange(v, o)
                    break
                  }

                  // 多选
                  case 'multiple': {
                    const newValues = value.concat([])
                    // 先从默认数据中拼凑好数据
                    ColumnDefaultValues.current.forEach((cdv, cdvIndex) => {
                      if (isNil(newValues[cdvIndex])) {
                        newValues[cdvIndex] = cdv
                      }
                    })

                    newValues[optionIndex] = column.value

                    const [v, o] = buildSelectedValue(newValues, options)

                    onChange(v, o)
                    break
                  }

                  // 单选
                  default: {
                    const columnsIndex = columns.findIndex(
                      c => (c as PickerOption).value === column.value,
                    )
                    onChange([column.value], [columns[columnsIndex]])
                    break
                  }
                }
              }}
            />
          )
        })}
      </View>
    </View>
  )
}

export default memo(PickerView)
