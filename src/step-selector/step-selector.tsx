import { SuccessOutline } from '@fruits-chain/icons-react-native'
import groupBy from 'lodash/groupBy'
import isNil from 'lodash/isNil'
import omit from 'lodash/omit'
import React, { useMemo, useEffect, memo, useRef, useCallback } from 'react'
import { View, Text, ScrollView } from 'react-native'

import Cell from '../cell/cell'
import { useControllableValue, usePersistFn, useSafeHeight } from '../hooks'
import useState from '../hooks/useStateUpdate'
import Loading from '../loading'
import Locale from '../locale'
import Popup from '../popup/popup'
import PopupHeader from '../popup/popup-header'
import Theme from '../theme'

import type {
  StepSelectorProps,
  OptionData,
  RequestResponseData,
} from './interface'
import StepSelectorLine from './line'
import { varCreator, styleCreator } from './style'

type LocalState<T> = {
  index: number
  selected: OptionData<T>[]
  loading: boolean
  responseData: RequestResponseData<T>[]
}

const defaultLoading = <Loading vertical />

function StepSelector<T = number>({
  theme,
  title,
  safeAreaInsetTop,
  round = true,
  onPressClose,
  request,
  loading = defaultLoading,

  ...resetProps
}: StepSelectorProps<T>) {
  const safeHeight = useSafeHeight({ top: safeAreaInsetTop })
  const locale = Locale.useLocale().StepSelector
  const [CV, STYLES] = Theme.useStyle({
    varCreator,
    styleCreator,
    theme,
  })
  const requestPersistFn = usePersistFn(request)
  const ScrollViewRef = useRef<ScrollView>(null)
  const [value, onChange] = useControllableValue<T[]>(resetProps, {
    defaultValue: [],
  })
  const [state, setState] = useState<LocalState<T>>({
    index: 0,
    selected: [],
    loading: false,
    responseData: [],
  })

  const responseDataRef = useRef<Record<string, RequestResponseData<T>>>({})
  const onPressRef = useRef(false)

  const fetchOption = useCallback(
    async (parentId: T, index: number): Promise<RequestResponseData<T>> => {
      const c = responseDataRef.current[`${parentId}`]

      if (c) {
        return c
      }

      // 请求
      const data = await requestPersistFn(parentId, index)

      responseDataRef.current[`${parentId}`] = data

      return data
    },
    [requestPersistFn],
  )

  const optionScrollToTop = useCallback(() => {
    ScrollViewRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: false,
    })
  }, [])

  useEffect(() => {
    // 构建已选的数据
    if (resetProps.visible) {
      setState({
        loading: true,
      })

      const _value = [...value, null]

      Promise.all(
        _value.map((_, index) => {
          return fetchOption(value[index - 1], index)
        }),
      ).then(datas => {
        const isEnd = !datas[datas.length - 1].options.length
        const __value = isEnd ? [...value] : _value
        const selected = __value
          .map((v, index) => {
            const opts = datas[index].options
            // eslint-disable-next-line max-nested-callbacks
            const vIndex = opts.findIndex(op => op.value === v)
            return opts[vIndex]
          })
          .filter(v => !isNil(v))

        setState({
          loading: false,
          index: __value.length - 1,
          responseData: datas,
          selected: selected,
        })

        if (datas[datas.length - 1].options.length) {
          optionScrollToTop()
        }

        if (isEnd && onPressRef.current) {
          onPressRef.current = false
          onChange(value, selected, true)
        }
      })
    }
  }, [resetProps.visible, fetchOption, value, optionScrollToTop, onChange])

  const { placeholder, options, groupOption } = useMemo(() => {
    const d = state.responseData[state.index] || {
      options: [],
      placeholder: '',
    }

    const _groupOption = groupBy(d.options, item => item.index)

    return {
      placeholder: d.placeholder,
      options: d.options,
      groupOption: Object.keys(_groupOption)
        .sort()
        .map(key => {
          return _groupOption[key]
        }),
    }
  }, [state.index, state.responseData])

  return (
    <Popup
      {...omit(resetProps, ['value', 'defaultValue', 'onChange'])}
      position="bottom"
      round={round}
      safeAreaInsetBottom>
      <View style={{ height: safeHeight }}>
        <PopupHeader title={title ?? locale.title} onClose={onPressClose} />

        {state.selected.map((item, index) => {
          return (
            <Cell
              key={`${item?.value}`}
              innerStyle={STYLES.selected_cell}
              title={item?.label || state.responseData[index].placeholder}
              titleExtra={
                <StepSelectorLine
                  index={index}
                  total={state.selected.length}
                  active={!!item?.label}
                />
              }
              titleTextStyle={[
                STYLES.selected_cell_title_text,
                index === state.index && item?.label
                  ? STYLES.option_text_active
                  : null,
              ]}
              isLink
              disabled={state.loading}
              divider={index === state.selected.length - 1}
              onPress={() => {
                setState({
                  index,
                })
                optionScrollToTop()
              }}
            />
          )
        })}

        {options.length && placeholder ? (
          <Cell
            titleTextStyle={STYLES.placeholder_text}
            title={placeholder}
            divider={false}
          />
        ) : null}

        {state.loading && value.length === 0 ? loading : null}

        <ScrollView bounces={false} ref={ScrollViewRef}>
          {groupOption.map(group => {
            return group.map((item, itemIndex) => {
              const selected = state.selected[state.index]
              const isActive = item.value === selected?.value

              return (
                <Cell
                  key={`${item.value}`}
                  disabled={state.loading}
                  titleExtra={
                    <Text style={STYLES.option_index_text}>
                      {itemIndex === 0 ? item.index : null}
                    </Text>
                  }
                  title={item.label}
                  titleTextStyle={isActive ? STYLES.option_text_active : null}
                  valueExtra={
                    isActive ? (
                      <SuccessOutline color={CV.step_selector_active_color} />
                    ) : null
                  }
                  divider={false}
                  onPress={() => {
                    // 根据当前的 index 处理数据
                    const sliceEnd = state.index
                    const newValue = value.slice(0, sliceEnd)

                    const option = newValue.map((v, index) => {
                      const opts = state.responseData[index].options
                      // eslint-disable-next-line max-nested-callbacks
                      const vIndex = opts.findIndex(op => op.value === v)
                      return opts[vIndex]
                    })

                    onChange([...newValue, item.value], [...option, item])

                    onPressRef.current = true
                  }}
                />
              )
            })
          })}
        </ScrollView>
      </View>
    </Popup>
  )
}

export default memo(StepSelector) as <T = number>(
  p: StepSelectorProps<T>,
) => React.ReactElement
