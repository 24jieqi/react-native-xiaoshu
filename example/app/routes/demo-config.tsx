import React from 'react'
// import type { ViewStyle } from 'react-native'
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import DemoHome from '~/pages/demo/demo'
import DemoFull from '~/pages/demo/full'

import DemoActionSheet from '../../../src/action-sheet/__fixtures__/basic'
import DemoBadge from '../../../src/badge/__fixtures__/basic'
import DemoBlank from '../../../src/blank/__fixtures__/basic'
import DemoButton from '../../../src/button/__fixtures__/basic'
import DemoButtonBar from '../../../src/button-bar/__fixtures__/basic'
import DemoCard from '../../../src/card/__fixtures__/basic'
import DemoCell from '../../../src/cell/__fixtures__/basic'
import DemoCheckbox from '../../../src/checkbox/__fixtures__/basic'
import DemoCollapse from '../../../src/collapse/__fixtures__/basic'
import DemoDatePicker from '../../../src/date-picker/__fixtures__/basic'
import DemoDatePickerView from '../../../src/date-picker-view/__fixtures__/basic'
import DemoDescription from '../../../src/description/__fixtures__/basic'
import DemoDialog from '../../../src/dialog/__fixtures__/basic'
import DemoDivider from '../../../src/divider/__fixtures__/basic'
import DemoDropdown from '../../../src/dropdown/__fixtures__/basic'
import DemoElevatorNav from '../../../src/elevator-nav/__fixtures__/basic'
import DemoEmpty from '../../../src/empty/__fixtures__/basic'
import DemoErrorBoundary from '../../../src/error-boundary/__fixtures__/basic'
import DemoField from '../../../src/field/__fixtures__/basic'
import DemoFlex from '../../../src/flex/__fixtures__/basic'
import DemoFloatingPanel from '../../../src/floating-panel/__fixtures__/basic'
import DemoForm from '../../../src/form/__fixtures__/basic'
import DemoGrid from '../../../src/grid/__fixtures__/basic'
import DemoLoading from '../../../src/loading/__fixtures__/basic'
import DemoNavBar from '../../../src/nav-bar/__fixtures__/basic'
import DemoNavTab from '../../../src/nav-tab/__fixtures__/basic'
import DemoNoticeBar from '../../../src/notice-bar/__fixtures__/basic'
import DemoNotify from '../../../src/notify/__fixtures__/basic'
import DemoNumberInput from '../../../src/number-input/__fixtures__/basic'
import DemoOverlay from '../../../src/overlay/__fixtures__/basic'
import DemoPasswordInput from '../../../src/password-input/__fixtures__/basic'
import DemoPicker from '../../../src/picker/__fixtures__/basic'
import DemoPickerView from '../../../src/picker-view/__fixtures__/basic'
import DemoPopover from '../../../src/popover/__fixtures__/basic'
import DemoPopup from '../../../src/popup/__fixtures__/basic'
import DemoProgress from '../../../src/progress/__fixtures__/basic'
import DemoResult from '../../../src/result/__fixtures__/basic'
import DemoSearch from '../../../src/search/__fixtures__/basic'
import DemoSelector from '../../../src/selector/__fixtures__/basic'
import DemoSidebar from '../../../src/sidebar/__fixtures__/basic'
import DemoSkeleton from '../../../src/skeleton/__fixtures__/basic'
import DemoSpace from '../../../src/space/__fixtures__/basic'
import DemoStepSelector from '../../../src/step-selector/__fixtures__/basic'
import DemoSteps from '../../../src/steps/__fixtures__/basic'
import DemoSwitch from '../../../src/switch/__fixtures__/basic'
import DemoTabBar from '../../../src/tab-bar/__fixtures__/basic'
import DemoTabs from '../../../src/tabs/__fixtures__/basic'
import DemoTag from '../../../src/tag/__fixtures__/basic'
import DemoTextInput from '../../../src/text-input/__fixtures__/basic'
import DemoToast from '../../../src/toast/__fixtures__/basic'
import DemoTree from '../../../src/tree/__fixtures__/basic'
import DemoUploader from '../../../src/uploader/__fixtures__/basic'

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
  // | 'DemoIcon'
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
  | 'DemoCard'
  | 'DemoSkeleton'
  | 'DemoSidebar'
  | 'DemoDescription'
  | 'DemoBlank'
  | 'DemoStepSelector'
  | 'DemoPopover'
  | 'DemoTabs'
  | 'DemoTree'
  | 'DemoFloatingPanel'
  | 'DemoElevatorNav'
  | 'DemoNavTab'

const onScrollBeginDrag = () => {
  Keyboard.dismiss()
}

