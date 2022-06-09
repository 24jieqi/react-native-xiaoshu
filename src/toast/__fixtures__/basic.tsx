/**
 * title: 综合用法
 * desc: 把各种场景、API 都运用了
 */

import React, { useState, useEffect, useRef } from 'react'
import { View, ScrollView } from 'react-native'

import { Cell, Toast } from '@fruits-chain/react-native-xiaoshu'
import { ArrowLeftOutline } from '@fruits-chain/icons-react-native'

const BasicToast: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const LoadingReturnRef = useRef<any>()

  useEffect(() => {
    if (loading) {
      LoadingReturnRef.current = Toast.loading({
        message: '测试',
        duration: 0,
        forbidPress: true,
      })

      setTimeout(() => {
        setLoading(false)
      }, 3000)
    } else {
      if (LoadingReturnRef.current) {
        LoadingReturnRef.current.close()
      }
    }
  }, [loading])

  return (
    <ScrollView>
      <Cell.Group title="基础用法">
        <Cell
          title="状态控制 loading"
          onPress={() => {
            setLoading(true)
          }}
        />
        <Cell
          title="文字提示:快速移除:失败"
          isLink
          onPress={() => {
            const { close } = Toast.loading('提示内容')

            close()
          }}
        />
        <Cell
          title="文字提示:快速移除"
          isLink
          onPress={() => {
            const { close } = Toast.loading('提示内容')

            setTimeout(() => {
              close()
            }, 0)
          }}
        />
        <Cell
          title="文字提示"
          isLink
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="文字提示:换行"
          isLink
          onPress={() => {
            Toast({
              message: `提示内容\n新的`,
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="加载提示"
          isLink
          onPress={() => {
            Toast.loading({
              message: '加载中...',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="加载提示倒计时"
          isLink
          onPress={() => {
            let d = 3
            const buildMsg = () => `倒计时 ${d} 秒...`

            const ddd = Toast.loading({
              message: buildMsg(),
              forbidPress: true,
              duration: 0,
            })
            const doLoop = () => {
              if (d > 0) {
                ddd.setMessage(buildMsg())

                d -= 1

                setTimeout(() => {
                  doLoop()
                }, 1000)
              } else {
                ddd.close()
              }
            }

            doLoop()
          }}
        />
        <Cell
          title="加载提示2"
          isLink
          onPress={() => {
            Toast({
              type: 'loading',
              loadingType: 'circular',
              message: '加载中...',
              forbidPress: true,
            })
          }}
        />
        <Cell
          title="成功提示"
          isLink
          onPress={() => {
            Toast.success('恭喜你')
          }}
        />
        <Cell
          title="失败提示"
          isLink
          onPress={() => {
            Toast.fail('很抱歉哟')
          }}
        />
        <Cell
          title="自定义图标"
          isLink
          divider={false}
          onPress={() => {
            Toast({
              type: 'icon',
              message: '自定义图标',
              icon: <ArrowLeftOutline size={40} color="#f30" />,
            })
          }}
        />
      </Cell.Group>

      <Cell.Group title="自定义位置">
        <Cell
          title="顶部展示"
          isLink
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'top',
            })
          }}
        />
        <Cell
          title="底部展示"
          isLink
          divider={false}
          onPress={() => {
            Toast({
              message: '提示内容',
              forbidPress: true,
              position: 'bottom',
            })
          }}
        />
      </Cell.Group>

      <View style={{ height: 20 }} />
    </ScrollView>
  )
}

export default BasicToast
