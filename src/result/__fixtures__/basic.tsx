import React from 'react'
import { ScrollView } from 'react-native'

import {
  CellGroup,
  Result,
  ResultIconEmpty,
  ResultIconBox,
  ResultIconWarning,
  ResultIconError,
  Icon,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

const BasicResult: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="Success" bordered={false}>
        <Result
          status="success"
          title="恭喜答对了"
          subtitle={`嘿嘿嘿\n啊哈哈`}
        />
      </CellGroup>

      <CellGroup title="Warning" bordered={false}>
        <Result
          status="warning"
          title="恭喜答对了"
          subtitle={`嘿嘿嘿\n啊哈哈`}
        />
      </CellGroup>

      <CellGroup title="Error" bordered={false}>
        <Result status="error" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />
      </CellGroup>

      <CellGroup title="Info" bordered={false}>
        <Result status="info" title="恭喜答对了" subtitle={`嘿嘿嘿\n啊哈哈`} />
      </CellGroup>

      <CellGroup title="自定义图标" bordered={false}>
        <Result
          status="info"
          title="恭喜答对了"
          renderIcon={(color, size) => {
            return <Icon.ArrowLeftFill color={color} size={size} />
          }}
        />
      </CellGroup>

      <CellGroup title="自定义图标" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={(color, size) => {
            return <Icon.ArrowLeftFill color={color} size={size} />
          }}
        />
      </CellGroup>

      <CellGroup title="自定义" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={(color, size) => {
            return <Icon.ArrowLeftFill color={color} size={size} />
          }}
          extra={<Button type="primary" size="small" text="回到过去" />}
        />
      </CellGroup>

      <CellGroup title="自定义1" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={() => {
            return <ResultIconEmpty />
          }}
        />
      </CellGroup>

      <CellGroup title="自定义2" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={() => {
            return <ResultIconBox />
          }}
        />
      </CellGroup>

      <CellGroup title="自定义3" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={() => {
            return <ResultIconWarning />
          }}
        />
      </CellGroup>

      <CellGroup title="自定义4" bordered={false}>
        <Result
          status="warning"
          subtitle="恭喜答对了"
          renderIcon={() => {
            return <ResultIconError />
          }}
        />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicResult
