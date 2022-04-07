import { useState, useLayoutEffect } from 'react'
import { useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface UseSafeHeightParams {
  top?: boolean | number
  bottom?: boolean | number
}

const getDefaultValue = (v: boolean | number | undefined, dv: number) => {
  if (typeof v === 'number') {
    return v
  }

  if (typeof v === 'boolean' && v) {
    return dv
  }

  return 0
}

const useSafeHeight = ({
  top = true,
  bottom = true,
}: UseSafeHeightParams = {}) => {
  const insets = useSafeAreaInsets()
  const insetTop = getDefaultValue(top, insets.top)
  const insetBottom = getDefaultValue(bottom, insets.bottom)
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
