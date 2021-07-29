import React, { useState } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import {
  CellGroup,
  DropdownMenu,
  DropdownItem,
  useTheme,
} from 'react-native-xiaoshu'

const itemOptions = [
  { text: '全部商品', value: '' },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map(v => ({
    text: `商品分类${v}`,
    value: v,
  })),
]

const itemOptions2 = [
  { text: '全部商品', value: '' },
  ...[1, 2, 3, 4].map(v => ({
    text: `商品分类${v}`,
    value: v,
  })),
]

const BasicDropdown: React.FC = () => {
  const insets = useSafeAreaInsets()
  const [upTop, setUpTop] = useState(0)
  const [values, setValues] = useState({
    v1: itemOptions[0].value,
    v2: itemOptions[0].value,
    v3: itemOptions[0].value,
    v4: itemOptions[0].value,
  })
  const themeVar = useTheme()

  const groupTitleHeight =
    themeVar.cell_group_title_padding_top +
    themeVar.cell_group_title_padding_bottom +
    themeVar.cell_group_title_line_height
  const top1 = insets.top + groupTitleHeight + themeVar.nav_bar_height

  return (
    <>
      <CellGroup title="基础用法">
        <DropdownMenu top={top1}>
          <DropdownItem
            options={itemOptions}
            value={values.v1}
            onChange={v => {
              setValues(s => ({
                ...s,
                v1: v,
              }))
            }}
          />
          <DropdownItem
            disabled
            options={itemOptions}
            value={values.v2}
            onChange={v => {
              setValues(s => ({
                ...s,
                v2: v,
              }))
            }}
          />
        </DropdownMenu>

        <View
          style={{ height: 200 }}
          onLayout={e => {
            setUpTop(top1 + e.nativeEvent.layout.y + 200)
          }}
        />

        <DropdownMenu top={upTop} direction="up" activeColor="#f30">
          <DropdownItem
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v,
              }))
            }}
          />
          <DropdownItem
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v,
              }))
            }}
          />
        </DropdownMenu>
      </CellGroup>
    </>
  )
}

export default BasicDropdown
