import React, { useRef, useEffect, useMemo, useState, memo } from 'react'
import type { ViewStyle } from 'react-native'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Popup from '../popup/popup'
import PopupHeader from '../popup/header'
import Empty from '../empty'
import Button from '../button'
import CheckboxIcon from '../checkbox/icon'
import { IconSuccessOutLine } from '../icon'
import { useTheme } from '../theme'
import type { SelectPopupProps, SelectPopupValue } from './interface'
import { createStyles } from './style'

const SelectPopup: React.FC<SelectPopupProps> = ({
  title,
  options,
  value,
  multiple = false,
  onChange,

  // popup 组件相关属性
  visible,
  closeOnPressOverlay = true,
  onClose,
  ...restProps
}) => {
  const themeVar = useTheme()
  const insets = useSafeAreaInsets()
  const windowDimensions = useWindowDimensions()
  const ScrollViewRef = useRef<ScrollView>(null)
  const [selectedKeys, setSelectedKeys] = useState<SelectPopupValue[]>(
    multiple
      ? value
        ? ([] as SelectPopupValue[]).concat(value as SelectPopupValue[])
        : []
      : value
      ? [value as SelectPopupValue]
      : [],
  )
  const Styles = createStyles(themeVar)

  /** select 动态高度 */
  const selectHeight = useMemo(() => {
    const titleHeight = 24
    /** 选项/内容高度 选项个数 + 标题高度 + 圆角边缘 + 多选按钮高度 + 底部安全距离 */
    const pickHeight =
      options.length * themeVar.select_popup_option_text_line_height +
      titleHeight +
      themeVar.popup_round_border_radius +
      (multiple ? 60 : 0) +
      insets.bottom
    const maxHeight =
      windowDimensions.height - themeVar.page_header_height - insets.top

    return pickHeight > maxHeight
      ? maxHeight
      : pickHeight < themeVar.select_popup_min_height
      ? themeVar.select_popup_min_height
      : pickHeight
  }, [
    options.length,
    themeVar.select_popup_option_text_line_height,
    themeVar.popup_round_border_radius,
    themeVar.page_header_height,
    themeVar.select_popup_min_height,
    multiple,
    insets.bottom,
    insets.top,
    windowDimensions.height,
  ])

  const selectStyle = useMemo<ViewStyle>(() => {
    return { height: selectHeight, paddingBottom: insets.bottom }
  }, [selectHeight, insets.bottom])

  // 同步已选的数据
  useEffect(() => {
    setSelectedKeys(
      multiple
        ? value
          ? ([] as SelectPopupValue[]).concat(value as SelectPopupValue[])
          : []
        : value
        ? [value as SelectPopupValue]
        : [],
    )
  }, [value, multiple])

  /**
   * 生成每次点击的回调
   */
  const genOnPressOption = (key: SelectPopupValue) => () => {
    if (multiple) {
      // 多选维护内部变量
      setSelectedKeys(v => {
        const other = v.filter(val => val !== key)

        if (other.length === v.length) {
          return v.concat(key)
        }

        return other
      })
    } else {
      // 单选直接出发回调
      onChange && onChange(key, options.filter(opt => opt.value === key)[0])
    }
  }

  /**
   * 点击确定按钮
   */
  const onPressOk = () => {
    onChange &&
      onChange(
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
      round>
      <View style={selectStyle}>
        <PopupHeader title={title} onClose={onClose} />

        <View style={Styles.body}>
          <ScrollView ref={ScrollViewRef}>
            {options.length === 0 ? <Empty /> : null}

            {options?.map(item => {
              const isSelected =
                selectedKeys.findIndex(key => key === item.value) >= 0

              return (
                <TouchableOpacity
                  key={item.value}
                  onPress={genOnPressOption(item.value)}>
                  <View style={Styles.optionItem}>
                    <Text style={Styles.optionItemText} numberOfLines={1}>
                      {item.label}
                    </Text>

                    {multiple ? (
                      <CheckboxIcon active={isSelected} />
                    ) : isSelected ? (
                      <IconSuccessOutLine
                        color={themeVar.primary}
                        size={themeVar.checkbox_icon_size}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              )
            })}
          </ScrollView>

          {multiple ? (
            <View style={Styles.btn}>
              <Button type="primary" onPress={onPressOk}>
                确定
              </Button>
            </View>
          ) : null}
        </View>
      </View>
    </Popup>
  )
}

export default memo(SelectPopup)
