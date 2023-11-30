/**
 * title: 加载中按钮
 * desc: 用于异步操作等待反馈的时候，也可以避免多次提交。
 */

import React, { memo, useEffect, useRef } from 'react'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'
import { DoubleArrowClockwiseOutline } from '@fruits-chain/icons-react-native'
import { Animated, ColorValue } from 'react-native'

const CustomLoading = ({
  size,
  color,
}: {
  size: number
  color: ColorValue
}) => {
  const spin = useRef(new Animated.Value(0))

  useEffect(() => {
    let stop = false
    const action = Animated.timing(spin.current, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    })
    const loop = () => {
      if (stop) {
        return
      }

      action.start(({ finished }) => {
        if (finished) {
          action.reset()
          loop()
        }
      })
    }

    loop()

    return () => {
      stop = true
      action.stop()
    }
  }, [])

  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        alignContent: 'center',
        justifyContent: 'center',
        transform: [
          {
            rotateZ: spin.current.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
      }}>
      <DoubleArrowClockwiseOutline size={size} color={color} />
    </Animated.View>
  )
}

const ButtonLoading: React.FC = () => {
  return (
    <Card title="加载中按钮" square>
      <Space>
        <Space>
          <Button type="primary" text="primary" loading />
          <Button type="hazy" text="hazy" loading loadingText="自定义文案" />
          <Button
            type="outline"
            text="outline"
            loading
            loadingText="自定义文案"
          />
          <Button type="ghost" text="ghost" loading />
          <Button type="link" text="link" loading loadingText="自定义文案" />
        </Space>

        <Divider />

        <Space direction="horizontal" wrap>
          <Button type="primary" text="primary" loading />
          <Button type="hazy" text="hazy" loading loadingText="自定义文案" />
          <Button
            type="outline"
            text="outline"
            loading
            loadingText="自定义文案"
          />
          <Button type="ghost" text="ghost" loading />
          <Button type="link" text="link" loading loadingText="自定义文案" />
        </Space>

        <Space direction="horizontal" wrap>
          <Button type="primary" text="primary" size="xl" loading />
          <Button
            type="hazy"
            text="hazy"
            size="l"
            loading
            loadingText="自定义文案"
          />
          <Button
            type="outline"
            text="outline"
            size="m"
            loading
            loadingText="自定义文案"
          />
          <Button type="ghost" text="ghost" size="s" loading />
          <Button
            type="link"
            text="link"
            size="xs"
            loading
            loadingText="自定义文案"
          />
          <Button
            type="link"
            text="link"
            size="xs"
            loading
            loadingIcon={<CustomLoading size={20} color="#098" />}
            loadingText="自定义图标"
          />
          <Button
            type="link"
            text="link"
            size="xs"
            loading
            loadingIcon={(size, color) => (
              <CustomLoading size={size} color={color} />
            )}
            loadingText="自定义图标2"
          />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonLoading)
