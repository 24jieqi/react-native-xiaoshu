import fsPromises from 'fs/promises'
import path from 'path'

import colorStringify from './stringify/color'
import typographyStringify from './stringify/typography'
import utilsStringify from './stringify/utils'
import { joinCode, log } from './helper'

const dataFile: string[] = [
  `/* eslint-disable @typescript-eslint/no-inferrable-types */`,
  colorStringify,
  typographyStringify,
  utilsStringify,
  '',
]

log('ing', '正在生成文件...')

fsPromises
  .writeFile(
    path.resolve(__dirname, '../../src/theme/tokens.ts'),
    joinCode(dataFile),
  )
  .then(() => {
    log('success', '变量文件已经生成 O(∩_∩)O哈哈~')
  })
  .catch(e => {
    log('error', '变量文件生成失败，(⊙︿⊙)')
    console.error(e)
  })
