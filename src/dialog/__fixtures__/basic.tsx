/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import DialogBase from './base'
import DialogInput from './input'
import DialogKeyboard from './keyboard'
import DialogOther from './other'

const BasicDialog: React.FC = () => {
  return (
    <ScrollView>
      <DialogBase />

      <DialogInput />

      <DialogOther />

      <DialogKeyboard />
    </ScrollView>
  )
}

export default BasicDialog
