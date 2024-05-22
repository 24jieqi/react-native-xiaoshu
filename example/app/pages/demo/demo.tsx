import {
  Cell,
  Card,
  Blank,
  ButtonBar,
} from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { ScrollView } from 'react-native'

import Layout from '~/layouts/layout'
import type * as Routes from '~/routes'

import FontSize from './font-size'

type DemoProps = Routes.RootStackScreenProps<'DemoHome'>

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
        title: 'Blank 留白',
        name: 'DemoBlank',
      },
      {
        title: 'Button 按钮',
        name: 'DemoButton',
      },
      {
        title: 'Cell 单元格',
        name: 'DemoCell',
      },
      {
        title: 'Grid 栅格',
        name: 'DemoGrid',
      },
      // {
      //   title: 'Icon 图标',
      //   name: 'DemoIcon',
      // },
      {
        title: 'Popup 弹出层',
        name: 'DemoPopup',
      },
      {
        title: 'Space 间距',
        name: 'DemoSpace',
      },
      {
        title: 'Toast 轻提示',
        name: 'DemoToast',
      },
    ],
  },
  {
    title: '表单组件',
    datas: [
      {
        title: 'Checkbox 复选框',
        name: 'DemoCheckbox',
      },
      {
        title: 'DatePicker 时间选择器',
        name: 'DemoDatePicker',
      },
      {
        title: 'DatePickerView 时间选择器视图',
        name: 'DemoDatePickerView',
      },
      {
        title: 'Field 输入项',
        name: 'DemoField',
      },
      {
        title: 'Form 表单',
        name: 'DemoForm',
      },
      {
        title: 'NumberInput 数字输入',
        name: 'DemoNumberInput',
      },
      {
        title: 'PasswordInput 密码输入',
        name: 'DemoPasswordInput',
      },
      {
        title: 'Picker 选择器',
        name: 'DemoPicker',
      },
      {
        title: 'PickerView 选择器视图',
        name: 'DemoPickerView',
      },
      {
        title: 'Search 搜索',
        name: 'DemoSearch',
      },
      {
        title: 'Selector 选择器',
        name: 'DemoSelector',
      },
      {
        title: 'StepSelector 步骤选择器',
        name: 'DemoStepSelector',
      },
      {
        title: 'Switch 开关',
        name: 'DemoSwitch',
      },
      {
        title: 'TextInput 输入框',
        name: 'DemoTextInput',
      },
      {
        title: 'Tree 树形控件',
        name: 'DemoTree',
      },
    ],
  },
  {
    title: '反馈组件',
    datas: [
      {
        title: 'ActionSheet 动作面板',
        name: 'DemoActionSheet',
      },
      {
        title: 'Dialog 对话框',
        name: 'DemoDialog',
      },
      {
        title: 'Dropdown 下拉菜单',
        name: 'DemoDropdown',
      },
      {
        title: 'ErrorBoundary 错误捕获',
        name: 'DemoErrorBoundary',
      },
      {
        title: 'FloatingPanel 浮动面板',
        name: 'DemoFloatingPanel',
      },
      {
        title: 'Loading 加载',
        name: 'DemoLoading',
      },
      {
        title: 'Notify 消息提示',
        name: 'DemoNotify',
      },
      {
        title: 'Overlay 遮罩层',
        name: 'DemoOverlay',
      },
      {
        title: 'Popover 气泡卡片',
        name: 'DemoPopover',
      },
      {
        title: 'Progress 进度条',
        name: 'DemoProgress',
      },
      {
        title: 'Skeleton 骨架屏',
        name: 'DemoSkeleton',
      },
    ],
  },
  {
    title: '展示组件',
    datas: [
      {
        title: 'Badge 徽标',
        name: 'DemoBadge',
      },
      {
        title: 'ButtonBar 按钮组',
        name: 'DemoButtonBar',
      },
      {
        title: 'Card 卡片',
        name: 'DemoCard',
      },
      {
        title: 'Collapse 折叠板',
        name: 'DemoCollapse',
      },
      {
        title: 'Description 描述列表',
        name: 'DemoDescription',
      },
      {
        title: 'Divider 分割线',
        name: 'DemoDivider',
      },
      {
        title: 'Empty 空元素',
        name: 'DemoEmpty',
      },
      {
        title: 'Flex 布局',
        name: 'DemoFlex',
      },
      {
        title: 'NoticeBar 通知栏',
        name: 'DemoNoticeBar',
      },
      {
        title: 'Result 结果',
        name: 'DemoResult',
      },
      {
        title: 'TabBar 标签栏',
        name: 'DemoTabBar',
      },
      {
        title: 'Tabs 标签页',
        name: 'DemoTabs',
      },
      {
        title: 'Tag 标签',
        name: 'DemoTag',
      },
      {
        title: 'Uploader 文件上传',
        name: 'DemoUploader',
      },
    ],
  },
  {
    title: '导航组件',
    datas: [
      {
        title: 'ElevatorNav 电梯导航',
        name: 'DemoElevatorNav',
      },
      {
        title: 'NavBar 导航栏',
        name: 'DemoNavBar',
      },
      {
        title: 'NavTab 导航标签栏',
        name: 'DemoNavTab',
      },
      {
        title: 'Sidebar 侧边导航',
        name: 'DemoSidebar',
      },
      {
        title: 'Steps 步骤条',
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
                      navigation.navigate(subitem.name as any)
                    }}
                    divider={index + 1 !== item.datas.length}
                  />
                )
              })}
            </Cell.Group>
          )
        })}

        <ButtonBar divider={false} />
      </ScrollView>
    </Layout.Page>
  )
}

export default Demo
