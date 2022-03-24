/**
 * title: 详情页跳转
 * desc: 使用 Progress 组件实现页面过渡
 */

import React, { useState, useCallback } from 'react'

import { Progress, Button } from '@fruits-chain/react-native-xiaoshu'

const CaseDetail2: React.FC = () => {
  const [loading, setLoading] = useState(false)

  const onReenter = useCallback(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <Progress.Page loading={loading}>
      <Button text="重新进入" onPress={onReenter} />
    </Progress.Page>
  )
}

export default CaseDetail2
