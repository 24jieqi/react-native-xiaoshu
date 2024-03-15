/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import DialogBase from './base'
import DialogInput from './input'
import DialogOther from './other'
import DialogKeyboard from './keyboard'

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
