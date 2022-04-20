import type React from 'react'
import { Children } from 'react'
import { isFragment } from 'react-is'

export interface Option {
  /** 保留空节点 */
  keepEmpty?: boolean
}

/**
 * 把 JSX 的 children 中空节点过滤，返回一个数组格式的 JSX 节点集合
 * @description https://github.com/react-component/util/blob/master/src/Children/toArray.ts
 */
export default function childrenToArray(
  children: React.ReactNode,
  option: Option = {},
): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Children.forEach(children, (child: any) => {
    if ((child === undefined || child === null) && !option.keepEmpty) {
      return
    }

    if (Array.isArray(child)) {
      ret = ret.concat(childrenToArray(child))
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(childrenToArray(child.props.children, option))
    } else {
      ret.push(child)
    }
  })

  return ret
}
