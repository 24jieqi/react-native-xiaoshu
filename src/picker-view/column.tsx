import React, { useRef, useEffect, useMemo, memo } from 'react'
import { View, Text, PanResponder, Animated } from 'react-native'

import { usePersistFn } from '../hooks'
import { useTheme, widthStyle } from '../theme'

import { findUsableOptionIndex } from './helper/column'
import type { PickerViewColumnProps, PickerValue } from './interface'
import { createStyles } from './style.column'

/**
 * 选择器 列
 */
const PickerViewColumn: React.FC<PickerViewColumnProps> = ({
  itemHeight,
  visibleItemCount,
  options,
  value,
  onChange,
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
  const onChangePersistFn = usePersistFn(onChange)
  // 部分数据想跨渲染次数使用，类似 this.xxx
  const ValueCurrent = useRef(value)
  const OptionsCurrent = useRef(options)

  /** 滚动到某个值 */
  const scrollTo = usePersistFn((v: PickerValue) => {
    let valueIndex = OptionsCurrent.current.findIndex(item => item.value === v)

    // 定位的时候不去做数据校验，外面的默认值真的可能是被禁用
    // if (valueIndex < 0) {
    //   // 是一个不存在的选项
    // } else {
    //   // 检测当前选项是否可用
    //   if (OptionsCurrent.current[valueIndex].disabled) {
    //     // 另寻它路
    //     valueIndex = findUsableOptionIndex(
    //       OptionsCurrent.current,
    //       next,
    //       valueIndex,
    //     )
    //   }
    // }

    // 计算正确的位置
    // 反方向偏移，所以减去第 N 索引值的高度
    const newTop = ScopeTop.current.start - valueIndex * itemHeight

    Animated.timing(PanAnimated.current, {
      toValue: newTop, // 设置动画的属性值
      useNativeDriver: true,
      duration: 50,
    }).start(({ finished }) => {
      if (finished) {
        LastTop.current = newTop
      }
    })
  })

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
        // 滚动结束
        // 判断滚动到哪个范围了
        const { start, end } = ScopeTop.current
        /** 此时的位置 */
        const currentTop = LastTop.current + gestureState.dy
        /** 滚动方向 */
        const isToNext = gestureState.dy <= 0

        let endIndex = -1

        if (currentTop < start && currentTop > end) {
          // 在选项范围内

          /** 相对第一个选项 top 的偏移值，取正 */
          const absStartTopDeviant = Math.abs(currentTop - start)
          /** 偏移值 */
          const remainder = absStartTopDeviant % itemHeight

          endIndex = Math.floor(absStartTopDeviant / itemHeight)

          // 无论哪个方向，只要超过一般就算下一个
          if ((isToNext || !isToNext) && remainder >= markMargin) {
            endIndex += 1
          }
        } else if (currentTop >= start) {
          // 滑动到了第一个选项上面
          endIndex = 0
        } else {
          // 滑动到了最后个选项下面
          endIndex = options.length - 1
        }

        // 当前滑动到的选项禁用，需要从新找一个可用的
        if (options[endIndex].disabled) {
          endIndex = findUsableOptionIndex(options, isToNext, endIndex)
        }

        // 记录当前位置
        LastTop.current = currentTop

        // 触发回调
        // 极端情况，所有选项都被禁用了
        if (options[endIndex]) {
          onChangePersistFn(options[endIndex])
        }

        // 延迟跳转，可能外部不更新数据，调到旧数据上
        setTimeout(() => {
          scrollTo(ValueCurrent.current)
        }, 0)
      },
    })
  }, [itemHeight, markMargin, onChangePersistFn, options, scrollTo])

  // 监听数据变化，重新初始化值
  useEffect(() => {
    // 计算初始值
    const startTop = (itemHeight * visibleItemCount) / 2 - itemHeight / 2
    ScopeTop.current = {
      start: startTop,
      end: startTop - itemHeight * (options.length - 1),
    }

    ValueCurrent.current = value
    OptionsCurrent.current = options

    scrollTo(value)
  }, [itemHeight, visibleItemCount, options, value, scrollTo])

  return (
    <View style={STYLES.column}>
      <View {...panResponder.panHandlers} style={STYLES.touch} />

      <Animated.View
        style={{
          transform: [
            {
              translateY: PanAnimated.current,
            },
          ],
        }}>
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

export default memo(PickerViewColumn)
