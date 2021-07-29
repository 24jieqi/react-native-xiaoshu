import React from 'react'
import type { ViewStyle } from 'react-native'
// import { ScrollView } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import DemoHome from '@/pages/demo/demo'
import DemoFull from '@/pages/demo/full'

import DemoNavBar from '../../src/nav-bar/__fixtures__/basic'
import DemoLoading from '../../src/loading/__fixtures__/basic'
import DemoOverlay from '../../src/overlay/__fixtures__/basic'
import DemoButton from '../../src/button/__fixtures__/basic'
import DemoBadge from '../../src/badge/__fixtures__/basic'
// import DemoActionBar from '../../src/action-bar/__fixtures__/basic'
import DemoPopup from '../../src/popup/__fixtures__/basic'
import DemoCell from '../../src/cell/__fixtures__/basic'
import DemoToast from '../../src/toast/__fixtures__/basic'
import DemoActionSheet from '../../src/action-sheet/__fixtures__/basic'
import DemoNotify from '../../src/notify/__fixtures__/basic'
// import DemoImage from '../../src/image/__fixtures__/basic'
import DemoTag from '../../src/tag/__fixtures__/basic'
import DemoDivider from '../../src/divider/__fixtures__/basic'
import DemoGrid from '../../src/grid/__fixtures__/basic'
import DemoSwitch from '../../src/switch/__fixtures__/basic'
// import DemoDialog from '../../src/dialog/__fixtures__/basic'
import DemoTextInput from '../../src/text-input/__fixtures__/basic'
// import DemoField from '../../src/field/__fixtures__/basic'
import DemoDropdown from '../../src/dropdown/__fixtures__/basic'
import DemoCheckbox from '../../src/checkbox/__fixtures__/basic'
import DemoEmpty from '../../src/empty/__fixtures__/basic'
import DemoSelectPopup from '../../src/select-popup/__fixtures__/basic'
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
  | 'DemoSelectPopup'

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
  {
    path: 'DemoActionSheet',
    page: () => (
      <DemoWrapper>
        <DemoActionSheet />
      </DemoWrapper>
    ),
  },
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
  {
    path: 'DemoSelectPopup',
    page: () => (
      <DemoWrapper>
        <DemoSelectPopup />
      </DemoWrapper>
    ),
  },
]
