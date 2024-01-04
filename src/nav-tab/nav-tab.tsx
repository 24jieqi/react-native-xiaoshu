import React, { memo } from 'react'
import { Text, View } from 'react-native'

import { useControllableValue } from '../hooks'
import Theme from '../theme'

import type { NavTabProps } from './interface'
import { varCreator, styleCreator } from './style'

const NavTab = <T,>({ options, ...restProps }: NavTabProps<T>) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const [value, onChange] = useControllableValue<T>(restProps)

  return (
    <View style={STYLES.navWrapper}>
      <View style={STYLES.nav}>
        {options.map(item => {
          const isActive = item.value === value

          return (
            <View
              key={`${item.value}`}
              style={[STYLES.item, isActive ? STYLES.itemActive : null]}>
              <Text
                style={[
                  STYLES.itemText,
                  isActive ? STYLES.itemTextActive : null,
                ]}
                onPress={() => {
                  onChange(item.value)
                }}
                suppressHighlighting>
                {item.label}
              </Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default memo(NavTab) as <T>(props: NavTabProps<T>) => React.JSX.Element
