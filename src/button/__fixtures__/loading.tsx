/**
 * title: 加载中按钮
 * desc: 用于异步操作等待反馈的时候，也可以避免多次提交。
 */

import React, { memo } from 'react'

import { Button, CellGroup, Space } from '@fruits-chain/react-native-xiaoshu'

const ButtonLoading: React.FC = () => {
  return (
    <CellGroup title="加载中按钮">
      <Space tail>
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
      <Space direction="horizontal" head tail wrap>
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
      <Space direction="horizontal" head tail wrap>
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
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonLoading)
