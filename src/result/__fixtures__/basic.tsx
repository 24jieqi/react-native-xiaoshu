import React from 'react';
import { ScrollView } from 'react-native';

import { Space } from '@fruits-chain/react-native-xiaoshu';

import ResultCustom from './custom';
import ResultIcon from './icon';
import ResultStatus from './status';

const BasicResult: React.FC = () => {
  return (
    <ScrollView>
      <Space tail head>
        <ResultIcon />
        <ResultStatus />
        <ResultCustom />
      </Space>
    </ScrollView>
  );
};

export default BasicResult;
