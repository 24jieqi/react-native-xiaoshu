import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Badge } from '@fruits-chain/react-native-xiaoshu'

const BasicBadge: React.FC = () => {
  return (
    <ScrollView style={Styles.page}>
      <Text>基础用法</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge count="999">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot>
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge count="999" loading>
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge count={0} showZero>
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <Text>最大值</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge count={999} max={99}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge count={9} max={99}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <Text>自定义偏移</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge count={9} offset={[8, -16]}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot offset={[8, -16]}>
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <Text>自定义颜色</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.demoWrapper}>
        <View style={Styles.demoItemWrapper}>
          <Badge count={999} max={9} color="#1989fa">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot color="#1989fa">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot status="primary">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot status="success">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot status="error">
            <View style={Styles.demoItem} />
          </Badge>
        </View>

        <View style={Styles.demoItemWrapper}>
          <Badge dot status="warning">
            <View style={Styles.demoItem} />
          </Badge>
        </View>
      </View>

      <View style={{ height: 20 }} />

      <Text>独立展示</Text>

      <View style={{ height: 20 }} />

      <View style={Styles.demoSingle}>
        <Badge count="999" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge count={999} max={9} style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge count="1" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge dot style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge dot status="error" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge dot status="primary" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge dot status="success" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>
      <View style={Styles.demoSingle}>
        <Badge dot status="warning" style={Styles.demoSingleDot} />
        <Text>测试文案</Text>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
  },

  demoWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  demoItemWrapper: {
    marginRight: 16,
    marginBottom: 12,
  },

  demoItem: {
    width: 40,
    height: 40,
    backgroundColor: '#f2f3f5',
    borderRadius: 4,
  },

  demoSingle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 4,
  },

  demoSingleDot: {
    marginRight: 4,
  },
})

export default BasicBadge
