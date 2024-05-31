import isArray from 'lodash/isArray'
import isUndefined from 'lodash/isUndefined'
import React, { memo } from 'react'
import { Keyboard, View } from 'react-native'

import { varCreator as varCreatorCell } from '../cell/style'
import { usePersistFn } from '../hooks'
import LoadingSpinner from '../loading/loading-spinner'
import Locale from '../locale'
import Selector from '../selector'
import type { SelectorValue } from '../selector/interface'
import TextInputClear from '../text-input/text-input-clear'
import Theme from '../theme'
import type { TreeOption } from '../tree/interface'

import FieldText from './field-text'
import type { FieldSelectorProps } from './interface'

/**
 * 输入框 选择输入
 */
const FieldSelector: React.FC<FieldSelectorProps> = ({
  value,
  options,
  multiple,
  onChange,
  optionsLoading = false,
  editable = true,
  clearable = false,
  selectorTitle,
  renderResultText,
  search,

  isLink = true,
  ...restProps
}) => {
  const locale = Locale.useLocale().FieldSelector
  const TOKENS = Theme.useThemeTokens()
  const CV_CELL = Theme.createVar(TOKENS, varCreatorCell)

  const onPressCell = usePersistFn(() => {
    Keyboard.dismiss()
    if (editable) {
      Selector({
        title: selectorTitle ?? locale.selectorTitle,
        multiple,
        options,
        value,
        search,
        onChange,
      }).catch(() => {})
    }
  })
  const hasValue = multiple
    ? isArray(value as SelectorValue[]) && (value as SelectorValue[]).length > 0
    : !isUndefined(value as SelectorValue)
  const _value = hasValue
    ? ((multiple ? value : [value]) as SelectorValue[])
    : undefined
  const _option =
    (_value
      ?.map(o => {
        const index = options.findIndex(ops => ops.value === o)
        if (index >= 0) {
          return options[index]
        }
        return null
      })
      .filter(Boolean) as TreeOption[]) ?? []
  const value2text = hasValue
    ? renderResultText
      ? renderResultText(_value, _option)
      : _option.map(o => o.label).join('、')
    : undefined

  return (
    <FieldText
      {...restProps}
      onPress={optionsLoading ? undefined : onPressCell}
      value={value2text}
      isLink={optionsLoading || (hasValue && clearable) ? false : isLink}
      valueExtra={
        optionsLoading || (hasValue && clearable) ? (
          <>
            {restProps.valueExtra}
            {optionsLoading ? (
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginLeft: CV_CELL.cell_icon_link_margin_left,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LoadingSpinner
                  testID="FIELD_SELECTOR_LOADING"
                  size={CV_CELL.cell_icon_size}
                  color={CV_CELL.cell_icon_color}
                />
              </View>
            ) : (
              <TextInputClear
                onPress={() => {
                  // TODO 修复类型报错
                  onChange?.((multiple ? [] : undefined) as any, [])
                }}
              />
            )}
          </>
        ) : (
          restProps.valueExtra
        )
      }
    />
  )
}

export default memo(FieldSelector)
