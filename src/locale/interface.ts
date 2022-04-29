export interface Locale {
  ButtonBar: {
    moreText: string
    labelActionSheetCancelText: string
  }
  DatePickerRangeView: {
    confirmButtonText: string
    resetButtonText: string
    placeholder: [string, string]
    labelStartTime: string
    labelEndTime: string
  }
  DatePickerSingleMethod: {
    confirmButtonText: string
    cancelButtonText: string
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
  Uploader: {
    uploadText: string
  }
  UploaderImage: {
    labelIng: string
    labelFail: string
  }
}

export interface LocaleProviderProps {
  locale?: Locale
}
