import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Space } from '@fruits-chain/react-native-xiaoshu'

import ButtonType from './type'
import ButtonDanger from './danger'
import ButtonHairline from './hairline'
import ButtonDisabled from './disabled'
import ButtonLoading from './loading'
import ButtonSize from './size'
import ButtonIcon from './icon'
import ButtonOption from './option'
import ButtonOptionGroup from './option-group'
import ButtonSubtext from './subtext'

const BasicButton: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <ButtonType />
        <ButtonSubtext />
        <ButtonDanger />
        <ButtonHairline />
        <ButtonDisabled />
        <ButtonLoading />
        <ButtonSize />
        <ButtonIcon />

        <Card title="自定义颜色" square>
          <Space tail>
            <Button color="#0c6" text="只改变主要色" />
            <Button color="#0c6" type="hazy" text="只改变主要色" />
            <Button color="#0c6" type="outline" text="只改变主要色" />
            <Button color="#0c6" textColor="#666" text="文字颜色" />
            <Button color="#0c6" type="hazy" text="文字颜色" />
            <Button color="#0c6" type="outline" text="文字颜色" />
          </Space>
        </Card>

        <ButtonOption />

        <ButtonOptionGroup />
      </Space>
    </ScrollView>
  )
}

export default BasicButton
