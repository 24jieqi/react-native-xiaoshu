import React from 'react'
import type { ViewStyle } from 'react-native'
// import { ScrollView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import DemoHome from '@/pages/demo/demo'
import DemoFull from '@/pages/demo/full'

import DemoNavBar from '../../src/nav-bar/demo/basic'
import DemoLoading from '../../src/loading/demo/basic'
import DemoOverlay from '../../src/overlay/demo/basic'
import DemoButton from '../../src/button/demo/basic'
import DemoBadge from '../../src/badge/demo/basic'
// import DemoActionBar from '../../src/action-bar/demo/basic'
import DemoPopup from '../../src/popup/demo/basic'
import DemoCell from '../../src/cell/demo/basic'
import DemoToast from '../../src/toast/demo/basic'
// import DemoActionSheet from '../../src/action-sheet/demo/basic'
import DemoNotify from '../../src/notify/demo/basic'
// import DemoImage from '../../src/image/demo/basic'
import DemoTag from '../../src/tag/demo/basic'
import DemoDivider from '../../src/divider/demo/basic'
import DemoGrid from '../../src/grid/demo/basic'
import DemoSwitch from '../../src/switch/demo/basic'
// import DemoDialog from '../../src/dialog/demo/basic'
import DemoTextInput from '../../src/text-input/demo/basic'
// import DemoField from '../../src/field/demo/basic'
import DemoDropdown from '../../src/dropdown/demo/basic'
import DemoCheckbox from '../../src/checkbox/demo/basic'
import DemoEmpty from '../../src/empty/demo/basic'
import DemoWrapper from './demo-wrapper'

export type DemoPaths =
  | 'DemoHome'
  | 'DemoFull'
  | 'DemoNavBar'
  | 'DemoLoading'
  | 'DemoOverlay'
  | 'DemoButton'
  | 'DemoBadge'
  | 'DemoActionBar'
  | 'DemoPopup'
  | 'DemoCell'
  | 'DemoToast'
  | 'DemoActionSheet'
  | 'DemoNotify'
  | 'DemoImage'
  | 'DemoTag'
  | 'DemoDivider'
  | 'DemoGrid'
  | 'DemoSwitch'
  | 'DemoDialog'
  | 'DemoTextInput'
  | 'DemoField'
  | 'DemoDropdown'
  | 'DemoCheckbox'
  | 'DemoEmpty'

const pageStyle: ViewStyle = {
  flex: 1,
  backgroundColor: '#fff',
}

export const demoConfigs: { path: DemoPaths; page: any }[] = [
  {
    path: 'DemoHome',
    page: DemoHome,
  },
  {
    path: 'DemoFull',
    page: DemoFull,
  },
  {
    path: 'DemoNavBar',
    page: () => (
      <DemoWrapper>
        <DemoNavBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoLoading',
    page: () => (
      <DemoWrapper>
        <DemoLoading />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoOverlay',
    page: () => (
      <DemoWrapper>
        <DemoOverlay />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoButton',
    page: () => (
      <DemoWrapper>
        <DemoButton />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoBadge',
    page: () => (
      <DemoWrapper>
        <DemoBadge />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoActionBar',
  //   page: () => (
  //     <DemoWrapper>
  //       <DemoActionBar />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoPopup',
    page: () => (
      <DemoWrapper>
        <DemoPopup />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCell',
    page: () => (
      <DemoWrapper>
        <DemoCell />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoToast',
    page: () => (
      <DemoWrapper>
        <DemoToast />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoActionSheet',
  //   page: () => (
  //     <DemoWrapper>
  //       <DemoActionSheet />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoNotify',
    page: () => (
      <DemoWrapper>
        <DemoNotify />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoImage',
  //   page: () => (
  //     <DemoWrapper style={pageStyle}>
  //       <DemoImage />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoTag',
    page: () => (
      <DemoWrapper>
        <DemoTag />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDivider',
    page: () => (
      <DemoWrapper style={pageStyle}>
        <DemoDivider />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoGrid',
    page: () => (
      <DemoWrapper>
        <DemoGrid />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSwitch',
    page: () => (
      <DemoWrapper>
        <DemoSwitch />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoDialog',
  //   page: () => (
  //     <DemoWrapper>
  //       <DemoDialog />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoTextInput',
    page: () => (
      <DemoWrapper>
        <DemoTextInput />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoField',
  //   page: () => (
  //     <DemoWrapper>
  //       <KeyboardAwareScrollView>
  //         <DemoField />
  //       </KeyboardAwareScrollView>
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoDropdown',
    page: () => (
      <DemoWrapper>
        <DemoDropdown />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCheckbox',
    page: () => (
      <DemoWrapper>
        <DemoCheckbox />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoEmpty',
    page: () => (
      <DemoWrapper>
        <DemoEmpty />
      </DemoWrapper>
    ),
  },
]
