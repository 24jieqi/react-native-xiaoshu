/**
 * title: 综合用法
 * description: 把各种场景、API 都运用了
 */

import React from 'react'

import SelectorBase from './base'
import SelectorSearch from './search'
import SelectorLabel from './label'
import SelectorComponent from './component'

const BasicSelector: React.FC = () => {
  return (
    <>
      <SelectorBase />

      <SelectorSearch />

      <SelectorLabel />

      <SelectorComponent />
    </>
  )
}

export default BasicSelector
