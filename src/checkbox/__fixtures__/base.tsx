/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
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
      <Card title="基础用法" square>
        <Space>
          <Checkbox
            label="自定义文案"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            defaultValue={true}
            label="自定义文案:默认值"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            defaultValue={true}
            label="icon 边距"
            iconStyle={{ marginRight: 16 }}
          />
          <Checkbox label="受控:不更新" value={value} />
          <Checkbox label="受控:更新" value={value} onChange={setValue} />
        </Space>
      </Card>

      <Card title="禁用状态" square>
        <Space>
          <Checkbox disabled label="自定义文案" />
          <Checkbox disabled defaultValue label="自定义文案:默认值" />
        </Space>
      </Card>

      <Card title="自定义颜色" square>
        <Checkbox
          defaultValue={true}
          activeColor="#f30"
          label="自定义文案:默认值"
        />
      </Card>

      <Card title="自定义大小" square>
        <Space>
          <Checkbox
            defaultValue={true}
            iconSize={30}
            activeColor="#f30"
            label="自定义文案:默认值"
          />
        </Space>
      </Card>

      <Card title="禁用文本点击" square>
        <Checkbox labelDisabled defaultValue={true} label="自定义文案:默认值" />
      </Card>

      <Card title="自定义图标" square>
        <Space>
          <Checkbox
            defaultValue={true}
            label="点击文案响应切换"
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
            defaultValue={true}
            label="点击切换的事件绑定给图标"
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
            defaultValue={true}
            label="点击切换的事件绑定给图标"
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

      <Card title="自定义选中/未选中的值" square>
        <Space>
          <Checkbox
            activeValue="1"
            inactiveValue="2"
            defaultValue="1"
            label="选中值为字符1，未选中值为字符2，默认值为字符串1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            activeValue={1}
            defaultValue="1"
            label="选中值为数字1，未选中值为false，默认值为字符串1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
          <Checkbox
            activeValue={1}
            defaultValue={1}
            label="选中值为数字1，未选中值为false，默认值为数字1"
            onChange={v => {
              console.log('当前状态：', v)
            }}
          />
        </Space>
      </Card>

      <Card title="自定义样式" square>
        <Space>
          <Checkbox gap={12} label="图标、文案间距12" />
          <Checkbox
            iconSize={16}
            labelTextStyle={{ color: '#666', fontSize: 12 }}
            label="文案颜色、大小自定义，图标大小自定义"
          />
        </Space>
      </Card>
    </Space>
  )
}

export default CheckboxBase
