import React from 'react'
import { View } from 'react-native'

import Base from './base'
import Ref from './ref'
import Context from './context'
import Deps from './deps'
import List from './list'

const BasicForm: React.FC = () => {
  return (
    <>
      <Base />
      <View style={{ height: 20 }} />
      <Ref />
      <View style={{ height: 20 }} />
      <Context />
      <View style={{ height: 20 }} />
      <Deps />
      <View style={{ height: 20 }} />
      <List />
    </>
  )
}

export default BasicForm
