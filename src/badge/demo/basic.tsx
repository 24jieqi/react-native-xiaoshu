import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Badge } from 'react-native-xiaoshu'

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },

  demoWrapper: {
    flexDirection: 'row',
  },

  demoItemWrapper: {
    marginRight: 16,
  },

  demoItem: {
    width: 40,
    height: 40,
    backgroundColor: '#f2f3f5',
    borderRadius: 4,
  },
})

const BasicBadge: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <View>
        <Text>基础用法</Text>
      </View>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge content="999">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot>
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <View>
        <Text>最大值</Text>
      </View>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge content={999} max={99}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge content={9} max={99}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <View>
        <Text>自定义颜色</Text>
      </View>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge content={999} max={9} color="#1989fa">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot color="#1989fa">
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <View>
        <Text>独立展示</Text>
      </View>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <Badge content="999" />
        <Badge content={999} max={9} />
        <Badge content="1" />
        <Badge dot />
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicBadge
