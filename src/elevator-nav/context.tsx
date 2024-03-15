import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react'
import type {
  View,
  ScrollView,
  ScrollViewProps,
  HostComponent,
} from 'react-native'

import useDebounceFn from '../hooks/useDebounceFn'

type TargetRef = React.MutableRefObject<View>
type ScrollViewRef = React.MutableRefObject<ScrollView>
type Elevator = {
  label: string
  top: number
}

interface ElevatorContextState {
  // targetRefMap: Record<string, TargetRef>
  // scrollRef: ScrollViewRef
  elevator: Elevator[]
  registerTarget: (id: string, ref: TargetRef) => void
  cancelTarget: (id: string) => void
  registerScroll: (ref: ScrollViewRef) => void
}

const ElevatorContext = createContext<ElevatorContextState>({
  // targetRefMap: {},
  // scrollRef: {
  //   current: null,
  // },
  elevator: [],
  registerTarget: function () {
    throw new Error('Function not implemented.')
  },
  cancelTarget: function (): void {
    throw new Error('Function not implemented.')
  },
  registerScroll: function () {
    throw new Error('Function not implemented.')
  },
})

export const useElevator = () => useContext(ElevatorContext)

const getTargetRelativeLayout = (target: TargetRef, scroll: ScrollViewRef) =>
  new Promise<{ left: number; top: number; width: number; height: number }>(
    (resolve, reject) => {
      target.current.measureLayout(
        scroll.current as unknown as React.ElementRef<
          HostComponent<ScrollViewProps>
        >,
        // eslint-disable-next-line max-params
        (left: number, top: number, width: number, height: number) => {
          resolve({ left, top, width, height })
        },
        reject,
      )
    },
  )

export const ElevatorContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const TargetRefMap = useRef<Record<string, TargetRef | undefined>>({})
  const ScrollRef = useRef<ScrollViewRef>(null)
  const [elevator, setElevator] = useState<Elevator[]>([])
  const { run: initNav } = useDebounceFn(
    () => {
      const refs = Object.keys(TargetRefMap.current)
        .map(key => {
          return {
            label: key,
            ref: TargetRefMap.current[key],
          }
        })
        .filter(item => !!item.ref)

      Promise.all(
        refs.map(item => getTargetRelativeLayout(item.ref, ScrollRef.current)),
      )
        .then(datas => {
          setElevator(
            datas
              .map(({ top }, index) => {
                return {
                  label: refs[index].label,
                  top,
                }
              })
              .sort((a, b) => a.top - b.top),
          )
        })
        .catch(() => {
          setElevator([])
        })
    },
    { wait: 200, leading: false, trailing: true },
  )
  const registerScroll = useCallback(
    (ref: ScrollViewRef) => {
      if (!ScrollRef.current || ScrollRef.current.current !== ref.current) {
        ScrollRef.current = ref
        initNav()
      }
    },
    [initNav],
  )
  const registerTarget = useCallback(
    (id: string, ref: TargetRef) => {
      TargetRefMap.current[id] = ref
      initNav()
    },
    [initNav],
  )
  const cancelTarget = useCallback(
    (id: string) => {
      TargetRefMap.current[id] = undefined
      initNav()
    },
    [initNav],
  )

  const value = useMemo<ElevatorContextState>(() => {
    return {
      elevator,
      registerScroll,
      registerTarget,
      cancelTarget,
    }
  }, [cancelTarget, elevator, registerScroll, registerTarget])

  return (
    <ElevatorContext.Provider value={value}>
      {children}
    </ElevatorContext.Provider>
  )
}
