/**
 * title: 自定义
 * description: 根据自身需求自定义组件。
 */
import React from 'react';
import { Text, View } from 'react-native';

import { Empty, Flex, Space, Theme } from '@fruits-chain/react-native-xiaoshu';

const EmptyCustom = () => {
  const { gray_1 } = Theme.useThemeTokens();

  return (
    <>
      <Space>
        <Empty text="真的没有啦~" />

        <Empty
          text={
            <Flex direction="row" align="center">
              <Text>还没有，请</Text>
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{ color: '#098', marginLeft: 2 }}
                suppressHighlighting={false}
                onPress={() => {
                  console.log('434');
                }}>
                添加元素
              </Text>
            </Flex>
          }
        />
      </Space>

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ height: 500, backgroundColor: gray_1 }}>
        <Empty text="占满剩余空间 full" full />
      </View>
    </>
  );
};

export default EmptyCustom;
