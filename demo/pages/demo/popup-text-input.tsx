import React, { useState } from 'react'
import { View } from 'react-native'

import {
  Button,
  Popup,
  Field,
  ButtonBar,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

import { KeyboardAwareScrollView } from '@/components/keyboard-aware-scroll-view'
import Layout from '@/layouts/layout'
import type * as Routes from '@/routes'

type PopupTextInputProps = Routes.RootStackScreenProps<'PopupTextInput'>

const PopupTextInput: React.FC<PopupTextInputProps> = () => {
  const [pageVisible, setPageVisible] = useState(false)

  return (
    <Layout.Page>
      <Button
        text="显示弹出层"
        onPress={() => {
          setPageVisible(true)
        }}
      />

      <Popup.PopupPage visible={pageVisible} round>
        <Popup.Header
          title="独立页面"
          onClose={() => {
            setPageVisible(false)
          }}
        />

        <KeyboardAwareScrollView>
          <Space tail>
            <View style={{ height: 200, backgroundColor: '#f09' }} />
            <Field.TextInput
              title="文案棒"
              placeholder="请输入"
              divider={false}
            />
            <View style={{ height: 200, backgroundColor: '#876' }} />
            <Field.TextInput
              title="文案秒"
              placeholder="请输入"
              divider={false}
            />
            <View style={{ height: 200, backgroundColor: '#123' }} />
            <Field.TextInput
              title="文案雅"
              placeholder="请输入"
              divider={false}
            />
            <View style={{ height: 200, backgroundColor: '#678' }} />
            <Field.TextInput
              title="文案水"
              placeholder="请输入"
              divider={false}
            />
            <View style={{ height: 200, backgroundColor: '#321' }} />
          </Space>
        </KeyboardAwareScrollView>

        <ButtonBar alone>
          <Button text="确定" />
        </ButtonBar>
      </Popup.PopupPage>
    </Layout.Page>
  )
}

export default PopupTextInput
