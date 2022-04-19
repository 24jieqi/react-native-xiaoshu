/**
 * title: 时间选择
 * desc: 单个时间选择器。
 */

import React, { useState } from 'react'
import { Cell, Field } from '@fruits-chain/react-native-xiaoshu'

const formatValueText = (_: Date, __: any, s: string) => {
  return `自定义：${s}`
}

const BasicFieldDate: React.FC = () => {
  const [value, setValue] = useState(new Date())

  return (
    <Cell.Group title="Field Date">
      <Field.Date title="标题:非受控" placeholder="请选择" />
      <Field.Date
        title="自定义文案:非受控"
        placeholder="请选择"
        formatValueText={formatValueText}
        clearable
      />
      <Field.Date title="标题:非受控:禁用" editable={false} />
      <Field.Date title="标题:非受控:Y-D" mode="Y-D" />
      <Field.Date title="标题:受控不更新" value={value} />
      <Field.Date
        title="标题:受控"
        value={value}
        onChange={setValue}
        divider={false}
        clearable
        placeholder="自己动手丰衣足食"
      />
    </Cell.Group>
  )
}

export default BasicFieldDate
