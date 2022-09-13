import isNil from 'lodash/isNil'
import React, { useCallback, useMemo, useEffect, memo } from 'react'
import { View, Text, Keyboard } from 'react-native'

import { getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import Portal from '../portal'
import Space from '../space'
import Theme from '../theme'
import Tree from '../tree'
import type { TreeOption, TreeValue } from '../tree/interface'

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

  search,
  onSearch,
  cancellable,
}: DropdownSelectorMethodProps<T>) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_TREE = Theme.createVar(TOKENS, Tree.varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

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

  const onPressShade = useCallback(() => {
    setVisible(false)
    Keyboard.dismiss()
    onCancel?.()
  }, [onCancel])

  const onRequestClose = usePersistFn(() => {
    onPressShade()
    return true
  })

  const onChangePersistFn = usePersistFn((v: TreeValue) => {
    setVisible(false)
    Keyboard.dismiss()

    const findNodeByValue = (
      tree: DropdownItemOption<T>[],
      value: T,
    ): DropdownItemOption<T> => {
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
    }

    const _v = v as unknown as T
    onConfirm?.(_v as unknown as T, findNodeByValue(options, _v))
  })

  return (
    <DropdownPopup
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
      <View style={STYLES.item_tree}>
        <Tree
          defaultExpandAll
          activeColor={_activeColor}
          minHeight={false}
          search={search}
          defaultValue={defaultValue as unknown as string}
          options={treeOptions}
          onChange={onChangePersistFn}
          onSearch={onSearch}
          cancellable={cancellable}
        />
      </View>
    </DropdownPopup>
  )
}

const DropdownSelectorMethodMemo = memo(DropdownSelectorMethod) as <T>(
  p: DropdownSelectorMethodProps<T>,
) => React.ReactElement

export default <T,>(opt: Omit<DropdownSelectorMethodProps<T>, 'onClosed'>) => {
  return new Promise<{ value: T; data: DropdownItemOption<T> }>(
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
