import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

jest.useFakeTimers();

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  const timing = (value, config) => {
    const animation = {
      start: callback => {
        setTimeout(() => {
          value.setValue(config.toValue);
          if (callback) {
            callback({ finished: true });
          }
        }, 0);
      },
      value,
      config,
      stop: () => {
        throw new Error('Not implemented');
      },
      reset: () => {
        throw new Error('Not implemented');
      },
    };

    return animation;
  };

  const loop = _ => {
    return {
      start: callback => {
        setTimeout(() => {
          if (callback) {
            callback({ finished: true });
          }
        }, 0);
      },
      stop: () => {
        throw new Error('Not implemented');
      },
      reset: () => {
        throw new Error('Not implemented');
      },
    };
  };

  const parallel = animations => ({
    start: callback => {
      const results = animations.map(animation => {
        animation.start();
        return { finished: true };
      });
      callback?.({ finished: results.every(result => result.finished) });
    },
  });

  RN.Animated.timing = timing;
  RN.Animated.loop = loop;
  RN.Animated.parallel = parallel;

  return RN;
});
