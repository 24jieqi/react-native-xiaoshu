import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { Button, Icon } from 'react-native-xiaoshu'

const BasicButton: React.FC = () => {
  return (
    <ScrollView>
      <View>
        <Text>按钮类型</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button text="default" />

        <View style={{ height: 20 }} />

        <Button type="primary" text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" text="success" />

        <View style={{ height: 20 }} />

        <Button type="warning" text="warning" />

        <View style={{ height: 20 }} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#fff" />}
          text="error"
        />

        <View style={{ height: 20 }} />

        <Button type="info" text="info" />
      </View>

      <View style={Styles.g1}>
        <Button text="default" style={Styles.g1b} />

        <Button type="primary" text="primary" style={Styles.g1b} />

        <Button type="success" text="success" style={Styles.g1b} />

        <Button type="warning" text="warning" style={Styles.g1b} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#fff" />}
          text="error"
          style={Styles.g1b}
        />

        <Button type="info" text="info" style={Styles.g1b} />
      </View>

      <View style={{ height: 20 }} />

      <View>
        <Text>朴素按钮</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button text="default" plain />

        <View style={{ height: 20 }} />

        <Button type="primary" text="primary" plain />

        <View style={{ height: 20 }} />

        <Button type="success" text="success" plain />

        <View style={{ height: 20 }} />

        <Button type="warning" text="warning" plain />

        <View style={{ height: 20 }} />

        <Button
          type="error"
          icon={<Icon.IconArrowOutline color="#f30" />}
          text="error"
          plain
        />

        <View style={{ height: 20 }} />

        <Button type="info" text="info" plain />
      </View>

      <View style={Styles.g1}>
        <Button text="default" style={Styles.g1b} plain />

        <Button type="primary" text="primary" style={Styles.g1b} plain />

        <Button type="success" text="success" style={Styles.g1b} plain />

        <Button type="warning" text="warning" style={Styles.g1b} plain />

        <Button type="error" text="error" style={Styles.g1b} plain />

        <Button type="info" text="info" style={Styles.g1b} plain />
      </View>

      <View>
        <Text>细边框</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" plain hairline text="primary" />

        <View style={{ height: 20 }} />

        <Button type="success" plain text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>禁用</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" disabled text="primary" />

        <View style={{ height: 20 }} />

        <Button type="primary" disabled text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>加载状态</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button
          loading
          type="primary"
          loadingText="嘿嘿，加油哟~"
          text="primary"
        />

        <View style={{ height: 20 }} />

        <Button type="primary" disabled loading text="success" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>按钮形状</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" square text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" round text="round" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>图标按钮</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" icon={<Icon.IconArrowOutline />} text="square" />

        <View style={{ height: 20 }} />

        <Button type="primary" icon={<Icon.IconArrowOutline />} text="round" />

        <View style={{ height: 20 }} />
      </View>

      <View>
        <Text>按钮大小</Text>
      </View>

      <View>
        <View style={{ height: 20 }} />

        <Button type="primary" size="large" text="large" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="mini" text="mini" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="normal" text="normal" />

        <View style={{ height: 20 }} />

        <Button type="primary" size="small" text="small" />

        <View style={{ height: 20 }} />
      </View>

      <View style={Styles.g1}>
        <Button
          type="primary"
          size="large"
          text="large"
          style={Styles.g1b}
          plain
        />

        <Button
          type="primary"
          size="normal"
          text="normal"
          style={Styles.g1b}
          plain
        />

        <Button
          type="primary"
          size="small"
          text="small"
          style={Styles.g1b}
          plain
        />

        <Button
          type="primary"
          size="mini"
          text="mini"
          style={Styles.g1b}
          plain
        />
      </View>

      <View>
        <Text>自定义颜色</Text>
      </View>

      <View style={{ height: 20 }} />

      <Button color="#960" text="default" />

      <View style={{ height: 20 }} />

      <Button color="#0c6" plain text="default" />

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  g1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  g1b: {
    // width: 80,
    marginHorizontal: 10,
    marginVertical: 5,
  },
})

export default BasicButton
