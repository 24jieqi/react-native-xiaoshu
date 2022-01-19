import type {
  PickerOptionType,
  PickerValue,
  PickerOptionCascade,
  PickerOption,
  Column,
} from '../interface'
import { isDef } from '../../helpers'

/** 构建当前的值的集合 */
export const buildValues = (
  dataType: PickerOptionType,
  value: PickerValue | PickerValue[],
) =>
  isDef(value)
    ? dataType === 'single'
      ? [value as PickerValue]
      : (value as PickerValue[])
    : []

/** 把联级选择的所有子级找到 */
export const findNextAllColumns = (column: PickerOptionCascade[]) => {
  const options: PickerOption[][] = []
  const values: PickerValue[] = []

  const findNext = (c: PickerOptionCascade[]) => {
    if (c.length) {
      options.push(c)
      values.push(c[0].value)

      const cc = c[0].children || []

      findNext(cc)
    }
  }

  findNext(column)

  return {
    options,
    values,
  }
}

/** 通过已有值找到联级选择的所有子级找到 */
export const findAllColumnsByValues = (
  column: PickerOptionCascade[],
  values: PickerValue[],
) => {
  const options: PickerOption[][] = []

  let currentColumn = column

  values.forEach(value => {
    options.push(currentColumn)

    const nextIndex = currentColumn.findIndex(item => item.value === value)

    currentColumn = currentColumn[nextIndex]?.children || []
  })

  return options
}

/** 构建选中的值 */
export const buildSelectedValue = (
  values: PickerValue[],
  options: PickerOption[][],
  dataType: PickerOptionType,
): [PickerValue | PickerValue[], Column | Column[]] => {
  const selectedColumns = values.map((v, index) => {
    const vIndex = options[index].findIndex(o => o.value === v)

    return options[index][vIndex]
  })

  return [
    dataType === 'single' ? values[0] : values,
    dataType === 'single' ? selectedColumns[0] : selectedColumns,
  ]
}
