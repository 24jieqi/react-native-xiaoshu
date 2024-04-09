import {
  CrossOutline,
  CrossCircleOutline,
} from '@fruits-chain/icons-react-native'
import isNil from 'lodash/isNil'
import React, { useMemo, memo } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { varCreator as varCreatorButton } from '../button/style'
import LoadingCircular from '../loading/loading-circular'
import Locale from '../locale'
import Theme from '../theme'

import type { UploaderImageProps } from './interface'
import { varCreator } from './style'
import { styleCreator } from './style.image'

/**
 * UploaderImage 文件上传的缩略图
 */
const UploaderImage: React.FC<UploaderImageProps> = ({
  theme,
  filepath,
  status = 'done',
  imageComponent: ImageComponent = Image,
  deletable = true,
  size,
  marginRight,
  marginBottom,
  onPress,
  onPressDelete,
  isUpload,
  children,
}) => {
  const locale = Locale.useLocale().UploaderImage
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_BUTTON] = Theme.useStyle({
    varCreator: varCreatorButton,
  })
  const customSizeStyle = useMemo(() => ({ width: size, height: size }), [size])

  const customStyle = useMemo(
    () => ({
      width: size,
      height: size,
      marginRight: marginRight,
      marginBottom: marginBottom,
    }),
    [size, marginRight, marginBottom],
  )
  const canPress =
    isUpload || (!!filepath && (status === 'done' || status === 'error'))
  return (
    <TouchableOpacity
      style={[STYLES.image, customStyle]}
      onPress={canPress ? onPress : undefined}
      activeOpacity={canPress ? CV_BUTTON.button_active_opacity : 1}>
      {!isNil(children) ? (
        children
      ) : (
        <>
          <ImageComponent style={customSizeStyle} source={{ uri: filepath }} />

          {deletable && status !== 'loading' ? (
            <CrossOutline
              size={CV.uploader_image_delete_size - 4}
              color="#fff"
              onPress={onPressDelete}
              style={STYLES.delete}
            />
          ) : null}

          {status === 'loading' ? (
            <View style={STYLES.mask}>
              <LoadingCircular color="#fff" size={20} />
              <Text style={STYLES.mask_text}>{locale.labelIng}</Text>
            </View>
          ) : null}

          {status === 'error' ? (
            <View style={STYLES.mask}>
              <CrossCircleOutline color="#fff" size={20} />
              <Text style={STYLES.mask_text}>{locale.labelFail}</Text>
            </View>
          ) : null}
        </>
      )}
    </TouchableOpacity>
  )
}

export default memo(UploaderImage)
