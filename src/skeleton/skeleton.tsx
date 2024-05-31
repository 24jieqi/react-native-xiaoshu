import isNil from 'lodash/isNil'
import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import { isObject } from '../helpers'
import Space from '../space'

import type {
  SkeletonProps,
  SkeletonTitleProps,
  SkeletonParagraphProps,
  SkeletonAvatarProps,
} from './interface'
import SkeletonAvatar from './skeleton-avatar'
import SkeletonParagraph from './skeleton-paragraph'

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

const Skeleton: React.FC<React.PropsWithChildren<SkeletonProps>> = ({
  children,
  theme,
  active = true,
  loading,
  title = true,
  paragraph = true,
  avatar = false,
}) => {
  const showTitle = !!title
  const titleWidths = isObject(title)
    ? [(title as SkeletonTitleProps).width!]
    : defaultTitleWidths

  const showParagraph = !!paragraph
  const paragraphOption = isObject(paragraph)
    ? (paragraph as SkeletonParagraphProps)
    : defaultParagraphOption
  const paragraphActive = !isNil(paragraphOption.active)
    ? paragraphOption.active
    : active

  const showAvatar = !!avatar
  const avatarOption = isObject(avatar) ? (avatar as SkeletonAvatarProps) : {}

  const ctxJSX =
    showParagraph || showTitle ? (
      <Space>
        {showTitle ? (
          <SkeletonParagraph
            theme={theme}
            active={active}
            rows={1}
            widths={titleWidths}
          />
        ) : null}
        {showParagraph ? (
          <SkeletonParagraph
            theme={theme}
            {...paragraphOption}
            active={paragraphActive}
          />
        ) : null}
      </Space>
    ) : null
  const nodeJSX = showAvatar ? (
    <View style={STYLES.skeleton}>
      <View style={STYLES.avatar}>
        <SkeletonAvatar
          theme={theme}
          {...avatarOption}
          active={!isNil(avatarOption.active) ? avatarOption.active : active}
        />
      </View>
      {!isNil(ctxJSX) ? <View style={STYLES.ctx}>{ctxJSX}</View> : null}
    </View>
  ) : (
    ctxJSX
  )

  return loading ? nodeJSX : (children as React.ReactElement)
}

export default memo(Skeleton)
