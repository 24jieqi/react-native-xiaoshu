import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import type { ViewStyle, TextStyle } from 'react-native'
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import { useTheme } from '../theme'
import Popup from '../popup/popup'
import Circular from '../loading/circular'
import Spinner from '../loading/spinner'
import { createStyles } from './style'
import type { ToastProps, ToastMethods } from './interface'

const Toast = forwardRef<ToastMethods, ToastProps>(
  (
    {
      type,
      position = 'middle',
      message,
      overlay = false,
      forbidPress = false,
      closeOnPress = false,
      closeOnPressOverlay = false,
      loadingType = 'circular',
      duration = 2000,
      ...reset
    },
    ref,
  ) => {
    const themeVar = useTheme()
    const Styles = createStyles(themeVar, { position })

    const [show, setShow] = useState(false)
    const [msg, setMsg] = useState(message)

    // 修正数据
    if (closeOnPress) {
      // 是否在点击后关闭
      // 是否禁止背景点击
      // 可以触发点击的地方正好被背景 View 挡住
      forbidPress = false
    }

    /**
     * 点击遮罩层
     */
    const onPressOverlay = () => {
      // 是否在点击遮罩层后关闭
      if (closeOnPressOverlay) {
        setShow(false)
      }
    }

    /**
     * 点击内容
     */
    const onPressContent = () => {
      // 是否在点击后关闭
      if (closeOnPress) {
        setShow(false)
      }
    }

    useEffect(() => {
      setShow(true)

      let timer: ReturnType<typeof setTimeout>

      if (duration !== 0) {
        timer = setTimeout(() => {
          // 隐藏弹窗
          setShow(false)
        }, duration)
      }

      return () => {
        clearTimeout(timer)
      }
    }, [duration])

    // 向外暴露方法
    useImperativeHandle(ref, () => ({
      close: () => {
        setShow(false)
      },
      setMessage: s => {
        setMsg(s)
      },
    }))

    const toastInnerStyleSummary: ViewStyle = StyleSheet.flatten([
      Styles.inner,
      type === 'text' ? Styles.innerText : null,
    ])
    const toastTextStyleSummary: TextStyle = StyleSheet.flatten([
      Styles.text,
      type === 'text' ? Styles.textTop0 : null,
    ])

    return (
      <Popup
        {...reset}
        show={show}
        overlay={overlay}
        onPressOverlay={onPressOverlay}>
        <TouchableWithoutFeedback onPress={onPressContent}>
          <View
            style={Styles.toast}
            pointerEvents={forbidPress ? undefined : 'box-none'}
            collapsable={false}>
            <View style={toastInnerStyleSummary}>
              {type === 'loading' ? (
                <View style={Styles.loading}>
                  {loadingType === 'circular' ? (
                    <Circular
                      color={themeVar.toast_loading_icon_color}
                      size={themeVar.toast_icon_size}
                    />
                  ) : (
                    <Spinner
                      color={themeVar.toast_loading_icon_color}
                      size={themeVar.toast_icon_size}
                    />
                  )}
                </View>
              ) : null}

              <Text style={toastTextStyleSummary}>{msg}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Popup>
    )
  },
)

export default memo(Toast)
