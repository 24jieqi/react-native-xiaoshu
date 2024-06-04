import type { TextInputInstance } from '@fruits-chain/react-native-xiaoshu'
import {
  Button,
  Popup,
  TextInput,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'
import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, View } from 'react-native'

import { useThemeDark } from '~/contexts/theme'
import Layout from '~/layouts/layout'

const Comment: React.FC<{
  close: () => void
  opened: boolean
}> = ({ close, opened }) => {
  const [comment, setComment] = useState('')
  const textInputRef = useRef<TextInputInstance>(null)
  const isThemeDark = useThemeDark()

  useEffect(() => {
    if (opened) {
      textInputRef.current?.focus()
    }
  }, [opened])

  const onSend = () => {
    if (comment.trim()) {
      // eslint-disable-next-line no-console
      console.log('comment => ', comment)

      const loading = Toast.loading({
        duration: 0,
      })

      setTimeout(() => {
        loading.close()

        close()
      }, 200)
    } else {
      Toast('请输入评论')
    }
  }

  return (
    <View style={{ flexDirection: 'row', padding: 12 }}>
      <TextInput
        ref={textInputRef}
        placeholder="请输入内容"
        value={comment}
        onChange={setComment}
        fixGroupStyle={{ flex: 1, marginRight: 8 }}
        bordered
        returnKeyType="send"
        onSubmitEditing={onSend}
        keyboardAppearance={isThemeDark ? 'dark' : 'light'}
      />
      <Button size="s" onPress={onSend}>
        发送
      </Button>
    </View>
  )
}

const PopupComment = () => {
  const [visible, setVisible] = useState(false)
  const [opened, setOpened] = useState(false)

  return (
    <Layout.Page>
      <Button
        onPress={() => {
          setVisible(true)
        }}>
        弹出评论输入框
      </Button>

      <Popup
        safeAreaInsetBottom={true}
        position="bottom"
        destroyOnClosed={true}
        visible={visible}
        onRequestClose={() => false}
        onPressOverlay={() => {
          setVisible(false)
          Keyboard.dismiss()
        }}
        onOpened={() => {
          setOpened(true)
        }}
        onClose={() => {
          setOpened(false)
        }}>
        <Comment
          opened={opened}
          close={() => {
            setVisible(false)
            Keyboard.dismiss()
          }}
        />
        <Popup.KeyboardShim />
      </Popup>
    </Layout.Page>
  )
}

export default PopupComment
