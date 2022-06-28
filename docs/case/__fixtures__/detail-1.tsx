/**
 * title: 详情页布局
 * desc: 使用 Card、Description 组件实现各种业务需求
 */

import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import {
  Card,
  Space,
  Description,
  Button,
  ButtonBar,
  Tag,
  Divider,
  Theme,
  Dialog,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'

const CaseDetail1: React.FC = () => {
  const TOKENS = Theme.useThemeTokens()

  return (
    <>
      <ScrollView>
        <Space tail head>
          <Card square title="基本信息">
            <Description.Group colon={false} labelWidth={88}>
              <Description label="配送客户" text="美团优选" bold />
              <Description label="配送数量" text="1" bold />
              <Description label="生产进度" text="0% （0/100）" bold />
              <Description label="生产仓库" text="成都双流大仓" />
              <Description label="计划单号" text="SJ22020022" />
            </Description.Group>
          </Card>

          <Card square title="商品明细">
            <Space>
              {[1, 2, 3].map(item => {
                return (
                  <View
                    key={item}
                    style={{
                      backgroundColor: TOKENS.gray_1,
                      padding: TOKENS.space_3,
                      borderRadius: TOKENS.border_radius_s,
                    }}>
                    <Text
                      style={{
                        fontSize: TOKENS.font_size_7,
                        lineHeight: TOKENS.line_height_3,
                        color: TOKENS.gray_8,
                        marginBottom: TOKENS.space_2,
                      }}>
                      商品名称 商品规格1 商品规格2 商品规格3
                    </Text>

                    <Description.Group size="s">
                      <Description label="单价" text="10元/份" />
                      <Description label="规格要求" text="500g（6粒）/份" />
                      <Description
                        label="包装要求"
                        text="4粒礼盒，大2DEPT塑料盒2个，奉 上好梨圆贴，橡胶圈"
                      />
                      <Description
                        label="品质要求"
                        text="无压伤、无腐烂、无挫伤、单果450 -550g"
                      />

                      <Space gap={TOKENS.space_1}>
                        <Description.Thousand
                          label="预估销量"
                          text={100000}
                          addonAfter={
                            <Button type="outline" size="xs" text="修改" />
                          }
                          render={Description.renderAlignCenter}
                          bold
                        />
                        <Description.Thousand
                          label="实际销量"
                          text={9999}
                          addonAfter={
                            <Button type="outline" size="xs" text="修改" />
                          }
                          render={Description.renderAlignCenter}
                          bold
                        />
                      </Space>
                    </Description.Group>
                  </View>
                )
              })}
            </Space>
          </Card>

          <Card
            square
            title="货款明细"
            extra={
              <Text>
                合计:<Text style={{ color: TOKENS.red_6 }}>19900元</Text>
              </Text>
            }>
            <Space>
              {[1, 2, 3].map(item => {
                return (
                  <View
                    key={item}
                    style={{
                      backgroundColor: TOKENS.gray_1,
                      padding: TOKENS.space_3,
                      borderRadius: TOKENS.border_radius_s,
                    }}>
                    <Text
                      style={{
                        fontSize: TOKENS.font_size_7,
                        lineHeight: TOKENS.line_height_3,
                        color: TOKENS.gray_8,
                      }}>
                      商品名称 商品规格1 商品规格2 商品规格3
                    </Text>
                    <Text
                      style={{
                        fontSize: TOKENS.font_size_4,
                        lineHeight: TOKENS.line_height_1,
                        color: TOKENS.gray_7,
                        marginBottom: TOKENS.space_2,
                      }}>
                      换算单位：1件=15kg
                    </Text>

                    {[1, 2].map((s, sIndex) => {
                      return (
                        <React.Fragment key={s}>
                          <Space direction="horizontal">
                            <Tag color={TOKENS.green_6} type="ghost" size="s">
                              批次
                            </Tag>
                            <Text>PC202107081920</Text>
                          </Space>

                          <Description.Group size="s">
                            <Description label="单价" text="10元/份" />
                            <Description
                              label="规格要求"
                              text="500g（6粒）/份"
                            />
                            <Description
                              label="包装要求"
                              text="4粒礼盒，大2DEPT塑料盒2个，奉 上好梨圆贴，橡胶圈"
                            />
                            <Description
                              label="品质要求"
                              text="无压伤、无腐烂、无挫伤、单果450 -550g"
                            />
                          </Description.Group>

                          {sIndex !== 1 ? (
                            <Divider
                              style={{ marginVertical: TOKENS.space_4 }}
                            />
                          ) : null}
                        </React.Fragment>
                      )
                    })}
                  </View>
                )
              })}
            </Space>
          </Card>
        </Space>
      </ScrollView>

      <ButtonBar
        buttons={[
          {
            text: '提交审核',
            onPress: () => {
              Dialog.confirm({
                title: '提示',
                message: '确定要提交给某人审核？',
              })
                .then(action => {
                  if (action === 'confirm') {
                    const { close } = Toast.loading({
                      message: '提交中...',
                    })

                    setTimeout(() => {
                      Toast.success('已提交')
                      close()
                    }, 600)
                  }
                })
                .catch(() => {})
            },
          },
          {
            text: '取消',
            type: 'hazy',
            onPress: () => {
              Dialog.input({
                title: '取消提交',
                placeholder: '请填写取消原因（30字内）',
                type: 'textarea',
                textInput: {
                  maxLength: 30,
                },
                onPressConfirm: t => {
                  if (!t.trim()) {
                    Toast('请填写取消原因')
                    return false
                  }

                  return new Promise<void>(resolve => {
                    setTimeout(() => {
                      Toast.success('已取消')
                      resolve()
                    }, 600)
                  })
                },
              })
            },
          },
        ]}
      />
    </>
  )
}

export default CaseDetail1
