/**
 * title: 子文案
 * description: 通过 `subtext` 设置更多描述。
 */

import React, { memo } from 'react'
import { PlusOutline } from '@fruits-chain/icons-react-native'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'

const onPress = () => {
  console.log('点击按钮 => ', new Date().getTime())
}

const ButtonSubtext: React.FC = () => {
  return (
    <Card title="子文案" square>
      <Space>
        <Space>
          <Button
            size="xl"
            type="primary"
            text="主要文案"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
            renderLeftIcon={color => <PlusOutline color={color} size={16} />}
          />
          <Button
            loading
            type="primary"
            text="主要文案"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
            renderLeftIcon={color => <PlusOutline color={color} size={16} />}
          />
          <Button
            disabled
            type="primary"
            text="主要文案&disabled"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
            renderLeftIcon={color => <PlusOutline color={color} size={16} />}
          />
          <Button
            type="hazy"
            text="hazy"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
            onPressDebounceWait={300}
          />
          <Button
            type="outline"
            text="outline"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="ghost"
            text="ghost"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="link"
            text="link"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
        </Space>

        <Divider>·</Divider>

        <Space direction="horizontal" wrap>
          <Button
            type="primary"
            text="primary"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="hazy"
            text="hazy"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="outline"
            text="outline"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="ghost"
            text="ghost"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
          <Button
            type="link"
            text="link"
            subtext="更多描述内容，哈哈哈"
            onPress={onPress}
          />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonSubtext)
