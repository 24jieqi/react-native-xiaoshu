import React from 'react'

import DemoText from './text'
import DemoSelector from './selector'
import DemoTextInput from './text-input'
import DemoNumberInput from './number-input'
import DemoSwitch from './switch'
import DemoDate from './date'
import DemoDateRange from './date-range'
import DemoCheckbox from './checkbox'
import BasicFieldButtonOption from './button-option'

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
