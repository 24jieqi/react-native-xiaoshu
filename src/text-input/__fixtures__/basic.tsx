/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, View } from 'react-native'

import {
  Cell,
  CellGroup,
  TextInput,
  Button,
  Icon,
} from '@fruits-chain/react-native-xiaoshu'

const BasicTextInput: React.FC = () => {
  const [value, setValue] = useState('')

  return (
    <>
      <CellGroup title="基础用法">
        <Cell
          title="text"
          value={<TextInput placeholder="不可编辑" editable={false} />}
        />

        <Cell
          title="text"
          value={<TextInput placeholder="不可编辑" bordered editable={false} />}
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="不可编辑"
              value="不可编辑？？？"
              bordered
              editable={false}
            />
          }
        />

        <Cell title="text" value={<TextInput placeholder="内容左对齐" />} />

        <Cell
          title="text"
          value={<TextInput placeholder="内容右对齐" textAlign="right" />}
        />

        <Cell
          title="text"
          value={<TextInput placeholder="内容居中" textAlign="center" />}
        />

        <Cell
          title="text"
          value={<TextInput placeholder="输入内容有删除按钮" clearable />}
        />

        <Cell
          title="text"
          value={<TextInput placeholder="一个有边框的输入框" bordered />}
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="一个有边框的输入框且输入内容有删除按钮"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="输入框视觉内有额外元素"
              prefix="prefixAAA"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="请填写验证码"
              prefix={<Icon.SuccessOutline size={16} color="#680" />}
              suffix={
                <Button
                  type="primary"
                  size="xs"
                  text="发送验证码"
                  style={{ marginLeft: 8 }}
                />
              }
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="输入框视觉内有额外元素"
              prefix="prefixAAA"
              suffix="suffix中文"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="textarea"
          value={
            <TextInput
              type="textarea"
              placeholder="多行输入框杜绝一切干扰"
              prefix="prefixAAA"
              suffix="suffix中文"
              addonAfter="addonAfterAAA"
              addonBefore="addonBefore中文"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="输入框外部有额外元素"
              addonAfter="addonAfterAAA"
              addonBefore="addonBefore中文"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="输入框外部有额外元素"
              addonAfter="addonAfterAAA"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="text"
          value={
            <TextInput
              type="number"
              placeholder="请输入其他费用"
              addonAfter="元"
              textAlign="right"
              clearable
            />
          }
        />

        <Cell
          title="text"
          innerStyle={{
            justifyContent: 'space-between',
          }}
          valueStyle={{
            width: 140,
            flex: 0,
          }}
          value={
            <TextInput
              type="number"
              placeholder="请输入其他费用"
              addonAfter="元"
              textAlign="right"
              bordered
              clearable
            />
          }
        />

        <Cell
          title="number"
          value={<TextInput type="number" placeholder="数字和小数点" />}
        />

        <Cell
          title="digit"
          value={
            <TextInput type="digit" placeholder="数字" textAlign="right" />
          }
        />

        <Cell
          title="password"
          value={
            <TextInput
              type="password"
              placeholder="内容不可见"
              bordered
              keyboardAppearance="dark"
            />
          }
        />

        <Cell
          title="textarea"
          value={<TextInput type="textarea" placeholder="多行文本" />}
        />

        <Cell
          vertical
          title="textarea"
          value={<TextInput type="textarea" placeholder="多行文本" bordered />}
        />

        <Cell
          title="clear:有着就一直显示"
          value={
            <TextInput clearable clearTrigger="always" placeholder="单行文本" />
          }
        />

        <Cell
          title="clear:需要聚焦才显示"
          value={<TextInput clearable placeholder="单行文本" />}
        />

        <Cell
          title="受控使用"
          value={
            <TextInput
              type="digit"
              placeholder="受控使用"
              value={value}
              onChangeText={t => {
                if (+t > 100) {
                  t = '100'
                }

                setValue(t)
              }}
            />
          }
          divider={false}
        />
      </CellGroup>

      <CellGroup title="其他用法">
        <Text>自定义宽</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#fff',
            alignItems: 'center',
            paddingVertical: 8,
          }}>
          <Text style={{ marginRight: 8 }}>采购量</Text>
          <TextInput
            placeholder="请输入"
            addonAfter="件"
            inputWidth={90}
            bordered
            addonGroupStyle={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="请输入"
            addonAfter="kg"
            inputWidth={90}
            bordered
          />
        </View>
        <Text>自定义大小</Text>
        <View
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 12,
          }}>
          <TextInput size="l" placeholder="请输入" bordered />
          <View style={{ height: 10 }} />
          <TextInput placeholder="请输入" bordered />
          <View style={{ height: 10 }} />
          <TextInput size="s" placeholder="请输入" bordered />
          <View style={{ height: 10 }} />
        </View>
        <Text>可能高度消失</Text>
        <View
          style={{
            height: 200,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              minHeight: 40,
              backgroundColor: '#fff',
            }}>
            <TextInput placeholder="请输入" />
            <View style={{ height: 20, backgroundColor: '#ddd' }} />
          </View>
        </View>
        <Text>自定义使用</Text>
        <TextInput
          style={{ backgroundColor: '#f5f5f5', fontSize: 20, height: 50 }}
          placeholder="请输入内容"
        />
        <Text>placeholder</Text>
        <Text>placeholder</Text>
      </CellGroup>
    </>
  )
}

export default BasicTextInput
