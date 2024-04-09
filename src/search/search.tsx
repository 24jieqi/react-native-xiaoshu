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
      theme,
      iconSize = 20,
      iconColor,
      onSearch,
      showBack = false,
      onPressBack,
      autoSearch = false,
      showSearchButton = true,
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
    const [CV, STYLES] = Theme.useStyle({
      varCreator,
      styleCreator,
      theme,
    })
    const [CV_TEXT_INPUT] = Theme.useStyle({
      varCreator: varCreatorTextInput,
    })
    const onChangeTextPersistFn = usePersistFn(onChangeText || noop)
    const { run: runOnSearch } = useDebounceFn(onSearch || noop, {
      wait: onSearchDebounceWait,
      leading: false,
      trailing: true,
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

    // TextInput value、defaultValue 对值进行了判断，影响 clearable
    // 此处对两个属性的 undefined 情况进行过滤，useControllableValue 能正确识别是否受控
    const textInputProps = {
      ...(isUndefined(value) ? {} : { value }),
      ...(isUndefined(defaultValue) ? {} : { defaultValue }),
    }

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
          {...textInputProps}
          clearable
          fixGroupStyle={STYLES.text_input_group}
          style={STYLES.text_input}
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
        {showSearchButton ? (
          <Button
            text={searchText ?? locale.searchText}
            type="primary"
            style={STYLES.search_btn}
            size="s"
            onPress={onPress}
          />
        ) : null}

        {extra}
      </View>
    )
  },
)

export default memo(Search)
