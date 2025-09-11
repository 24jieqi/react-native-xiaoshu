import { PlusOutline } from '@fruits-chain/icons-react-native'
import React from 'react'
import { ScrollView } from 'react-native'

import { ButtonBar, Button, Space } from '@fruits-chain/react-native-xiaoshu'

import ButtonBarBase from './base'
import ButtonBarButtons from './buttons'
import ButtonBarConfirm from './confirm'

const BasicButtonBar = () => {
  return (
    <>
      <ScrollView>
        <Space tail gap={100}>
          <ButtonBarBase />

          <ButtonBarButtons />

          <ButtonBarConfirm />
        </Space>
      </ScrollView>

      <ButtonBar alone keyboardShowNotRender>
        <Button
          text="新增数据"
          type="primary"
          renderLeftIcon={(color, size) => (
            <PlusOutline color={color} size={size} />
          )}
        />
      </ButtonBar>
    </>
  )
}

export default BasicButtonBar
