import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CheckboxIcon, Checkbox, Icon } from 'react-native-xiaoshu'

const BasicCheckbox: React.FC = () => {
  return (
    <ScrollView>
      <Text>基础用法</Text>

      <CheckboxIcon />
      <CheckboxIcon active />

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

      <View style={{ height: 20 }} />

      <Text>纯图标</Text>

      <CheckboxIcon pure />
      <CheckboxIcon pure active />

      <View style={{ height: 20 }} />

      <Text>禁用状态</Text>

      <CheckboxIcon disabled />
      <CheckboxIcon active disabled />
      <Checkbox disabled label="设么啊" />
      <Checkbox disabled defaultValue={true} label="设么啊true" />

      <View style={{ height: 20 }} />

      <Text>自定义颜色</Text>

      <Checkbox
        defaultValue={true}
        activeColor="#f30"
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />

      <Text>自定义大小</Text>

      <CheckboxIcon active size={30} />
      <Checkbox
        defaultValue={true}
        iconSize={30}
        activeColor="#f30"
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />

      <Text>禁用文本点击</Text>

      <Checkbox
        labelDisabled
        defaultValue={true}
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />

      <Text>自定义图标</Text>

      <Checkbox
        defaultValue={true}
        shape="square"
        label="设么啊true"
        icon={<Icon.CrossOutline size={14} color="#fff" />}
      />
      <Checkbox
        labelDisabled
        defaultValue={true}
        shape="square"
        label="设么啊true"
        icon={<Icon.CrossOutline size={14} color="#fff" />}
      />
      <Checkbox
        defaultValue={true}
        label="设么啊true"
        icon={<Icon.CrossOutline size={14} color="#fff" />}
      />

      <View style={{ height: 20 }} />

      <Text>自定义选中/未选中的值</Text>

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

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicCheckbox
