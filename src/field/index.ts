import FieldButtonOption from './field-button-option'
import FieldCheckbox from './field-checkbox'
import FieldDate from './field-date'
import FieldDateRange from './field-date-range'
import FieldNumberInput from './field-number-input'
import FieldPasswordInput from './field-password'
import FieldSelector from './field-selector'
import FieldSwitch from './field-switch'
import FieldText from './field-text'
import FieldTextInput from './field-text-input'
import { varCreator } from './style'

export default {
  varCreator,
  Checkbox: FieldCheckbox,
  Date: FieldDate,
  DateRange: FieldDateRange,
  NumberInput: FieldNumberInput,
  Password: FieldPasswordInput,
  Selector: FieldSelector,
  Switch: FieldSwitch,
  Text: FieldText,
  TextInput: FieldTextInput,
  ButtonOption: FieldButtonOption,
}
