/**
 * title: 所有图标
 * desc: 愿君多采集。
 */

import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView, View, Text } from 'react-native'

import {
  Card,
  Icon,
  Row,
  Col,
  Button,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

type AllIconKey = keyof typeof Icon

const colStyle: ViewStyle = {
  // backgroundColor: '#f30',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  minHeight: 50,
}

const fills: AllIconKey[] = []

const outline: AllIconKey[] = []

Object.keys(Icon).forEach(key => {
  if (/Outline$/.test(key)) {
    outline.push(key as AllIconKey)
  }
  if (/Fill$/.test(key)) {
    fills.push(key as AllIconKey)
  }
})

const BasicIcon: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <ScrollView>
      <Space head tail>
        <Card title="Fill" square>
          <Row>
            {fills.map(key => {
              const IconName = Icon[key]
              return (
                <Col key={key} span={8} style={colStyle}>
                  <Space tail head>
                    <IconName />
                    <Text>{key}</Text>
                  </Space>
                </Col>
              )
            })}
          </Row>
        </Card>

        <Card title="Outline" square>
          <Row>
            {outline.map(key => {
              const IconName = Icon[key]
              return (
                <Col key={key} span={8} style={colStyle}>
                  <Space tail head>
                    <IconName />
                    <Text>{key}</Text>
                  </Space>
                </Col>
              )
            })}
          </Row>
        </Card>

        <Card title="可点击范围" square>
          <Row>
            <Col span={3} style={colStyle}>
              <View
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: '#f30',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Icon.CheckedFill
                  onPress={() => {
                    console.log('???')
                  }}
                />
              </View>
            </Col>

            <Col span={3} style={colStyle}>
              <Icon.CheckedFill
                onPress={() => {
                  console.log('???')
                }}
              />
            </Col>

            <Col span={3} style={colStyle}>
              <Icon.CheckedFill
                disabled
                onPress={() => {
                  console.log('???')
                }}
              />
            </Col>
          </Row>
        </Card>

        <Card title="部分联动图标" square>
          <Row>
            <Col span={3} style={colStyle}>
              <Button
                type="primary"
                size="xs"
                text="转换"
                onPress={() => {
                  setToggle(v => !v)
                }}
                style={{ width: 50 }}
              />
            </Col>
            <Col span={3} style={colStyle}>
              {toggle ? <Icon.SuccessCircleOutline /> : <Icon.CircleOutline />}
            </Col>
            <Col span={3} style={colStyle}>
              {toggle ? <Icon.CheckedFill /> : <Icon.SuccessOutline />}
            </Col>

            <Col span={3} offset={6} style={colStyle}>
              {toggle ? (
                <Icon.SuccessCircleOutline disabled />
              ) : (
                <Icon.CircleOutline disabled />
              )}
            </Col>
            <Col span={3} style={colStyle}>
              {toggle ? (
                <Icon.CheckedFill disabled />
              ) : (
                <Icon.SuccessOutline disabled />
              )}
            </Col>
          </Row>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicIcon
