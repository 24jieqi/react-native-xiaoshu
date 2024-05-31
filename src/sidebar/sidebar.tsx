import isNil from 'lodash/isNil'
import isUndefined from 'lodash/isUndefined'
import React, { memo } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'

import Badge from '../badge'
import { useControllableValue } from '../hooks'
import Loading from '../loading'
import Locale from '../locale'
import Result from '../result'
import ResultIconEmpty from '../result/icons/result-icon-empty'
import Theme from '../theme'

import type { SidebarProps } from './interface'
import { varCreator, styleCreator } from './style'

const Sidebar: React.FC<SidebarProps> = ({
  theme,
  width = 88,
  loading,
  options,
  empty,
  style,
  ...restProps
}) => {
  const [value, onChange] = useControllableValue(restProps, {
    valuePropName: 'activeValue',
    defaultValuePropName: 'defaultActiveValue',
  })
  const locale = Locale.useLocale().Sidebar
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
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
        {loading ? <Loading vertical>{locale.labelLoading}</Loading> : null}

        {!loading && options.length === 0 ? (
          isUndefined(empty) ? (
            <Result
              status="warning"
              subtitle={locale.labelNoData}
              renderIcon={() => {
                return <ResultIconEmpty width={60} height={60} />
              }}
            />
          ) : (
            empty
          )
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
                    item.disabled ? STYLES.item_text_disabled : null,
                  ]}>
                  {item.label}
                </Text>
              )

              return (
                <TouchableHighlight
                  key={item.value}
                  underlayColor={CV.sidebar_item_underlay_color}
                  onPress={() => {
                    onChange(item.value)
                  }}
                  disabled={item.disabled}
                  style={[
                    STYLES.item,
                    isActive ? null : STYLES.item_inactive,
                    isPrev ? STYLES.item_prev : null,
                    isNext ? STYLES.item_next : null,
                  ]}>
                  <>
                    {isActive ? <View style={STYLES.item_bar} /> : null}

                    <View style={STYLES.item_inner}>
                      {!isNil(item.badge) ? (
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
