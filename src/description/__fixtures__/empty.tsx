/**
 * title: 空数据
 * description: 支持自定义空数据占位符。
 */

import React from 'react'

import { Description, Card, Space } from '@fruits-chain/react-native-xiaoshu'

const d = new Date()

const dd: [Date, Date] = [
  new Date(2016, 6, 20, 18, 40, 10),
  new Date(2026, 2, 10, 12, 20, 50),
]

const DescriptionEmpty: React.FC = () => {
  return (
    <Space>
      <Card title="empty" square>
        <Description.Group showEmpty>
          <Description label="Description" showEmpty={false} />
          <Description label="Description" />
          <Description label="Description" text="" />
          <Description label="Description" text="一袋米由我洗嘞" />
          <Description label="Description" text={null} />
          <Description.Thousand label="Description.Thousand" />
          <Description.Thousand
            label="Description.Thousand"
            text={12892394839}
          />
          <Description.Date label="Description.Date" />
          <Description.Date label="Description.Date" text={d} />
          <Description.DateRange label="Description.DateRange" />
          <Description.DateRange label="Description.DateRange" text={dd} />
        </Description.Group>
      </Card>

      <Card title="empty:统一自定义" square>
        <Description.Group showEmpty empty="暂无数据">
          <Description label="Description" />
          <Description label="Description" text="一袋米由我洗嘞" />
          <Description label="Description" text={null} />
          <Description.Thousand label="Description.Thousand" />
          <Description.Thousand
            label="Description.Thousand"
            text={12892394839}
          />
          <Description.Date label="Description.Date" />
          <Description.Date label="Description.Date" text={d} />
          <Description.DateRange label="Description.DateRange" />
          <Description.DateRange label="Description.DateRange" text={dd} />
        </Description.Group>
      </Card>

      <Card title="empty:自定义" square>
        <Description.Group showEmpty empty="暂无数据">
          <Description label="Description" empty="没没有蜡烛就不用勉强庆祝" />
          <Description label="Description" text="一袋米由我洗嘞" />
          <Description
            label="Description"
            empty="没没想到答案就不用寻找题目"
            text={null}
          />
          <Description.Thousand
            label="Description.Thousand"
            empty="没没有退路那我也不要散步"
          />
          <Description.Thousand
            label="Description.Thousand"
            text={12892394839}
          />
          <Description.Date
            label="Description.Date"
            empty="没没人去仰慕那我就继续忙碌"
          />
          <Description.Date label="Description.Date" text={d} />
          <Description.DateRange label="Description.DateRange" />
          <Description.DateRange label="Description.DateRange" text={dd} />
        </Description.Group>
      </Card>
    </Space>
  )
}

export default DescriptionEmpty
