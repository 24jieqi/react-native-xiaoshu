import React from 'react'
import { View, ScrollView } from 'react-native'

import { ButtonBar, Button, Icon } from '@fruits-chain/react-native-xiaoshu'

const BasicButtonBar: React.FC = () => {
  return (
    <>
      <ScrollView>
        <View style={{ height: 10 }} />

        <ButtonBar
          safeAreaInsetBottom={false}
          buttons={[
            {
              text: '主要按钮',
              type: 'primary',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'hazy',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'hazy',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'primary',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'primary',
              onPress: () => {
                console.log('??')
              },
            },
          ]}
        />

        <View style={{ height: 10 }} />

        <ButtonBar
          safeAreaInsetBottom={false}
          buttons={[
            {
              text: '主要按钮',
              type: 'primary',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'hazy',
              onPress: () => {
                console.log('??')
              },
            },
            {
              text: '次要按钮',
              type: 'hazy',
              onPress: () => {
                console.log('??')
              },
            },
          ]}
        />

        <View style={{ height: 10 }} />
      </ScrollView>

      <ButtonBar alone>
        <Button
          text="新增数据"
          type="primary"
          renderLeftIcon={(color, size) => (
            <Icon.PlusOutline color={color} size={size} pointerEvents="none" />
          )}
        />
      </ButtonBar>
    </>
  )
}

export default BasicButtonBar
