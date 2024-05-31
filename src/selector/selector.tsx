import omit from 'lodash/omit'
import pick from 'lodash/pick'
import React, { memo, useState } from 'react'

import Button from '../button'
import ButtonBar from '../button-bar'
import { useSafeHeight, usePersistFn, useUpdateEffect } from '../hooks'
import Locale from '../locale'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import PopupPage from '../popup/popup-page'
import Tree from '../tree'
import type { TreeProps, TreeValue } from '../tree/interface'

import type { SelectorProps, SelectorValue } from './interface'

const treePropsField = [
  'multiple',
  'multipleMode',
  'value',
  'defaultValue',
  'onChange',
  'options',
  'renderSwitcherIcon',
  'indent',
  'activeColor',
  'defaultExpandedValues',
  'defaultExpandAll',
  'search',
  'onSearch',
  'placeholder',
  'minHeight',
  'cancellable',
]

/**
 * Selector 弹出层式 Select
 * @description 类似 Web 端的 Select 组件，可以多选、单选。
 */
const Selector: React.FC<SelectorProps> = ({
  title,
  onChangeImmediate,
  safeAreaInsetTop,
  confirmButtonText,

  // popup 组件相关属性
  visible,
  closeOnPressOverlay = true,
  onClose,
  ...restProps
}) => {
  const treeProps = pick(restProps, treePropsField) as TreeProps
  const popupProps = omit(restProps, treePropsField)
  const isMultiple = treeProps.multiple

  const safeHeight = useSafeHeight({ top: safeAreaInsetTop, bottom: false })
  const locale = Locale.useLocale().Selector
  // const [valueMultiple, onChangeMultiple] = useControllableValue<
  //   SelectorValue[]
  // >(omit(restProps, 'onChange'), {
  //   defaultValue: Array.isArray(treeProps.value)
  //     ? treeProps.value
  //     : Array.isArray(treeProps.defaultValue)
  //     ? treeProps.defaultValue
  //     : [],
  // })
  const [valueMultiple, setValueMultiple] = useState<SelectorValue[]>(
    Array.isArray(treeProps.value)
      ? treeProps.value
      : Array.isArray(treeProps.defaultValue)
        ? treeProps.defaultValue
        : [],
  )

  // 同步外面的数据
  useUpdateEffect(() => {
    if (treeProps.multiple) {
      setValueMultiple(treeProps.value as SelectorValue[])
    }
  }, [treeProps.multiple, treeProps.value])

  const onChangeMultiplePersistFn = usePersistFn((v: TreeValue[]) => {
    if (onChangeImmediate) {
      setValueMultiple(onChangeImmediate(v) as SelectorValue[])
    } else {
      setValueMultiple(v)
    }
  })

  /**
   * 点击确定按钮
   */
  const onPressOk = usePersistFn(() => {
    const _onChange = treeProps.onChange as SelectorProps['onChange']

    _onChange?.(
      valueMultiple,
      valueMultiple.map(i => Tree.findNodeByValue(treeProps.options, i)!),
    )
  })

  const contentJSX = (
    <>
      <PopupHeader title={title ?? locale.title} onClose={onClose} />

      <Tree
        {...treeProps}
        value={
          isMultiple ? valueMultiple : treeProps.value ?? treeProps.defaultValue
        }
        onChange={isMultiple ? onChangeMultiplePersistFn : treeProps.onChange}
      />

      {treeProps.multiple ? (
        <ButtonBar
          alone
          divider={false}
          height={60}
          safeAreaInsetBottom={false}>
          <Button
            type="primary"
            onPress={onPressOk}
            text={confirmButtonText ?? locale.confirmButtonText}
          />
        </ButtonBar>
      ) : null}
    </>
  )

  if (treeProps.search) {
    return (
      <PopupPage
        {...popupProps}
        visible={visible}
        onClose={onClose}
        closeOnPressOverlay={closeOnPressOverlay}
        onPressOverlay={onClose}
        round
        safeAreaInsetBottom>
        {contentJSX}
      </PopupPage>
    )
  }

  return (
    <Popup
      {...popupProps}
      style={{ maxHeight: safeHeight }}
      visible={visible}
      onClose={onClose}
      closeOnPressOverlay={closeOnPressOverlay}
      onPressOverlay={onClose}
      position="bottom"
      round
      safeAreaInsetBottom>
      {contentJSX}
    </Popup>
  )
}

export default memo(Selector)
