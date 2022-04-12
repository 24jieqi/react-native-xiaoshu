import React, { useState, useCallback, useEffect, memo } from 'react'
import type { ViewStyle } from 'react-native'
import { View, Text } from 'react-native'

import Button from '../button'
import { getDefaultValue } from '../helpers'
import { usePersistFn } from '../hooks'
import Result from '../result'
import Space from '../space'
import Theme from '../theme'

import type { ProgressPageProps } from './interface'
import Progress from './progress'
import { varCreator, styleCreator } from './style'

const ProgressPage: React.FC<ProgressPageProps> = ({
  children,
  loading: loadingOut,
  backgroundColor,
  defaultPercentage = 10,
  fail,
  failMessage = '加载失败，请稍后再试～',
  failIcon,
  onPressReload,
}) => {
  const TOKENS = Theme.useThemeTokens()
  const CV = Theme.createVar(TOKENS, varCreator)
  const STYLES = Theme.createStyle(CV, styleCreator)

  backgroundColor = getDefaultValue(
    backgroundColor,
    CV.progress_page_background_color,
  )

  const [state, setState] = useState({
    loading: loadingOut,
    percentage: defaultPercentage,
    duration: 0,
    animated: false,
  })

  const onAnimationEnd = useCallback(() => {
    if (state.percentage === 100) {
      setState(s => ({
        ...s,
        loading: false,
      }))
    }
  }, [state.percentage])

  const onPressReloadPersistFn = usePersistFn(() => {
    onPressReload?.()
  })

  useEffect(() => {
    setState(s => {
      const isReload = !s.loading && loadingOut

      if (isReload) {
        return {
          ...s,
          loading: loadingOut,
          percentage: defaultPercentage,
          duration: 0,
          animated: false,
        }
      }

      return { ...s }
    })
  }, [defaultPercentage, loadingOut])

  useEffect(() => {
    // 做一个延迟，避免上下两次操作状态合并在一个中，reload 的时候丢失过渡状态
    setTimeout(() => {
      setState(s => {
        return {
          ...s,
          percentage: loadingOut ? 90 : 100,
          duration: loadingOut ? 1000 : 100,
          animated: true,
        }
      })
    }, 0)
  }, [loadingOut])

  const placeholderStyle: ViewStyle = {
    flex: 1,
    backgroundColor: backgroundColor,
  }

  if (state.loading) {
    return (
      <View style={placeholderStyle}>
        <Progress
          percentage={state.percentage}
          showPivot={false}
          animated={state.animated}
          animationDuration={state.duration}
          onAnimationEnd={onAnimationEnd}
          square
        />
      </View>
    )
  }

  if (fail) {
    return (
      <Result
        style={STYLES.fail_page}
        status="warning"
        subtitle={
          <Space head gap="l" align="center">
            <Text style={STYLES.text}>{failMessage}</Text>
            {onPressReload ? (
              <Button
                style={STYLES.btn}
                text="点击刷新"
                onPress={onPressReloadPersistFn}
              />
            ) : null}
          </Space>
        }
        renderIcon={() => {
          if (failIcon) {
            return failIcon
          }

          return <Result.IconWarning />
        }}
      />
    )
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>
}

export default memo<typeof ProgressPage>(ProgressPage)
