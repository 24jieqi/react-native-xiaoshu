import React from 'react'
// import type { ViewStyle } from 'react-native'
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import DemoFull from '@/pages/demo/full'
import DemoHome from '@/pages/demo/demo'

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
import DemoSteps from '../../src/steps/__fixtures__/basic'
import DemoDialog from '../../src/dialog/__fixtures__/basic'
import DemoTextInput from '../../src/text-input/__fixtures__/basic'
import DemoNumberInput from '../../src/number-input/__fixtures__/basic'
import DemoField from '../../src/field/__fixtures__/basic'
import DemoDropdown from '../../src/dropdown/__fixtures__/basic'
import DemoCheckbox from '../../src/checkbox/__fixtures__/basic'
import DemoEmpty from '../../src/empty/__fixtures__/basic'
import DemoSelector from '../../src/selector/__fixtures__/basic'
import DemoProgress from '../../src/progress/__fixtures__/basic'
import DemoCollapse from '../../src/collapse/__fixtures__/basic'
import DemoFlex from '../../src/flex/__fixtures__/basic'
import DemoIcon from '../../src/icon/__fixtures__/basic'
import DemoResult from '../../src/result/__fixtures__/basic'
import DemoErrorBoundary from '../../src/error-boundary/__fixtures__/basic'
import DemoNoticeBar from '../../src/notice-bar/__fixtures__/basic'
import DemoForm from '../../src/form/__fixtures__/basic'
import DemoTabBar from '../../src/tab-bar/__fixtures__/basic'
import DemoButtonBar from '../../src/button-bar/__fixtures__/basic'
import DemoUploader from '../../src/uploader/__fixtures__/basic'
import DemoPasswordInput from '../../src/password-input/__fixtures__/basic'
import DemoSearch from '../../src/search/__fixtures__/basic'
import DemoPicker from '../../src/picker/__fixtures__/basic'
import DemoPickerView from '../../src/picker-view/__fixtures__/basic'
import DemoSpace from '../../src/space/__fixtures__/basic'
import DemoDatePickerView from '../../src/date-picker-view/__fixtures__/basic'
import DemoDatePicker from '../../src/date-picker/__fixtures__/basic'
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
  | 'DemoSteps'
  | 'DemoSwitch'
  | 'DemoDialog'
  | 'DemoTextInput'
  | 'DemoNumberInput'
  | 'DemoField'
  | 'DemoDropdown'
  | 'DemoCheckbox'
  | 'DemoEmpty'
  | 'DemoSelector'
  | 'DemoProgress'
  | 'DemoCollapse'
  | 'DemoFlex'
  | 'DemoIcon'
  | 'DemoResult'
  | 'DemoErrorBoundary'
  | 'DemoNoticeBar'
  | 'DemoForm'
  | 'DemoTabBar'
  | 'DemoButtonBar'
  | 'DemoUploader'
  | 'DemoPasswordInput'
  | 'DemoSearch'
  | 'DemoPicker'
  | 'DemoPickerView'
  | 'DemoSpace'
  | 'DemoDatePickerView'
  | 'DemoDatePicker'

const onScrollBeginDrag = () => {
  Keyboard.dismiss()
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
      <DemoWrapper>
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
    path: 'DemoSteps',
    page: () => (
      <DemoWrapper>
        <DemoSteps />
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
  {
    path: 'DemoDialog',
    page: () => (
      <DemoWrapper>
        <DemoDialog />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTextInput',
    page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={onScrollBeginDrag}>
          <DemoTextInput />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNumberInput',
    page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={onScrollBeginDrag}>
          <DemoNumberInput />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoField',
    page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={onScrollBeginDrag}>
          <DemoField />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
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
    path: 'DemoSelector',
    page: () => (
      <DemoWrapper>
        <DemoSelector />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoProgress',
    page: () => (
      <DemoWrapper>
        <DemoProgress />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCollapse',
    page: () => (
      <DemoWrapper>
        <DemoCollapse />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoFlex',
    page: () => (
      <DemoWrapper>
        <DemoFlex />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoIcon',
    page: () => (
      <DemoWrapper>
        <DemoIcon />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoResult',
    page: () => (
      <DemoWrapper>
        <DemoResult />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoErrorBoundary',
    page: () => (
      <DemoWrapper>
        <DemoErrorBoundary />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNoticeBar',
    page: () => (
      <DemoWrapper>
        <DemoNoticeBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoForm',
    page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={onScrollBeginDrag}>
          <DemoForm />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTabBar',
    page: () => (
      <DemoWrapper>
        <DemoTabBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoButtonBar',
    page: () => (
      <DemoWrapper>
        <DemoButtonBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoUploader',
    page: () => (
      <DemoWrapper>
        <DemoUploader />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPasswordInput',
    page: () => (
      <DemoWrapper>
        <DemoPasswordInput />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSearch',
    page: () => (
      <DemoWrapper>
        <DemoSearch />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPicker',
    page: () => (
      <DemoWrapper>
        <DemoPicker />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPickerView',
    page: () => (
      <DemoWrapper>
        <DemoPickerView />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSpace',
    page: () => (
      <DemoWrapper>
        <DemoSpace />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDatePickerView',
    page: () => (
      <DemoWrapper>
        <DemoDatePickerView />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDatePicker',
    page: () => (
      <DemoWrapper>
        <DemoDatePicker />
      </DemoWrapper>
    ),
  },
]
