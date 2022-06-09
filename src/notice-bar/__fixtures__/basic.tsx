/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React from 'react'
import { ScrollView } from 'react-native'
import { NoticeBar, Card, Space } from '@fruits-chain/react-native-xiaoshu'

import {
  VolumeOutline,
  CoordOutline,
  SuccessCircleOutline,
  CrossCircleOutline,
  WarningCircleOutline,
} from '@fruits-chain/icons-react-native'

let timer = 0

const onPressNoticeBar = () => {
  console.log('点击了 => ', timer++)
}

const BasicNoticeBar: React.FC = () => {
  return (
    <ScrollView>
      <Space head tail>
        <Card title="普通样式" square>
          <Space>
            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼"
              onPress={onPressNoticeBar}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              onPress={onPressNoticeBar}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼"
              onPress={onPressNoticeBar}
              bordered
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼"
              onPress={onPressNoticeBar}
              bordered
              square={false}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
              onPressClose={onPressNoticeBar}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              mode="closeable"
              onPressClose={onPressNoticeBar}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
              onPress={onPressNoticeBar}
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              mode="link"
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              wrapable
            />

            <NoticeBar
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              mode="link"
              wrapable
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼，一袋米要给多了，一袋米由我洗嘞，一袋米我洗了那么多泥，和那堆黑瓦，瓦坷垃，颗颗有泥，谁给你一袋米呦，辛辣天森"
              mode="link"
              wrapable
            />
          </Space>
        </Card>

        <Card title="内置状态" square>
          <Space>
            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              status="error"
              bordered
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
              status="error"
              bordered
              square={false}
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
              status="error"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
              status="success"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
              status="primary"
            />
          </Space>
        </Card>

        <Card title="大小" square>
          <Space>
            <NoticeBar
              renderLeftIcon={color => <CoordOutline color={color} size={18} />}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
              status="error"
              bordered
              square={false}
            />
            <NoticeBar
              renderLeftIcon={color => <CoordOutline color={color} size={18} />}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
              status="error"
              bordered
              square={false}
              size="s"
            />
          </Space>
        </Card>

        <Card title="带 icon" square>
          <Space>
            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="closeable"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <VolumeOutline color={color} size={size} />
              )}
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
            />
          </Space>
        </Card>

        <Card title="自定义" square>
          <Space>
            <NoticeBar
              renderLeftIcon={(color, size) => (
                <SuccessCircleOutline color={color} size={size} />
              )}
              color="#000"
              backgroundColor="#EBFFF2"
              iconColor="#24B356"
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <CrossCircleOutline color={color} size={size} />
              )}
              color="#000"
              backgroundColor="#FFEBEC"
              iconColor="#FF3341"
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <WarningCircleOutline color={color} size={size} />
              )}
              color="#000"
              backgroundColor="#FFEFD9"
              iconColor="#FE7A33"
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
            />

            <NoticeBar
              renderLeftIcon={(color, size) => (
                <WarningCircleOutline color={color} size={size} />
              )}
              color="#000"
              backgroundColor="#E6F0FF"
              iconColor="#0065FE"
              message="一袋米要抗几楼，一袋米要抗二楼"
              mode="link"
            />
          </Space>
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicNoticeBar
