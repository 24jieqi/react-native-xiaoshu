import React, { memo } from 'react'

import { formatThousandths } from '../helpers'

import Description from './description'
import type { DescriptionThousandProps } from './interface'

const DescriptionThousand: React.FC<DescriptionThousandProps> = ({
  text,
  ...restProps
}) => {
  const value = formatThousandths(`${text}`)

  return <Description {...restProps} text={value} />
}

// TODO: 临时解决 dumi 文档解析错误
const DescriptionThousandMemo: typeof DescriptionThousand =
  memo<typeof DescriptionThousand>(DescriptionThousand)

export default DescriptionThousandMemo
