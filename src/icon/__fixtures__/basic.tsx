import React from 'react'
import { ScrollView } from 'react-native'

import { CellGroup, Icon, Row, Col } from 'react-native-xiaoshu'

const ICON_SIZE = 32

const BasicIcon: React.FC = () => {
  return (
    <ScrollView style={{ backgroundColor: '#fff' }}>
      <CellGroup title="Fill" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.ArrowFill size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill size={ICON_SIZE} direction="left" />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill size={ICON_SIZE} direction="up" />
          </Col>
          <Col span={6}>
            <Icon.ArrowFill size={ICON_SIZE} direction="down" />
          </Col>

          <Col span={6}>
            <Icon.WarnFill size={ICON_SIZE} />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Outline" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.ArrowOutline size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline size={ICON_SIZE} direction="left" />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline size={ICON_SIZE} direction="up" />
          </Col>
          <Col span={6}>
            <Icon.ArrowOutline size={ICON_SIZE} direction="down" />
          </Col>
          <Col span={6}>
            <Icon.CrossOutline size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.SuccessOutLine size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.PlusOutline size={ICON_SIZE} />
          </Col>
        </Row>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicIcon
