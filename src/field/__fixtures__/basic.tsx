import React from 'react'

import BasicFieldButtonOption from './button-option'
import DemoCheckbox from './checkbox'
import DemoDate from './date'
import DemoDateRange from './date-range'
import DemoNumberInput from './number-input'
import DemoSelector from './selector'
import DemoSwitch from './switch'
import DemoText from './text'
import DemoTextInput from './text-input'

const BasicField: React.FC = () => {
  return (
    <>
      <DemoText />
      <DemoSelector />
      <DemoTextInput />
      <DemoNumberInput />
      <DemoSwitch />
      <DemoDate />
      <DemoDateRange />
      <DemoCheckbox />
      <BasicFieldButtonOption />
    </>
  )
}

export default BasicField
