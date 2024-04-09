import isNil from 'lodash/isNil'
import React, { useEffect, useMemo, useRef, memo, useCallback } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Keyboard } from 'react-native'

import { callInterceptor, getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import NumberInput from '../number-input'
import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import Theme from '../theme'

import DialogKeyboard from './dialog-keyboard'
import type {
  DialogInputProps,
  DialogAction,
  DialogInputState,
} from './interface'
import { varCreator } from './style'

/**
 * Dialog 弹出框
 * @description 配合函数的使用
 */
const DialogInput: React.FC<DialogInputProps> = ({
  showCancelButton = true,
  duration,

  beforeClose,
  onPressCancel,
  onPressConfirm,

  defaultValue,
  placeholder,
  type = 'text',
  autoFocus = true,
  textInput: {
    value: textInputValue,
    onChangeText,
    ...resetTextInputProps
  } = {},

  numberInput: {
    value: numberInputValue,
    onChange,
    ...resetNumberInputProps
  } = {},

  ...restProps
}) => {
  const isInputText = type === 'textarea' || type === 'text'
  const realValue = isInputText ? textInputValue : numberInputValue

  const TextInputRef = useRef<TextInputInstance>(null)
  const [CV] = Theme.useStyle({
    varCreator,
    theme: restProps.theme,
  })

  const [state, setState] = useState<DialogInputState>({
    visible: false,
    value: defaultValue || '',
    cancel: false,
    confirm: false,
    overlay: false,
  })

  const boxStyle = useMemo<ViewStyle>(
    () => ({
      marginHorizontal: CV.dialog_input_gap,
      marginTop: CV.dialog_input_gap,
      paddingBottom: CV.dialog_input_gap / 2,
      overflow: 'hidden',
      maxHeight: 200,
    }),
    [CV.dialog_input_gap],
  )

  duration = getDefaultValue(duration, CV.dialog_transition)

  const onChangeTextPersistFn = usePersistFn((t: string) => {
    setState({
      value: t,
    })
    onChangeText?.(t)
  })

  const onChangePersistFn = usePersistFn((t: number) => {
    setState({
      value: t,
    })
    onChange?.(t)
  })

  const genOnPressBtn = (action: Exclude<DialogAction, 'overlay'>) => () => {
    Keyboard.dismiss()

    setState({
      [action]: true,
    })

    const actionCallback = action === 'confirm' ? onPressConfirm : onPressCancel

    const finalValue = !isNil(state.value) ? `${state.value}` : ''

    callInterceptor(beforeClose, {
      args: [action, finalValue],
      done: () => {
        callInterceptor(actionCallback, {
          args: [finalValue],
          done: () => {
            setState({
              [action]: false,
              visible: false,
            })
          },
          canceled: () => {
            setState({
              [action]: false,
            })
          },
        })
      },
      canceled: () => {
        setState({
          [action]: false,
        })
      },
    })
  }

  useEffect(() => {
    setState({
      visible: true,
    })

    // 当对话框完全显示的时候再去聚焦
    if (autoFocus) {
      setTimeout(() => {
        TextInputRef.current?.focus()
      }, duration)
    }
  }, [duration, autoFocus])

  useEffect(() => {
    if (!isNil(realValue)) {
      setState({
        value: realValue,
      })
    }
  }, [realValue])

  const onPressClose = useCallback(() => {
    setState({
      visible: false,
    })
  }, [])

  return (
    <DialogKeyboard
      {...restProps}
      showCancelButton={showCancelButton}
      closeOnPressOverlay={false}
      visible={state.visible}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}
      onPressClose={onPressClose}>
      <View style={boxStyle}>
        {type === 'textarea' || type === 'text' ? (
          <TextInput
            size="xl"
            {...resetTextInputProps}
            ref={TextInputRef}
            type={type}
            placeholder={placeholder}
            value={state.value as string}
            onChangeText={onChangeTextPersistFn}
            bordered
          />
        ) : (
          <NumberInput
            size="xl"
            {...resetNumberInputProps}
            ref={TextInputRef}
            type={type}
            placeholder={placeholder}
            value={state.value as number}
            onChange={onChangePersistFn}
            bordered
          />
        )}
      </View>
    </DialogKeyboard>
  )
}

export default memo(DialogInput)
