import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
import React, { useState, useCallback, useRef, memo, forwardRef } from 'react'
import { Platform } from 'react-native'
import type {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'

import { formatDecimal, formatNumber } from '../helpers'
import { usePersistFn, useUpdateEffect } from '../hooks'
import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'

import type { NumberInputProps } from './interface'

const parserNumberToString = (n?: number | null) => `${!isNil(n) ? n : ''}`
const defaultFormatter = (t: string) => t
const defaultParser = (t: string) => Number(t)

/**
 * 数字输入框
 * @description 输入中过滤所有非数字类字符，输入结束结合外界的 parser 修正数据
 */
const NumberInput = forwardRef<TextInputInstance, NumberInputProps>(
  (
    {
      type = 'number',
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
      formatter,
      parser,
      limitDecimals = -1,
      validateTrigger = 'onEndEditing',

      value,
      defaultValue,
      onEndEditing,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    if (isNil(restProps.keyboardType)) {
      if (Platform.OS === 'ios') {
        restProps.keyboardType = 'numbers-and-punctuation'
      }
      if (Platform.OS === 'android') {
        restProps.keyboardType = 'decimal-pad'
      }
    }
    if (type === 'digit') {
      // restProps.keyboardType = 'number-pad'
      limitDecimals = -1
    }

    const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
    const onChangePersistFn = usePersistFn(onChange || noop)
    const parserPersistFn = usePersistFn(parser || defaultParser)
    const formatterPersistFn = usePersistFn(formatter || defaultFormatter)

    const [localValue, setLocalValue] = useState(
      formatterPersistFn(
        parserNumberToString(!isUndefined(value) ? value : defaultValue),
      ),
    )
    /** 记录外部的数值 */
    const LastValue = useRef<number | null | undefined>(
      !isUndefined(value) ? value : defaultValue,
    )

    // 同步数据
    useUpdateEffect(() => {
      // 输入 10.00001 删除最后一位，输入框期望保持 10.0000 字样
      if (value !== LastValue.current) {
        // 记录上次/当前外部的数字
        LastValue.current = value
        // 更新内部的值
        setLocalValue(formatterPersistFn(parserNumberToString(value)))
      }
    }, [value])

    /** 数据过滤，限制小数位，返回数字的字符串 */
    const parserInputValue = usePersistFn((t: string) =>
      formatDecimal(t, limitDecimals),
    )

    /** 计算数据 */
    const computeValueStringify = useCallback(
      (t: string, validate: boolean, isEnd: boolean) => {
        // 部分数据开始格式化
        // 允许输入正整数
        const isNumber = type === 'number'
        t = formatNumber(t, isNumber, true)

        // 解析数据
        let newValueStringify: string | null = parserInputValue(t)

        if (newValueStringify !== '') {
          if (validate) {
            const newValueNum = Number(newValueStringify)
            // 输入结束做最大、最小限制
            if (newValueNum > max) {
              newValueStringify = String(max)
            }
            if (newValueNum < min) {
              newValueStringify = String(min)
            }
          }

          // 结束的时候限制最大最小值
          if (isEnd) {
            if (t === '-') {
              newValueStringify = null
            }
          }
        }

        return newValueStringify
      },
      [max, min, parserInputValue, type],
    )

    const triggerValueUpdate = useCallback(
      (t: string, validate: boolean, isEnd: boolean) => {
        // 输入 . 默认转换成 0.
        if (t === '.') {
          t = '0.'
        }

        // 当 min >= 0 就不能输入  -
        if (min >= 0) {
          t = t.replace(/-/g, '')
        }

        let newValueStringify = computeValueStringify(t || '', validate, isEnd)
        let finallyValue = newValueStringify

        // 同步更新到组件状态
        // 第一个字符串非数字，newValueStringify 是 null，setLocalValue(null) 不能触发更新，导致限制其他字符输入失败
        setLocalValue(formatterPersistFn(newValueStringify!) || '')

        // 1. 空字符串 + 非 null
        // 2. 空字符串 + null
        // 3. 非空字符串 + null
        // 4. 非空字符串 + 非 null

        if (newValueStringify === '' && LastValue.current !== null) {
          // 状态 1 触发 onChange
          onChangePersistFn(null)

          finallyValue = null
          LastValue.current = null
        } else if (newValueStringify) {
          // 状态 3 和 状态 4
          if (isEnd) {
            // 按照提供的解析函数转成数字
            const returnValue = parserPersistFn(newValueStringify)
            finallyValue = parserNumberToString(returnValue)

            // 新数字转成字符串
            setLocalValue(formatterPersistFn(finallyValue))

            if (returnValue !== LastValue.current) {
              // 当最终值和上次值不同时触发 onChange
              onChangePersistFn(returnValue)
              LastValue.current = returnValue
            }
          } else {
            // 聚焦输入中
            // 字符串有数字
            // 格式化后的值和最新值不相同
            // '1.' 和 1 在 Number 后是一致的
            // '1.0' 和 1 在 Number 后是一致的
            const newValueNum = Number(newValueStringify)

            if (
              newValueStringify &&
              newValueStringify !== '-' &&
              newValueNum !== LastValue.current
            ) {
              onChangePersistFn(newValueNum)
              LastValue.current = newValueNum
            }
          }
        }

        return finallyValue
      },
      [
        computeValueStringify,
        formatterPersistFn,
        min,
        onChangePersistFn,
        parserPersistFn,
      ],
    )

    const onChangeTextTextInput = useCallback(
      (t: string) => {
        triggerValueUpdate(t, validateTrigger === 'onChangeText', false)
      },
      [triggerValueUpdate, validateTrigger],
    )

    const onEndEditingTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        e.nativeEvent.text =
          triggerValueUpdate(
            e.nativeEvent.text,
            validateTrigger === 'onEndEditing',
            true,
          ) || ''
        onEndEditingPersistFn(e)
      },
      [onEndEditingPersistFn, triggerValueUpdate, validateTrigger],
    )

    return (
      <TextInput
        {...restProps}
        ref={ref}
        type="text"
        value={localValue}
        onChangeText={onChangeTextTextInput}
        onEndEditing={onEndEditingTextInput}
      />
    )
  },
)

export default memo(NumberInput)
