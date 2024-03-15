/**
 * title: 按钮组
 * description: 通过 `buttons` 放置按钮，配合 `count` 动态限制最大个数。
 */
import {
  ButtonBar,
  Space,
  ButtonBarProps,
} from '@fruits-chain/react-native-xiaoshu'

const buttons: ButtonBarProps['buttons'] = [
  {
    text: '按钮1',
    type: 'primary',
    onPress: () => {
      console.log('??')
    },
  },
  {
    text: '按钮2',
    type: 'hazy',
    onPress: () => {
      console.log('??')
    },
  },
  {
    text: '次要按钮3',
    type: 'hazy',
    onPress: () => {
      console.log('??')
    },
  },
  {
    text: '次要按钮4',
    type: 'primary',
    onPress: () => {
      console.log('??')
    },
  },
  {
    text: '次要按钮5',
    type: 'primary',
    onPress: () => {
      console.log('??')
    },
  },
]

const ButtonBarButtons = () => {
  return (
    <Space tail head>
      <ButtonBar safeAreaInsetBottom={false} buttons={buttons} />

      <ButtonBar safeAreaInsetBottom={false} buttons={buttons} count={3} />
    </Space>
  )
}

export default ButtonBarButtons
