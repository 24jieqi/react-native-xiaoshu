import { useCallback, useState, useRef } from 'react'
import type { LayoutChangeEvent } from 'react-native'

interface CurrentMargin {
  marginBottom: boolean
  marginRight: boolean
}

const isLastCol = (total: number, colCount: number, index: number) => {
  const totalCol = Math.ceil(total / colCount)
  const col = Math.ceil((index + 1) / colCount)

  return totalCol === col
}

const useImageLayout = () => {
  const [width, setWidth] = useState(0)
  const Size = useRef<Record<string, number>>({})
  const Margin = useRef<Record<string, CurrentMargin>>({})

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setWidth(Math.floor(e.nativeEvent.layout.width))
  }, [])

  const getSize = useCallback(
    (colCount: number, colGap: number) => {
      const sizeKey = [width, colCount, colGap].join('_')

      if (!Size.current[sizeKey]) {
        Size.current[sizeKey] = (width - (colCount - 1) * colGap) / colCount
      }

      return Size.current[sizeKey]
    },
    [width],
  )

  /**
   * 获取当前的尺寸、边距
   */
  const getMargin = useCallback(
    (total: number, colCount: number, index: number): CurrentMargin => {
      const cacheKey = [total, colCount, index].join('_')

      if (!Margin.current[cacheKey]) {
        const marginRight = (index + 1) % colCount === 0 ? false : true
        const marginBottom = !isLastCol(total, colCount, index)

        Margin.current[cacheKey] = {
          marginRight,
          marginBottom,
        }
      }

      return Margin.current[cacheKey]
    },
    [],
  )

  return [onLayout, getSize, getMargin] as const
}

export default useImageLayout
