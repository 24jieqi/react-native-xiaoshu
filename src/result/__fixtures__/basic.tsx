/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'

import {
  Result,
  Icon,
  Button,
  Card,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicResult: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <Card title="Success" square>
          <Result
            status="success"
            title="恭喜答对了"
            subtitle={`嘿嘿嘿\n啊哈哈`}
          />
        </Card>

        <Card title="Warning" square>
          <Result
            status="warning"
            title="恭喜答对了"
            subtitle={`嘿嘿嘿\n啊哈哈`}
          />
        </Card>

        <Card title="Error" square>
          <Result
            status="error"
            title="恭喜答对了"
            subtitle={`嘿嘿嘿\n啊哈哈`}
          />
        </Card>

        <Card title="Info" square>
          <Result
            status="info"
            title="恭喜答对了"
            subtitle={`嘿嘿嘿\n啊哈哈`}
          />
        </Card>

        <Card title="自定义图标" square>
          <Result
            status="info"
            title="恭喜答对了"
            renderIcon={(color, size) => {
              return <Icon.ArrowLeftFill color={color} size={size} />
            }}
          />
        </Card>

        <Card title="自定义图标" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={(color, size) => {
              return <Icon.ArrowLeftFill color={color} size={size} />
            }}
          />
        </Card>

        <Card title="自定义" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={(color, size) => {
              return <Icon.ArrowLeftFill color={color} size={size} />
            }}
            extra={<Button type="primary" size="s" text="回到过去" />}
          />
        </Card>

        <Card title="自定义1" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={() => {
              return <Result.IconEmpty />
            }}
          />
        </Card>

        <Card title="自定义2" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={() => {
              return <Result.IconBox />
            }}
          />
        </Card>

        <Card title="自定义3" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={() => {
              return <Result.IconWarning />
            }}
          />
        </Card>

        <Card title="自定义4" square>
          <Result
            status="warning"
            subtitle="恭喜答对了"
            renderIcon={() => {
              return <Result.IconError />
            }}
          />
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicResult
