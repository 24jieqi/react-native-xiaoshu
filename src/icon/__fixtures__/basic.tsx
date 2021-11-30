import React from 'react'
import { ScrollView } from 'react-native'

import { CellGroup, Icon, Row, Col } from 'react-native-xiaoshu'

const BasicIcon: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="Fill 24*24" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.ArrowFill />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill direction="left" />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill direction="up" />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill direction="down" />
          </Col>
          <Col span={6}>
            <Icon.WarnFill />
          </Col>
          <Col span={6}>
            <Icon.NewFill />
          </Col>
          <Col span={6}>
            <Icon.SearchFill />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Fill 16*16" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.DeleteFill />
          </Col>
          <Col span={6}>
            <Icon.RemoveFill />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Outline 24*24" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.ArrowOutline />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline direction="left" />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline direction="up" />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline direction="down" />
          </Col>
          <Col span={6}>
            <Icon.CrossOutline />
          </Col>
          <Col span={6}>
            <Icon.SuccessOutLine />
          </Col>
          <Col span={6}>
            <Icon.PlusOutline />
          </Col>
          <Col span={6}>
            <Icon.EyeOutLine />
          </Col>
          <Col span={6}>
            <Icon.EyeCloseOutLine />
          </Col>
        </Row>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicIcon
