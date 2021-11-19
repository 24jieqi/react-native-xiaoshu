import React, {
  useState,
  useRef,
  useCallback,
  useMemo,
  useImperativeHandle,
  memo,
  forwardRef,
} from 'react'
import type {
  ViewStyle,
  TextStyle,
  StyleProp,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputEndEditingEventData,
} from 'react-native'
import {
  View,
  InputAccessoryView,
  Text,
  TextInput as RNTextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  useColorScheme,
} from 'react-native'

import IconSvgCross from '../icon/cross'
import { useTheme } from '../theme'
import usePersistFn from '../hooks/usePersistFn'
import useUpdateEffect from '../hooks/useUpdateEffect'
import { getDefaultValue, renderTextLikeJSX, noop } from '../helpers'
import { isValue } from '../helpers/typeof'
import { formatNumber } from '../helpers/format/number'
import { createStyles } from './style'
import type { TextInputProps } from './interface'

const defaultFormatter = <T,>(t: T): T => t

let nextInputAccessoryViewID = 0

const getNextInputAccessoryViewID = () => ++nextInputAccessoryViewID

const iOSPlatform = Platform.OS === 'ios'

/**
 * 自定义输入项
 * @description 在和 react-native-keyboard-aware-scroll-view 配合做软键盘适配时，如果是 textarea 类型默认 scrollEnabled 禁用，避免软键盘遮挡输入内容
 * @description 动态切换输入内容可见，请手动控制 secureTextEntry，如果只是切换 type 在 iOS 正式环境可能会不生效
 */
