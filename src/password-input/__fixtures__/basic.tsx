import React from 'react'

import {
  Cell,
  CellGroup,
  PasswordInput,
} from '@fruits-chain/react-native-xiaoshu'

const BasicPasswordInput: React.FC = () => {
  return (
    <CellGroup title="基础用法">
      <Cell title="默认" value={<PasswordInput />} />
      <Cell title="默认" value={<PasswordInput bordered />} bordered={false} />
    </CellGroup>
  )
}

export default BasicPasswordInput
