import React, { useEffect, useMemo, useRef, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Keyboard } from 'react-native'

import { callInterceptor, isDef, getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import { useTheme } from '../theme'

import Dialog from './dialog'
import type {
  DialogInputProps,
  DialogAction,
  DialogInputState,
} from './interface'

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
  type,
  textInput: {
    value,
    onChangeText,
    autoFocus = true,
    ...resetTextInputProps
  } = {},

  ...restProps
}) => {
  const TextInputRef = useRef<TextInputInstance>(null)
  const THEME_VAR = useTheme()
  const [state, setState] = useState<DialogInputState>({
    visible: false,
    value: defaultValue,
    cancel: false,
    confirm: false,
    overlay: false,
  })
  const boxStyle = useMemo<ViewStyle>(
    () => ({
      marginHorizontal: THEME_VAR.dialog_input_gap,
      marginTop: THEME_VAR.dialog_input_gap,
      overflow: 'hidden',
      borderStartColor: '#f30',
      // height: 100,
    }),
    [THEME_VAR.dialog_input_gap],
  )

  duration = getDefaultValue(duration, THEME_VAR.dialog_transition)

  const onChangeTextPersistFn = usePersistFn((t: string) => {
    setState({
      value: t,
    })
    onChangeText?.(t)
  })

  const genOnPressBtn = (action: Exclude<DialogAction, 'overlay'>) => () => {
    Keyboard.dismiss()

    setState({
      [action]: true,
    })

    const actionCallback = action === 'confirm' ? onPressConfirm : onPressCancel

    callInterceptor(beforeClose, {
      args: [action, state.value],
      done: () => {
        callInterceptor(actionCallback, {
          args: [state.value || ''],
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
        TextInputRef.current.focus()
      }, duration)
    }
  }, [duration, autoFocus])

  useEffect(() => {
    if (isDef(value)) {
      setState({
        value,
      })
    }
  }, [value])

  return (
    <Dialog
      {...restProps}
      showCancelButton={showCancelButton}
      closeOnPressOverlay={false}
      visible={state.visible}
      onPressConfirm={genOnPressBtn('confirm')}
      onPressCancel={genOnPressBtn('cancel')}
      cancelButtonLoading={state.cancel}
      confirmButtonLoading={state.confirm}>
      <View style={boxStyle}>
        <TextInput
          {...resetTextInputProps}
          ref={TextInputRef}
          type={type}
          placeholder={placeholder}
          value={state.value}
          onChangeText={onChangeTextPersistFn}
          bordered
        />
      </View>
    </Dialog>
  )
}

export default memo(DialogInput)
