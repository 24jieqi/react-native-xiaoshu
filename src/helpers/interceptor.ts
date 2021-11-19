import { isPromise } from './typeof'

export type Interceptor = (
  ...args: any[]
) => Promise<boolean> | boolean | undefined

const noop = () => {}

export function callInterceptor(
  interceptor: Interceptor | undefined,
  {
    args = [],
    done,
    canceled,
  }: {
    args?: unknown[]
    done: () => void
    canceled?: () => void
  },
) {
  if (interceptor) {
    const returnVal = interceptor.apply(null, args)

    if (isPromise(returnVal)) {
      returnVal
        .then(value => {
          if (value) {
            done()
          } else if (canceled) {
            canceled()
          }
        })
        .catch(noop)
    } else if (returnVal) {
      done()
    } else if (canceled) {
      canceled()
    }
  } else {
    done()
  }
}
