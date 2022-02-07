/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { Row, Col, CellGroup } from '@fruits-chain/react-native-xiaoshu'

const Styles = StyleSheet.create({
  card: {
    backgroundColor: '#f30',
    flex: 1,
  },
  card2: {
    backgroundColor: '#680',
    flex: 1,
  },
  card3: {
    backgroundColor: '#876',
    flex: 1,
  },
})

const BasicGrid: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup title="基础用法">
        <Row>
          <Col span={8}>
            <Text style={Styles.card}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card2}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card3}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card3}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card2}>fsd</Text>
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="区块间隔">
        <Row gutter={12}>
          <Col span={8}>
            <Text style={Styles.card}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card2}>fsd</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card3}>fsd</Text>
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="左右偏移">
        <Row>
          <Col span={18} offset={2}>
            <Text style={Styles.card}>span=18 offset=2</Text>
          </Col>
          <Col span={4}>
            <Text style={Styles.card2}>4</Text>
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="主轴对齐方式">
        <Row justify="center">
          <Col span={8}>
            <Text style={Styles.card}>center</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card2}>center</Text>
          </Col>
        </Row>

        <Row justify="flex-end">
          <Col span={8}>
            <Text style={Styles.card}>flex-end</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card2}>flex-end</Text>
          </Col>
        </Row>

        <Row justify="space-between">
          <Col span={8}>
            <Text style={Styles.card}>space-between</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card3}>space-between</Text>
          </Col>
        </Row>
      </CellGroup>

      <CellGroup title="交叉轴对齐方式">
        <Row align="center">
          <Col span={8}>
            <Text style={Styles.card}>{`center\ncenter`}</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card3}>center</Text>
          </Col>
        </Row>

        <Row justify="flex-end" align="flex-end">
          <Col span={8}>
            <Text style={Styles.card3}>flex-end</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card}>{`flex-end\nflex-end`}</Text>
          </Col>
        </Row>

        <Row justify="center" align="stretch">
          <Col span={8}>
            <Text style={Styles.card3}>flex-end</Text>
          </Col>
          <Col span={8}>
            <Text style={Styles.card}>{`flex-end\nflex-end`}</Text>
          </Col>
        </Row>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicGrid
