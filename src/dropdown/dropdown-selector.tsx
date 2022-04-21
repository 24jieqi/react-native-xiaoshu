import isNil from 'lodash/isNil'
import omit from 'lodash/omit'
import React, { useCallback, useMemo, useRef, useEffect, memo } from 'react'
import type { ViewStyle, LayoutChangeEvent } from 'react-native'
import {
  TouchableWithoutFeedback,
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  Keyboard,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import Cell from '../cell'
import {
  varCreator as varCreatorCell,
  styleCreator as styleCreatorCell,
} from '../cell/style'
import { getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import useState from '../hooks/useStateUpdate'
import IconSuccessOutline from '../icon/success'
import Popup from '../popup/popup'
import Portal from '../portal'
import Search from '../search'
import Space from '../space'
import Theme from '../theme'

import DropdownBadge from './dropdown-badge'
import type {
  DropdownItemOption,
  DropdownSelectorMethodProps,
} from './interface'
import { varCreator, styleCreator } from './style'

const POPUP_STYLE: ViewStyle = { backgroundColor: 'transparent' }

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
  divider,
  search,
  onClosed,
  activeColor,
}: DropdownSelectorMethodProps<T>) => {
  const insets = useSafeAreaInsets()
  const { height: windowHeight } = useWindowDimensions()
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const CV_CELL = Theme.createVar(TOKENS, varCreatorCell)
  const STYLES = Theme.createStyle(CV, styleCreator)
  const STYLES_CELL = Theme.createStyle(CV_CELL, styleCreatorCell)

  activeColor = getDefaultValue(activeColor, CV.dropdown_active_color)

  const [state, setState] = useState({
    active: false,
    ctxMaxHeight: 0,
    keyword: '',
  })
  const ScrollViewRef = useRef<ScrollView>(null)
  const searchOptions = useMemo(() => {
    if (!state.keyword) {
      return []
    }

    const opts: DropdownItemOption<T>[] = []
    const findX = (list: DropdownItemOption<T>[]) => {
      list.forEach(item => {
        if (item.label.indexOf(state.keyword) > -1) {
          opts.push(omit(item, ['children']))
        }

        if (item.children?.length) {
          findX(item.children)
        }
      })
    }

    findX(options)

    return opts
  }, [state.keyword, options])

  useEffect(() => {
    setState({
      active: true,
    })
  }, [])

  const onPressShade = useCallback(() => {
    setState({
      active: false,
      keyword: '',
    })
    Keyboard.dismiss()
    onCancel?.()
  }, [onCancel])

  const onRequestClose = usePersistFn(() => {
    onPressShade()
    return true
  })

  /** 弹出层可以的最大高度 */
  const onLayoutPlace = useCallback((e: LayoutChangeEvent) => {
    setState({
      ctxMaxHeight: e.nativeEvent.layout.height,
    })
  }, [])

  const genOnPressCell = (o: DropdownItemOption<T>) => () => {
    setState({
      active: false,
      keyword: '',
    })
    Keyboard.dismiss()
    // onChange?.(o.value, o)
    onConfirm?.(o.value, o)
  }

  const onSearch = useCallback((t: string) => {
    setState({
      keyword: t,
    })
    ScrollViewRef.current?.scrollTo({
      x: 0,
      y: 0,
    })
  }, [])

  const [_isBottom, _shadeStyles, _boxStyles] = useMemo(() => {
    const topHeight = targetPageY - insets.top
    const bottomHeight =
      windowHeight - targetPageY - targetHeight - insets.bottom
    const isBottom = topHeight >= bottomHeight

    const shadeStyles: ViewStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      // backgroundColor: '#f30', // to test ui

      // state.shadeStyle,
      ...(isBottom
        ? { top: targetPageY, bottom: 0 }
        : { top: 0, height: targetPageY + targetHeight }),
    }

    const boxStyles: ViewStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex,
      overflow: 'hidden',
      // backgroundColor: '#000', // to test ui

      // state.ctxStyle,
      ...(isBottom
        ? { top: 0, height: targetPageY }
        : { top: targetPageY + targetHeight, bottom: 0 }),
    }

    return [isBottom, shadeStyles, boxStyles]
  }, [
    insets.bottom,
    insets.top,
    targetHeight,
    targetPageY,
    windowHeight,
    zIndex,
  ])

  const placeholderJSX = (
    <TouchableWithoutFeedback onPress={onPressShade}>
      <View style={{ height: _isBottom ? insets.top : insets.bottom }} />
    </TouchableWithoutFeedback>
  )

  const renderOption = (cs: DropdownItemOption<T>[]) => {
    return cs.map(item => {
      const cellJSX = (
        <Cell
          key={`${item.value}`}
          divider={divider}
          title={
            !isNil(item.badge) && item.badge !== false ? (
              <Space direction="horizontal" align="center" gapVertical={0}>
                <Text style={STYLES_CELL.title_text}>{item.label}</Text>

                <DropdownBadge count={item.badge} />
              </Space>
            ) : (
              item.label
            )
          }
          valueExtra={
            item.value === defaultValue ? (
              <IconSuccessOutline size={24} color={activeColor} />
            ) : null
          }
          onPress={genOnPressCell(item)}
        />
      )

      if (item.children?.length) {
        return (
          <React.Fragment key={`${item.value}`}>
            {cellJSX}
            <View style={STYLES.item_cell_inner}>
              {renderOption(item.children)}
            </View>
          </React.Fragment>
        )
      }

      return cellJSX
    })
  }

  return (
    <>
      <TouchableWithoutFeedback
        onPress={closeOnPressOutside ? onPressShade : undefined}>
        <View style={_shadeStyles} />
      </TouchableWithoutFeedback>

      <View
        style={_boxStyles}
        pointerEvents="box-none"
        onLayout={onLayoutPlace}>
        <Popup
          visible={state.active}
          style={POPUP_STYLE}
          position={_isBottom ? 'bottom' : 'top'}
          duration={duration}
          onPressOverlay={onPressShade}
          onClosed={onClosed}
          onRequestClose={onRequestClose}>
          <View style={{ maxHeight: state.ctxMaxHeight }}>
            {_isBottom ? placeholderJSX : null}

            {search ? <Search autoSearch onSearch={onSearch} /> : null}

            <ScrollView
              bounces={false}
              ref={ScrollViewRef}
              keyboardShouldPersistTaps="handled">
              {state.keyword
                ? searchOptions.length
                  ? renderOption(searchOptions)
                  : null
                : renderOption(options)}
            </ScrollView>

            {!_isBottom ? placeholderJSX : null}
          </View>
        </Popup>
      </View>
    </>
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
