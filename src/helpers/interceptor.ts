import isUndefined from 'lodash/isUndefined'
import noop from 'lodash/noop'

import { isPromise } from './typeof'

export type Interceptor = (
  ...args: any[]
) => // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
Promise<boolean> | boolean | undefined | Promise<void> | void

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
          if (isUndefined(value) || value) {
            done()
          } else if (canceled) {
            canceled()
          }
        })
        .catch(noop)
    } else if (isUndefined(returnVal) || returnVal) {
      done()
    } else if (canceled) {
      canceled()
    }
  } else {
    done()
  }
}
