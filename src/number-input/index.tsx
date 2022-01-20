import React, { useState, useCallback, useRef, memo, forwardRef } from 'react'
import type {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'

import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import { usePersistFn, useUpdateEffect } from '../hooks'
import { noop, isValue, isDef, formatDecimal } from '../helpers'
import type { NumberInputProps } from './interface'

const parserNumberToString = (n?: number) => `${isDef(n) ? n : ''}`
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

      value,
      defaultValue,
      onChangeText,
      onEndEditing,
      onChange,
      ...restProps
    },
    ref,
  ) => {
    if (type === 'digit') {
      limitDecimals = -1
    }

    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
    const onChangePersistFn = usePersistFn(onChange || noop)
    const parserPersistFn = usePersistFn(parser || defaultParser)
    const formatterPersistFn = usePersistFn(formatter || defaultFormatter)

    const [localValue, setLocalValue] = useState(
      formatterPersistFn(
        parserNumberToString(isValue(value) ? value : defaultValue),
      ),
    )
    /** 记录外部的数值 */
    const LastValue = useRef(Number(parserPersistFn(localValue)))

    // 同步数据
    useUpdateEffect(() => {
      // 记录上次/当前外部的数字
      LastValue.current = value
      // 更新内部的值
      setLocalValue(formatterPersistFn(parserNumberToString(value)))
    }, [value])

    const parserInputValue = usePersistFn((t: string) =>
      formatDecimal(t, limitDecimals),
    )

    const computeValue = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      (t: string, isEnd: boolean = false) => {
        // 解析数据
        let newValueStringify = parserInputValue(t)

        // 同步更新到组件状态
        setLocalValue(formatterPersistFn(newValueStringify))

        // 约束后的字符串是空字符串，上一次的值是 null 才触发 onChange
        if (newValueStringify === '' && LastValue.current !== null) {
          onChangePersistFn(null)
        } else if (isEnd) {
          // 非空字符串 + 非 null、非空字符串 + null
          if (newValueStringify) {
            const newValueNum = Number(newValueStringify)
            // 输入结束做最大、最小限制
            if (newValueNum > max) {
              newValueStringify = String(max)
            }
            if (newValueNum < min) {
              newValueStringify = String(min)
            }

            const returnValue = parserPersistFn(newValueStringify)

            setLocalValue(formatterPersistFn(`${returnValue}`))

            if (returnValue !== LastValue.current) {
              onChangePersistFn(returnValue)
              LastValue.current = returnValue
            }
          }

          // 空字符串 + null
        } else {
          // 非空字符串 + 非 null、非空字符串 + null

          // 聚焦输入中
          // 字符串有数字
          // 格式化后的值和最新值不相同
          // '1.' 和 1 在 Number 后是一致的
          // '1.0' 和 1 在 Number 后是一致的
          const newValueNum = Number(newValueStringify)
          if (newValueStringify && newValueNum !== LastValue.current) {
            onChangePersistFn(newValueNum)
            LastValue.current = newValueNum
          }

          // 空字符串 + null
        }
      },
      [
        formatterPersistFn,
        max,
        min,
        onChangePersistFn,
        parserInputValue,
        parserPersistFn,
      ],
    )

    const onChangeTextTextInput = useCallback(
      (t: string) => {
        computeValue(t)
        onChangeTextPersistFn(t)
      },
      [computeValue, onChangeTextPersistFn],
    )

    const onEndEditingTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        computeValue(e.nativeEvent.text, true)
        onEndEditingPersistFn(e)
      },
      [computeValue, onEndEditingPersistFn],
    )

    return (
      <TextInput
        {...restProps}
        ref={ref}
        type={type}
        defaultValue={formatterPersistFn(parserNumberToString(defaultValue))}
        value={localValue}
        onChangeText={onChangeTextTextInput}
        onEndEditing={onEndEditingTextInput}
      />
    )
  },
)

export default memo(NumberInput)
