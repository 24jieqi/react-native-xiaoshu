import type { PropsWithChildren } from 'react'

export interface Locale {
  ButtonBar: {
    moreText: string
    labelActionSheetCancelText: string
  }
  DatePickerRangeView: {
    confirmButtonText: string
    resetButtonText: string
    clearButtonText: string
    placeholder: [string, string]
    labelStartTime: string
    labelEndTime: string
  }
  DatePickerSingleMethod: {
    confirmButtonText: string
    cancelButtonText: string
  }
  DatePickerView: {
    labelYear: string
    labelMonth: string
    labelDay: string
    labelHour: string
    labelMinute: string
    labelSecond: string
  }
  DescriptionDateRange: {
    split: string
  }
  Dialog: {
    confirmButtonText: string
    cancelButtonText: string
  }
  DropdownItem: {
    labelLoadingText: string
  }
  DropdownSelector: {
    confirmButtonText: string
    cancelButtonText: string
    allButtonText: string
    notAllButtonText: string
  }
  Empty: {
    text: string
  }
  FieldSelector: {
    selectorTitle: string
  }
  Picker: {
    confirmButtonText: string
    cancelButtonText: string
  }
  ProgressPage: {
    failMessage: string
    labelRefreshText: string
  }
  Search: {
    searchText: string
  }
  Selector: {
    title: string
    confirmButtonText: string
  }
  Sidebar: {
    labelLoading: string
    labelNoData: string
  }
  StepSelector: {
    title: string
  }
  TextInput: {
    complete: string
  }
  Uploader: {
    uploadText: string
  }
  UploaderImage: {
    labelIng: string
    labelFail: string
  }
}

export interface LocaleProviderProps extends PropsWithChildren<{}> {
  locale?: Locale
}
