export function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max)
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
  const index = value.indexOf(char)

  if (index === -1) {
    return value
  }

  if (char === '-' && index !== 0) {
    return value.slice(0, index)
  }

  return value.slice(0, index + 1) + value.slice(index).replace(regExp, '')
}

export function formatNumber(
  value: string,
  allowDot = true,
  allowMinus = true,
) {
  if (allowDot) {
    value = trimExtraChar(value, '.', /\./g)
  } else {
    value = value.split('.')[0]
  }

  if (allowMinus) {
    value = trimExtraChar(value, '-', /-/g)
  } else {
    value = value.replace(/-/, '')
  }

  const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g

  return value.replace(regExp, '')
}

export function formatThousandths(t: string, sign?: string) {
  !sign && (sign = ',')
  const parts = t.split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sign)
  return parts.join('.')
}

export function formatDecimal(t: string, n: number) {
  const value = formatNumber(t)
  const mark = /-/.test(value) ? '-' : ''
  const values = (mark ? value.split('-')[1] || '' : value).split('.')
  const integer = values[0]
  const decimal = values[1] || ''

  if (n < 0) {
    if (values.length === 1) {
      return `${mark}${integer}`
    }
    return [`${mark}${integer}`, decimal].join('.')
  } else if (values.length === 1 || n === 0) {
    return `${mark}${integer}`
  } else {
    const d = decimal.match(new RegExp(`\\d{0,${n}}`))?.[0]
    return `${mark}${integer}.${d}`
  }
}
