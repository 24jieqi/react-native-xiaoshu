import type React from 'react'
import { Component } from 'react'
import type { PortalMethods } from './portal-host'

export type PortalConsumerProps = {
  manager: PortalMethods
  children: React.ReactNode
}

export default class PortalConsumer extends Component<PortalConsumerProps> {
  _key: any
  componentDidMount() {
    if (!this.props.manager) {
      throw new Error(
        'Looks like you forgot to wrap your root component with `Provider` component from `react-native-xiaoshu`.\n\n',
      )
    }

    this._key = this.props.manager.mount(this.props.children)
  }

  componentDidUpdate() {
    this.props.manager.update(this._key, this.props.children)
  }

  componentWillUnmount() {
    this.props.manager.unmount(this._key)
  }

  render() {
    return null
  }
}
