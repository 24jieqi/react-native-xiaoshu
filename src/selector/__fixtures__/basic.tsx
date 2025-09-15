/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react';

import SelectorBase from './base';
import SelectorComponent from './component';
import SelectorLabel from './label';
import SelectorSearch from './search';

const BasicSelector: React.FC = () => {
  return (
    <>
      <SelectorBase />

      <SelectorSearch />

      <SelectorLabel />

      <SelectorComponent />
    </>
  );
};

export default BasicSelector;
