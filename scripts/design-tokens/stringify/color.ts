import jsonColor from '../json/color/index.json'
import { formatKey, joinCode, log } from '../helper'

log('ing', '开始收集颜色变量')

const values: string[] = []

Object.entries(jsonColor.color).forEach(([key, value]) => {
  values.push(`export const ${formatKey(key)}: string = '${value.hex}'`)
})

export default joinCode(values)
