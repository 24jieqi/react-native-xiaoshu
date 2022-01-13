import React, { useMemo, memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { CrossOutline, CrossCircleOutline } from '../icon'
import LoadingCircular from '../loading/circular'
import { useTheme, widthStyle } from '../theme'
import { isDef } from '../helpers'
import { createStyles } from './style.image'

import type { UploaderImageProps } from './interface'

/**
 * UploaderImage 文件上传的缩略图
 */
const UploaderImage: React.FC<UploaderImageProps> = ({
  filepath,
  status = 'done',
  imageComponent: ImageComponent = Image,
  deletable = true,
  size = 80,
  onPress,
  onPressDelete,
  isUpload,
  children,
}) => {
  const THEME_VAR = useTheme()
  const STYLES = widthStyle(THEME_VAR, createStyles)
  const sizeStyle = useMemo(() => ({ width: size, height: size }), [size])
  const canPress = isUpload || (!!filepath && status === 'done')
  return (
    <TouchableOpacity
      style={[STYLES.image, sizeStyle]}
      onPress={canPress ? onPress : undefined}
      activeOpacity={canPress ? THEME_VAR.active_img_opacity : 1}>
      {isDef(children) ? (
        children
      ) : (
        <>
          <ImageComponent style={sizeStyle} source={{ uri: filepath }} />

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
              <Text style={STYLES.mask_text}>上传失败</Text>
            </View>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  )
}

export default memo<typeof UploaderImage>(UploaderImage)
