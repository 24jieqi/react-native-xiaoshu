import React, { useRef, useEffect, useMemo, memo } from 'react'
import type { FlatListProps } from 'react-native'
import { View, Text, FlatList } from 'react-native'

import type { ExcludeUndefined } from '../helpers/types'
import { usePersistFn } from '../hooks'
import Theme from '../theme'

import { findUsableOptionIndex } from './helper/column'
import type { PickerViewColumnProps } from './interface'
import { varCreator, styleCreator } from './style'

const getSelectedIndex = (n: number) => (n < 0 ? 0 : n)

/**
 * 选择器 列
 */
const PickerViewColumn: React.FC<PickerViewColumnProps> = ({
  theme,
  itemHeight,
  visibleItemCount,
  options,
  value,
  onChange,
}) => {
  const [, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })

  const flatListRef = useRef<FlatList>(null)
  const LastTop = useRef(0)
  const paddedOptions = useMemo(() => {
    const array = [...options]
    for (let i = 0; i < (visibleItemCount - 1) / 2; i++) {
      array.unshift({
        value: '',
        label: '',
      })
      array.push({
        value: '',
        label: '',
      })
    }
    return array
  }, [options, visibleItemCount])
  const offsets = useMemo(
    () => [...Array(paddedOptions.length)].map((x, i) => i * itemHeight),
    [paddedOptions, itemHeight],
  )

  const selectedIndex = getSelectedIndex(
    options.findIndex(item => item.value === value),
  )

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: selectedIndex,
      animated: false,
    })
  }, [selectedIndex])

  const onMomentumScrollEnd = usePersistFn<
    ExcludeUndefined<FlatListProps<any>['onMomentumScrollEnd']>
  >(event => {
    const offsetY = Math.min(
      itemHeight * (options.length - 1),
      Math.max(event.nativeEvent.contentOffset.y, 0),
    )

    let index = Math.floor(Math.floor(offsetY) / itemHeight)
    const last = Math.floor(offsetY % itemHeight)
    if (last > itemHeight / 2) {
      index++
    }
    const isToNext = offsetY > LastTop.current

    if (options[index].disabled) {
      index = findUsableOptionIndex(options, isToNext, index)
    }

    LastTop.current = offsetY

    const selectOption = options[index]
    if (selectOption.value !== value) {
      onChange?.(selectOption)
    }
  })

  return (
    <View style={STYLES.column}>
      <FlatList
        // 当 options 刷新时重置组件，scrollToIndex 并不能完全可靠，借助 showsVerticalScrollIndicator 初始化视图
        key={paddedOptions.map(item => item.value).join('_')}
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        snapToOffsets={offsets}
        onMomentumScrollEnd={onMomentumScrollEnd}
        initialScrollIndex={selectedIndex}
        getItemLayout={(_, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
        decelerationRate="fast"
        data={paddedOptions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <Text
              key={item.value}
              style={[
                STYLES.column_text,
                {
                  height: itemHeight,
                  lineHeight: itemHeight,
                },
                item.disabled ? STYLES.column_text_disabled : null,
              ]}
              numberOfLines={1}>
              {item.label}
            </Text>
          )
        }}
      />
    </View>
  )
}

export default memo(PickerViewColumn)
