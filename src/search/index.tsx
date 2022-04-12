import React, { useRef, useCallback, memo, forwardRef } from 'react'
import { View } from 'react-native'

import Button from '../button'
import { getDefaultValue, isValue, noop } from '../helpers'
import { usePersistFn } from '../hooks'
import ArrowLeftOutline from '../icon/arrow-left'
import SearchOutline from '../icon/search'
import TextInput from '../text-input'
import type { TextInputInstance } from '../text-input/interface'
import { varCreator as varCreatorTextInput } from '../text-input/style'
import Theme from '../theme'

import type { SearchProps } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * 搜索
 */
const Search = forwardRef<TextInputInstance, SearchProps>(
  (
    {
      iconSize = 20,
      iconColor,
      onSearch,
      showBack = false,
      onPressBack,
      autoSearch = false,

      value,
      defaultValue,
      placeholder,
      placeholderTextColor,
      autoFocus,
      onChangeText,

      style,
      ...restProps
    },
    ref,
  ) => {
    const TOKENS = Theme.useThemeTokens()
    const CV = Theme.createVar(TOKENS, varCreator)
    const CV_TEXT_INPUT = Theme.createVar(TOKENS, varCreatorTextInput)
    const STYLES = Theme.createStyle(CV, styleCreator)
    const onSearchPersistFn = usePersistFn(onSearch || noop)
    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)

    /** 输入框内部的值，不维护状态，避免没必要的更新 */
    const SearchText = useRef(isValue(value) ? value : defaultValue)

    placeholderTextColor = getDefaultValue(
      placeholderTextColor,
      CV_TEXT_INPUT.text_input_placeholder_text_color,
    )

    iconColor = getDefaultValue(iconColor, placeholderTextColor as string)

    const onChange = useCallback(
      (v: string) => {
        SearchText.current = v

        if (autoSearch) {
          onSearchPersistFn(v)
        }
      },
      [autoSearch, onSearchPersistFn],
    )

    // TODO 触发 onSearch 做一个节流
    const _onChangeText = useCallback(
      (v: string) => {
        SearchText.current = v
        onChangeTextPersistFn(v)

        if (autoSearch) {
          onSearchPersistFn(v)
        }
      },
      [autoSearch, onChangeTextPersistFn, onSearchPersistFn],
    )

    const onPress = useCallback(() => {
      onSearchPersistFn(SearchText.current)
    }, [onSearchPersistFn])

    return (
      <View
        {...restProps}
        style={[STYLES.search, showBack ? STYLES.search_back : null, style]}>
        {showBack ? (
          <ArrowLeftOutline
            onPress={onPressBack}
            color={CV.search_back_icon_color}
            size={24}
            style={STYLES.icon_back}
          />
        ) : null}

        <TextInput
          ref={ref}
          clearable
          fixGroupStyle={STYLES.text_input_group}
          style={STYLES.text_input}
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          prefix={<SearchOutline color={iconColor} size={iconSize} />}
          onChange={onChange}
          onChangeText={_onChangeText}
          autoFocus={autoFocus}
        />

        <Button text="搜索" type="primary" size="s" onPress={onPress} />
      </View>
    )
  },
)

export default memo(Search)
