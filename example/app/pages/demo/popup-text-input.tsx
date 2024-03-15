import {
  Button,
  Popup,
  Field,
  ButtonBar,
  Space,
  TextInput,
} from '@fruits-chain/react-native-xiaoshu'
import React, { useEffect, useState } from 'react'
import { View, Keyboard } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { KeyboardAwareScrollView } from '~/components/keyboard-aware-scroll-view'
import Layout from '~/layouts/layout'
import type * as Routes from '~/routes'

type PopupTextInputProps = Routes.RootStackScreenProps<'PopupTextInput'>

const inputs = new Array(20).fill(0)

const PopupTextInput: React.FC<PopupTextInputProps> = () => {
  const [pageVisible, setPageVisible] = useState(false)
  const insets = useSafeAreaInsets()
  const [safeAreaInsetTop, setSafeAreaInsetTop] = useState(200)

  useEffect(() => {
    const keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => {
      setSafeAreaInsetTop(insets.top)
    })
    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => {
      setSafeAreaInsetTop(200)
    })

    return () => {
      // 移除监听
      keyboardDidShow.remove()
      keyboardDidHide.remove()
    }
  }, [insets.top])

  return (
    <Layout.Page>
      <KeyboardAwareScrollView style={{ paddingHorizontal: 12 }}>
        <Space>
          <Button
            text="显示弹出层"
            onPress={() => {
              setPageVisible(true)
            }}
          />

          {inputs.map((_, index) => {
            return (
              <TextInput
                key={`${index}`}
                placeholder={`${index}测试底部按钮消失的过渡效果`}
                bordered
              />
            )
          })}
        </Space>
      </KeyboardAwareScrollView>

      <ButtonBar alone>
        <Button text="确定" />
      </ButtonBar>

      <Popup.Page
        visible={pageVisible}
        round
        safeAreaInsetTop={safeAreaInsetTop}>
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
      </Popup.Page>
    </Layout.Page>
  )
}

export default PopupTextInput
