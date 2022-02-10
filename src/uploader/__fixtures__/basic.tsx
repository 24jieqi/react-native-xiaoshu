/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import type { UploaderValue } from '@fruits-chain/react-native-xiaoshu'
import {
  Card,
  Uploader,
  Icon,
  Toast,
  Dialog,
  Space,
} from '@fruits-chain/react-native-xiaoshu'

const BasicUploader: React.FC = () => {
  const [list1, setList1] = useState<UploaderValue[]>([
    {
      key: new Date().getTime().toString(),
      filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
    },
    {
      key: (new Date().getTime() + 1).toString(),
      filepath: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'error',
    },
  ])

  return (
    <ScrollView>
      <Space head tail>
        <Card title="基础用法" square>
          <Uploader
            list={list1}
            maxCount={5}
            onPressUpload={() => {
              Toast('TODO 实现选择文件')

              const key = new Date().getTime().toString()

              setList1(s =>
                s.concat({
                  key,
                  filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
                  status: 'loading',
                }),
              )

              setTimeout(() => {
                setList1(s =>
                  s.map(item => {
                    if (item.key === key) {
                      item.status = 'done'
                    }
                    return item
                  }),
                )
              }, 3000)
            }}
            onPressDelete={(item, _, list) => {
              Dialog.confirm({
                title: '提示',
                message: '确定要删除？',
              })
                .then(action => {
                  if (action === 'confirm') {
                    setList1(list.filter(img => img.key !== item.key))
                  }
                })
                .catch(() => {})
            }}
            onPressImage={() => {
              Toast('TODO 实现预览文件')
            }}
            onPressError={item => {
              Toast('TODO 实现上传文件')

              setList1(s =>
                s.map(l => {
                  if (l.key === item.key) {
                    l.status = 'loading'
                  }
                  return l
                }),
              )

              setTimeout(() => {
                setList1(s =>
                  s.map(l => {
                    if (l.key === item.key) {
                      l.status = 'error'
                    }
                    return l
                  }),
                )
              }, 2000)
            }}
          />
        </Card>

        <Card title="自定义图片间距" square>
          <Uploader list={list1} imageGap={4} />
        </Card>

        <Card title="自定义文案" square>
          <Uploader list={list1} uploadText="上传视频" />
        </Card>

        <Card title="查看模式" square>
          <Uploader list={list1} showUpload={false} deletable={false} />
        </Card>

        <Card title="上传图标" square>
          <Uploader
            list={list1}
            uploadIcon={<Icon.ArrowUpOutline color="#999" />}
            uploadText="选择"
            imageSize={100}
          />
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicUploader
