/**
 * title: 时间段选择
 * description: 函数调用方式，`Promise` 或 `onConfirm` 两种方式拿到选择的时间，在确定之前可以通过 `beforeClose` 判断时间是否合适以及阻止关闭弹层。
 */

import React from 'react'

import {
  DatePicker,
  Button,
  Card,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const Y_M_LIMIT = {
  min: new Date(2016, 6, 20, 18, 40, 10),
  max: new Date(2026, 2, 10, 12, 20, 50),
}

const BasicDatePickerViewRange: React.FC = () => {
  return (
    <Card title="日期段">
      <Space>
        <Button
          text="日期段:Y-D:Promise"
          onPress={() => {
            DatePicker.range({
              title: '什么时间',
            }).then(({ action, values }) => {
              console.log('日期段:Y-D:Promise  =>>  action  =>', action)
              console.log('日期段:Y-D:Promise  =>>  values  =>', values)
            })
          }}
        />
        <Button
          text="日期段:Y-D:beforeClose:Promise"
          onPress={() => {
            DatePicker.range({
              title: '某个时间',
              beforeClose: (action, value) => {
                console.log(
                  '日期段:Y-D:beforeClose:Promise   =>  action  => ',
                  action,
                )
                console.log(
                  '日期段:Y-D:beforeClose:Promise   =>  value  => ',
                  value,
                )

                return new Promise<boolean>(resolve => {
                  setTimeout(() => {
                    resolve(true)
                  }, 2000)
                })
              },
            })
          }}
        />
        <Button
          text="日期段:Y-m:Promise"
          onPress={() => {
            DatePicker.range({
              title: '什么时间',
              mode: 'Y-m',
            }).then(({ action, values }) => {
              console.log('日期段:Y-m:Promise  =>>  action  =>', action)
              console.log('日期段:Y-m:Promise  =>>  values  =>', values)
            })
          }}
        />
        <Button
          text="日期段:[null, null]?"
          onPress={() => {
            DatePicker.range({
              title: '什么时间',
              mode: 'Y-m',
              defaultValue: [null, null],
            }).then(({ action, values }) => {
              console.log('日期段:Y-m:Promise  =>>  action  =>', action)
              console.log('日期段:Y-m:Promise  =>>  values  =>', values)
            })
          }}
        />
        <Button
          text="日期段:[new Date(), null]?"
          onPress={() => {
            DatePicker.range({
              ...Y_M_LIMIT,
              title: '什么时间',
              mode: 'Y-m',
              defaultValue: [new Date(), null],
            }).then(({ action, values }) => {
              console.log('日期段:Y-m:Promise  =>>  action  =>', action)
              console.log('日期段:Y-m:Promise  =>>  values  =>', values)
            })
          }}
        />
        <Button
          text="日期段:[null, new Date()]?"
          onPress={() => {
            DatePicker.range({
              ...Y_M_LIMIT,
              title: '什么时间',
              mode: 'Y-m',
              defaultValue: [null, new Date()],
            }).then(({ action, values }) => {
              console.log('日期段:Y-m:Promise  =>>  action  =>', action)
              console.log('日期段:Y-m:Promise  =>>  values  =>', values)
            })
          }}
        />
        <Button
          text="清空逻辑"
          onPress={() => {
            DatePicker.range({
              ...Y_M_LIMIT,
              title: '什么时间',
              mode: 'Y-m',
              clearable: true,
              clearButtonText: '自定义文案',
            }).then(({ action, values }) => {
              console.log('日期段:Y-m:Promise  =>>  action  =>', action)
              if (action === 'confirm') {
                console.log('日期段:Y-m:Promise  =>>  values  =>', values)
              }
              if (action === 'clear') {
                console.log('clear 业务方自定义逻辑')
              }
            })
          }}
        />
      </Space>
    </Card>
  )
}

export default BasicDatePickerViewRange
