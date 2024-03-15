/**
 * title: 基本使用
 * description: 左右、上下布局，自定义 label、text 样式，自定义内容区域渲染、排版。
 */

import React from 'react'
import { Text } from 'react-native'

import {
  Description,
  Card,
  Space,
  Button,
  Uploader,
} from '@fruits-chain/react-native-xiaoshu'

const list = [
  {
    key: new Date().getTime().toString(),
    filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
  },
  {
    key: (new Date().getTime() + 1).toString(),
    filepath: 'https://img.yzcdn.cn/vant/tree.jpg',
  },
]

const DescriptionBase: React.FC = () => {
  return (
    <Space>
      <Card title="基本使用" square>
        <Description.Group
          style={{
            backgroundColor: '#f5f5f5',
          }}>
          <Description label="标题的题" text="一袋米要抗几楼" />
          <Description label="children 是 字符串">一袋米要抗几楼</Description>
          <Description label="children 是 ReactElement">
            <Text style={{ color: '#987' }}>一袋米要抗几楼</Text>
          </Description>
          <Description label="标题的题" text="一袋米要抗二楼" />
          <Description label="标题的题" text="一袋米要给多了" />
          <Description label="标题的题" text="一袋米由我洗嘞" />
          <Description
            label="自定义 text 颜色"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
            color="#098"
          />
          <Description
            colon={false}
            layout="vertical"
            label="vertical 布局"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
            color="#098"
          />
          <Description
            numberOfLines={1}
            label="内容显示一行"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
          />
          <Description
            align="center"
            label="label、text 上下对齐"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
          />
          <Description
            align="center"
            justify="center"
            contentStyle={{ flexBasis: 200, flexGrow: 0 }}
            label="对齐"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
          />
          <Description layout="vertical" label="配合 Uploader 组件使用">
            <Uploader
              list={list}
              style={{ flex: 1 }}
              showUpload={false}
              deletable={false}
            />
          </Description>
        </Description.Group>
      </Card>

      <Card title="基本使用:自定义" square>
        <Description.Group
          labelWidth={140}
          colon={false}
          labelTextStyle={{ color: '#333' }}
          contentTextStyle={{ color: '#f30' }}>
          <Description
            label="Description.Group"
            text="统一配置 label、text 文案颜色"
          />
          <Description label="colon" text="一袋米要抗几楼" colon />
          <Description label="hidden" text="一袋米要抗几楼" hidden />
          <Description
            label="labelTextStyle"
            text="一袋米要抗二楼"
            labelTextStyle={{ color: '#690' }}
          />
          <Description
            label="contentTextStyle"
            text="一袋米要给多了"
            contentTextStyle={{ color: '#098' }}
          />
          <Description label="bold" text="一袋米要给多了" bold />
          <Description label="color" text="color 优先级相对较低" color="#000" />
          <Description
            label="addonBefore"
            addonBefore={<Text>$</Text>}
            text="10000"
          />
          <Description
            label="addonAfter"
            addonAfter={<Text>元/kg</Text>}
            text="10000"
          />
          <Description
            label="renderAlignCenter"
            addonBefore={<Text>$</Text>}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="renderAlignCenter"
            addonAfter={<Text>元/kg</Text>}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="renderAlignCenter"
            addonAfter={<Button type="ghost" size="xs" text="修改" />}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="文字过长"
            addonAfter={<Button type="ghost" size="xs" text="修改" />}
            text="我那么多遗憾那么多期盼你知道吗"
          />
          <Description
            label="render"
            addonAfter={<Button type="ghost" size="xs" text="修改" />}
            text="10000"
            contentTextStyle={{ flex: 1 }}
          />
          <Description
            label="children"
            addonAfter={<Button type="ghost" size="xs" text="修改" />}
            contentTextStyle={{ flex: 1 }}>
            <Text>children</Text>
            <Text>children</Text>
            <Text>children</Text>
          </Description>
        </Description.Group>
      </Card>
    </Space>
  )
}

export default DescriptionBase
