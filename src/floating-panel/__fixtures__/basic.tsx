import React, { useState } from 'react'
import { Button } from '@fruits-chain/react-native-xiaoshu'

import BaseFloatingPanel from './base'
import BaseFloatingPanel2 from './base2'
import ScrollFloatingPanel from './scroll'

const demos = [
  {
    value: 'base',
    label: '基础',
  },
  {
    value: 'base2',
    label: '基础2',
  },
  {
    value: 'scroll',
    label: '滚动',
  },
]

const BasicFloatingPanel: React.FC = () => {
  const [demo, setDemo] = useState(demos[1].value)

  return (
    <>
      <Button.OptionGroup
        deselect={false}
        options={demos}
        value={demo}
        onChange={(_, opts) => {
          setDemo(opts[0].value)
        }}
      />

      {demo === demos[0].value ? <BaseFloatingPanel /> : null}
      {demo === demos[1].value ? <BaseFloatingPanel2 /> : null}
      {demo === demos[2].value ? <ScrollFloatingPanel /> : null}
    </>
  )
}

export default BasicFloatingPanel
