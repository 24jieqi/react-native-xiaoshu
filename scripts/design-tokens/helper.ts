import { green, cyan, red } from 'colors/safe'

const buildMsg = (t: string) => `「Design Tokens」${t}`

export const log = (type: 'ing' | 'error' | 'success', m: string) => {
  switch (type) {
    case 'ing':
      console.log(cyan(buildMsg(m)))
      break

    case 'error':
      console.log(red(buildMsg(m)))
      break

    case 'success':
      console.log(green(buildMsg(m)))
      break

    default:
      break
  }
}

export const formatKey = (k: string) => k.replace(/\-/g, '_')

export const joinCode = (code: string[]) => code.join('\n')
