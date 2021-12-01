import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView, View } from 'react-native'

import { CellGroup, Icon, Row, Col, Button } from 'react-native-xiaoshu'

const colStyle: ViewStyle = {
  // backgroundColor: '#f30',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  minHeight: 50,
}

const BasicIcon: React.FC = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="Fill 24*24" bordered={false}>
        <Row>
          <Col span={6} style={colStyle}>
            <Icon.ArrowRightFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowLeftFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowUpFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowDownFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.WarningFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.NewFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.SearchFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.CheckedFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.SuccessCircleOutLine />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.CrossCircleOutline />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Fill 16*16" bordered={false}>
        <Row>
          <Col span={6} style={colStyle}>
            <Icon.DeleteFill />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.RemoveFill />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Outline 24*24" bordered={false}>
        <Row>
          <Col span={6} style={colStyle}>
            <Icon.ArrowRightOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowLeftOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowUpOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.ArrowDownOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.CrossOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.SuccessOutLine />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.PlusOutline />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.EyeOutLine />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.EyeCloseOutLine />
          </Col>
          <Col span={6} style={colStyle}>
            <Icon.CircleOutline />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="可点击范围" bordered={false}>
        <Row>
          <Col span={6} style={colStyle}>
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

          <Col span={6} style={colStyle}>
            <Icon.CheckedFill
              onPress={() => {
                console.log('???')
              }}
            />
          </Col>

          <Col span={6} style={colStyle}>
            <Icon.CheckedFill
              disabled
              onPress={() => {
                console.log('???')
              }}
            />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="部分联动图标" bordered={false}>
        <Row>
          <Col span={6} style={colStyle}>
            <Button
              type="primary"
              size="mini"
              text="转换"
              onPress={() => {
                setToggle(v => !v)
              }}
              style={{ width: 50 }}
            />
          </Col>
          <Col span={6} style={colStyle}>
            {toggle ? <Icon.CheckedFill /> : <Icon.CircleOutline />}
          </Col>
          <Col span={6} style={colStyle}>
            {toggle ? <Icon.CheckedFill /> : <Icon.SuccessOutLine />}
          </Col>

          <Col span={6} offset={6} style={colStyle}>
            {toggle ? (
              <Icon.CheckedFill disabled />
            ) : (
              <Icon.CircleOutline disabled />
            )}
          </Col>
          <Col span={6} style={colStyle}>
            {toggle ? (
              <Icon.CheckedFill disabled />
            ) : (
              <Icon.SuccessOutLine disabled />
            )}
          </Col>
        </Row>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicIcon
