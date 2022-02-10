/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Checkbox, Icon, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicCheckbox: React.FC = () => {
  const [value, setValue] = useState(true)

  return (
    <ScrollView>
      <Space tail head>
        <Card title="基础用法" square>
          <Space>
            <Checkbox.Icon />
            <Checkbox.Icon active />
            <Checkbox
              label="设么啊"
              onChange={v => {
                console.log('当前状态：', v)
              }}
            />
            <Checkbox
              defaultValue={true}
              label="设么啊true"
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
            <Checkbox.Icon disabled />
            <Checkbox.Icon active disabled />
            <Checkbox disabled label="设么啊" />
            <Checkbox disabled defaultValue label="设么啊true" />
          </Space>
        </Card>

        <Card title="自定义颜色" square>
          <Checkbox defaultValue={true} activeColor="#f30" label="设么啊true" />
        </Card>

        <Card title="自定义大小" square>
          <Space>
            <Checkbox.Icon active size={30} />
            <Checkbox
              defaultValue={true}
              iconSize={30}
              activeColor="#f30"
              label="设么啊true"
            />
          </Space>
        </Card>

        <Card title="禁用文本点击" square>
          <Checkbox labelDisabled defaultValue={true} label="设么啊true" />
        </Card>

        <Card title="自定义图标" square>
          <Space>
            <Checkbox
              defaultValue={true}
              label="设么啊true"
              activeColor="#f30"
              renderIcon={({ activeColor, size, active }) =>
                active ? (
                  <Icon.ArrowUpFill color={activeColor} size={size} />
                ) : (
                  <Icon.ArrowDownFill color={activeColor} size={size} />
                )
              }
            />
            <Checkbox
              labelDisabled
              defaultValue={true}
              label="点击切换的事件绑定给图标"
              renderIcon={({ activeColor, size, active, onPress }) =>
                active ? (
                  <Icon.ArrowUpFill
                    color={activeColor}
                    size={size}
                    onPress={onPress}
                  />
                ) : (
                  <Icon.ArrowDownFill
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
                  <Icon.ArrowUpFill
                    color={activeColor}
                    size={size}
                    onPress={onPress}
                    disabled={disabled}
                  />
                ) : (
                  <Icon.ArrowDownFill
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
      </Space>
    </ScrollView>
  )
}

export default BasicCheckbox
