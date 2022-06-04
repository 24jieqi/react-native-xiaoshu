import { attachPropertiesToComponent } from '../helpers'

import Skeleton from './skeleton'
import SkeletonAvatar from './skeleton-avatar'
import SkeletonParagraph from './skeleton-paragraph'
import { varCreator } from './style'

export default attachPropertiesToComponent(Skeleton, {
  varCreator,
  Avatar: SkeletonAvatar,
  Paragraph: SkeletonParagraph,
})
