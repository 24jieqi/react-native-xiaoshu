import isUndefined from 'lodash/isUndefined'

import type { FieldTextCellPropsUsed } from './interface'

export const pickCellProps = <T extends FieldTextCellPropsUsed>(
  {
    innerStyle,
    title,
    titleStyle,
    titleTextStyle,
    titleExtra,
    valueStyle,
    valueExtra,
    extra,
    extraTextStyle,
    contentStyle,
    divider,
    dividerLeftGap,
    dividerRightGap,
    isLink,
    onPressLink,
    center,
    arrowDirection,
    required,
    vertical,
    titleTextNumberOfLines,
    style,
    testID,
    ...otherProps
  }: T,
  defaultProps?: Partial<T>,
) => {
  const cellProps: Partial<FieldTextCellPropsUsed> = {
    innerStyle,
    title,
    titleStyle,
    titleTextStyle,
    titleExtra,
    valueStyle,
    valueExtra,
    extra,
    extraTextStyle,
    contentStyle,
    divider,
    dividerLeftGap,
    dividerRightGap,
    isLink,
    onPressLink,
    center,
    arrowDirection,
    required,
    vertical,
    titleTextNumberOfLines,
    style,
    testID,
  }

  if (defaultProps && typeof defaultProps === 'object') {
    Object.entries(defaultProps).forEach(([key, value]) => {
      if (isUndefined(cellProps[key])) {
        cellProps[key] = value
      }
    })
  }

  return {
    cellProps,
    otherProps,
  }
}
