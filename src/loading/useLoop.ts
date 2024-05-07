import { useEffect } from 'react'
import { Animated } from 'react-native'

const useLoop = (
  AnimatedValue: Animated.Value,
  initValue: number,
  config: Pick<
    Animated.TimingAnimationConfig,
    'toValue' | 'duration' | 'easing'
  >,
) => {
  useEffect(() => {
    let stop = false
    const action = Animated.timing(AnimatedValue, {
      toValue: config.toValue,
      duration: config.duration,
      easing: config.easing,
      useNativeDriver: true,
    })

    // Animated.loop 暂时没找到每次动画结束后如何重置初始值，暂时采用这个方案
    // 这个方案的问题在于很多动画一起就会变得卡顿
    const loop = () => {
      if (stop) {
        return
      }

      AnimatedValue.setValue(initValue)

      action.start(({ finished }) => {
        if (finished) {
          loop()
        }
      })
    }

    loop()

    return () => {
      stop = true

      action.stop()
    }
  }, [AnimatedValue, initValue, config.duration, config.toValue, config.easing])
}

export default useLoop
