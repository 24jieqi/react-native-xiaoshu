import isUndefined from 'lodash/isUndefined'

/** 获取默认值 */
export const getDefaultValue = <T>(value: T, defaultValue: T): T => {
  return !isUndefined(value) ? value : defaultValue
}
