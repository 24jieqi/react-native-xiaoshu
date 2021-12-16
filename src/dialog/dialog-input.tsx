import React, { useEffect, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Keyboard } from 'react-native'

import TextInput from '../text-input'
import { useTheme } from '../theme'
import useState from '../hooks/useStateUpdate'
import { usePersistFn } from '../hooks'
import { callInterceptor, isDef } from '../helpers'
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
  const themeVar = useTheme()
  const [state, setState] = useState<DialogInputState>({
    visible: false,
    value: defaultValue,
    cancel: false,
    confirm: false,
    overlay: false,
  })
  const boxStyle = useMemo<ViewStyle>(
    () => ({
      marginHorizontal: themeVar.padding_md,
      marginTop: themeVar.padding_md,
      overflow: 'hidden',
      borderStartColor: '#f30',
      // height: 100,
    }),
    [themeVar.padding_md],
  )

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
  }, [])

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
          type={type}
          placeholder={placeholder}
          value={state.value}
          onChangeText={onChangeTextPersistFn}
          autoFocus={autoFocus}
          bordered
        />
      </View>
    </Dialog>
  )
}

export default memo(DialogInput)
