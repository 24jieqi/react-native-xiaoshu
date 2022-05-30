import { attachPropertiesToComponent } from '../helpers'

import Card from './card'
import CardBody from './card-body'

export default attachPropertiesToComponent(Card, {
  Body: CardBody,
})
