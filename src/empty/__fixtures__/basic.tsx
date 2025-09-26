import React from 'react';
import { ScrollView } from 'react-native';

import EmptyBase from './base';
import EmptyCustom from './custom';
import EmptyIcon from './icon';

const BasicTag: React.FC = () => {
  return (
    <ScrollView>
      <EmptyBase />
      <EmptyIcon />
      <EmptyCustom />
    </ScrollView>
  );
};

export default BasicTag;
