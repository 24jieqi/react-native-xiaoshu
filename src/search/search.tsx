import {
  ArrowLeftOutline,
  SearchOutline,
} from '@fruits-chain/icons-react-native'
import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'
import React, { useRef, useCallback, memo, forwardRef } from 'react'
import { View } from 'react-native'

import Button from '../button'
import { getDefaultValue } from '../helpers'
import { usePersistFn, useDebounceFn } from '../hooks'
import Locale from '../locale'
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
      onSearchDebounceWait = 300,
      searchText,
      extra,
      prefix,
      suffix,

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
    const locale = Locale.useLocale().Search
    const TOKENS = Theme.useThemeTokens()
    const CV = Theme.createVar(TOKENS, varCreator)
    const CV_TEXT_INPUT = Theme.createVar(TOKENS, varCreatorTextInput)
    const STYLES = Theme.createStyle(CV, styleCreator)
    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const { run: runOnSearch } = useDebounceFn(onSearch || noop, {
      wait: onSearchDebounceWait,
    })

    /** 输入框内部的值，不维护状态，避免没必要的更新 */
    const SearchText = useRef(!isUndefined(value) ? value : defaultValue)

    placeholderTextColor = getDefaultValue(
      placeholderTextColor,
      CV_TEXT_INPUT.text_input_placeholder_text_color,
    )

    iconColor = getDefaultValue(iconColor, placeholderTextColor as string)

    const onChange = useCallback(
      (v: string) => {
        SearchText.current = v

        if (autoSearch) {
          runOnSearch(v)
        }
      },
      [autoSearch, runOnSearch],
    )

    const _onChangeText = useCallback(
      (v: string) => {
        SearchText.current = v
        onChangeTextPersistFn(v)

        if (autoSearch) {
          runOnSearch(v)
        }
      },
      [autoSearch, onChangeTextPersistFn, runOnSearch],
    )

    const onPress = useCallback(() => {
      runOnSearch(SearchText.current)
    }, [runOnSearch])

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
          prefix={
            <>
              {prefix}
              <SearchOutline color={iconColor} size={iconSize} />
            </>
          }
          suffix={suffix}
          onChange={onChange}
          onChangeText={_onChangeText}
          autoFocus={autoFocus}
        />

        <Button
          text={searchText ?? locale.searchText}
          type="primary"
          size="s"
          onPress={onPress}
        />

        {extra}
      </View>
    )
  },
)

export default memo(Search)
