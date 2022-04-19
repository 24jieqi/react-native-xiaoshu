/**
 * title: 基本使用
 * desc: 左右布局。
 */

import React from 'react'
import { Text } from 'react-native'

import {
  Description,
  Card,
  Space,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const DescriptionBase: React.FC = () => {
  return (
    <Space>
      <Card title="基本使用" square>
        <Description.Group
          style={{
            backgroundColor: '#f5f5f5',
          }}>
          <Description label="标题的题" text="一袋米要抗几楼" />
          <Description label="标题的题">一袋米要抗几楼</Description>
          <Description label="标题的题">
            <Text style={{ color: '#987' }}>一袋米要抗几楼</Text>
          </Description>
          <Description label="标题的题" text="一袋米要抗二楼" />
          <Description label="标题的题" text="一袋米要给多了" />
          <Description label="标题的题" text="一袋米由我洗嘞" />
          <Description
            label="标题的题"
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
            label="对齐"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
          />
          <Description
            align="center"
            justify="center"
            contentStyle={{ flexBasis: 200, flexGrow: 0 }}
            label="对齐"
            text="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞"
          />
        </Description.Group>
      </Card>

      <Card title="基本使用:自定义" square>
        <Description.Group
          labelWidth={140}
          colon={false}
          labelTextStyle={{ color: '#333' }}
          contentTextStyle={{ color: '#f30' }}>
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
          <Description label="color" text="颜色被自定义样式覆盖" color="#000" />
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
            label="render"
            addonBefore={<Text>$</Text>}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="render"
            addonAfter={<Text>元/kg</Text>}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="render"
            addonAfter={<Button type="outline" size="xs" text="修改" />}
            text="10000"
            render={Description.renderAlignCenter}
          />
          <Description
            label="render"
            addonAfter={<Button type="outline" size="xs" text="修改" />}
            text="10000"
            contentTextStyle={{ flex: 1 }}
          />
          <Description
            label="children"
            addonAfter={<Button type="outline" size="xs" text="修改" />}
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
