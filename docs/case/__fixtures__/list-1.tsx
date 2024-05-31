/**
 * title: 卡片列表
 * desc: 使用 Card 组件实现各种业务需求
 */

import { PlusOutline } from '@fruits-chain/icons-react-native'
import React, { useMemo } from 'react'
import { ScrollView, Text } from 'react-native'

import {
  Blank,
  Card,
  Tag,
  Description,
  ButtonBar,
  Button,
  Theme,
} from '@fruits-chain/react-native-xiaoshu'

const CaseList1: React.FC = () => {
  const TOKENS = Theme.useThemeTokens()

  // 状态文案统一管理
  // 这里仅做演示
  const STATUS_STYLE_MAP = useMemo(
    () => ({
      a: {
        color: TOKENS.brand_6,
        fontSize: TOKENS.font_size_4,
      },
      b: {
        color: TOKENS.red_6,
        fontSize: TOKENS.font_size_4,
      },
    }),
    [TOKENS.brand_6, TOKENS.font_size_4, TOKENS.red_6],
  )

  // Tag、状态颜色结合业务系统统一维护
  // 这里仅做演示

  return (
    <>
      <ScrollView>
        <Blank top bottom size="s">
          <Card
            size="s"
            title="备货生产"
            titleLeftExtra={<Tag color={TOKENS.yellow_6}>原料</Tag>}
            extra={<Text style={STATUS_STYLE_MAP.a}>待提交</Text>}
            footer="提交人：李默 2022-02-02 22:22">
            <Description.Group colon={false} labelWidth={88}>
              <Description label="配送客户" text="美团优选" bold />
              <Description label="配送数量" text="1" bold />
              <Description label="生产进度" text="0% （0/100）" bold />
              <Description label="生产仓库" text="成都双流大仓" />
              <Description label="计划单号" text="SJ22020022" />
            </Description.Group>
          </Card>
        </Blank>

        <Blank bottom size="s">
          <Card
            size="s"
            title="备货生产"
            titleLeftExtra={<Tag color={TOKENS.red_1}>辅料</Tag>}
            extra={<Text style={STATUS_STYLE_MAP.b}>已拒绝</Text>}>
            <Description.Group colon={false} labelWidth={88}>
              <Description label="配送客户" text="美团优选" bold />
              <Description label="配送数量" text="1" bold />
              <Description label="生产进度" text="1% （1/100）" bold />
              <Description label="生产仓库" text="成都双流大仓" />
              <Description label="计划单号" text="SJ22020021" />
            </Description.Group>
          </Card>
        </Blank>

        <Blank bottom size="s">
          <Card
            size="s"
            title="备货生产"
            titleLeftExtra={<Tag color={TOKENS.red_1}>辅料</Tag>}
            extra={<Text style={STATUS_STYLE_MAP.b}>已拒绝</Text>}>
            <Description.Group colon={false} labelWidth={88}>
              <Description label="配送客户" text="美团优选" bold />
              <Description label="配送数量" text="1" bold />
              <Description label="生产进度" text="1% （1/100）" bold />
              <Description label="生产仓库" text="成都双流大仓" />
              <Description label="计划单号" text="SJ22020021" />
            </Description.Group>
          </Card>
        </Blank>

        <Blank bottom size="s">
          <Card
            size="s"
            title="备货生产"
            titleLeftExtra={<Tag color={TOKENS.red_1}>辅料</Tag>}
            extra={<Text style={STATUS_STYLE_MAP.b}>已拒绝</Text>}>
            <Description.Group colon={false} labelWidth={88}>
              <Description label="配送客户" text="美团优选" bold />
              <Description label="配送数量" text="1" bold />
              <Description label="生产进度" text="1% （1/100）" bold />
              <Description label="生产仓库" text="成都双流大仓" />
              <Description label="计划单号" text="SJ22020021" />
            </Description.Group>
          </Card>
        </Blank>
      </ScrollView>

      <ButtonBar alone blankSize="s">
        <Button
          renderLeftIcon={(color, size) => (
            <PlusOutline color={color} size={size} />
          )}
          text="新增某个数据"
        />
      </ButtonBar>
    </>
  )
}

export default CaseList1
