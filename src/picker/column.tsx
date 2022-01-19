import React, { useRef, useEffect, useMemo, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Text, PanResponder, Animated } from 'react-native'

import { usePersistFn } from '../hooks'
import { isDef } from '../helpers/typeof'
import { useTheme, widthStyle } from '../theme'
import type { PickerColumnProps } from './interface'
import { createStyles } from './style.column'
import { findUsableOptionIndex } from './helper/column'

/**
 * 选择器 列
 */
const PickerColumn: React.FC<PickerColumnProps> = ({
  itemHeight,
  visibleItemCount,
  options,
  defaultValue,
  onChangeValue,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  /** 刻度偏移量，中间一个选项的高度，各自偏移半个高度 */
  const markMargin = itemHeight / 2
  const PanAnimated = useRef(new Animated.Value(0))
  /** 上次的位置，用于滚动中计算 */
  const LastTop = useRef(0)
  /** 滚动范围 最大最小值 */
  const ScopeTop = useRef({ start: 0, end: 0 })
  const onChangeValuePersistFn = usePersistFn(onChangeValue)

  const panResponder = useMemo(() => {
    return PanResponder.create({
      // 必要的回调
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // 过程中不处理边界问题
        const currentTop = LastTop.current + gestureState.dy
        PanAnimated.current.setValue(currentTop)
      },
      onPanResponderRelease: (_, gestureState) => {
        const currentTop = LastTop.current + gestureState.dy
        const { start, end } = ScopeTop.current
        /** 想选下面的数据 */
        const isToNext = gestureState.dy <= 0

        /** 当前完整的情况是第 N 索引值 */
        let endIndex = -1

        // 滑动结果在选择列表内部
        if (currentTop < start && currentTop > end) {
          /** 相对第一个选项 top 的偏移值，取正 */
          const absStartTopDeviant = Math.abs(currentTop - start)
          /** 偏移值 */
          const remainder = absStartTopDeviant % itemHeight

          endIndex = Math.floor(absStartTopDeviant / itemHeight)

          if (isToNext && remainder >= markMargin) {
            endIndex += 1
          } else if (!isToNext && remainder >= markMargin) {
            endIndex += 1
          }

          // 当前滑动到的选项禁用，需要从新找一个可用的
          if (endIndex > -1 && options[endIndex].disabled) {
            endIndex = findUsableOptionIndex(options, isToNext, endIndex)
          }
        } else {
          // 滑动到了第一个选项上面
          if (currentTop >= start) {
            endIndex = findUsableOptionIndex(options, true, 0, false)
          }

          // 滑动到了最后个选项下面
          if (currentTop <= end) {
            endIndex = findUsableOptionIndex(
              options,
              false,
              options.length - 1,
              false,
            )
          }
        }

        // 计算正确的位置
        // 反方向偏移，所以减去第 N 索引值的高度
        LastTop.current = start - endIndex * itemHeight

        // 判断当前应该滚动到哪个
        Animated.timing(PanAnimated.current, {
          toValue: LastTop.current, // 设置动画的属性值
          useNativeDriver: true,
          duration: 50,
        }).start(({ finished }) => {
          if (finished) {
            onChangeValuePersistFn(options[endIndex])
          }
        })
      },
    })
  }, [itemHeight, markMargin, onChangeValuePersistFn, options])

  // 监听数据变化，重新初始化值
  useEffect(() => {
    // 计算初始值
    const startTop = (itemHeight * visibleItemCount) / 2 - itemHeight / 2
    let endIndex = 0

    if (isDef(defaultValue)) {
      endIndex = options.findIndex(item => item.value === defaultValue)
    }

    // 初始化的时候需要做偏移吗？
    // if (options[endIndex].disabled) {
    //   endIndex = findUsableOptionIndex(options, true, endIndex);
    // }

    const currentTop = startTop - endIndex * itemHeight

    PanAnimated.current.setValue(currentTop)
    LastTop.current = currentTop
    ScopeTop.current = {
      start: startTop,
      end: startTop - itemHeight * (options.length - 1),
    }
  }, [itemHeight, visibleItemCount, options, defaultValue])

  const listStyle: ViewStyle = {
    position: 'relative',
    transform: [
      {
        translateY: PanAnimated.current as unknown as number,
      },
    ],
  }

  return (
    <View style={STYLES.column}>
      <View {...panResponder.panHandlers} style={STYLES.touch} />

      <Animated.View style={listStyle}>
        {options.map(item => {
          return (
            <Text
              key={item.value}
              style={[
                STYLES.text,
                {
                  height: itemHeight,
                  lineHeight: itemHeight,
                },
                item.disabled ? STYLES.text_disabled : null,
              ]}
              numberOfLines={1}>
              {item.label}
            </Text>
          )
        })}
      </Animated.View>
    </View>
  )
}

export default memo(PickerColumn)
