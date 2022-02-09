/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useCallback, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Collapse, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const BasicCollapse: React.FC = () => {
  const [value, setValue] = useState(false)

  return (
    <ScrollView>
      <CellGroup title="单元格用法">
        <Collapse
          title="标题11"
          onAnimationEnd={v => {
            console.log('动画结束:title 固定 => ', v)
          }}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse title="标题:没有 header 分割线" headerDivider={false}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="标题:没有 header 和 body 分割线"
          headerDivider={false}
          bodyDivider={false}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="标题12:body 无内边距"
          bodyPadding={false}
          defaultCollapse>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse title="受控:展不开" bodyPadding={false} collapse={false}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="受控:正常"
          bodyPadding={false}
          collapse={value}
          onCollapse={setValue}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          {value ? <View style={{ height: 400 }} /> : null}
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title={
            <View>
              <Text style={{ marginRight: 8 }}>测试案例</Text>
              <Text>测试案例2</Text>
            </View>
          }>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="title文案"
          renderTitle={useCallback((v: boolean) => {
            return (
              <Text>{`不要这样写 useCallback：${v ? '好的' : `\n不好`}`}</Text>
            )
          }, [])}
          renderTitleExtra={useCallback(
            (v: boolean, arrowJSX: React.ReactNode) => {
              return (
                <Space direction="horizontal" align="center" gapVertical={0}>
                  <Text>{v ? '点击收齐' : '点击展开'}</Text>
                  {arrowJSX}
                </Space>
              )
            },
            [],
          )}
          renderBody={useCallback(() => {
            return (
              <>
                <Text style={{ lineHeight: 20 }}>文案：</Text>
                <View style={{ height: 400 }} />
                <Text style={{ lineHeight: 20 }}>文案</Text>
              </>
            )
          }, [])}
          onAnimationEnd={v => {
            console.log('动画结束:title 动态变化 => ', v)
          }}
        />

        <Collapse title="title文案">
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse
          title="自定义标题颜色"
          titleStyle={{ backgroundColor: '#f5f5f5' }}
          titleTextStyle={{
            color: '#f30',
          }}
          iconColor="#690">
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>

        <Collapse title="title文案" bodyStyle={{ backgroundColor: '#f5f5f5' }}>
          <Text style={{ lineHeight: 20 }}>文案</Text>
          <View style={{ height: 20 }} />
          <Text style={{ lineHeight: 20 }}>文案</Text>
        </Collapse>
      </CellGroup>

      <CellGroup title="卡片用法">
        <Space>
          <Collapse title="标题11" type="card">
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="标题:没有 header 分割线"
            type="card"
            headerDivider={false}>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="标题:没有 header 分割线 有 body 分割线"
            type="card"
            headerDivider={false}
            bodyDivider>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="标题12:body 无内边距"
            type="card"
            defaultCollapse
            bodyPadding={false}>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="受控:展不开"
            type="card"
            bodyPadding={false}
            collapse={false}>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="受控:正常"
            type="card"
            bodyPadding={false}
            collapse={value}
            onCollapse={setValue}>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            {value ? <View style={{ height: 400 }} /> : null}
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            type="card"
            title={
              <View>
                <Text style={{ marginRight: 8 }}>测试案例</Text>
                <Text>测试案例2</Text>
              </View>
            }>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="title文案"
            type="card"
            renderTitle={useCallback((v: boolean) => {
              return (
                <Text>{`不要这样写 useCallback：${
                  v ? '好的' : `\n不好\n不好\n`
                }`}</Text>
              )
            }, [])}
            renderTitleExtra={useCallback(
              (v: boolean, arrowJSX: React.ReactNode) => {
                return (
                  <Space
                    direction="horizontal"
                    align="center"
                    justify="center"
                    gapVertical={0}>
                    <Text>{v ? '点击收齐' : '点击展开'}</Text>
                    {arrowJSX}
                  </Space>
                )
              },
              [],
            )}
            renderBody={useCallback(() => {
              return (
                <>
                  <Text style={{ lineHeight: 20 }}>文案：</Text>
                  <View style={{ height: 400 }} />
                  <Text style={{ lineHeight: 20 }}>文案</Text>
                </>
              )
            }, [])}
            onAnimationEnd={v => {
              console.log('动画结束 => ', v)
            }}
          />

          <Collapse title="title文案" type="card">
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="自定义标题颜色"
            type="card"
            titleStyle={{ backgroundColor: '#f5f5f5' }}
            titleTextStyle={{
              color: '#f30',
            }}
            iconColor="#690">
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>

          <Collapse
            title="title文案"
            type="card"
            bodyStyle={{ backgroundColor: '#f5f5f5' }}>
            <Text style={{ lineHeight: 20 }}>文案</Text>
            <View style={{ height: 20 }} />
            <Text style={{ lineHeight: 20 }}>文案</Text>
          </Collapse>
        </Space>
      </CellGroup>
    </ScrollView>
  )
}

export default BasicCollapse
