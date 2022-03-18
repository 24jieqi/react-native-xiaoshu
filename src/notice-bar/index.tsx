import Color from 'color'
import React, { memo, useState, useCallback, useMemo } from 'react'
import type { ViewStyle, StyleProp } from 'react-native'
import { TouchableWithoutFeedback, View } from 'react-native'

import {
  getDefaultValue,
  isDef,
  renderTextLikeJSX,
  pickTouchablePropsField,
  omitTouchablePropsField,
  noop,
} from '../helpers'
import { usePersistFn } from '../hooks'
import { CrossOutline, ArrowRightOutline } from '../icon'
import { useThemeTokens, createVar, createStyle } from '../theme'

import type { NoticeBarProps, NoticeBarMode } from './interface'
import { varCreator, styleCreator } from './style'

const getModeIcon = (mode: NoticeBarMode) => {
  switch (mode) {
    case 'closeable':
      return CrossOutline
    default:
      return ArrowRightOutline
  }
}

/**
 * 通知栏
 */
const NoticeBar: React.FC<NoticeBarProps> = ({
  message,
  messageTextStyle,
  status = 'warning',
  mode,
  color,
  backgroundColor,
  iconColor,
  wrapable = false,
  renderLeftIcon,
  renderRightIcon,
  onPressClose,

  // TouchableWithoutFeedback 相关属性
  style,
  ...restProps
}) => {
  const onPressClosePersistFn = usePersistFn(onPressClose || noop)
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const STYLES = createStyle(CV, styleCreator)
  const [visible, setVisible] = useState(true)

  const textColor =
    CV[`notice_bar_${status}_text_color`] || CV.notice_bar_warning_text_color
  const barBackgroundColor = useMemo(
    () =>
      Color(textColor)
        .lightness(CV.notice_bar_background_color_lightness)
        .hex(),
    [CV.notice_bar_background_color_lightness, textColor],
  )

  // 修正数据
  color = getDefaultValue(color, textColor)
  backgroundColor = getDefaultValue(backgroundColor, barBackgroundColor)
  iconColor = getDefaultValue(iconColor, color)

  const noticeBarStyles: StyleProp<ViewStyle> = [
    STYLES.noticeBar,
    {
      backgroundColor,
    },
    style,
  ]

  const ModeIcon = getModeIcon(mode)
  const leftIconJSX = renderLeftIcon?.(iconColor, CV.notice_bar_icon_size)
  const rightIconJSX = renderRightIcon?.(iconColor, CV.notice_bar_icon_size)
  const messageJSX = renderTextLikeJSX(
    message,
    [
      STYLES.text,
      {
        color,
        marginLeft: isDef(leftIconJSX)
          ? CV.notice_bar_icon_margin_horizontal
          : 0,
        marginRight:
          isDef(rightIconJSX) || mode
            ? CV.notice_bar_icon_margin_horizontal
            : 0,
      },
      messageTextStyle,
    ],
    {
      numberOfLines: wrapable ? undefined : 1,
    },
  )

  const onPressModeIcon = useCallback(() => {
    if (mode === 'closeable') {
      setVisible(false)
      onPressClosePersistFn()
    }
  }, [mode, onPressClosePersistFn])

  const touchableProps = pickTouchablePropsField(restProps)
  const viewProps = omitTouchablePropsField(restProps)

  if (visible) {
    return (
      <TouchableWithoutFeedback {...touchableProps}>
        <View {...viewProps} style={noticeBarStyles}>
          {leftIconJSX}
          {messageJSX}
          {rightIconJSX}
          {mode ? (
            <ModeIcon
              color={iconColor}
              size={CV.notice_bar_icon_size}
              onPress={onPressModeIcon}
              pointerEvents={mode === 'closeable' ? 'auto' : 'none'}
            />
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return null
}

export default memo<typeof NoticeBar>(NoticeBar)
