import React from 'react';
import { ScrollView } from 'react-native';

import NoticeBarBase from './base';
import NoticeBarCustom from './custom';
import NoticeBarMode from './mode';
import NoticeBarSize from './size';
import NoticeBarStatus from './status';

const BasicNoticeBar: React.FC = () => {
  return (
    <ScrollView>
      <NoticeBarBase />

      <NoticeBarStatus />

      <NoticeBarSize />

      <NoticeBarMode />

      <NoticeBarCustom />
    </ScrollView>
  );
};

export default BasicNoticeBar;
