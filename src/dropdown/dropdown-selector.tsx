import isNil from 'lodash/isNil'
import uniqBy from 'lodash/uniqBy'
import React, { useCallback, useMemo, useEffect, useState, memo } from 'react'
import { Text, Keyboard } from 'react-native'

import Button from '../button'
import ButtonBarConfirm from '../button-bar/button-bar-confirm'
import { getDefaultValue, isPromise } from '../helpers'
import { usePersistFn } from '../hooks'
import Locale from '../locale'
import Portal from '../portal'
import Space from '../space'
import Theme from '../theme'
import Tree from '../tree'
import type { TreeOption, TreeValue } from '../tree/interface'

import { useDropdownConfig } from './context'
import DropdownBadge from './dropdown-badge'
import DropdownPopup from './dropdown-popup'
import type {
  DropdownItemOption,
  DropdownSelectorMethodProps,
} from './interface'
import { varCreator, styleCreator } from './style'

const DropdownSelectorMethod = <T,>({
  targetHeight,
  targetPageY,
  onConfirm,
  onCancel,
  defaultValue,
  options,
  duration,
  zIndex,
  closeOnPressOutside,
  onClosed,
  activeColor,
  beforeChecked,

  search,
  onSearch,
  cancellable,
  multiple,
  multipleMode,

  testID,
}: DropdownSelectorMethodProps<T>) => {
  const locale = Locale.useLocale().DropdownSelector
  const { theme } = useDropdownConfig()
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [CV_TREE] = Theme.useStyle({
    varCreator: Tree.varCreator,
  })
  const [multipleValue, setMultipleValue] = useState<T[]>(
    multiple ? (defaultValue as T[]) || [] : [],
  )
  const allOptions = useMemo(() => {
    const findNode = (op: DropdownItemOption<T>[]) => {
      const ooo: DropdownItemOption<T>[] = []

      op.forEach(o => {
        ooo.push(o)

        if (o.children?.length) {
          ooo.push(...findNode(o.children))
        }
      })

      return ooo
    }

    return findNode(options)
  }, [options])

  const _activeColor = getDefaultValue(activeColor, CV.dropdown_active_color)

  const [visible, setVisible] = useState(false)
  const treeOptions = useMemo(() => {
    const convertOption = (ops: DropdownItemOption<T>[]) => {
      const nodes: TreeOption[] = []

      ops.forEach(item => {
        const _opt: TreeOption = {
          label: item.label,
          value: item.value as unknown as number | string,
          children: item.children?.length ? convertOption(item.children) : [],
          render: isNil(item.badge)
            ? undefined
            : p => {
                return (
                  <Space
                    direction="horizontal"
                    align="center"
                    style={STYLES.item_tree_item}>
                    <Text
                      style={[
                        {
                          fontSize: CV_TREE.tree_item_text_font_size,
                          color: CV_TREE.tree_item_text_color,
                        },
                        p.labelHighlight
                          ? {
                              color: p.activeColor,
                            }
                          : null,
                      ]}
                      numberOfLines={1}>
                      {p.label}
                    </Text>
                    <DropdownBadge count={item.badge} />
                  </Space>
                )
              },
        }
        nodes.push(_opt)
      })

      return nodes
    }

    return convertOption(options)
  }, [
    CV_TREE.tree_item_text_color,
    CV_TREE.tree_item_text_font_size,
    STYLES.item_tree_item,
    options,
  ])

  useEffect(() => {
    setVisible(true)
  }, [])

  const findNodeByValue = (
    tree: DropdownItemOption<T>[],
    value: T,
  ): DropdownItemOption<T> | undefined => {
    for (const item of tree) {
      if (item.value === value) {
        return item
      }
      if (item.children) {
        const _v = findNodeByValue(item.children, value)
        if (_v) {
          return _v
        }
      }
    }

    return undefined
  }

  const onPressShade = useCallback(() => {
    setVisible(false)
    Keyboard.dismiss()
    onCancel?.()
  }, [onCancel])

  const onRequestClose = usePersistFn(() => {
    onPressShade()
    return true
  })

  const onChangePersistFn = usePersistFn(
    (
      v: TreeValue | TreeValue[],
      _: TreeOption[],
      event: {
        checked: boolean
        option: TreeOption
      },
    ) => {
      if (multiple) {
        if (beforeChecked) {
          const returnVal = beforeChecked({
            value: [],
            checked: event.checked,
            option: event.option,
          })

          if (isPromise(returnVal)) {
            returnVal.then(nv => {
              setMultipleValue(mv =>
                uniqBy(
                  // eslint-disable-next-line max-nested-callbacks
                  [...mv.filter(mvi => mvi !== event.option.value), ...nv],
                  // eslint-disable-next-line max-nested-callbacks
                  x => x,
                ),
              )
            })
          } else {
            setMultipleValue(mv =>
              uniqBy(
                [...mv.filter(mvi => mvi !== event.option.value), ...returnVal],
                x => x,
              ),
            )
          }
        } else {
          setMultipleValue(v as T[])
        }
      } else {
        setVisible(false)
        Keyboard.dismiss()
        const _v = v as unknown as T
        const _o = findNodeByValue(options, _v)
        onConfirm?.(_v as unknown as T, _o ? [_o] : [])
      }
    },
  )

  const onConfirmMultiple = usePersistFn(() => {
    setVisible(false)
    Keyboard.dismiss()

    onConfirm?.(
      multipleValue,
      multipleValue.map(item => {
        return findNodeByValue(options, item)!
      }),
    )
  })

  return (
    <DropdownPopup
      testID={testID}
      targetHeight={targetHeight}
      targetPageY={targetPageY}
      closeOnPressOutside={closeOnPressOutside}
      duration={duration}
      zIndex={zIndex}
      onPressShade={onPressShade}
      visible={visible}
      onRequestClose={onRequestClose}
      onClosed={onClosed}
      onPressOverlay={onPressShade}>
      <Tree
        defaultExpandAll
        activeColor={_activeColor}
        minHeight={false}
        search={search}
        options={treeOptions}
        onChange={onChangePersistFn}
        onSearch={onSearch}
        cancellable={cancellable}
        multiple={multiple}
        multipleMode={multipleMode}
        {...(multiple
          ? {
              value: multipleValue as string[],
            }
          : {
              defaultValue: defaultValue as unknown as string,
            })}
      />
      {multiple ? (
        <ButtonBarConfirm
          safeAreaInsetBottom={false}
          cancel={[
            <Button
              key="2"
              type="link"
              text={
                allOptions.length !== multipleValue.length
                  ? locale.allButtonText
                  : locale.notAllButtonText
              }
              onPress={() => {
                if (allOptions.length !== multipleValue.length) {
                  setMultipleValue(allOptions.map(i => i.value))
                } else {
                  setMultipleValue([])
                }
              }}
            />,
            <Button
              key="1"
              type="hazy"
              text={locale.cancelButtonText}
              onPress={onPressShade}
            />,
          ]}>
          <Button text={locale.confirmButtonText} onPress={onConfirmMultiple} />
        </ButtonBarConfirm>
      ) : null}
    </DropdownPopup>
  )
}

const DropdownSelectorMethodMemo = memo(DropdownSelectorMethod) as <T>(
  p: DropdownSelectorMethodProps<T>,
) => React.ReactElement

export default <T,>(opt: Omit<DropdownSelectorMethodProps<T>, 'onClosed'>) => {
  return new Promise<{ value: T | T[]; data: DropdownItemOption<T>[] }>(
    (resolve, reject) => {
      const key = Portal.add(
        <DropdownSelectorMethodMemo<T>
          {...opt}
          onCancel={() => {
            opt.onCancel?.()
            reject(new Error())
          }}
          onConfirm={(v, d) => {
            opt.onConfirm?.(v, d)
            resolve({
              value: v,
              data: d,
            })
          }}
          onClosed={() => {
            Portal.remove(key)
          }}
        />,
      )
    },
  )
}
