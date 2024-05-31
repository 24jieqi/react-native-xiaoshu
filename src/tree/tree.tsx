import { ArrowRightOutline } from '@fruits-chain/icons-react-native'
import React, { useState, useMemo, useRef } from 'react'
import type { ViewStyle } from 'react-native'
import { FlatList, View, Text } from 'react-native'

import Empty from '../empty'
import { getDefaultValue } from '../helpers'
import { useControllableValue, usePersistFn } from '../hooks'
import Search from '../search'
import Theme from '../theme'

import type {
  TreeProps,
  TreeValue,
  TreeOption,
  TreeSearchListData,
} from './interface'
import { varCreator, styleCreator } from './style'
import TreeItem from './tree-item'
import { TreeMultipleMode } from './var'

type ListData = {
  tier: number
} & TreeOption

export const findNodeByValue = (
  tree: TreeOption[],
  value: TreeValue,
): TreeOption | undefined => {
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

export const findAllChildrenValue = (tree: TreeOption[]) => {
  const values: TreeValue[] = []

  tree.forEach(item => {
    values.push(item.value)

    if (item.children?.length) {
      values.push(...findAllChildrenValue(item.children))
    }
  })

  return values
}

export const findParentNodeByValue = (
  tree: TreeOption[],
  value: TreeValue,
): TreeOption | null => {
  for (const item of tree) {
    if (item.children?.length) {
      if (item.children.filter(i => i.value === value).length) {
        return item
      } else {
        const _v = findParentNodeByValue(item.children, value)
        if (_v) {
          return _v
        }
      }
    }
  }

  return null
}

export const findAllParentNodeByValue = (
  tree: TreeOption[],
  value: TreeValue,
) => {
  const nodes: TreeOption[] = []
  const doFind = (v: TreeValue) => {
    const p = findParentNodeByValue(tree, v)
    if (p) {
      nodes.push(p)
      doFind(p.value)
    }
  }

  doFind(value)

  return nodes
}

export const flattenDeepWidthChildren = (tree: TreeOption[]) => {
  const nodes: TreeOption[] = []

  tree.forEach(item => {
    nodes.push(item)

    if (item.children?.length) {
      nodes.push(...flattenDeepWidthChildren(item.children))
    }
  })

  return nodes
}

export const buildHighlightLabelConfig = (
  label: string,
  keyword: string,
): TreeSearchListData['labels'] => {
  if (!keyword) {
    return []
  }

  const _reg = new RegExp(keyword, 'gi')
  const results = [...label.matchAll(_reg)]

  if (results.length) {
    const nodes: TreeSearchListData['labels'] = []
    let pointer = 0

    results.forEach(res => {
      if (res.index !== pointer) {
        nodes.push({
          highlight: false,
          text: label.slice(pointer, res.index),
        })
      }

      pointer = (res.index || 0) + res[0].length

      nodes.push({
        highlight: true,
        text: label.slice(res.index, pointer),
      })
    })

    if (pointer <= label.length - 1) {
      nodes.push({
        highlight: false,
        text: label.slice(pointer, label.length),
      })
    }

    return nodes
  }

  return []
}

const switcherIconWrapperStyle: ViewStyle = {
  transform: [
    {
      rotateZ: '90deg',
    },
  ],
}

const Tree: React.FC<TreeProps> = ({
  theme,
  multiple = false,
  multipleMode = TreeMultipleMode.NORMAL,
  options,
  renderSwitcherIcon,
  indent,
  activeColor,
  defaultExpandedValues,
  defaultExpandAll = false,
  search,
  onSearch,
  placeholder,
  minHeight = true,
  cancellable = false,
  editable = true,

  ...restProps
}) => {
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const [value, onChange] = useControllableValue<
    TreeValue | TreeValue[] | null
  >(restProps, {
    defaultValue: multiple ? [] : undefined,
  })
  const getOnSearch = usePersistFn(() => {
    return onSearch
  })
  const [expandedValues, setExpandedValues] = useState(() => {
    if (defaultExpandAll) {
      return findAllChildrenValue(options)
    }

    const _values: TreeValue[] = []
    /** 查看父节点是否要追加进去 */
    const doPushParent = (subValue: TreeValue) => {
      const _p = findParentNodeByValue(options, subValue)
      if (_p) {
        _values.push(_p.value)
        doPushParent(_p.value)
      }
    }

    defaultExpandedValues?.forEach(id => {
      _values.push(id)
      doPushParent(id)
    })

    return _values
  })
  const listData = useMemo(() => {
    const nodes: ListData[] = []

    const findVisibleItem = (treeOption: TreeOption, tier: number) => {
      const _nodes: ListData[] = []

      if (expandedValues.indexOf(treeOption.value) > -1) {
        treeOption.children?.forEach(item => {
          _nodes.push({
            ...item,
            tier,
          })

          _nodes.push(...findVisibleItem(item, tier + 1))
        })
      }

      return _nodes
    }

    options.forEach(item => {
      nodes.push({
        ...item,
        tier: 0,
      })

      nodes.push(...findVisibleItem(item, 1))
    })

    return nodes
  }, [options, expandedValues])
  const SearchFlatListRef = useRef<FlatList>(null)
  const [keyword, setKeyword] = useState('')
  const searchListData = useMemo(() => {
    const _onSearch = getOnSearch()
    const _options = flattenDeepWidthChildren(options)
    const _defaultFilter = () => {
      const nodes: TreeSearchListData[] = []

      _options.forEach(item => {
        const _labels = buildHighlightLabelConfig(item.label, keyword)

        if (_labels.length) {
          // 找到父级数据
          const parentNodes = findAllParentNodeByValue(options, item.value)

          if (parentNodes?.length) {
            _labels.push({
              highlight: false,
              text: ` / ${parentNodes.map(pn => pn.label).join(' / ')}`,
            })
          }

          nodes.push({
            ...item,
            labels: _labels,
          })
        }
      })

      return nodes
    }

    return _onSearch ? _onSearch(keyword, _options) : _defaultFilter()
  }, [keyword, getOnSearch, options])

  const _indent = getDefaultValue(indent, CV.tree_indent)!
  const _activeColor = getDefaultValue(activeColor, CV.tree_active_color)!
  const flatListStyle = useMemo<ViewStyle>(() => {
    if (minHeight === false) {
      return {}
    }

    if (typeof minHeight === 'number') {
      return {
        minHeight,
      }
    }

    return {
      minHeight: CV.tree_min_height,
    }
  }, [CV.tree_min_height, minHeight])

  const onSearchKeyword = usePersistFn(t => {
    setKeyword(t)
    SearchFlatListRef.current?.scrollToIndex({
      index: 0,
    })
  })
  const genOnPressItem = (item: TreeOption) => () => {
    if (multiple) {
      const valueTarget = value as TreeValue[]
      const _value = valueTarget.filter(v => v !== item.value)
      const isInValue = _value.length !== valueTarget.length

      const onChangeMultiple = (values: TreeValue[]) => {
        onChange(
          values,
          values.map(v => findNodeByValue(options, v)),
          {
            checked: !isInValue,
            option: item,
          },
        )
      }

      if (TreeMultipleMode.INDEPENDENT === multipleMode) {
        // 每个节点都是独立的
        if (isInValue) {
          onChangeMultiple(_value)
        } else {
          onChangeMultiple([..._value, item.value])
        }
      } else {
        /** 所有子节点+自身节点 */
        const _nextValues = findAllChildrenValue(item.children || [])
        _nextValues.push(item.value)
        if (isInValue) {
          // 找到所有父节点
          // 追加当前及以后的节点
          const _ps = findAllParentNodeByValue(options, item.value)
            .map(p => p.value)
            .concat(_nextValues)

          // 向上查找父节点
          onChangeMultiple(_value.filter(v => _ps.indexOf(v) === -1))
        } else {
          // 先追加自身和子节点
          _nextValues.forEach(v => {
            if (_value.indexOf(v) === -1) {
              _value.push(v)
            }
          })

          /** 查看父节点是否要追加进去 */
          const doPushParent = (subValue: TreeValue) => {
            const _p = findParentNodeByValue(options, subValue)
            if (_p) {
              const _pNextValues = findAllChildrenValue(_p.children || [])
              // 父节点的所有子节点是否都在 _value
              if (
                _pNextValues.filter(pnv => _value.indexOf(pnv) === -1)
                  .length === 0
              ) {
                _value.push(_p.value)
                doPushParent(_p.value)
              }
            }
          }

          doPushParent(item.value)

          onChangeMultiple(_value)
        }
      }
    } else {
      const _node = findNodeByValue(options, item.value)

      if (item.value !== value) {
        onChange(item.value, [_node], {
          checked: true,
          option: item,
        })
      } else {
        if (cancellable) {
          onChange(null, [], {
            checked: false,
            option: item,
          })
        }
      }
    }
  }

  return (
    <>
      {search ? (
        <Search
          placeholder={placeholder}
          onSearch={onSearchKeyword}
          autoSearch
        />
      ) : null}

      {search && keyword ? (
        searchListData.length ? (
          <FlatList<TreeSearchListData>
            key="search"
            ref={SearchFlatListRef}
            keyboardShouldPersistTaps="handled"
            bouncesZoom={false}
            contentContainerStyle={flatListStyle}
            data={searchListData}
            keyExtractor={item => `${item.value}`}
            renderItem={({ item }) => {
              const isActive = multiple
                ? (value as TreeValue[]).indexOf(item.value) > -1
                : value === item.value

              return (
                <TreeItem
                  theme={theme}
                  onPress={genOnPressItem(item)}
                  multiple={multiple}
                  activeColor={_activeColor}
                  indent={_indent}
                  bold={item.bold}
                  disabled={!editable || !!item.disabled}
                  tier={0}
                  label={item.label}
                  active={isActive}
                  renderLabel={
                    isActive
                      ? undefined
                      : p => {
                          return (
                            <Text
                              style={[
                                STYLES.tree_item_text,
                                p.disabled
                                  ? STYLES.tree_item_disabled_text
                                  : null,
                                p.active || p.labelHighlight
                                  ? {
                                      color: p.activeColor,
                                    }
                                  : null,
                              ]}
                              numberOfLines={1}>
                              {item.labels.map((tObj, index) => {
                                if (tObj.highlight) {
                                  return (
                                    <Text
                                      key={index}
                                      style={STYLES.tree_item_highlight_text}>
                                      {tObj.text}
                                    </Text>
                                  )
                                }
                                return (
                                  <React.Fragment key={index}>
                                    {tObj.text}
                                  </React.Fragment>
                                )
                              })}
                            </Text>
                          )
                        }
                  }
                />
              )
            }}
          />
        ) : (
          <Empty style={flatListStyle} full />
        )
      ) : (
        <FlatList
          key="list"
          bouncesZoom={false}
          contentContainerStyle={flatListStyle}
          ListEmptyComponent={<Empty />}
          data={listData}
          keyExtractor={item => `${item.value}`}
          renderItem={({ item }) => {
            const isActive = multiple
              ? (value as TreeValue[]).indexOf(item.value) > -1
              : value === item.value
            const _renderSwitcherIcon =
              item.renderSwitcherIcon || renderSwitcherIcon
            const _onPressSwitcherIcon = () => {
              setExpandedValues(evs => {
                const _evs = evs.filter(v => v !== item.value)
                if (_evs.length !== evs.length) {
                  return _evs
                }

                return [..._evs, item.value]
              })
            }
            const _switcherIcon = item.children?.length ? (
              _renderSwitcherIcon ? (
                _renderSwitcherIcon({
                  color: CV.tree_item_switcher_color,
                  size: CV.tree_item_switcher_size,
                })
              ) : (
                <ArrowRightOutline
                  color={CV.tree_item_switcher_color}
                  size={CV.tree_item_switcher_size}
                />
              )
            ) : null
            const _switcherIconJSX =
              expandedValues.indexOf(item.value) > -1 &&
              item.switcherIconRotatable !== false ? (
                <View style={switcherIconWrapperStyle}>{_switcherIcon}</View>
              ) : (
                _switcherIcon
              )
            const _labelHighlight =
              findAllChildrenValue(item.children || []).filter(ic => {
                if (multiple) {
                  return (value as TreeValue[]).indexOf(ic) > -1
                } else {
                  return ic === value
                }
              }).length > 0

            return (
              <TreeItem
                theme={theme}
                onPress={genOnPressItem(item)}
                switcherIcon={_switcherIconJSX}
                switcherHighlight={item.switcherHighlight}
                multiple={multiple}
                activeColor={_activeColor}
                indent={_indent}
                bold={item.bold}
                disabled={!editable || !!item.disabled}
                tier={item.tier}
                label={item.label}
                active={isActive}
                renderLabel={item.render}
                labelHighlight={_labelHighlight}
                hasChildren={(item.children?.length || 0) > 0}
                onPressSwitcherIcon={_onPressSwitcherIcon}
              />
            )
          }}
        />
      )}
    </>
  )
}

export default Tree
