import React, { useState, useCallback, useRef, memo, forwardRef } from 'react'
import type {
  TextInput as RNTextInput,
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
} from 'react-native'

import TextInput from '../text-input'
import { usePersistFn, useUpdateEffect } from '../hooks'
import { noop, formatNumber, isValue, isDef } from '../helpers'
import type { NumberInputProps } from './interface'

const parserNumberToString = (n?: number) => `${isDef(n) ? n : ''}`
const defaultFormatter = (t: string) => t
const defaultParser = (t: string) => Number(formatNumber(t))

const NumberInput = forwardRef<RNTextInput, NumberInputProps>(
  (
    {
      type = 'number',
      onChangeNumber,
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
      formatter,
      parser,
      value,
      defaultValue,
      onChangeText,
      onEndEditing,
      ...restProps
    },
    ref,
  ) => {
    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
    const onChangeNumberPersistFn = usePersistFn(onChangeNumber || noop)
    const parserPersistFn = usePersistFn(parser || defaultParser)
    const formatterPersistFn = usePersistFn(formatter || defaultFormatter)

    const [localValue, setLocalValue] = useState(
      formatterPersistFn(
        parserNumberToString(isValue(value) ? value : defaultValue),
      ),
    )
    /** 记录外部的数值 */
    const LastValue = useRef(parserPersistFn(localValue))
    const LastNewValue = useRef<number>(value)

    // 同步数据
    useUpdateEffect(() => {
      // 记录上次/当前外部的数字
      LastValue.current = value
      // 更新内部的值

      setLocalValue(formatterPersistFn(parserNumberToString(value)))
      LastNewValue.current = value
    }, [value])

    const responseValue = useCallback(
      // eslint-disable-next-line @typescript-eslint/no-inferrable-types
      (t: string, sync: boolean = false) => {
        if (isDef(t) && t !== '') {
          // 格式化值
          let newValue = parserPersistFn(t)

          // 最大最小值
          if (newValue > max) {
            newValue = max
          }
          if (newValue < min) {
            newValue = min
          }

          if (
            newValue !== LastValue.current &&
            LastNewValue.current !== newValue
          ) {
            // 更新上次计算的新值
            LastNewValue.current = newValue

            // 触发更新
            onChangeNumberPersistFn(newValue)
          }

          if (sync) {
            // 更新上次计算的新值
            LastNewValue.current = newValue

            setLocalValue(formatterPersistFn(parserNumberToString(newValue)))
          }
        } else {
          // 清空的数据
          onChangeNumberPersistFn(null)
        }
      },
      [formatterPersistFn, max, min, onChangeNumberPersistFn, parserPersistFn],
    )

    const onChangeTextTextInput = useCallback(
      (t: string) => {
        setLocalValue(formatterPersistFn(t))
        onChangeTextPersistFn(t)
        responseValue(t)
      },
      [formatterPersistFn, onChangeTextPersistFn, responseValue],
    )

    const onEndEditingTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        setLocalValue(formatterPersistFn(e.nativeEvent.text))

        onEndEditingPersistFn(e)
        // 转换数据
        responseValue(e.nativeEvent.text, true)
      },
      [formatterPersistFn, onEndEditingPersistFn, responseValue],
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
