import React, { useMemo, memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { getDefaultValue, isDef } from '../helpers'
import { CrossOutline, CrossCircleOutline } from '../icon'
import LoadingCircular from '../loading/circular'
import { useTheme, widthStyle } from '../theme'

import type { UploaderImageProps } from './interface'
import { createStyles } from './style.image'

/**
 * UploaderImage 文件上传的缩略图
 */
const UploaderImage: React.FC<UploaderImageProps> = ({
  filepath,
  status = 'done',
  imageComponent: ImageComponent = Image,
  deletable = true,
  size = 80,
  gap,
  onPress,
  onPressDelete,
  isUpload,
  children,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)

  // 修正数据
  gap = getDefaultValue(gap, THEME_VAR.uploader_image_gap)

  const customSizeStyle = useMemo(() => ({ width: size, height: size }), [size])

  const customStyle = useMemo(
    () => ({ width: size, height: size, marginRight: gap, marginBottom: gap }),
    [size, gap],
  )
  const canPress =
    isUpload || (!!filepath && (status === 'done' || status === 'error'))
  return (
    <TouchableOpacity
      style={[STYLES.image, customStyle]}
      onPress={canPress ? onPress : undefined}
      activeOpacity={canPress ? THEME_VAR.button_active_opacity : 1}>
      {isDef(children) ? (
        children
      ) : (
        <>
          <ImageComponent style={customSizeStyle} source={{ uri: filepath }} />

          {deletable && status !== 'loading' ? (
            <CrossOutline
              size={THEME_VAR.uploader_image_delete_size - 4}
              color="#fff"
              onPress={onPressDelete}
              style={STYLES.delete}
            />
          ) : null}

          {status === 'loading' ? (
            <View style={STYLES.mask}>
              <LoadingCircular color="#fff" size={20} />
              <Text style={STYLES.mask_text}>上传中...</Text>
            </View>
          ) : null}

          {status === 'error' ? (
            <View style={STYLES.mask}>
              <CrossCircleOutline color="#fff" size={20} />
              <Text style={STYLES.mask_text}>{`上传失败\n点击重试`}</Text>
            </View>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  )
}

export default memo<typeof UploaderImage>(UploaderImage)
