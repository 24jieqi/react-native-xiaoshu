/**
 * title: 选项按钮
 * description: 简化版按钮，适合用于选择场景，和 Checkbox 组件有相似的作用。
 */

import React, { memo } from 'react'

import {
  Button,
  Card,
  Space,
  Divider,
} from '@fruits-chain/react-native-xiaoshu'
import { ArrowDownOutline } from '@fruits-chain/icons-react-native'

const onPress = () => {
  console.log('点击按钮')
}

const ButtonOption: React.FC = () => {
  return (
    <Card title="选项按钮" square>
      <Space>
        <Space>
          <Button.Option text="Option" onPress={onPress} />
          <Button.Option text="Option" onPress={onPress} active />
          <Button.Option
            text="Option:outline"
            type="outline"
            onPress={onPress}
          />
          <Button.Option
            text="Option:outline"
            type="outline"
            onPress={onPress}
            active
          />
          <Button.Option
            text="Option:white:边框颜色是白色的outline"
            type="white"
            onPress={onPress}
          />
          <Button.Option
            text="Option:white:边框颜色是白色的outline"
            type="white"
            onPress={onPress}
            active
          />
        </Space>

        <Divider>·</Divider>

        <Space>
          <Button.Option text="大小:xs" size="xs" onPress={onPress} />
          <Button.Option text="大小:s:默认" size="s" onPress={onPress} active />
          <Button.Option text="大小:m" size="m" onPress={onPress} />
          <Button.Option text="大小:l" size="l" onPress={onPress} active />
          <Button.Option text="大小:xl" size="xl" onPress={onPress} />
        </Space>

        <Divider>·</Divider>

        <Space direction="horizontal">
          <Button.Option text="最小" onPress={onPress} />
          <Button.Option text="宽度" onPress={onPress} />
          <Button.Option text="最小" type="outline" onPress={onPress} />
          <Button.Option text="宽度" type="outline" onPress={onPress} />
        </Space>

        <Space direction="horizontal">
          <Button.Option text="最小" onPress={onPress} disabled />
          <Button.Option text="宽度" onPress={onPress} disabled active />
          <Button.Option
            text="宽度"
            onPress={onPress}
            disabled
            active
            activeHighlight={false}
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option
            text="最小"
            type="outline"
            onPress={onPress}
            disabled
          />
          <Button.Option
            text="宽度"
            type="outline"
            onPress={onPress}
            disabled
            active
          />
          <Button.Option
            text="宽度"
            type="outline"
            onPress={onPress}
            disabled
            active
            activeHighlight={false}
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option text="最小" type="outline" onPress={onPress} round />
          <Button.Option
            text="宽度"
            type="outline"
            onPress={onPress}
            round
            active
          />
          <Button.Option
            text="宽度"
            type="outline"
            onPress={onPress}
            round
            active
            activeHighlight={false}
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option text="激活状态" onPress={onPress} active />
          <Button.Option
            text="激活不高亮"
            onPress={onPress}
            active
            activeHighlight={false}
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option
            text="激活状态:outline"
            type="outline"
            onPress={onPress}
            active
          />
          <Button.Option
            text="激活不高亮:outline"
            type="outline"
            onPress={onPress}
            active
            activeHighlight={false}
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option text="Option" onPress={onPress} badge={1} active />
          <Button.Option
            text="Option"
            onPress={onPress}
            badge={1}
            active
            activeHighlight={false}
          />
          <Button.Option
            text="06-07"
            badge={<ArrowDownOutline size={14} color="#8C9199" />}
          />
          <Button.Option
            text="06-07"
            badge={<ArrowDownOutline size={14} color="#8C9199" />}
            active
          />
        </Space>

        <Space direction="horizontal">
          <Button.Option
            text="Option"
            type="outline"
            onPress={onPress}
            badge={1}
            active
          />
          <Button.Option
            text="Option"
            type="outline"
            onPress={onPress}
            badge={1}
            active
            activeHighlight={false}
          />
          <Button.Option
            text="06-07"
            type="outline"
            badge={<ArrowDownOutline size={14} color="#8C9199" />}
          />
          <Button.Option
            text="06-07"
            type="outline"
            badge={<ArrowDownOutline size={14} color="#8C9199" />}
            active
          />
        </Space>
      </Space>
    </Card>
  )
}

export default memo(ButtonOption)
