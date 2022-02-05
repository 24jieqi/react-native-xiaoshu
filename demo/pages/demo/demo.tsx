import React from 'react'
import { ScrollView } from 'react-native'

import { Cell, CellGroup } from '@fruits-chain/react-native-xiaoshu'
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
        title: 'NumberInput',
        name: 'DemoNumberInput',
      },
      {
        title: 'PasswordInput',
        name: 'DemoPasswordInput',
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
        title: 'TextInput',
        name: 'DemoTextInput',
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
        title: 'Switch',
        name: 'DemoSwitch',
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
        title: 'Progress',
        name: 'DemoProgress',
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
        title: 'Steps',
        name: 'DemoSteps',
      },
    ],
  },
]

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="DEMO 组件">
      <ScrollView>
        <CellGroup title="文案粗细">
          <FontSize />
        </CellGroup>

        {navDatas.map(item => {
          return (
            <CellGroup key={item.title} title={item.title}>
              {item.datas.map((subitem, index) => {
                return (
                  <Cell
                    key={subitem.name}
                    isLink
                    title={subitem.title}
                    onPress={() => {
                      navigation.navigate(subitem.name)
                    }}
                    bordered={index + 1 !== item.datas.length}
                  />
                )
              })}
            </CellGroup>
          )
        })}

        {/* <Cell
          isLink
          title="ActionBar"
          onPress={() => {
            navigation.navigate('DemoActionBar')
          }}
        /> */}

        {/* <Cell
          isLink
          title="Image"
          onPress={() => {
            navigation.navigate('DemoImage')
          }}
        /> */}

        {/* <Cell
          isLink
          title="Dialog"
          onPress={() => {
            navigation.navigate('DemoDialog')
          }}
        /> */}

        {/* <Cell
          isLink
          title="Field"
          onPress={() => {
            navigation.navigate('DemoField')
          }}
        /> */}
      </ScrollView>
    </Layout.Page>
  )
}

export default Demo
