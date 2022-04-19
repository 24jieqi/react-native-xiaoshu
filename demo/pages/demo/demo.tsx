import React from 'react'
import { ScrollView } from 'react-native'

import { Cell, Card, Blank } from '@fruits-chain/react-native-xiaoshu'

import Layout from '@/layouts/layout'
import type * as Routes from '@/routes'

import FontSize from './font-size'

type DemoProps = {} & Routes.RootStackScreenProps<'DemoHome'>

const navDatas: {
  title: string
  datas: {
    title: string
    name: keyof Routes.RootStackParamList
  }[]
}[] = [
  {
    title: '案例',
    datas: [
      {
        title: 'FullPage',
        name: 'DemoFull',
      },
    ],
  },
  {
    title: '基础组件',
    datas: [
      {
        title: 'Blank',
        name: 'DemoBlank',
      },
      {
        title: 'Button',
        name: 'DemoButton',
      },
      {
        title: 'Cell',
        name: 'DemoCell',
      },
      {
        title: 'Grid',
        name: 'DemoGrid',
      },
      {
        title: 'Icon',
        name: 'DemoIcon',
      },
      {
        title: 'Popup',
        name: 'DemoPopup',
      },
      {
        title: 'Space',
        name: 'DemoSpace',
      },
      {
        title: 'Toast',
        name: 'DemoToast',
      },
    ],
  },
  {
    title: '表单组件',
    datas: [
      {
        title: 'Checkbox',
        name: 'DemoCheckbox',
      },
      {
        title: 'DatePicker',
        name: 'DemoDatePicker',
      },
      {
        title: 'DatePickerView',
        name: 'DemoDatePickerView',
      },
      {
        title: 'Field',
        name: 'DemoField',
      },
      {
        title: 'Form',
        name: 'DemoForm',
      },
      {
        title: 'NumberInput',
        name: 'DemoNumberInput',
      },
      {
        title: 'PasswordInput',
        name: 'DemoPasswordInput',
      },
      {
        title: 'Picker',
        name: 'DemoPicker',
      },
      {
        title: 'PickerView',
        name: 'DemoPickerView',
      },
      {
        title: 'Search',
        name: 'DemoSearch',
      },
      {
        title: 'Selector',
        name: 'DemoSelector',
      },
      {
        title: 'StepSelector',
        name: 'DemoStepSelector',
      },
      {
        title: 'Switch',
        name: 'DemoSwitch',
      },
      {
        title: 'TextInput',
        name: 'DemoTextInput',
      },
    ],
  },
  {
    title: '反馈组件',
    datas: [
      {
        title: 'ActionSheet',
        name: 'DemoActionSheet',
      },
      {
        title: 'Dialog',
        name: 'DemoDialog',
      },
      {
        title: 'Dropdown',
        name: 'DemoDropdown',
      },
      {
        title: 'ErrorBoundary',
        name: 'DemoErrorBoundary',
      },
      {
        title: 'Loading',
        name: 'DemoLoading',
      },
      {
        title: 'Notify',
        name: 'DemoNotify',
      },
      {
        title: 'Overlay',
        name: 'DemoOverlay',
      },
      {
        title: 'Popover',
        name: 'DemoPopover',
      },
      {
        title: 'Progress',
        name: 'DemoProgress',
      },
      {
        title: 'Skeleton',
        name: 'DemoSkeleton',
      },
    ],
  },
  {
    title: '展示组件',
    datas: [
      {
        title: 'Badge',
        name: 'DemoBadge',
      },
      {
        title: 'ButtonBar',
        name: 'DemoButtonBar',
      },
      {
        title: 'Card',
        name: 'DemoCard',
      },
      {
        title: 'Collapse',
        name: 'DemoCollapse',
      },
      {
        title: 'Description',
        name: 'DemoDescription',
      },
      {
        title: 'Divider',
        name: 'DemoDivider',
      },
      {
        title: 'Empty',
        name: 'DemoEmpty',
      },
      {
        title: 'Flex',
        name: 'DemoFlex',
      },
      {
        title: 'Tag',
        name: 'DemoTag',
      },
      {
        title: 'NoticeBar',
        name: 'DemoNoticeBar',
      },
      {
        title: 'Result',
        name: 'DemoResult',
      },
      {
        title: 'TabBar',
        name: 'DemoTabBar',
      },
      {
        title: 'Uploader',
        name: 'DemoUploader',
      },
    ],
  },
  {
    title: '导航组件',
    datas: [
      {
        title: 'NavBar',
        name: 'DemoNavBar',
      },
      {
        title: 'Sidebar',
        name: 'DemoSidebar',
      },
      {
        title: 'Steps',
        name: 'DemoSteps',
      },
    ],
  },
]

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="组件 DEMO">
      <ScrollView>
        <Blank top>
          <Card square size="s" title="不同系统、字体文字粗细有差异">
            <FontSize />
          </Card>
        </Blank>

        {navDatas.map(item => {
          return (
            <Cell.Group key={item.title} title={item.title}>
              {item.datas.map((subitem, index) => {
                return (
                  <Cell
                    key={subitem.name}
                    isLink
                    title={subitem.title}
                    onPress={() => {
                      navigation.navigate(subitem.name)
                    }}
                    divider={index + 1 !== item.datas.length}
                  />
                )
              })}
            </Cell.Group>
          )
        })}
      </ScrollView>
    </Layout.Page>
  )
}

export default Demo
