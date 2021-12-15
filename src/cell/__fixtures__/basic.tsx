import React from 'react'
import { Text, ScrollView } from 'react-native'

import {
  Cell,
  CellGroup,
  Icon,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const msg = (t: string) => () => {
  Toast({ message: t, overlay: false, closeOnPress: true })
}

const BasicCell: React.FC = () => {
  return (
    <ScrollView>
      <CellGroup
        title="基础用法"
        textStyle={{
          flex: 1,
          backgroundColor: '#ddd',
        }}
        onPressTitleText={() => {
          console.log('onPressTitleText')
        }}
        extra={<Text>extra</Text>}>
        <Cell
          titleStyle={{ justifyContent: 'center' }}
          title={<Text style={{ color: '#f30' }}>自定义单元格 title</Text>}
          value="内容"
        />

        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        />

        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          isLink
        />

        <Cell required title="单元格" />

        <Cell title="单元格" value="内容" onPress={msg('点什么1')} />

        <Cell title="单元格" value="来一段有趣的内容" textAlign="left" />

        <Cell title="单元格" value="来一段有趣的内容" textAlign="center" />

        <Cell
          title={`单\n元\n格`}
          value="内容"
          onPress={msg('点什么2')}
          isLink
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="垂直布局">
        <Cell vertical title="单元格" value="内容" />

        <Cell required vertical title="单元格" value="large" bordered={false} />
      </CellGroup>

      <CellGroup title="展示图标">
        <Cell
          title="单元格"
          value="内容"
          titleExtra={<Icon.ArrowLeftOutline size={14} />}
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="只设置 value">
        <Cell value="内容" />
        <Cell value="内容 textAlign='center'" textAlign="center" />
        <Cell value="内容 textAlign='left'" textAlign="left" />
        <Cell value="内容" textAlign="left" isLink />
        <Cell value="内容" textAlign="center" isLink bordered={false} />
      </CellGroup>

      <CellGroup title="展示箭头">
        <Cell title="单元格" value="内容" isLink onPress={msg('点什么3')} />

        <Cell title="单元格" value="内容" isLink arrowDirection="left" />

        <Cell title="单元格" value="内容" isLink arrowDirection="up" />

        <Cell title="单元格" value="内容" isLink arrowDirection="down" />

        <Cell
          title="单元格"
          value="内容"
          valueExtra={<Icon.ArrowLeftOutline />}
          bordered={false}
        />
      </CellGroup>

      <CellGroup title="垂直居中">
        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          isLink
          center
        />
        <Cell
          title="单元格"
          value="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
          isLink
        />
        <Cell
          title={`单\n元\n格`}
          value="内容"
          center
          isLink
          bordered={false}
        />
      </CellGroup>

      <CellGroup title={<Text style={{ color: '#690' }}>自定义分组头</Text>}>
        <Cell title="单元格" value="内容" isLink />

        <Cell title="单元格" value="内容" bordered={false} isLink />
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCell
