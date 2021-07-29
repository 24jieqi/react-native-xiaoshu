import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CheckboxIcon, Checkbox } from 'react-native-xiaoshu'

const BasicCheckbox: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>基础用法</Text>
      </View>

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

      <View style={{ height: 20 }} />

      <View>
        <Text>纯图标</Text>
      </View>

      <CheckboxIcon pure />
      <CheckboxIcon pure active />

      <View style={{ height: 20 }} />

      <View>
        <Text>禁用状态</Text>
      </View>

      <CheckboxIcon disabled />
      <CheckboxIcon active disabled />
      <Checkbox disabled label="设么啊" />
      <Checkbox disabled defaultValue={true} label="设么啊true" />

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义颜色</Text>
      </View>

      <Checkbox
        defaultValue={true}
        activeColor="#f30"
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义大小</Text>
      </View>

      <CheckboxIcon active size={30} />
      <Checkbox
        defaultValue={true}
        iconSize={30}
        activeColor="#f30"
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />

      <View>
        <Text>禁用文本点击</Text>
      </View>

      <Checkbox
        labelDisabled
        defaultValue={true}
        shape="square"
        label="设么啊true"
      />

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicCheckbox
