import React from 'react'
import { Space } from '@fruits-chain/react-native-xiaoshu'

import Base from './base'
import Ref from './ref'
import Context from './context'
import Deps from './deps'
import List from './list'
import UseFormInstance from './use-form-instance'

const BasicForm: React.FC = () => {
  return (
    <Space head tail>
      <Base />
      <Ref />
      <Context />
      <Deps />
      <List />
      <UseFormInstance />
    </Space>
  )
}

export default BasicForm
