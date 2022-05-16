import React, { useMemo } from 'react'
import { View, Text, Image } from 'react-native'

import PlusOutline from '../icon/plus'
import Locale from '../locale'
import Theme from '../theme'

import type {
  UploaderRegularProps,
  UploaderValue,
  RegularCount,
} from './interface'
import { varCreator, styleCreator } from './style'
import UploaderImage from './uploader-image'
import useImageLayout from './useImageLayout'

const UploaderRegular = <T extends UploaderValue>({
  list,
  imageComponent = Image,
  colCount = 4,
  colGap = 'm',
  onPressImage,
  onPressDelete,
  onPressError,
  count,
  onPressUpload,
}: UploaderRegularProps<T>) => {
  const locale = Locale.useLocale().Uploader
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  const [onLayoutWrapper, getSizeImage, getMarginImage] = useImageLayout()

  const showList = useMemo(() => {
    return (
      (typeof count === 'number'
        ? new Array(count).fill(null)
        : count) as (RegularCount | null)[]
    ).map((item, index) => {
      const _i = item || {}
      const text = _i.text || locale.uploadText
      const icon = _i.icon || (
        <PlusOutline
          color={CV.uploader_upload_text_color}
          pointerEvents="none"
        />
      )
      const data = list[index]

      return {
        text,
        icon,
        data,
      }
    })
  }, [CV.uploader_upload_text_color, count, list, locale.uploadText])

  const genOnPressDelete = (item: T, index: number) => () => {
    onPressDelete?.(item, index, list)
  }
  const genOnPressImage = (item: T, index: number) => () => {
    const onPressCallback =
      item.status === 'error' ? onPressError : onPressImage

    onPressCallback?.(item, index, list)
  }
  const genOnPressUpload = (index: number) => () => {
    onPressUpload?.(index)
  }

  const imageGap =
    typeof colGap === 'number' ? colGap : CV[`uploader_image_gap_${colGap}`]
  const imageSize = getSizeImage(colCount, imageGap)
  const total = showList.length

  return (
    <View style={STYLES.uploader} onLayout={onLayoutWrapper}>
      {showList.map((item, index) => {
        if (item.data) {
          return (
            <UploaderImage
              key={item.data?.key || index}
              filepath={item.data.filepath}
              status={item.data.status}
              imageComponent={imageComponent}
              deletable
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
              onPress={genOnPressImage(item.data, index)}
              onPressDelete={genOnPressDelete(item.data, index)}
            />
          )
        }

        return (
          <UploaderImage
            isUpload
            key={index}
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
            onPress={genOnPressUpload(index)}>
            {item.icon}
            <Text style={STYLES.upload_text}>{item.text}</Text>
          </UploaderImage>
        )
      })}
    </View>
  )
}

export default UploaderRegular
