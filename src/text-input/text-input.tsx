import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
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
  TextInputChangeEventData,
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

import { varCreator as varCreatorButton } from '../button/style'
import { getDefaultValue, renderTextLikeJSX } from '../helpers'
import { usePersistFn, useControllableValue } from '../hooks'
import Locale from '../locale'
import Theme from '../theme'

import type { TextInputProps, TextInputInstance } from './interface'
import { varCreator, styleCreator } from './style'
import TextInputClear from './text-input-clear'

const defaultFormatter = <T,>(t: T): T => t

let nextInputAccessoryViewID = 0

const getNextInputAccessoryViewID = () => ++nextInputAccessoryViewID

const iOSPlatform = Platform.OS === 'ios'

/**
 * 自定义输入项
 * @description 在和 react-native-keyboard-aware-scroll-view 配合做软键盘适配时，如果是 textarea 类型默认 scrollEnabled 禁用，避免软键盘遮挡输入内容
 * @description 动态切换输入内容可见，请手动控制 secureTextEntry，如果只是切换 type 在 iOS 正式环境可能会不生效
 */
const TextInput = forwardRef<TextInputInstance, TextInputProps>(
  (
    {
      theme,
      addonGroupStyle,
      addonBeforeTextStyle,
      addonAfterTextStyle,
      fixGroupStyle,
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
      inputWidth,
      size = 'm',
      textareaMaxHeight,

      // TextInput 的属性
      style,
      multiline,
      selectionColor,
      placeholderTextColor,
      onChangeText,
      onEndEditing,
      onFocus,
      onBlur,
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

    if (showWordLimit && isUndefined(resetProps.maxLength)) {
      showWordLimit = false
    }

    const locale = Locale.useLocale().TextInput
    const [CV, STYLES] = Theme.useStyle({
      varCreator,
      styleCreator,
      theme,
    })
    const [CV_BUTTON] = Theme.useStyle({
      varCreator: varCreatorButton,
    })

    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const onEndEditingPersistFn = usePersistFn(onEndEditing || noop)
    const onFocusPersistFn = usePersistFn(onFocus || noop)
    const onBlurPersistFn = usePersistFn(onBlur || noop)
    const formatterPersistFn = usePersistFn(formatter || defaultFormatter)
    const [value, onChange] = useControllableValue(resetProps)
    const [focus, setFocus] = useState(false)
    const TextInputRef = useRef<TextInputInstance>(null)
    const colorScheme = useColorScheme()
    const inputAccessoryViewID = useMemo(
      () => `TextInput_${getNextInputAccessoryViewID()}`,
      [],
    )
    /** 当前值 */
    const Value = useRef(value)
    Value.current = value
    /** 显示禁用样子 bordered 才显示 */
    const showDisabledInput =
      bordered && !isNil(resetProps.editable) && !resetProps.editable
    /** 输入框最小高度 */
    const textInputMinHeight = CV[`text_input_${size}_min_height`]
    /** 所有文字/文案相关的大小 */
    const textInputFontSize = CV[`text_input_${size}_font_size`]

    selectionColor = getDefaultValue(
      selectionColor,
      CV.text_input_selection_color,
    )
    placeholderTextColor = getDefaultValue(
      placeholderTextColor,
      CV.text_input_placeholder_text_color,
    )

    // 转发实例
    useImperativeHandle(ref, () => {
      return TextInputRef.current!
    })

    /** 点击完成收起软键盘 */
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
        if (formatTrigger === 'onChangeText') {
          t = formatterPersistFn(t)
        }

        onChange(t)
        onChangeTextPersistFn(t)
      },
      [formatTrigger, formatterPersistFn, onChange, onChangeTextPersistFn],
    )

    /** 编辑结束的时候 */
    const onEndEditingTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        if (formatTrigger === 'onEndEditing') {
          e.nativeEvent.text = formatterPersistFn(e.nativeEvent.text)
        }

        if (Value.current !== e.nativeEvent.text) {
          onChange(e.nativeEvent.text)
        }

        onEndEditingPersistFn(e)
      },
      [onEndEditingPersistFn, formatterPersistFn, formatTrigger, onChange],
    )

    /** 当文本框内容变化时 */
    const onChangeTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        onChange(e.nativeEvent.text)
      },
      [onChange],
    )

    /**
     * 点击清除按钮
     * @description 目前不能在输入框聚焦的时候触发点击，输入框失去焦点后才能触发点击，可能是软键盘的问题？
     */
    const onPressClearable = useCallback(() => {
      TextInputRef.current?.clear()
      onChange('')
      onChangeTextPersistFn('')
      onPressTextInput()
    }, [onChangeTextPersistFn, onPressTextInput, onChange])

    /** 输入框聚焦 */
    const onFocusTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(true)
        onFocusPersistFn(e)
      },
      [onFocusPersistFn],
    )

    /** 输入框失焦 */
    const onBlurTextInput = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setFocus(false)
        onBlurPersistFn(e)
      },
      [onBlurPersistFn],
    )

    const textInputTextStyle: TextStyle = {
      fontSize: textInputFontSize,
    }

    const isTextarea = type === 'textarea'
    // textarea 模式就是纯输入框
    const addonBeforeJSX = isTextarea
      ? null
      : renderTextLikeJSX(addonBefore, [
          STYLES.addon_text,
          STYLES.addon_text_before,
          textInputTextStyle,
          addonBeforeTextStyle,
        ])
    const addonAfterJSX = isTextarea
      ? null
      : renderTextLikeJSX(addonAfter, [
          STYLES.addon_text,
          STYLES.addon_text_after,
          textInputTextStyle,
          addonAfterTextStyle,
        ])
    const prefixJSX = isTextarea
      ? null
      : renderTextLikeJSX(prefix, [
          STYLES.input_fix_text,
          STYLES.input_fix_text_pre,
          textInputTextStyle,
          prefixTextStyle,
        ])
    const suffixJSX = isTextarea
      ? null
      : renderTextLikeJSX(suffix, [
          STYLES.input_fix_text,
          STYLES.input_fix_text_suf,
          textInputTextStyle,
          suffixTextStyle,
        ])
    const customTextInputWidthStyle: TextStyle = !isNil(inputWidth)
      ? {
          flexShrink: 1,
          flexGrow: 0,
          flexBasis: inputWidth,
          width: inputWidth,
        }
      : {}
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
            minHeight: textInputMinHeight * rows - inputUncertainHeight,
            maxHeight: textareaMaxHeight,
            paddingVertical: 2,
            alignItems: 'flex-start',
          }
        : {
            minHeight: textInputMinHeight - inputUncertainHeight,
            alignContent: 'center',
          },

      isTextarea && showWordLimit
        ? {
            paddingBottom: CV.text_input_word_limit_text_font_size,
          }
        : null,
      (addonAfterJSX || addonBeforeJSX) && bordered
        ? inputAddonModeStyle
        : null,
      customTextInputWidthStyle,
    ]

    /**
     * 显示辅助工具栏
     * @description 单行输入框回车键已具备收起键盘的作用
     */
    const showInputAccessoryView =
      iOSPlatform &&
      type !== 'text' &&
      (isNil(resetProps.editable) || !!resetProps.editable)
    const keyboardAppearance =
      isUndefined(resetProps.keyboardAppearance) ||
      resetProps.keyboardAppearance === 'default'
        ? colorScheme || 'light'
        : resetProps.keyboardAppearance

    const textInputJSX = (
      <TouchableOpacity
        activeOpacity={1}
        style={inputStyles}
        onPress={onPressTextInput}>
        <RNTextInput
          {...resetProps}
          ref={TextInputRef}
          style={[
            STYLES.text_input,
            textInputTextStyle,
            showDisabledInput ? STYLES.text_input_disabled : null,
            style,
          ]}
          placeholder={
            focus && resetProps.textAlign === 'center'
              ? undefined
              : resetProps.placeholder
          }
          value={value}
          multiline={multiline}
          returnKeyType={returnKeyType}
          selectionColor={selectionColor}
          placeholderTextColor={placeholderTextColor}
          onChangeText={onChangeTextTextInput}
          onEndEditing={onEndEditingTextInput}
          onChange={onChangeTextInput}
          onFocus={onFocusTextInput}
          onBlur={onBlurTextInput}
          inputAccessoryViewID={
            resetProps.inputAccessoryViewID ||
            (showInputAccessoryView ? inputAccessoryViewID : undefined)
          }
        />

        {clearable &&
        (clearTrigger === 'focus' ? focus : true) &&
        value &&
        value.length ? (
          <TextInputClear theme={theme} onPress={onPressClearable} />
        ) : null}

        {showWordLimit ? (
          <Text style={STYLES.word_limit_text}>
            {value?.length || 0}/{resetProps.maxLength}
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
              CV[`text_input_${keyboardAppearance}_accessory_background_color`]
            }>
            <View style={STYLES.accessory}>
              <TouchableOpacity
                onPress={onPressFinish}
                activeOpacity={CV_BUTTON.button_active_opacity}>
                <Text style={STYLES.accessory_text}>{locale.complete}</Text>
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
                    !isNil(resetProps.editable) && !resetProps.editable
                      ? STYLES.input_disabled
                      : null,
                  ]
                : null,
              prefixJSX || suffixJSX ? null : customTextInputWidthStyle,
              fixGroupStyle,
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

export default memo(TextInput)
