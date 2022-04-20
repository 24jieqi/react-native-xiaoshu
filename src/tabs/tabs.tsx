import React, { useMemo, memo, isValidElement, cloneElement } from 'react'

import { childrenToArray } from '../helpers'
import { useControllableValue } from '../hooks'
import TabBar from '../tab-bar'
import type { TabItem } from '../tab-bar/interface'

import type { TabsProps, TabPaneProps } from './interface'

const parseTabList = (children: React.ReactNode) => {
  return childrenToArray(children)
    .map((node: React.ReactElement<TabPaneProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter(tab => tab)
}

const Tabs: React.FC<TabsProps> = ({ children, ...restProps }) => {
  const [_options, _tabs] = useMemo(() => {
    const tabs = parseTabList(children)
    const options: TabItem[] = tabs.map(t => ({
      value: t.key,
      label: t.tab,
    }))

    return [options, tabs]
  }, [children])

  const [value, onChange] = useControllableValue<string>(restProps, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: _options[0]?.value as string,
  })

  return (
    <>
      <TabBar
        {...restProps}
        backgroundColor="transparent"
        indicator
        divider={false}
        safeAreaInsetBottom={false}
        keyboardShowNotRender={false}
        hidden={false}
        value={value}
        options={_options}
        onChange={onChange}
      />
      {cloneElement(_tabs.filter(t => t.key === value)[0]?.node)}
    </>
  )
}

export default memo<typeof Tabs>(Tabs)
