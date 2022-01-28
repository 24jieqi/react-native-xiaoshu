import utilsTypography from '../json/utils/index.json'
import { formatKey, joinCode, log, comments } from '../helper'

log('ing', '开始收集工具变量')

const values: string[] = []

Object.entries(utilsTypography.utils).forEach(([key, value]) => {
  if (/^space\-\d*/.test(key)) {
    const { spacer } = value as { spacer: number }
    const _spacer = Math.floor(spacer)
    values.push(comments('间距', `${_spacer}`))
    values.push(`export const ${formatKey(key).trim()}: number = ${_spacer}`)
  }

  if (/^radius\-/.test(key)) {
    const { radius } = value as { radius: number[] }
    const _value = /\max/.test(key) ? 9999 : radius[0]
    values.push(comments('圆角', `${_value}`))
    values.push(
      `export const border_${formatKey(key).trim()}: number = ${_value}`,
    )
  }
})

export default joinCode(values)
