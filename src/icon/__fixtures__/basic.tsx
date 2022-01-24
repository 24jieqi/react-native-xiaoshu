import React, { useState } from 'react'
import type { ViewStyle } from 'react-native'
import { ScrollView, View } from 'react-native'

import {
  CellGroup,
  Icon,
  Row,
  Col,
  Button,
} from '@fruits-chain/react-native-xiaoshu'

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
      <CellGroup title="Fill" bordered={false}>
        <Row>
          <Col span={3} style={colStyle}>
            <Icon.ArrowRightFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowLeftFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowUpFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowDownFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CheckedFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.DeleteFill />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.RemoveFill />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Outline" bordered={false}>
        <Row>
          <Col span={3} style={colStyle}>
            <Icon.ArrowRightOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowLeftOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowUpOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ArrowDownOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CrossOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.SuccessOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.PlusOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.EyeOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.EyeCloseOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CircleOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.WarningOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.SuccessCircleOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CrossCircleOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.WarningCircleOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.SearchOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ExplainOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.DeleatOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.WeChatOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.MobileScreenOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.ClickCopyOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CoordOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.SOPOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.VolumeOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.FiltrateOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.CopyOutline />
          </Col>
          <Col span={3} style={colStyle}>
            <Icon.TelephoneOutline />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="可点击范围" bordered={false}>
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
      </CellGroup>

      <CellGroup title="部分联动图标" bordered={false}>
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
      </CellGroup>
    </ScrollView>
  )
}

export default BasicIcon
