import jsonTypography from '../json/typography/index.json'
import { formatKey, joinCode, log, comments } from '../helper'

log('ing', '开始收集布局变量')

const values: string[] = []

Object.entries(jsonTypography.typography).forEach(([key, value]) => {
  if (/^size\-\d*/.test(key)) {
    const _value = value['font-size'].value
    values.push(comments('字体大小', `${_value}`))
    values.push(
      `export const font_${formatKey(key).trim()}: number = ${_value}`,
    )
  }

  if (/^line\-height\-\d*/.test(key)) {
    const _value = value['line-height'].value
    values.push(comments('行高', `${_value}`))
    values.push(`export const ${formatKey(key).trim()}: number = ${_value}`)
  }
})

export default joinCode(values)
