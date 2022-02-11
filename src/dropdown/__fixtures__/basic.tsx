/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import { Cell, Dropdown } from '@fruits-chain/react-native-xiaoshu'

const itemOptions = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const itemOptions2 = [
  { label: '全部商品', value: null },
  ...[1, 2, 3, 4].map(v => ({
    label: `商品分类${v}`,
    value: v,
  })),
]

const BasicDropdown: React.FC = () => {
  const [values, setValues] = useState({
    v1: itemOptions[0].value,
    v2: itemOptions[3].value,
    v3: itemOptions[2].value,
    v4: itemOptions[4].value,
  })

  return (
    <ScrollView scrollsToTop={false}>
      <Cell.Group title="基础用法">
        <Dropdown>
          <Dropdown.Item
            options={itemOptions}
            value={values.v1}
            onChange={v => {
              setValues(s => ({
                ...s,
                v1: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions}
            defaultValue={itemOptions[2].value}
          />
        </Dropdown>

        <View style={{ height: 200 }} />

        <Dropdown>
          <Dropdown.Item
            disabled
            options={itemOptions}
            value={values.v1}
            onChange={v => {
              setValues(s => ({
                ...s,
                v1: v as number,
              }))
            }}
          />
          <Dropdown.Item options={itemOptions} value={itemOptions[2].value} />
        </Dropdown>

        <View style={{ height: 200 }} />

        <Dropdown direction="up" activeColor="#f30">
          <Dropdown.Item
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </Dropdown>

        <View style={{ height: 500 }} />

        <Dropdown direction="up" activeColor="#f30">
          <Dropdown.Item
            options={itemOptions}
            value={values.v3}
            onChange={v => {
              setValues(s => ({
                ...s,
                v3: v as number,
              }))
            }}
          />
          <Dropdown.Item
            options={itemOptions2}
            value={values.v4}
            onChange={v => {
              setValues(s => ({
                ...s,
                v4: v as number,
              }))
            }}
          />
        </Dropdown>

        <View style={{ height: 300 }} />
      </Cell.Group>
    </ScrollView>
  )
}

export default BasicDropdown
