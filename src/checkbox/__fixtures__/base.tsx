/**
 * title: 综合用法
 * description: Checkbox 默认在 true、false 之间切换，通过 `activeValue`、`inactiveValue` 自定义切换的值。Checkbox 组件支持传入泛型，更友好的约束 `value`、`activeValue`、`inactiveValue`、`onChange`。
 */

import React, { useState } from 'react'
import { Checkbox, Card, Space } from '@fruits-chain/react-native-xiaoshu'
import {
  ArrowUpOutline,
  ArrowDownOutline,
} from '@fruits-chain/icons-react-native'

const CheckboxBase: React.FC = () => {
  const [value, setValue] = useState(true)

  return (
    <Space>
      <Card title="基础用法">
        <Space>
          <Checkbox
            label="初始化时未激活"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            defaultValue
            label="初始化时激活"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            defaultValue
            label="自定义 icon 边距"
            iconStyle={{ marginRight: 16 }}
          />
          <Checkbox label="受控:不更新" value={value} />
          <Checkbox label="受控:更新" value={value} onChange={setValue} />
        </Space>
      </Card>

      <Card title="禁用状态">
        <Space>
          <Checkbox disabled label="未激活" />
          <Checkbox disabled defaultValue label="已激活" />
        </Space>
      </Card>

      <Card title="自定义">
        <Space>
          <Checkbox
            defaultValue
            activeColor="#f30"
            label="自定义激活时图标颜色"
          />
          <Checkbox defaultValue iconSize={30} label="自定义图标大小" />
        </Space>
      </Card>

      <Card title="禁用文本点击">
        <Checkbox
          labelDisabled
          defaultValue
          label="点击图标可以更新状态，点击文字不更新状态"
        />
      </Card>

      <Card title="自定义图标">
        <Space>
          <Checkbox
            defaultValue
            label="点击文案响应切换，图标没有绑定点击回调"
            activeColor="#f30"
            renderIcon={({ activeColor, size, active }) =>
              active ? (
                <ArrowUpOutline color={activeColor} size={size} />
              ) : (
                <ArrowDownOutline color={activeColor} size={size} />
              )
            }
          />
          <Checkbox
            labelDisabled
            defaultValue
            label="点击图标响应切换"
            renderIcon={({ activeColor, size, active, onPress }) =>
              active ? (
                <ArrowUpOutline
                  color={activeColor}
                  size={size}
                  onPress={onPress}
                />
              ) : (
                <ArrowDownOutline
                  color={activeColor}
                  size={size}
                  onPress={onPress}
                />
              )
            }
          />
          <Checkbox
            disabled
            defaultValue
            label="renderIcon 把 disabled 状态传递给图标"
            renderIcon={({ activeColor, size, active, onPress, disabled }) =>
              active ? (
                <ArrowUpOutline
                  color={activeColor}
                  size={size}
                  onPress={onPress}
                  disabled={disabled}
                />
              ) : (
                <ArrowDownOutline
                  color={activeColor}
                  size={size}
                  onPress={onPress}
                  disabled={disabled}
                />
              )
            }
          />
        </Space>
      </Card>

      <Card title="自定义激活/未激活的值">
        <Space>
          <Checkbox
            activeValue="1"
            inactiveValue="2"
            defaultValue="1"
            label="激活值为字符1，未激活值为字符2，默认值为字符串1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            activeValue={1}
            defaultValue="1"
            label="激活值为数字1，未激活值为false，默认值为字符串1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            activeValue={1}
            defaultValue={1}
            label="激活值为数字1，未激活值为false，默认值为数字1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
        </Space>
      </Card>

      <Card title="自定义样式">
        <Space>
          <Checkbox gap={12} label="gap 自定义图标、文案间距" />
          <Checkbox
            iconSize={16}
            labelTextStyle={{ color: '#666', fontSize: 12 }}
            label="iconSize、iconStyle 自定义 icon 样式，labelTextStyle 自定义文案样式"
          />
        </Space>
      </Card>
    </Space>
  )
}

export default CheckboxBase
