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
    let action: Animated.CompositeAnimation

    const loop = () => {
      if (stop) {
        return
      }

      action = Animated.timing(AnimatedValue, {
        toValue: config.toValue,
        duration: config.duration,
        easing: config.easing,
        useNativeDriver: true,
      })

      AnimatedValue.setValue(initValue)

      action.start(({ finished }) => {
        if (finished) {
          loop()
        }
      })
    }

    loop()
    ;() => {
      stop = true

      action && action.stop()
    }
  }, [AnimatedValue, initValue, config.duration, config.toValue, config.easing])
}

export default useLoop
