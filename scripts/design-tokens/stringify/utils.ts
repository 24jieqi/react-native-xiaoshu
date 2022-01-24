import utilsTypography from '../json/utils/index.json'
import { formatKey, joinCode, log } from '../helper'

log('ing', '开始收集工具变量')

const values: string[] = []

Object.entries(utilsTypography.utils).forEach(([key, value]) => {
  if (/^space\-\d*/.test(key)) {
    const { spacer } = value as { spacer: number }
    values.push(
      `export const ${formatKey(key).trim()}: number = ${Math.floor(spacer)}`,
    )
  }

  if (/^radius\-/.test(key)) {
    const { radius } = value as { radius: number[] }
    values.push(
      `export const border_${formatKey(key).trim()}: number = ${
        /\max/.test(key) ? 9999 : radius[0]
      }`,
    )
  }
})

export default joinCode(values)
