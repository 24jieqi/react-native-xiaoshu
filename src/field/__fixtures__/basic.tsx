import React from 'react'

import DemoText from './text'
import DemoSelector from './selector'
import DemoTextInput from './text-input'
import DemoNumberInput from './number-input'
import DemoSwitch from './switch'
import DemoDate from './date'
import DemoCheckbox from './checkbox'

const BasicField: React.FC = () => {
  return (
    <>
      <DemoText />
      <DemoSelector />
      <DemoTextInput />
      <DemoNumberInput />
      <DemoSwitch />
      <DemoDate />
      <DemoCheckbox />
    </>
  )
}

export default BasicField
