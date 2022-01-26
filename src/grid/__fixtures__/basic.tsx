/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Row, Col } from '@fruits-chain/react-native-xiaoshu'

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#999',
  },

  card: {
    backgroundColor: '#f30',
  },

  card2: {
    backgroundColor: '#680',
  },
})

const BasicGrid: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <View>
        <Text>基础用法</Text>
      </View>

      <Row>
        <Col span="8">
          <View style={Styles.card}>
            <Text>fsd</Text>
          </View>
        </Col>
        <Col span="8">
          <Text>fsd</Text>
        </Col>
        <Col span="8">
          <View style={Styles.card}>
            <Text>fsd</Text>
          </View>
        </Col>
        <Col span="8">
          <Text>fsd</Text>
        </Col>
        <Col span="8">
          <Text>fsd</Text>
        </Col>
      </Row>

      <View style={{ height: 20 }} />

      <View>
        <Text>在列元素之间增加间距</Text>
      </View>

      <Row gutter="10">
        <Col span="8">
          <View style={Styles.card}>
            <Text>fsd</Text>
          </View>
        </Col>
        <Col span="8">
          <View style={Styles.card2}>
            <Text>fsd</Text>
          </View>
        </Col>
        <Col span="8">
          <View style={Styles.card}>
            <Text>fsd</Text>
          </View>
        </Col>
        <Col span="18" offset="2">
          <View style={Styles.card}>
            <Text>span="18" offset="2"</Text>
          </View>
        </Col>
        <Col span="4">
          <View style={Styles.card}>
            <Text>4</Text>
          </View>
        </Col>
      </Row>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicGrid
