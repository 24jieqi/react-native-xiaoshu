/**
 * title: 表单
 * desc: 类似 Antd 桌面端操作
 */

import { DeleteFill, PlusOutline } from '@fruits-chain/icons-react-native'
import React, { useCallback } from 'react'
import { ScrollView, Text } from 'react-native'

import {
  ButtonBar,
  Button,
  Form,
  Field,
  Cell,
  Space,
  Divider,
  Dialog,
  Theme,
} from '@fruits-chain/react-native-xiaoshu'

// App 端使用 react-native-keyboard-aware-scroll-view 代替 ScrollView

const selectOptions = new Array(10)
  .fill(0)
  .map((_, i) => ({ value: i, label: `选项${i}` }))

const CaseForm1: React.FC = () => {
  const TOKENS = Theme.useThemeTokens()
  const [form] = Form.useForm()

  const onFinish = useCallback((value: any) => {
    // eslint-disable-next-line no-console
    console.log(value)
  }, [])

  return (
    <>
      <ScrollView>
        <Form form={form} onFinish={onFinish}>
          <Space head tail>
            <Cell.Group>
              <Form.Item
                name="label"
                rules={[{ required: true, message: '请填写文案' }]}>
                <Field.TextInput
                  required
                  title="文案"
                  placeholder="请输入文案"
                />
              </Form.Item>

              <Form.Item
                name="label2"
                rules={[{ required: true, message: '请填写文案2' }]}>
                <Field.TextInput
                  required
                  title="文案2"
                  placeholder="请输入文案"
                />
              </Form.Item>

              <Form.Item
                name="select"
                rules={[{ required: true, message: '请选择选项' }]}>
                <Field.Selector
                  required
                  title="选项"
                  placeholder="请选择选项"
                  options={selectOptions}
                />
              </Form.Item>

              <Form.Item
                name="time"
                rules={[{ required: true, message: '请选择执行时间' }]}>
                <Field.Date
                  required
                  title="执行时间"
                  placeholder="请选择时间"
                />
              </Form.Item>

              <Form.Item
                name="day"
                rules={[{ required: true, message: '请选择落款日期' }]}>
                <Field.Date
                  required
                  mode="Y-D"
                  title="落款日期"
                  placeholder="请选择日期"
                  divider={false}
                />
              </Form.Item>
            </Cell.Group>

            <Form.List name="commodities">
              {(fields, { add, remove }) => {
                return (
                  <>
                    {fields.map(field => {
                      // 如果已知数据结构，name 的类型可以是 keyof CommodityDataItem，有对象字段提示
                      const buildNamePath = (name: string) => [
                        'commodities',
                        field.name,
                        name,
                      ]
                      const commodityIdNamePath = buildNamePath('commodityId')

                      return (
                        <Form.Item
                          key={field.key}
                          dependencies={[commodityIdNamePath]}>
                          {({ getFieldValue }) => {
                            return (
                              <Cell.Group
                                style={{ backgroundColor: TOKENS.white }}
                                bodyStyle={{ backgroundColor: TOKENS.white }}
                                title={getFieldValue(
                                  buildNamePath('commodityName'),
                                )}
                                extra={
                                  <DeleteFill
                                    color={TOKENS.red_6}
                                    onPress={() => {
                                      Dialog.confirm({
                                        title: '提示',
                                        message: '确定要删除？',
                                        confirmButtonText: '删除',
                                        confirmButtonColor: TOKENS.red_6,
                                      })
                                        .then(action => {
                                          if (action === 'confirm') {
                                            remove(field.name)
                                          }
                                        })
                                        .catch(() => {})
                                    }}
                                  />
                                }>
                                <Text>
                                  换算单位：1
                                  {getFieldValue(buildNamePath('unitTypeName'))}
                                  ={getFieldValue(buildNamePath('conversion'))}
                                  {getFieldValue(
                                    buildNamePath('totalTypeName'),
                                  )}
                                </Text>

                                <Form.Item name={[field.name, 'unitQuantity']}>
                                  <Field.NumberInput
                                    textInputBordered
                                    inputWidth={110}
                                    title="数量上下应该在一行"
                                    placeholder="请输入数量"
                                    limitDecimals={4}
                                    addonAfter={getFieldValue(
                                      buildNamePath('unitTypeName'),
                                    )}
                                    divider={false}
                                  />
                                </Form.Item>

                                <Form.Item name={[field.name, 'totalQuantity']}>
                                  <Field.NumberInput
                                    textInputBordered
                                    inputWidth={110}
                                    title="重量上下应该在一行"
                                    placeholder="请输入重量"
                                    limitDecimals={4}
                                    addonAfter={getFieldValue(
                                      buildNamePath('totalTypeName'),
                                    )}
                                    divider={false}
                                  />
                                </Form.Item>

                                <Form.Item name={[field.name, 'unitPrice']}>
                                  <Field.NumberInput
                                    textInputBordered
                                    inputWidth={110}
                                    title="单价"
                                    placeholder="请输入价格"
                                    limitDecimals={4}
                                    addonAfter={`元/${getFieldValue(
                                      buildNamePath('unitPriceTypeName'),
                                    )}`}
                                    divider={false}
                                  />
                                </Form.Item>

                                <Form.Item
                                  dependencies={[
                                    buildNamePath('unitPrice'),
                                    buildNamePath('totalQuantity'),
                                    buildNamePath('unitQuantity'),
                                  ]}>
                                  {() => {
                                    // 记得使用 number-precision 计算，避免精度问题
                                    return (
                                      <Text style={{ textAlign: 'right' }}>
                                        小计：
                                        <Text>
                                          {getFieldValue(
                                            buildNamePath('unitPriceType'),
                                          ) ===
                                          getFieldValue(
                                            buildNamePath('unitType'),
                                          )
                                            ? getFieldValue(
                                                buildNamePath('unitQuantity'),
                                              ) *
                                              getFieldValue(
                                                buildNamePath('unitPrice'),
                                              )
                                            : getFieldValue(
                                                buildNamePath('totalQuantity'),
                                              ) *
                                              getFieldValue(
                                                buildNamePath('unitPrice'),
                                              )}
                                          元
                                        </Text>
                                      </Text>
                                    )
                                  }}
                                </Form.Item>

                                <Divider />
                              </Cell.Group>
                            )
                          }}
                        </Form.Item>
                      )
                    })}
                    <Button
                      onPress={() => {
                        const _id = new Date().getTime()
                        // 跳转页面后
                        add({
                          commodityName: `商品名称_${_id}`,
                          commodityId: _id,
                          conversion: 80,
                          unitQuantity: 20,
                          unitType: 2,
                          unitTypeName: '件',
                          totalQuantity: 1600,
                          totalType: 3,
                          totalTypeName: 'kg',
                          unitPrice: 10,
                          unitPriceType: 2,
                          unitPriceTypeName: '件',
                        })
                      }}
                      square
                      color="#fff"
                      textColor={TOKENS.brand_6}
                      renderLeftIcon={color => (
                        <PlusOutline color={color} size={TOKENS.font_size_3} />
                      )}>
                      选择商品
                    </Button>
                  </>
                )
              }}
            </Form.List>
          </Space>
        </Form>
      </ScrollView>

      <ButtonBar alone>
        <Button text="保存" onPress={form.submit} />
      </ButtonBar>
    </>
  )
}

export default CaseForm1
