/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import { Space } from '@fruits-chain/react-native-xiaoshu'

import PopupHeader from './header'
import PopupKeyboardShim from './keyboard-shim'
import PopupPage from './page'
import PopupPopup from './popup'

const BasicPopup: React.FC = () => {
  return (
    <ScrollView>
      <Space>
        <PopupHeader />

        <PopupPopup />

        <PopupKeyboardShim />

        <PopupPage />
      </Space>
    </ScrollView>
  )
}

export default BasicPopup
