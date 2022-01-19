import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'

import type { PickerOptionCascade } from 'react-native-xiaoshu'
import { Picker, Button, Popup } from 'react-native-xiaoshu'

const columns1 = new Array(10).fill(0).map((_, index) => ({
  label: `选项${index}`,
  value: `${index}`,
  disabled: index === 6,
}))

const columns2 = [columns1, columns1, columns1, columns1]

const columns3 = [
  {
    options: columns1,
    defaultValue: '4',
  },
  {
    options: columns1,
    defaultValue: '2',
  },
  {
    options: columns1,
    defaultValue: '6',
  },
]

const buildChildren = (
  num: number,
  valuePrefix: string,
  labelPrefix: string,
  insertChildren?: (value: string, label: string) => PickerOptionCascade[],
) => {
  return new Array(num).fill(0).map((_, index) => ({
    label: `${labelPrefix}_${index}`,
    value: `${valuePrefix}_${index}`,
    children: insertChildren
      ? insertChildren(`${valuePrefix}_${index}`, `${labelPrefix}_${index}`)
      : null,
  }))
}

const columns4 = buildChildren(8, 'sj', '省级', (sjValue, sjLabel) =>
  buildChildren(
    6,
    sjValue.replace('sj', 'sq'),
    sjLabel.replace('省级', '市区'),
    (sqValue, sqLabel) =>
      buildChildren(
        4,
        sqValue.replace('sq', 'qx'),
        sqLabel.replace('市区', '区县'),
      ),
  ),
)

const BasicPicker: React.FC = () => {
  const [visible, setVisible] = useState(false)
  return (
    <ScrollView>
      <View
        style={{
          padding: 20,
        }}>
        <Button
          text="显示弹出层"
          type="primary"
          onPress={() => {
            setVisible(true)
          }}
        />

        <Popup visible={visible} position="bottom" round>
          <Picker
            columns={columns1}
            title="单列"
            onChange={(v, o) => {
              console.log('滑动完成就触发 -> value:', v)
              console.log('滑动完成就触发 -> option:', o)
            }}
            onCancel={() => {
              setVisible(false)
            }}
            onConfirm={(v, o) => {
              console.log('点击确定就触发 -> value:', v)
              console.log('点击确定就触发 -> option:', o)
              setVisible(false)
            }}
          />
        </Popup>
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker
          columns={columns1}
          title="单列"
          onChange={(v, o) => {
            console.log('滑动完成就触发 -> value:', v)
            console.log('滑动完成就触发 -> option:', o)
          }}
          onCancel={(v, o) => {
            console.log('点击取消就触发 -> value:', v)
            console.log('点击取消就触发 -> option:', o)
          }}
          onConfirm={(v, o) => {
            console.log('点击确定就触发 -> value:', v)
            console.log('点击确定就触发 -> option:', o)
          }}
        />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker columns={columns2} title="多列" />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker columns={columns3} title="多列带默认值" />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker columns={columns4} title="级联选择" />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker columns={[]} title="啊哈" loading />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker
          columns={columns1}
          title="操作栏在底部"
          toolbarPosition="bottom"
        />
      </View>

      <View
        style={{
          padding: 20,
        }}>
        <Picker columns={columns1} showToolbar={false} />
      </View>
    </ScrollView>
  )
}

export default BasicPicker
