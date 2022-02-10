import React, { memo } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'

import Badge from '../badge'
import { isDef } from '../helpers'
import { useControllableValue } from '../hooks'
import Loading from '../loading'
import Result from '../result'
import ResultIconBox from '../result/icons/box'
import { useTheme, widthStyle } from '../theme'

import type { SidebarProps } from './interface'
import { createStyles } from './style'

const Sidebar: React.FC<SidebarProps> = ({
  width = 88,
  loading,
  options,
  style,
  ...restProps
}) => {
  const [value, onChange] = useControllableValue(restProps, {
    valuePropName: 'activeValue',
    defaultValuePropName: 'defaultActiveValue',
  })
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const isEmpty = loading || options.length === 0
  const curIndex = options.findIndex(o => o.value === value)

  return (
    <View
      {...restProps}
      style={[
        STYLES.sidebar,
        isEmpty ? null : STYLES.sidebar_active,
        { width },
        style,
      ]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={isEmpty ? STYLES.scroll_view_empty : null}>
        {loading ? <Loading vertical>加载中...</Loading> : null}

        {!loading && options.length === 0 ? (
          <Result
            status="warning"
            subtitle="暂无数据"
            renderIcon={() => {
              return <ResultIconBox />
            }}
          />
        ) : null}

        {!loading && options.length > 0 ? (
          <View style={STYLES.list}>
            {options.map((item, index) => {
              const isActive = value === item.value
              const isPrev = index + 1 === curIndex
              const isNext = index - 1 === curIndex
              const textJSX = (
                <Text
                  style={[
                    STYLES.item_text,
                    isActive
                      ? STYLES.item_text_active
                      : STYLES.item_text_inactive,
                  ]}>
                  {item.label}
                </Text>
              )

              return (
                <TouchableHighlight
                  key={item.value}
                  underlayColor={THEME_VAR.sidebar_item_underlay_color}
                  onPress={() => {
                    onChange(item.value)
                  }}
                  style={[
                    STYLES.item,
                    isActive ? null : STYLES.item_inactive,
                    isPrev ? STYLES.item_prev : null,
                    isNext ? STYLES.item_next : null,
                  ]}>
                  <>
                    {isActive ? <View style={STYLES.item_bar} /> : null}

                    <View style={STYLES.item_inner}>
                      {isDef(item.badge) ? (
                        <Badge {...item.badge}>{textJSX}</Badge>
                      ) : (
                        textJSX
                      )}
                    </View>
                  </>
                </TouchableHighlight>
              )
            })}
          </View>
        ) : null}
      </ScrollView>
    </View>
  )
}

export default memo(Sidebar)
