import React, { memo, useState, useCallback } from 'react'
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
import { useTheme, widthStyle } from '../theme'

import type { NoticeBarProps, NoticeBarMode } from './interface'
import { createStyles } from './style'

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
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const [visible, setVisible] = useState(true)

  const textColor =
    THEME_VAR[`notice_bar_${status}_text_color`] ||
    THEME_VAR.notice_bar_warning_text_color
  const barBackgroundColor =
    THEME_VAR[`notice_bar_${status}_background_color`] ||
    THEME_VAR.notice_bar_warning_background_color

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
  const leftIconJSX = renderLeftIcon?.(
    iconColor,
    THEME_VAR.notice_bar_icon_size,
  )
  const rightIconJSX = renderRightIcon?.(
    iconColor,
    THEME_VAR.notice_bar_icon_size,
  )
  const messageJSX = renderTextLikeJSX(
    message,
    [
      STYLES.text,
      {
        color,
        marginLeft: isDef(leftIconJSX)
          ? THEME_VAR.notice_bar_icon_margin_horizontal
          : 0,
        marginRight:
          isDef(rightIconJSX) || mode
            ? THEME_VAR.notice_bar_icon_margin_horizontal
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
              size={THEME_VAR.notice_bar_icon_size}
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
