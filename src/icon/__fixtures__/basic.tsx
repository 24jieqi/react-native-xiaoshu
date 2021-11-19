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
            <Icon.IconArrowFill size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.IconArrowFill size={ICON_SIZE} direction="left" />
          </Col>
          <Col span={6}>
            <Icon.IconArrowFill size={ICON_SIZE} direction="up" />
          </Col>
          <Col span={6}>
            <Icon.IconArrowFill size={ICON_SIZE} direction="down" />
          </Col>

          <Col span={6}>
            <Icon.IconWarnFill size={ICON_SIZE} />
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="Outline" bordered={false}>
        <Row>
          <Col span={6}>
            <Icon.IconArrowOutline size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.IconArrowOutline size={ICON_SIZE} direction="left" />
          </Col>
          <Col span={6}>
            <Icon.IconArrowOutline size={ICON_SIZE} direction="up" />
          </Col>
          <Col span={6}>
            <Icon.IconArrowOutline size={ICON_SIZE} direction="down" />
          </Col>
          <Col span={6}>
            <Icon.IconCrossOutline size={ICON_SIZE} />
          </Col>
          <Col span={6}>
            <Icon.IconSuccessOutLine size={ICON_SIZE} />
          </Col>
        </Row>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicIcon
