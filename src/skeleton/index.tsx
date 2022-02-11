import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import { isDef, isObject } from '../helpers'
import Space from '../space'

import SkeletonAvatar from './avatar'
import type {
  SkeletonProps,
  SkeletonTitleProps,
  SkeletonParagraphProps,
  SkeletonAvatarProps,
} from './interface'
import SkeletonParagraph from './paragraph'

const defaultTitleWidths = [38]

const defaultParagraphOption: SkeletonParagraphProps = {
  rows: 3,
  widths: [100, 100, 61],
}

const STYLES = StyleSheet.create({
  skeleton: {
    flexDirection: 'row',
  },

  avatar: {
    marginRight: 8,
  },

  ctx: {
    flex: 1,
  },
})

const Skeleton: React.FC<SkeletonProps> = ({
  children,
  active = true,
  loading,
  title = true,
  paragraph = true,
  avatar = false,
}) => {
  const showTitle = !!title
  const titleWidths = isObject(title)
    ? [(title as SkeletonTitleProps).width]
    : defaultTitleWidths

  const showParagraph = !!paragraph
  const paragraphOption = isObject(paragraph)
    ? (paragraph as SkeletonParagraphProps)
    : defaultParagraphOption
  const paragraphActive = isDef(paragraphOption.active)
    ? paragraphOption.active
    : active

  const showAvatar = !!avatar
  const avatarOption = isObject(avatar) ? (avatar as SkeletonAvatarProps) : {}

  const ctxJSX =
    showParagraph || showTitle ? (
      <Space>
        {showTitle ? (
          <SkeletonParagraph active={active} rows={1} widths={titleWidths} />
        ) : null}
        {showParagraph ? (
          <SkeletonParagraph {...paragraphOption} active={paragraphActive} />
        ) : null}
      </Space>
    ) : null
  const nodeJSX = showAvatar ? (
    <View style={STYLES.skeleton}>
      <View style={STYLES.avatar}>
        <SkeletonAvatar
          {...avatarOption}
          active={isDef(avatarOption.active) ? avatarOption.active : active}
        />
      </View>
      {isDef(ctxJSX) ? <View style={STYLES.ctx}>{ctxJSX}</View> : null}
    </View>
  ) : (
    ctxJSX
  )

  return loading ? (
    nodeJSX
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  )
}

export default memo<typeof Skeleton>(Skeleton)
