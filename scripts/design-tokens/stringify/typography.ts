import jsonTypography from '../json/typography/index.json'
import { formatKey, joinCode, log } from '../helper'

log('ing', '开始收集布局变量')

const values: string[] = []

Object.entries(jsonTypography.typography).forEach(([key, value]) => {
  if (/^size\-\d*/.test(key)) {
    values.push(
      `export const font_${formatKey(key).trim()}: number = ${
        value['font-size'].value
      }`,
    )
  }

  if (/^line\-height\-\d*/.test(key)) {
    values.push(
      `export const ${formatKey(key).trim()}: number = ${
        value['line-height'].value
      }`,
    )
  }
})

export default joinCode(values)
