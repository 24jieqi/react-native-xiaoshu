/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React, { useState } from 'react'
import { ScrollView } from 'react-native'

import type { UploaderValue } from '@fruits-chain/react-native-xiaoshu'
import {
  Card,
  Uploader,
  Toast,
  Dialog,
  Space,
} from '@fruits-chain/react-native-xiaoshu'
import {
  ArrowUpOutline,
  ArrowDownOutline,
  CrossFill,
} from '@fruits-chain/icons-react-native'

const BasicUploader: React.FC = () => {
  const [list1, setList1] = useState<UploaderValue[]>([
    {
      key: new Date().getTime().toString(),
      filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
      deletable: false,
    },
    {
      key: (new Date().getTime() + 1).toString(),
      filepath: 'https://img.yzcdn.cn/vant/tree.jpg',
      status: 'error',
    },
  ])
  const [list2, setList2] = useState<UploaderValue[]>(
    new Array(10).fill(0).map((_, index) => {
      if (index === 0) {
        return {
          key: new Date().getTime().toString(),
          filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
          deletable: false,
        }
      }
      return null
    }),
  )

  return (
    <ScrollView>
      <Space head tail>
        <Card title="基础用法" square>
          <Uploader
            list={list1}
            maxCount={10}
            onPressUpload={() => {
              Toast('TODO 实现选择文件')

              const key = new Date().getTime().toString()

              setList1(s => [
                ...s,
                {
                  key,
                  filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
                  status: 'loading',
                },
              ])

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
          <Uploader list={list1} colGap={4} />
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
            uploadIcon={<ArrowUpOutline color="#999" />}
            uploadText="选择"
            colCount={6}
          />
        </Card>

        <Card title="固定上传个数" square>
          <Uploader.Regular
            list={list2}
            count={list2.length}
            onPressDelete={(_, index) => {
              Dialog.confirm({
                title: '提示',
                message: '确定要删除？',
              })
                .then(action => {
                  if (action === 'confirm') {
                    setList2(s => {
                      const ns = [...s]
                      ns[index] = undefined

                      return ns
                    })
                  }
                })
                .catch(() => {})
            }}
            onPressUpload={index => {
              Toast('TODO 实现选择文件')

              const key = new Date().getTime().toString()

              setList2(s => {
                const ns = [...s]

                ns[index] = {
                  key,
                  filepath: 'https://img.yzcdn.cn/vant/leaf.jpg',
                  status: 'loading',
                }

                return ns
              })

              setTimeout(() => {
                setList2(s =>
                  s.map(item => {
                    if (item?.key === key) {
                      item.status = 'done'
                    }
                    return item
                  }),
                )
              }, 3000)
            }}
          />
        </Card>

        <Card title="固定上传个数" square>
          <Uploader.Regular
            list={list2}
            colCount={3}
            count={[
              null,
              { text: '正面某个照片' },
              null,
              { icon: <ArrowDownOutline /> },
              null,
              { icon: <CrossFill />, text: '侧面某个部件' },
            ]}
          />
        </Card>
      </Space>
    </ScrollView>
  )
}

export default BasicUploader
