import React from 'react'
import { ScrollView } from 'react-native'
import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

import ButtonType from './type'
import ButtonDanger from './danger'
import ButtonHairline from './hairline'
import ButtonDisabled from './disabled'
import ButtonLoading from './loading'
import ButtonSize from './size'
import ButtonIcon from './icon'

const BasicButton: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="自定义颜色" bordered={false}>
        <ButtonType />
        <ButtonDanger />
        <ButtonHairline />
        <ButtonDisabled />
        <ButtonLoading />
        <ButtonSize />
        <ButtonIcon />

        <Space tail>
          <Button color="#0c6" text="只改变主要色" />
          <Button color="#0c6" type="hazy" text="只改变主要色" />
          <Button color="#0c6" type="outline" text="只改变主要色" />
          <Button color="#0c6" textColor="#f30" text="文字颜色" />
          <Button color="#0c6" type="hazy" text="文字颜色" />
          <Button color="#0c6" type="outline" text="文字颜色" />
        </Space>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicButton
