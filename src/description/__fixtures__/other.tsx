/**
 * title: 其他组件
 * description: 内置一些其他格式组件。
 */

import React from 'react'

import { Description, Card, Button } from '@fruits-chain/react-native-xiaoshu'

const Y_M_LIMIT = {
  min: new Date(2016, 6, 20, 18, 40, 10),
  max: new Date(2026, 2, 10, 12, 20, 50),
}

const Y_M: [Date, Date] = [Y_M_LIMIT.min, Y_M_LIMIT.max]

const DescriptionOther: React.FC = () => {
  return (
    <Card title="其他" square>
      <Description.Group labelWidth={120} colon={false}>
        <Description.Thousand label="千分位" text={-0.00001} />
        <Description.Thousand label="千分位" text={10} />
        <Description.Thousand label="千分位" text={10000} />
        <Description.Thousand
          label="千分位"
          text={-100000000.0001}
          addonAfter={<Button text="修改" type="outline" size="xs" />}
          render={Description.renderAlignCenter}
        />
        <Description.Date label="单个时间" text={Y_M_LIMIT.min} />
        <Description.Date
          label="单个时间:Y-D"
          text={Y_M_LIMIT.min}
          mode="Y-D"
        />
        <Description.Date
          label="单个时间"
          text={Y_M_LIMIT.max}
          addonAfter={<Button text="修改" type="outline" size="xs" />}
          render={Description.renderAlignCenter}
        />
        <Description.Date
          label="单个时间:Y-D"
          text={Y_M_LIMIT.max}
          mode="Y-D"
        />
        <Description.DateRange label="时间段" text={Y_M} />
        <Description.DateRange
          label="时间段:Y-D"
          text={Y_M}
          mode="Y-D"
          color="#098"
          bold
          addonAfter={<Button text="修改" type="outline" size="xs" />}
          render={Description.renderDateRangeAlignFlexStart}
        />
      </Description.Group>
    </Card>
  )
}

export default DescriptionOther
