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

import Button from '../button'
import { varCreator as varCreatorButton } from '../button/style'
import CheckboxIcon from '../checkbox/checkbox-icon'
import { varCreator as varCreatorCheckbox } from '../checkbox/style'
import Empty from '../empty'
import { getDefaultValue } from '../helpers'
import SuccessOutline from '../icon/success'
import { varCreator as varCreatorNavBar } from '../nav-bar/style'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import { varCreator as varCreatorPopup } from '../popup/style'
import { useThemeTokens, createVar, createStyle } from '../theme'

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
  const TOKENS = useThemeTokens()
  const CV = createVar(TOKENS, varCreator)
  const CV_NAV_BAR = createVar(TOKENS, varCreatorNavBar)
  const CV_BUTTON = createVar(TOKENS, varCreatorButton)
  const CV_CHECKBOX = createVar(TOKENS, varCreatorCheckbox)
  const CV_POPUP = createVar(TOKENS, varCreatorPopup)
  const STYLES = createStyle(CV, styleCreator)
  const insets = useSafeAreaInsets()
  const windowDimensions = useWindowDimensions()
  const ScrollViewRef = useRef<ScrollView>(null)
  const [selectedKeys, setSelectedKeys] = useState<SelectorValue[]>(
    multiple
      ? value
        ? ([] as SelectorValue[]).concat(value as SelectorValue[])
        : []
      : value
      ? [value as SelectorValue]
      : [],
  )

  safeAreaInsetTop = getDefaultValue(safeAreaInsetTop, insets.top)

  /** select 动态高度 */
  const selectHeight = useMemo(() => {
    /** 选项/内容高度 选项个数 + 标题高度 + 圆角边缘 + 多选按钮高度 + 底部安全距离 */
    const pickHeight =
      options.length * CV.selector_option_text_line_height +
      CV_NAV_BAR.nav_bar_height +
      CV_POPUP.popup_round_border_radius +
      (multiple ? 60 : 0) +
      insets.bottom
    const maxHeight = windowDimensions.height - safeAreaInsetTop

    return pickHeight > maxHeight
      ? maxHeight
      : pickHeight < CV.selector_min_height
      ? CV.selector_min_height
      : pickHeight
  }, [
    CV_NAV_BAR.nav_bar_height,
    CV_POPUP.popup_round_border_radius,
    CV.selector_min_height,
    CV.selector_option_text_line_height,
    insets.bottom,
    multiple,
    options.length,
    safeAreaInsetTop,
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
      round>
      <View style={selectStyle}>
        <PopupHeader title={title} onClose={onClose} />

        <View style={STYLES.body}>
          <ScrollView ref={ScrollViewRef} bounces={false}>
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
      </View>
    </Popup>
  )
}

export default memo(Selector)
