import React, { isValidElement } from 'react'
import { View, Text, Image } from 'react-native'

import PlusOutline from '../icon/plus'
import Locale from '../locale'
import Theme from '../theme'

import type { UploaderProps, UploaderValue } from './interface'
import { varCreator, styleCreator } from './style'
import UploaderImage from './uploader-image'
import useImageLayout from './useImageLayout'

/**
 * Uploader 文件上传
 */
const Uploader = <T extends UploaderValue>({
  list,
  maxCount = Number.MAX_SAFE_INTEGER,
  imageComponent = Image,
  deletable = true,
  showUpload = true,
  uploadText,
  uploadIcon,
  onPressUpload,
  colCount = 4,
  colGap = 'm',
  onPressImage,
  onPressDelete,
  onPressError,
}: UploaderProps<T>) => {
  const locale = Locale.useLocale().Uploader
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const [onLayoutWrapper, getSizeImage, getMarginImage] = useImageLayout()

  const genOnPressDelete = (item: T, index: number) => () => {
    onPressDelete?.(item, index, list)
  }
  const genOnPressImage = (item: T, index: number) => () => {
    const onPressCallback =
      item.status === 'error' ? onPressError : onPressImage

    onPressCallback?.(item, index, list)
  }

  const showUploadButton = showUpload && list.length < maxCount
  const imageGap =
    typeof colGap === 'number' ? colGap : CV[`uploader_image_gap_${colGap}`]
  const imageSize = getSizeImage(colCount, imageGap)
  const total = (showUploadButton ? 1 : 0) + list.length

  return (
    <View style={STYLES.uploader} onLayout={onLayoutWrapper}>
      {list.map((item, index) => {
        return (
          <UploaderImage
            key={item.key}
            filepath={item.filepath}
            status={item.status}
            imageComponent={imageComponent}
            deletable={deletable}
            size={imageSize}
            marginRight={
              getMarginImage(total, colCount, index).marginRight
                ? imageGap
                : undefined
            }
            marginBottom={
              getMarginImage(total, colCount, index).marginBottom
                ? imageGap
                : undefined
            }
            onPress={genOnPressImage(item, index)}
            onPressDelete={genOnPressDelete(item, index)}
          />
        )
      })}

      {showUpload && list.length < maxCount ? (
        <UploaderImage
          isUpload
          size={imageSize}
          marginBottom={
            getMarginImage(total, colCount, total - 1).marginBottom
              ? imageGap
              : undefined
          }
          onPress={onPressUpload}>
          {isValidElement(uploadIcon) ? (
            uploadIcon
          ) : (
            <PlusOutline
              color={CV.uploader_upload_text_color}
              pointerEvents="none"
            />
          )}
          <Text style={STYLES.upload_text}>
            {uploadText || locale.uploadText}
          </Text>
        </UploaderImage>
      ) : null}
    </View>
  )
}

export default Uploader
