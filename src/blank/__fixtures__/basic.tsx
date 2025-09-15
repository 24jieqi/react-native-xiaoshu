import React from 'react';
import { ScrollView } from 'react-native';

import BasicBlankDirection from './direction';
import BasicBlankSize from './size';

const BasicButtonBar: React.FC = () => {
  return (
    <ScrollView>
      <BasicBlankDirection />
      <BasicBlankSize />
    </ScrollView>
  );
};

export default BasicButtonBar;
