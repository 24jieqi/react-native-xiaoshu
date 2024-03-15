/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import SpaceSize from './size'
import SpaceDirection from './direction'
import SpaceOther from './other'

const BasicSpace: React.FC = () => {
  return (
    <ScrollView>
      <SpaceSize />

      <SpaceDirection />

      <SpaceOther />
    </ScrollView>
  )
}

export default BasicSpace
