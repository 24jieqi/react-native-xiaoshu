/**
 * title: 内置状态
 * description: 共有四种样式 info、success、warning、error。
 */

import { Result, Space } from '@fruits-chain/react-native-xiaoshu'

const ResultStatus = () => {
  return (
    <Space>
      <Result status="success" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />

      <Result status="warning" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />

      <Result status="error" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />

      <Result status="info" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />
    </Space>
  )
}

export default ResultStatus
