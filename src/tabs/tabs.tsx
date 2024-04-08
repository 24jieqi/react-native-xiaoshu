import React, { useMemo, memo, isValidElement } from 'react'

import Divider from '../divider'
import { childrenToArray } from '../helpers'
import { useControllableValue } from '../hooks'
import TabBar from '../tab-bar'
import type { TabItem } from '../tab-bar/interface'

import type { TabsProps, TabPaneProps } from './interface'
import TabView from './tab-view'

const parseTabList = (children: React.ReactNode) => {
  return childrenToArray(children)
    .map((node: React.ReactElement<TabPaneProps>) => {
      if (isValidElement(node)) {
        const key = node.key !== undefined ? String(node.key) : undefined
        return {
          // @ts-ignore
          key,
          ...node.props,
          node,
        }
      }

      return null
    })
    .filter(tab => tab)
}

const Tabs: React.FC<TabsProps> = ({
  children,
  tabBarStyle,
  tabBarHeight,
  tabBarBackgroundColor,
  divider,
  dividerColor,
  ...restProps
}) => {
  const [_options, _tabs] = useMemo(() => {
    const tabs = parseTabList(children)
    const options: TabItem<string>[] = tabs.map(t => ({
      value: t!.key,
      label: t!.tab,
      badge: t!.badge,
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
        style={tabBarStyle}
        height={tabBarHeight}
        backgroundColor={tabBarBackgroundColor}
        indicator
        divider={false}
        safeAreaInsetBottom={false}
        keyboardShowNotRender={false}
        hidden={false}
        value={value}
        options={_options}
        onChange={onChange}
      />

      {divider ? <Divider color={dividerColor} /> : null}

      {_tabs.map(t => {
        return (
          <TabView
            key={t!.key}
            lazyRender={t!.node.props.lazyRender}
            active={t!.key === value}>
            {t!.node}
          </TabView>
        )
      })}
    </>
  )
}

export default memo(Tabs)