const TextInputBase = forwardRef<RNTextInput, TextInputProps>(
  (
    {
      addonGroupStyle,
      addonBeforeTextStyle,
      addonAfterTextStyle,
      fixGroupStyles,
      prefixTextStyle,
      suffixTextStyle,

      type = 'text',
      rows = 2,
      clearable = false,
      clearTrigger = 'focus',
      formatter,
      formatTrigger = 'onChangeText',
      showWordLimit = false,
      bordered = false,
      addonAfter,
      addonBefore,
      prefix,
      suffix,

      // TextInput 的属性
      value,
      defaultValue,
      style,
      multiline,
      selectionColor,
      secureTextEntry,
      placeholderTextColor,
      keyboardType,
      onChangeText,
      onEndEditing,
      onFocus,
      onBlur,
      maxLength,
      scrollEnabled = false,
      returnKeyType,
      ...resetProps
    },
    ref,
  ) => {
    // 修正数据
    if (type === 'textarea') {
      multiline = true
      clearable = false
    } else {
      returnKeyType = getDefaultValue(returnKeyType, 'done')
    }
    if (type === 'password') {
      secureTextEntry = true
    }
    if (type === 'number') {
      keyboardType = 'numeric'
    }
    if (type === 'digit') {
      keyboardType = 'number-pad'
    }
    if (showWordLimit && isValue(maxLength)) {
      showWordLimit = false
    }

    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
    const onFocusPersistFn = usePersistFn(onFocus || noop)
    const onBlurPersistFn = usePersistFn(onBlur || noop)
    const formatterPersistFn = usePersistFn(formatter || defaultFormatter)
    const [localValue, setLocalValue] = useState(
      isValue(value) ? value : defaultValue,
    )
    const [focus, setFocus] = useState(false)
    const TextInputRef = useRef<RNTextInput>(null)
    const colorScheme = useColorScheme()
    const THEME_VAR = useTheme()
    const inputAccessoryViewID = useMemo(
      () => `TextInputBase_${getNextInputAccessoryViewID()}`,
      [],
    )
    const STYLES = createStyles(THEME_VAR)

    selectionColor = getDefaultValue(
      selectionColor,
      THEME_VAR.text_input_selection_color,
    )
    placeholderTextColor = getDefaultValue(
      placeholderTextColor,
      THEME_VAR.text_input_placeholder_text_color,
    )

    /**
     * 转发实例
     */
    useImperativeHandle(ref, () => {
      return TextInputRef.current
    })

    // 同步外部的数据
    useUpdateEffect(() => {
      setLocalValue(value)
    }, [value])

    /**
     * 点击完成收起软键盘
     */
    const onPressFinish = useCallback(() => {
      Keyboard.dismiss()
      setFocus(false)
    }, [])

    /** 点击视觉上的输入框，聚焦，多行文本 */
    const onPressTextInput = useCallback(() => {
      TextInputRef.current?.focus()
    }, [])

    /**
     * 当文字变化
     * @description 在这个阶段判断字符长度、格式化数据
     */
    const onChangeTextTextInput = useCallback(
      (t: string) => {
        // 部分数据开始格式化
        // 允许输入正整数
        if (type === 'digit' || type === 'number') {
          const isNumber = type === 'number'
          t = formatNumber(t, isNumber, isNumber)
        }

        if (typeof maxLength === 'number' && t.length > maxLength) {
          t = t.slice(0, maxLength)
        }

        if (formatTrigger === 'onChangeText' && formatter) {
          t = formatter(t)
        }

        setLocalValue(t)
        onChangeTextPersistFn(t)
      },
      [type, maxLength, formatTrigger, formatter, onChangeTextPersistFn],
    )

    /**
     * 编辑结束的时候
     */
    const onEndEditingTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        if (formatTrigger === 'onChangeText') {
          e.nativeEvent.text = formatterPersistFn(e.nativeEvent.text)
        }

        setLocalValue(e.nativeEvent.text)
        onEndEditingPersistFn(e)
      },
      [onEndEditingPersistFn, formatterPersistFn, formatTrigger],
    )

    /**
     * 点击清除按钮
     * @description 目前不能在输入框聚焦的时候触发点击，输入框失去焦点后才能触发点击，可能是软键盘的问题？
     */
    const onPressClearable = useCallback(() => {
      TextInputRef.current?.clear()
      setLocalValue('')
      onChangeTextPersistFn('')
      onPressTextInput()
    }, [onChangeTextPersistFn, onPressTextInput])

    /**
     * 输入框聚焦
     */
    const onFocusTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(true)
        onFocusPersistFn(e)
      },
      [onFocusPersistFn],
    )

    /**
     * 输入框失焦
     */
    const onBlurTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(false)
        onBlurPersistFn(e)
      },
      [onBlurPersistFn],
    )

    const isTextarea = type === 'textarea'
    // textarea 模式就是纯输入框
    const addonBeforeJSX = isTextarea
      ? null
      : renderTextLikeJSX(addonBefore, [
          STYLES.addon_text,
          STYLES.addon_text_before,
          addonBeforeTextStyle,
        ])
    const addonAfterJSX = isTextarea
      ? null
      : renderTextLikeJSX(addonAfter, [
          STYLES.addon_text,
          STYLES.addon_text_after,
          addonAfterTextStyle,
        ])
    const prefixJSX = isTextarea
      ? null
      : renderTextLikeJSX(prefix, [
          STYLES.input_fix_text,
          STYLES.input_fix_text_pre,
          prefixTextStyle,
        ])
    const suffixJSX = isTextarea
      ? null
      : renderTextLikeJSX(suffix, [
          STYLES.input_fix_text,
          STYLES.input_fix_text_suf,
          suffixTextStyle,
        ])

    const accessoryTextStyle: TextStyle = {
      color: THEME_VAR.text_input_accessory_text_color,
      fontSize: THEME_VAR.text_input_accessory_font_size,
      paddingHorizontal: THEME_VAR.text_input_dark_accessory_padding_horizontal,
      lineHeight: (THEME_VAR.text_input_accessory_height / 3) * 2,
      fontWeight: 'bold',
    }
    /** 在添加了 addonXxx 的情况下，需要输入框部分自适应宽 */
    const inputAddonModeStyle = {
      flex: 1,
    }
    /** 输入框不确定是否要排除边框 */
    const inputUncertainHeight = bordered ? 2 : 0
    const inputStyles: StyleProp<ViewStyle> = [
      STYLES.input,
      isTextarea
        ? {
            minHeight:
              THEME_VAR.text_input_min_height * rows - inputUncertainHeight,
            paddingVertical: 2,
          }
        : {
            height: THEME_VAR.text_input_min_height - inputUncertainHeight,
            alignContent: 'center',
          },
      (addonAfterJSX || addonBeforeJSX) && bordered
        ? inputAddonModeStyle
        : null,
    ]

    /**
     * 显示辅助工具栏
     * @description 单行输入框回车键已具备收起键盘的作用
     */
    const showInputAccessoryView =
      iOSPlatform && type !== 'text' && type !== 'password'
    const keyboardAppearance =
      !isValue(resetProps.keyboardAppearance) ||
      resetProps.keyboardAppearance === 'default'
        ? colorScheme || 'light'
        : resetProps.keyboardAppearance

    const textInputJSX = (
      <TouchableOpacity activeOpacity={1} style={inputStyles}>
        <RNTextInput
          {...resetProps}
          ref={TextInputRef}
          style={[STYLES.text_input, style]}
          value={isValue(value) ? value : localValue}
          defaultValue={defaultValue}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          scrollEnabled={scrollEnabled}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeTextTextInput}
          onEndEditing={onEndEditingTextInput}
          onFocus={onFocusTextInput}
          onBlur={onBlurTextInput}
          inputAccessoryViewID={
            resetProps.inputAccessoryViewID ||
            (showInputAccessoryView ? inputAccessoryViewID : undefined)
          }
        />

        {clearable &&
        (clearTrigger === 'focus' ? focus : true) &&
        localValue &&
        localValue.length ? (
          <TouchableOpacity
            style={STYLES.clearable}
            onPress={onPressClearable}
            activeOpacity={THEME_VAR.active_opacity}>
            <IconSvgCross
              color={THEME_VAR.text_input_clearable_color}
              size={THEME_VAR.text_input_clearable_size / 2}
              onPress={onPressClearable}
            />
          </TouchableOpacity>
        ) : null}

        {showWordLimit ? (
          <Text style={STYLES.word_limit_text}>
            {localValue?.length || 0}/{maxLength}
          </Text>
        ) : null}
      </TouchableOpacity>
    )

    const inputJSX = (
      <>
        {showInputAccessoryView ? (
          <InputAccessoryView
            nativeID={inputAccessoryViewID}
            backgroundColor={
              THEME_VAR[
                `text_input_${keyboardAppearance}_accessory_background_color`
              ]
            }>
            <View style={STYLES.accessory}>
              <TouchableOpacity
                onPress={onPressFinish}
                activeOpacity={THEME_VAR.active_opacity}>
                <Text style={accessoryTextStyle}>完成</Text>
              </TouchableOpacity>
            </View>
          </InputAccessoryView>
        ) : null}

        {prefixJSX || suffixJSX || bordered ? (
          <View
            style={[
              STYLES.input_fix_group,
              bordered
                ? [
                    STYLES.input_border,
                    addonAfterJSX || addonBeforeJSX
                      ? inputAddonModeStyle
                      : null,
                  ]
                : null,
              fixGroupStyles,
            ]}>
            {prefixJSX}
            {textInputJSX}
            {suffixJSX}
          </View>
        ) : (
          textInputJSX
        )}
      </>
    )

    if (addonAfterJSX || addonBeforeJSX) {
      return (
        <View style={[STYLES.addon_group, addonGroupStyle]}>
          {addonBeforeJSX}
          {inputJSX}
          {addonAfterJSX}
        </View>
      )
    }

    return inputJSX
  },
)

export default memo(TextInputBase)
