/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { Text, View } from 'react-native'

import { Cell, TextInput, Button } from '@fruits-chain/react-native-xiaoshu'
import { SuccessOutline } from '@fruits-chain/icons-react-native'

const BasicTextInput: React.FC = () => {
  const [value2, setValue2] = useState('')

  return (
    <>
      <Cell.Group title="基础用法">
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

        <Cell
          title="text:受控"
          value={
            <TextInput
              placeholder="受控"
              value={value2}
              onChangeText={e => {
                console.log('onChangeText => ', e)
              }}
              onChange={e => {
                setValue2(e)
                console.log('onChange => ', e)
              }}
              onFocus={e => {
                console.log('onFocus => ', e.nativeEvent.text)
              }}
              onBlur={e => {
                console.log('onBlur => ', e.nativeEvent.text)
              }}
              onEndEditing={e => {
                console.log('onEndEditing => ', e.nativeEvent.text)
              }}
            />
          }
        />

        <Cell
          title="text:受控:不更新"
          value={<TextInput placeholder="受控:不更新" value={value2} />}
        />

        <Cell
          title="text"
          value={
            <TextInput
              placeholder="内容左对齐"
              onChange={t => {
                console.log('内容左对齐 => ', t)
              }}
            />
          }
        />

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
              prefix={<SuccessOutline size={16} color="#680" />}
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
            />
          }
        />

        <Cell
          title="textarea"
          vertical
          value={
            <TextInput
              type="textarea"
              placeholder="限制输入"
              bordered
              maxLength={100}
              showWordLimit
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
          title="password"
          value={
            <TextInput
              secureTextEntry
              bordered
              placeholder="内容不可见"
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
          value={
            <TextInput
              type="textarea"
              editable={false}
              placeholder="多行文本"
              bordered
            />
          }
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
          divider={false}
        />
      </Cell.Group>

      <Cell.Group title="其他用法">
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
          <TextInput size="xl" placeholder="请输入 xl" bordered />
          <View style={{ height: 10 }} />
          <TextInput size="l" placeholder="请输入 l" bordered />
          <View style={{ height: 10 }} />
          <TextInput placeholder="请输入 m" bordered />
          <View style={{ height: 10 }} />
          <TextInput size="s" placeholder="请输入 s" bordered />
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
      </Cell.Group>
    </>
  )
}

export default BasicTextInput
