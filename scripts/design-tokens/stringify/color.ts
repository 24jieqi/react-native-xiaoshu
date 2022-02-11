import jsonColor from '../json/color/index.json'
import { formatKey, joinCode, log, comments } from '../helper'

log('ing', '开始收集颜色变量')

const values: string[] = []

Object.entries(jsonColor.color).forEach(([key, value]) => {
  if (/^opacity\-\d*/.test(key)) {
    const rgba = value.rgba.match(/\d+(\.\d+)?/g)
    if (rgba && rgba.length === 4) {
      const _value = Math.floor(+rgba[3]) / 100
      values.push(comments('透明度', `${_value}`))
      values.push(`export const ${formatKey(key)}: number = ${_value}`)
    }
  } else {
    values.push(comments('色彩', `'${value.hex}'`))
    values.push(`export const ${formatKey(key)}: string = '${value.hex}'`)
  }
})

export default joinCode(values)
