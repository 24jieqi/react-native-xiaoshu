/**
 * title: 单时间选择
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

const BasicDatePickerViewSingle: React.FC = () => {
  return (
    <Card title="单选">
      <Space>
        <Button
          text="单选:Promise"
          onPress={() => {
            DatePicker({
              title: '某个时间',
            }).then(({ action, value }) => {
              console.log('单选:Promise  =>>  action  =>', action)
              console.log('单选:Promise  =>>  value  =>', value)
            })
          }}
        />
        <Button
          text="单选:beforeClose:Promise"
          onPress={() => {
            DatePicker({
              title: '某个时间',
              beforeClose: (action, value) => {
                console.log(
                  '单选:beforeClose:Promise   =>  action  => ',
                  action,
                )
                console.log('单选:beforeClose:Promise   =>  value  => ', value)

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
          text="单选:Y-D:Promise"
          onPress={() => {
            DatePicker({
              title: '某个时间',
              mode: 'Y-D',
            }).then(({ action, value }) => {
              console.log('单选:Y-D:Promise  =>>  action  =>', action)
              console.log('单选:Y-D:Promise  =>>  value  =>', value)
            })
          }}
        />
        <Button
          text="单选:最大最小时间:Promise"
          onPress={() => {
            DatePicker({
              ...Y_M_LIMIT,
              title: '某个时间',
            }).then(({ action, value }) => {
              console.log('单选:最大最小时间:Promise  =>>  action  =>', action)
              console.log('单选:最大最小时间:Promise  =>>  value  =>', value)
            })
          }}
        />
      </Space>
    </Card>
  )
}

export default BasicDatePickerViewSingle
