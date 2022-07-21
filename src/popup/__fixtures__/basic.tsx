/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import PopupHeader from './header'
import PopupPopup from './popup'
import PopupPage from './page'
import PopupKeyboardShim from './keyboard-shim'

const BasicPopup: React.FC = () => {
  return (
    <ScrollView>
      <PopupHeader />

      <PopupPopup />

      <PopupKeyboardShim />

      <PopupPage />
    </ScrollView>
  )
}

export default BasicPopup
