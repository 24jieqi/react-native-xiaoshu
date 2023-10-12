/* eslint-disable no-promise-executor-return */
import {
  createContext,
  useContext,
  type FC,
  useRef,
  useState,
  useMemo,
} from 'react'
import type { View, ScrollView } from 'react-native'
import { findNodeHandle } from 'react-native'

const AnchorsContext = createContext({
  targetRefs: {},
  scrollRef: {
    current: null,
  },
  registerTarget: (target, ref) => {},
  registerScroll: ref => {},
  getCurrentKey: (offsetY: number) => {
    return new Promise<string>(resolve => resolve(''))
  },
  scrollTo: (name, { animated = true, offset = -10 } = {}) => {
    return new Promise(resolve =>
      resolve({
        success: false,
        message: 'Missing ElevatorNav provider.',
      }),
    )
  },
})
export const useAnchorsContext = () => useContext(AnchorsContext)
function getScrollableNode(ref) {
  if (ref.current === null) {
    return null
  }
  if (
    'scrollTo' in ref.current ||
    'scrollToOffset' in ref.current ||
    'scrollResponderScrollTo' in ref.current
  ) {
    // This is already a scrollable node.
    return ref.current
  } else if ('getScrollResponder' in ref.current) {
    // If the view is a wrapper like FlatList, SectionList etc.
    // We need to use `getScrollResponder` to get access to the scroll responder
    return ref.current.getScrollResponder()
  } else if ('getNode' in ref.current) {
    // When a `ScrollView` is wraped in `Animated.createAnimatedComponent`
    // we need to use `getNode` to get the ref to the actual scrollview.
    // Note that `getNode` is deprecated in newer versions of react-native
    // this is why we check if we already have a scrollable node above.
    return ref.current.getNode()
  } else {
    return ref.current
  }
}
const ElevatorNavProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const [targetRefs, setTargetRefs] = useState<{ [key: string]: View }>({})

  // const targetRefs = useRef<{ [key: string]: View }>({})
  const scrollRef = useRef<ScrollView>(null)
  const value = useMemo(() => {
    return {
      targetRefs,
      scrollRef,
      registerTarget: (target, ref) => {
        // console.log({ target, a: targetRefs })
        setTargetRefs(val => ({ ...val, [target]: ref }))
        // targetRefs = { ...targetRefs, [target]: 1 }
      },
      registerScroll: ref => {
        if (ref) {
          scrollRef.current = ref
        }
      },
      getCurrentKey: (offsetY: number) => {
        return new Promise<string>(resolve => {
          const node = scrollRef.current && findNodeHandle(scrollRef.current)
          if (!node) {
            return resolve('')
          }

          let topsPromise = []

          for (const key in targetRefs) {
            if (Object.hasOwn(targetRefs, key)) {
              topsPromise.push(
                new Promise(resolveFun => {
                  targetRefs?.[key].measureLayout(
                    node,
                    (left, top) => {
                      resolveFun({ key, top })
                    },
                    () => {},
                  )
                }),
              )
            }
          }
          Promise.all(topsPromise).then(res => {
            let i = 0
            for (; i < res.length; i++) {
              if (offsetY < res[i]?.top) {
                break
              }
            }

            resolve(res?.[i]?.key || '')
          })
          // console.log(tops)
        })
      },
      scrollTo: (name, { animated = true, offset = -10 } = {}) => {
        return new Promise(resolve => {
          const node = scrollRef.current && findNodeHandle(scrollRef.current)

          if (!node) {
            return resolve({
              success: false,
              message: 'Scroll ref does not exist. Will not scroll to view.',
            })
          }
          if (!targetRefs?.[name]) {
            resolve({
              success: false,
              message:
                'Anchor ref ' +
                name +
                ' does not exist. It will not scroll. Please make sure to use the ElevatorNav provided, or use the registerScroll function for your own ScrollView.',
            })
          }

          targetRefs?.[name].measureLayout(
            node,
            (left, top) => {
              requestAnimationFrame(() => {
                const scrollY = top

                const scrollable = getScrollableNode(scrollRef)
                let scrollTo = scrollY
                scrollTo += offset
                scrollTo = Math.max(scrollTo, 0)

                const key = 'y'
                if ('scrollTo' in scrollable) {
                  scrollable.scrollTo({
                    [key]: scrollTo,
                    animated,
                  })
                } else if ('scrollToOffset' in scrollable) {
                  scrollable.scrollToOffset({
                    offset: scrollTo,
                    animated,
                  })
                } else if ('scrollResponderScrollTo' in scrollable) {
                  scrollable.scrollResponderScrollTo({
                    [key]: scrollTo,
                    animated,
                  })
                }
                resolve({ success: true })
              })
            },
            () => {
              resolve({
                success: false,
                message: 'Failed to measure target node.',
              })
            },
          )
        })
      },
    }
  }, [targetRefs, scrollRef])
  return (
    <AnchorsContext.Provider value={value}>{children}</AnchorsContext.Provider>
  )
}
export default ElevatorNavProvider