export const demoConfigs: { path: DemoPaths; Page: any }[] = [
  {
    path: 'DemoHome',
    Page: DemoHome,
  },
  {
    path: 'DemoFull',
    Page: DemoFull,
  },
  {
    path: 'DemoNavBar',
    Page: () => (
      <DemoWrapper>
        <DemoNavBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoLoading',
    Page: () => (
      <DemoWrapper>
        <DemoLoading />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoOverlay',
    Page: () => (
      <DemoWrapper>
        <DemoOverlay />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoButton',
    Page: () => (
      <DemoWrapper>
        <DemoButton />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoBadge',
    Page: () => (
      <DemoWrapper>
        <DemoBadge />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoActionBar',
  //   Page: () => (
  //     <DemoWrapper>
  //       <DemoActionBar />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoPopup',
    Page: () => (
      <DemoWrapper>
        <DemoPopup />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCell',
    Page: () => (
      <DemoWrapper>
        <DemoCell />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoToast',
    Page: () => (
      <DemoWrapper>
        <DemoToast />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoActionSheet',
    Page: () => (
      <DemoWrapper>
        <DemoActionSheet />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNotify',
    Page: () => (
      <DemoWrapper>
        <DemoNotify />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoImage',
  //   Page: () => (
  //     <DemoWrapper style={pageStyle}>
  //       <DemoImage />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoTag',
    Page: () => (
      <DemoWrapper>
        <DemoTag />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDivider',
    Page: () => (
      <DemoWrapper>
        <DemoDivider />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoGrid',
    Page: () => (
      <DemoWrapper>
        <DemoGrid />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSteps',
    Page: () => (
      <DemoWrapper>
        <DemoSteps />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSwitch',
    Page: () => (
      <DemoWrapper>
        <DemoSwitch />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDialog',
    Page: () => (
      <DemoWrapper>
        <DemoDialog />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTextInput',
    Page: () => (
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
    Page: () => (
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
    Page: () => (
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
    Page: () => (
      <DemoWrapper>
        <DemoDropdown />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCheckbox',
    Page: () => (
      <DemoWrapper>
        <DemoCheckbox />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoEmpty',
    Page: () => (
      <DemoWrapper>
        <DemoEmpty />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSelector',
    Page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          onScrollBeginDrag={onScrollBeginDrag}>
          <DemoSelector />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoProgress',
    Page: () => (
      <DemoWrapper>
        <DemoProgress />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCollapse',
    Page: () => (
      <DemoWrapper>
        <DemoCollapse />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoFlex',
    Page: () => (
      <DemoWrapper>
        <DemoFlex />
      </DemoWrapper>
    ),
  },
  // {
  //   path: 'DemoIcon',
  //   Page: () => (
  //     <DemoWrapper>
  //       <DemoIcon />
  //     </DemoWrapper>
  //   ),
  // },
  {
    path: 'DemoResult',
    Page: () => (
      <DemoWrapper>
        <DemoResult />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoErrorBoundary',
    Page: () => (
      <DemoWrapper>
        <DemoErrorBoundary />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNoticeBar',
    Page: () => (
      <DemoWrapper>
        <DemoNoticeBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoForm',
    Page: () => (
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
    Page: () => (
      <DemoWrapper>
        <DemoTabBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoButtonBar',
    Page: () => (
      <DemoWrapper>
        <DemoButtonBar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoUploader',
    Page: () => (
      <DemoWrapper>
        <DemoUploader />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPasswordInput',
    Page: () => (
      <DemoWrapper>
        <DemoPasswordInput />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSearch',
    Page: () => (
      <DemoWrapper>
        <KeyboardAwareScrollView>
          <DemoSearch />
        </KeyboardAwareScrollView>
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPicker',
    Page: () => (
      <DemoWrapper>
        <DemoPicker />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPickerView',
    Page: () => (
      <DemoWrapper>
        <DemoPickerView />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSpace',
    Page: () => (
      <DemoWrapper>
        <DemoSpace />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDatePickerView',
    Page: () => (
      <DemoWrapper>
        <DemoDatePickerView />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDatePicker',
    Page: () => (
      <DemoWrapper>
        <DemoDatePicker />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoCard',
    Page: () => (
      <DemoWrapper>
        <DemoCard />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSkeleton',
    Page: () => (
      <DemoWrapper>
        <DemoSkeleton />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoSidebar',
    Page: () => (
      <DemoWrapper>
        <DemoSidebar />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoDescription',
    Page: () => (
      <DemoWrapper>
        <DemoDescription />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoBlank',
    Page: () => (
      <DemoWrapper>
        <DemoBlank />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoStepSelector',
    Page: () => (
      <DemoWrapper>
        <DemoStepSelector />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoPopover',
    Page: () => (
      <DemoWrapper>
        <DemoPopover />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTabs',
    Page: () => (
      <DemoWrapper>
        <DemoTabs />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoTree',
    Page: () => (
      <DemoWrapper>
        <DemoTree />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoFloatingPanel',
    Page: () => (
      <DemoWrapper>
        <DemoFloatingPanel />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoElevatorNav',
    Page: () => (
      <DemoWrapper>
        <DemoElevatorNav />
      </DemoWrapper>
    ),
  },
  {
    path: 'DemoNavTab',
    Page: () => (
      <DemoWrapper>
        <DemoNavTab />
      </DemoWrapper>
    ),
  },
]
