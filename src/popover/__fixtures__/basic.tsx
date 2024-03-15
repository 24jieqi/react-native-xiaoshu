/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { Text, View } from 'react-native'

import {
  Popover,
  PopoverPlacement,
  Space,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const onSelect = (v: string, index: number) => {
  Toast(`第 ${index} 个选项 => ${v}`)
}

const BasicPopover: React.FC = () => {
  return (
    <ScrollView>
      <Space gap={300} tail style={{ backgroundColor: '#fff' }}>
        <Popover<string>
          trigger="onLongPress"
          triggerStyle={{ backgroundColor: '#f30' }}
          popoverStyle={{ backgroundColor: '#000' }}
          statusBarTranslucent
          duration={0}
          onSelect={onSelect}
          content={[
            <Popover.Item key="1" value="1" divider>
              <Text style={{ color: '#fff' }}>弹出1</Text>
            </Popover.Item>,
            <Popover.Item key="2" value="2" disabled>
              <Text style={{ color: '#fff' }}>弹出2 disabled</Text>
            </Popover.Item>,
            <Popover.Item key="3" value="3">
              <Text style={{ color: '#fff' }}>弹出3</Text>
            </Popover.Item>,
          ]}>
          <Text>自构 UI:多选项:自定义样式:长按</Text>
        </Popover>

        <Popover<string>
          statusBarTranslucent
          duration={0}
          onSelect={onSelect}
          content={[
            <Popover.Item key="1" value="1">
              <Text>弹出1</Text>
            </Popover.Item>,
            <Popover.Item key="2" value="2">
              <Text>弹出2</Text>
            </Popover.Item>,
            <Popover.Item key="3" value="3">
              <Text>弹出3</Text>
            </Popover.Item>,
          ]}>
          <Text>自构文案 UI:多选项:亮色:白色背景不好区分</Text>
        </Popover>

        <Popover<string>
          statusBarTranslucent
          duration={0}
          onSelect={onSelect}
          shadow
          content={[
            <Popover.Item key="1" value="1">
              <Text>弹出1</Text>
            </Popover.Item>,
            <Popover.Item key="2" value="2">
              <Text>弹出2</Text>
            </Popover.Item>,
            <Popover.Item key="3" value="3">
              <Text>弹出3</Text>
            </Popover.Item>,
          ]}>
          <Text>自构 UI:多选项:亮色:阴影</Text>
        </Popover>

        <Popover<string>
          statusBarTranslucent
          duration={0}
          onSelect={onSelect}
          shadow
          arrow={false}
          content={[
            <Popover.Item key="1" value="1">
              <Text>弹出1</Text>
            </Popover.Item>,
            <Popover.Item key="2" value="2">
              <Text>弹出2</Text>
            </Popover.Item>,
            <Popover.Item key="3" value="3">
              <Text>弹出3</Text>
            </Popover.Item>,
          ]}>
          <Text>自构 UI:多选项:亮色:阴影:无箭头</Text>
        </Popover>

        <Popover
          dark
          statusBarTranslucent
          placement={PopoverPlacement.BOTTOM}
          onSelect={onSelect}
          content={
            <Popover.Item value="1">
              <Text style={{ color: '#fff' }}>弹出</Text>
            </Popover.Item>
          }>
          <Text>自构文案 UI:单选项:深色</Text>
        </Popover>

        <Popover
          dark
          statusBarTranslucent
          content={<Popover.Text text="哈哈哈 dark" />}
          onSelect={onSelect}>
          <Text>内置文案 UI:单选项:深色</Text>
        </Popover>

        <View style={{ flexDirection: 'row' }}>
          <Popover
            dark
            statusBarTranslucent
            arrow={false}
            content={[
              <Popover.Text key="1" text="哈哈哈 dark" divider />,
              <Popover.Text key="2" text="哈哈哈 dark disabled" disabled />,
              <Popover.Text key="3" text="哈哈哈 dark" />,
            ]}
            onSelect={onSelect}>
            <Text>内置文案 UI:多选项:深色:无箭头</Text>
          </Popover>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Popover
            statusBarTranslucent
            shadow
            arrow={false}
            content={<Popover.Text text="哈哈哈 not dark" />}
            onSelect={onSelect}>
            <Text>内置 UI:单选项:亮色:阴影:无箭头</Text>
          </Popover>
        </View>

        <Popover
          statusBarTranslucent
          shadow
          arrow={false}
          content={[
            <Popover.Text key="1" text="哈哈哈 dark" divider />,
            <Popover.Text key="2" text="哈哈哈 dark" />,
            <Popover.Text key="3" text="哈哈哈 dark" />,
          ]}
          onSelect={onSelect}>
          <Text>内置文案 UI:多选项:亮色:阴影:无箭头</Text>
        </Popover>
      </Space>
    </ScrollView>
  )
}

export default BasicPopover
