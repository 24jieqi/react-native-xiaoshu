import React, { useEffect, useState, memo } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import Button from '../button'
import { varCreator as varCreatorButton } from '../button/style'
import CheckboxIcon from '../checkbox/checkbox-icon'
import { varCreator as varCreatorCheckbox } from '../checkbox/style'
import Empty from '../empty'
import { useSafeHeight } from '../hooks'
import SuccessOutline from '../icon/success'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import Theme from '../theme'

import type { SelectorProps, SelectorValue } from './interface'
import { varCreator, styleCreator } from './style'

/**
 * Selector 弹出层式 Select
 * @description 类似 Web 端的 Select 组件，可以多选、单选。
 */
const Selector: React.FC<SelectorProps> = ({
  title = '请选择',
  options,
  value,
  multiple = false,
  onChange,
  onChangeImmediate,
  safeAreaInsetTop,

  // popup 组件相关属性
  visible,
  closeOnPressOverlay = true,
  onClose,
  ...restProps
}) => {
  const safeHeight = useSafeHeight({ top: safeAreaInsetTop })
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_BUTTON = Theme.createVar(TOKENS, varCreatorButton)
  const CV_CHECKBOX = Theme.createVar(TOKENS, varCreatorCheckbox)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const [selectedKeys, setSelectedKeys] = useState<SelectorValue[]>(
    multiple
      ? value
        ? ([] as SelectorValue[]).concat(value as SelectorValue[])
        : []
      : value
      ? [value as SelectorValue]
      : [],
  )

  // 同步已选的数据
  useEffect(() => {
    setSelectedKeys(
      multiple
        ? value
          ? ([] as SelectorValue[]).concat(value as SelectorValue[])
          : []
        : value
        ? [value as SelectorValue]
        : [],
    )
  }, [value, multiple])

  /**
   * 生成每次点击的回调
   */
  const genOnPressOption = (key: SelectorValue) => () => {
    if (multiple) {
      // 多选维护内部变量
      setSelectedKeys(v => {
        const other = v.filter(val => val !== key)

        if (other.length === v.length) {
          const newValues = v.concat(key)

          return onChangeImmediate
            ? (onChangeImmediate(newValues) as SelectorValue[])
            : newValues
        }

        return onChangeImmediate
          ? (onChangeImmediate(other) as SelectorValue[])
          : other
      })
    } else {
      const newValue = onChangeImmediate
        ? (onChangeImmediate(key) as SelectorValue)
        : key

      // 单选直接出发回调
      onChange?.(newValue, options.filter(opt => opt.value === newValue)[0])
    }
  }

  /**
   * 点击确定按钮
   */
  const onPressOk = () => {
    onChange?.(
      selectedKeys,
      options.filter(opt => selectedKeys.indexOf(opt.value) > -1),
    )
  }

  return (
    <Popup
      {...restProps}
      visible={visible}
      onClose={onClose}
      closeOnPressOverlay={closeOnPressOverlay}
      onPressOverlay={onClose}
      position="bottom"
      safeAreaInsetBottom
      round>
      <View style={{ maxHeight: safeHeight }}>
        <PopupHeader title={title} onClose={onClose} />

        <ScrollView bounces={false}>
          {options.length === 0 ? <Empty /> : null}

          {options?.map(item => {
            const isSelected =
              selectedKeys.findIndex(key => key === item.value) >= 0

            return (
              <TouchableOpacity
                key={item.value}
                disabled={item.disabled}
                onPress={genOnPressOption(item.value)}
                activeOpacity={CV_BUTTON.button_active_opacity}>
                <View style={STYLES.option_item}>
                  <Text style={STYLES.option_item_text} numberOfLines={1}>
                    {item.label}
                  </Text>

                  {multiple ? (
                    <CheckboxIcon
                      active={isSelected}
                      disabled={item.disabled}
                      onPress={genOnPressOption(item.value)}
                    />
                  ) : isSelected ? (
                    <SuccessOutline
                      color={CV.selector_icon_selected_color}
                      size={CV_CHECKBOX.checkbox_icon_size}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>

        {multiple ? (
          <View style={STYLES.btn}>
            <Button type="primary" onPress={onPressOk} text="确定" />
          </View>
        ) : null}
      </View>
    </Popup>
  )
}

export default memo(Selector)
