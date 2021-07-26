import { useState, useLayoutEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface UseSafeHeightParams {
  top?: boolean
  bottom?: boolean
}

const useSafeHeight = ({
  top = true,
  bottom = true,
}: UseSafeHeightParams = {}) => {
  const insets = useSafeAreaInsets()
  const insetTop = top ? insets.top : 0
  const insetBottom = bottom ? insets.bottom : 0
  const dimensionsWindow = useWindowDimensions()
  const [height, setHeight] = useState(
    dimensionsWindow.height - insetTop - insetBottom,
  )

  useLayoutEffect(() => {
    setHeight(dimensionsWindow.height - insetTop - insetBottom)
  }, [dimensionsWindow.height, insetTop, insetBottom])

  return height
}

export default useSafeHeight
