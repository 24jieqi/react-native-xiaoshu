/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import type React from 'react'
import { Component } from 'react'

import type { PortalMethods } from './portal-host'

export type PortalConsumerProps = {
  manager: PortalMethods
  children: React.ReactNode
}

export default class PortalConsumer extends Component<PortalConsumerProps> {
  key: any

  componentDidMount() {
    this.checkManager()

    // // Delay updating to prevent React from going to infinite loop
    // await Promise.resolve()

    this.key = this.props.manager.mount(this.props.children)
  }

  componentDidUpdate() {
    this.checkManager()

    this.props.manager.update(this.key, this.props.children)
  }

  componentWillUnmount() {
    this.checkManager()

    this.props.manager.unmount(this.key)
  }

  render() {
    return null
  }

  private checkManager() {
    if (!this.props.manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Provider` component from `@fruits-chain/react-native-xiaoshu`.\n\n' +
          "Please read our getting-started guide and make sure you've followed all the required steps.\n\n" +
          'https://24jieqi.github.io/xiaoshu-doc/component/basic/portal',
      )
    }
  }
}
