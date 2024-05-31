import {
  CrossCircleOutline,
  SuccessCircleOutline,
} from '@fruits-chain/icons-react-native'
import isNil from 'lodash/isNil'
import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  memo,
} from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { Text, View, TouchableWithoutFeedback } from 'react-native'

import Circular from '../loading/loading-circular'
import Spinner from '../loading/loading-spinner'
import Popup from '../popup/popup'
import Theme from '../theme'

import type { ToastProps, ToastMethods } from './interface'
import { varCreator, styleCreator } from './style'

const Toast = forwardRef<ToastMethods, ToastProps>(
  (
    {
      theme,
      type,
      position = 'middle',
      message,
      overlay = false,
      forbidPress = false,
      closeOnPress = false,
      closeOnPressOverlay = false,
      loadingType = 'spinner',
      duration = 2000,
      icon,
      ...resetProps
    },
    ref,
  ) => {
    const [CV, STYLES] = Theme.useStyle({
      varCreator,
      styleCreator,
      theme,
    })
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
    useImperativeHandle(
      ref,
      () => ({
        close: () => {
          setShow(false)
        },
        setMessage: s => {
          setMsg(s)
        },
      }),
      [],
    )

    const toastStyles: StyleProp<ViewStyle> = [
      STYLES.toast,
      {
        justifyContent:
          position === 'top'
            ? 'flex-start'
            : position === 'bottom'
              ? 'flex-end'
              : 'center',
      },
    ]

    return (
      <Popup
        {...resetProps}
        visible={show}
        overlay={overlay}
        onPressOverlay={onPressOverlay}>
        <TouchableWithoutFeedback onPress={onPressContent}>
          <View
            style={toastStyles}
            pointerEvents={forbidPress ? undefined : 'box-none'}
            collapsable={false}>
            <View
              style={[
                STYLES.inner,
                type === 'text' ? STYLES.inner_type_text : null,
              ]}>
              {type !== 'text' ? (
                <View style={STYLES.icon}>
                  {type === 'loading' ? (
                    loadingType === 'circular' ? (
                      <Circular
                        color={CV.toast_icon_color}
                        size={CV.toast_icon_size}
                      />
                    ) : (
                      <Spinner
                        color={CV.toast_icon_color}
                        size={CV.toast_icon_size}
                      />
                    )
                  ) : null}

                  {type === 'success' ? (
                    <SuccessCircleOutline
                      color={CV.toast_icon_color}
                      size={CV.toast_icon_size}
                    />
                  ) : null}

                  {type === 'fail' ? (
                    <CrossCircleOutline
                      color={CV.toast_icon_color}
                      size={CV.toast_icon_size}
                    />
                  ) : null}

                  {type === 'icon' ? icon : null}
                </View>
              ) : null}

              {!isNil(msg) && msg !== '' ? (
                <Text
                  style={[
                    STYLES.text,
                    type === 'text' ? STYLES.text_top_0 : null,
                  ]}>
                  {msg}
                </Text>
              ) : null}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Popup>
    )
  },
)

export default memo(Toast)
