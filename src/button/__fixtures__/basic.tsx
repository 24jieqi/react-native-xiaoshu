import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

import {
  Button,
  Icon,
  CellGroup,
  Space,
  useTheme,
} from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮')
}

const BasicButton: React.FC = () => {
  const THEME_VAR = useTheme()

  return (
    <ScrollView>
      <CellGroup title="按钮类型" bordered={false}>
        <Space style={Styles.box} end>
          <Button type="primary" text="primary" onPress={onPress} />
          <Button type="hazy" text="hazy" onPress={onPress} />
          <Button type="outline" text="outline" onPress={onPress} />
          <Button type="ghost" text="ghost" onPress={onPress} />
          <Button type="link" text="link" onPress={onPress} />
        </Space>
        <Space direction="horizontal" start end wrap>
          <Button type="primary" text="primary" onPress={onPress} />
          <Button type="hazy" text="hazy" onPress={onPress} />
          <Button type="outline" text="outline" onPress={onPress} />
          <Button type="ghost" text="ghost" onPress={onPress} />
          <Button type="link" text="link" onPress={onPress} />
        </Space>
      </CellGroup>

      <CellGroup title="危险按钮" bordered={false}>
        <Space style={Styles.box}>
          <Button type="primary" text="primary" onPress={onPress} danger />
          <Button type="hazy" text="hazy" onPress={onPress} danger />
          <Button type="outline" text="outline" onPress={onPress} danger />
          <Button type="ghost" text="ghost" onPress={onPress} danger />
          <Button type="link" text="link" onPress={onPress} danger />
        </Space>
      </CellGroup>

      <CellGroup title="细边框" bordered={false}>
        <Space style={Styles.box}>
          <Button type="outline" text="outline" onPress={onPress} hairline />
          <Button type="ghost" text="ghost" onPress={onPress} hairline />
          <Button
            type="outline"
            text="outline"
            onPress={onPress}
            danger
            hairline
          />
          <Button type="ghost" text="ghost" onPress={onPress} danger hairline />
        </Space>
      </CellGroup>

      <CellGroup title="不可用状态" bordered={false}>
        <Space style={Styles.box}>
          <Button type="primary" text="primary" onPress={onPress} disabled />
          <Button type="hazy" text="hazy" onPress={onPress} disabled />
          <Button type="outline" text="outline" onPress={onPress} disabled />
          <Button type="ghost" text="ghost" onPress={onPress} disabled />
          <Button type="link" text="link" onPress={onPress} disabled />
        </Space>
      </CellGroup>

      <CellGroup title="加载中状态" bordered={false}>
        <Space style={Styles.box} end>
          <Button type="primary" text="primary" onPress={onPress} loading />
          <Button
            type="hazy"
            text="hazy"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
          <Button
            type="outline"
            text="outline"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
          <Button type="ghost" text="ghost" onPress={onPress} loading />
          <Button
            type="link"
            text="link"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
        </Space>
        <Space direction="horizontal" wrap start end>
          <Button type="primary" text="primary" onPress={onPress} loading />
          <Button
            type="hazy"
            text="hazy"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
          <Button
            type="outline"
            text="outline"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
          <Button type="ghost" text="ghost" onPress={onPress} loading />
          <Button
            type="link"
            text="link"
            onPress={onPress}
            loading
            loadingText="自定义文案"
          />
        </Space>
      </CellGroup>

      <CellGroup title="按钮尺寸" bordered={false}>
        <Space style={Styles.box} end>
          <Button
            type="primary"
            size="xl"
            text={`xl ${THEME_VAR.button_xl_height}`}
          />
          <Button
            type="primary"
            size="l"
            text={`l ${THEME_VAR.button_l_height}`}
          />
          <Button
            type="primary"
            size="m"
            text={`m ${THEME_VAR.button_m_height}`}
          />
          <Button
            type="primary"
            size="s"
            text={`s ${THEME_VAR.button_s_height}`}
          />
          <Button
            type="primary"
            size="xs"
            text={`xs ${THEME_VAR.button_xs_height}`}
          />
        </Space>
        <Space direction="horizontal" start end>
          <Button
            type="primary"
            size="xl"
            text={`xl ${THEME_VAR.button_xl_height}`}
          />
          <Button
            type="primary"
            size="l"
            text={`l ${THEME_VAR.button_l_height}`}
          />
          <Button
            type="primary"
            size="m"
            text={`m ${THEME_VAR.button_m_height}`}
          />
          <Button
            type="primary"
            size="s"
            text={`s ${THEME_VAR.button_s_height}`}
          />
          <Button
            type="primary"
            size="xs"
            text={`xs ${THEME_VAR.button_xs_height}`}
          />
        </Space>
      </CellGroup>

      <CellGroup title="按钮圆角" bordered={false}>
        <Space style={Styles.box}>
          <Button text="default" />
          <Button round text="round" />
          <Button square text="square" />
        </Space>
      </CellGroup>

      <CellGroup title="图标按钮" bordered={false}>
        <Space style={Styles.box}>
          <Button
            type="primary"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
          />
          <Button
            type="primary"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
            danger
          />
          <Button
            type="hazy"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
          />
          <Button
            type="outline"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
          />
          <Button
            type="ghost"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
          />
          <Button
            type="link"
            renderLeftIcon={(color, size) => (
              <Icon.ArrowLeftOutline color={color} size={size} />
            )}
            text="ArrowLeftOutline"
          />
        </Space>
      </CellGroup>

      <CellGroup title="自定义颜色" bordered={false}>
        <Space style={Styles.box} end>
          <Button color="#0c6" text="只改变主要色" />
          <Button color="#0c6" type="hazy" text="只改变主要色" />
          <Button color="#0c6" type="outline" text="只改变主要色" />
          <Button color="#0c6" textColor="#f30" text="文字颜色" />
          <Button color="#0c6" type="hazy" text="文字颜色" />
          <Button color="#0c6" type="outline" text="文字颜色" />
        </Space>
      </CellGroup>
    </ScrollView>
  )
}

const Styles = StyleSheet.create({
  box: {
    paddingHorizontal: 12,
  },
})

export default BasicButton
