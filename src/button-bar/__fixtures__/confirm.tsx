/**
 * title: 咨询按钮组
 * description: 在内部放置两个以上按钮，其中一个有相对更大的空间占比。
 */
import { ButtonBar, Button, Space } from '@fruits-chain/react-native-xiaoshu'

const ButtonBarConfirm = () => {
  return (
    <Space tail head>
      <ButtonBar.Confirm
        safeAreaInsetBottom={false}
        cancel={<Button text="取消" type="hazy" />}>
        <Button text="确定" type="primary" />
      </ButtonBar.Confirm>

      <ButtonBar.Confirm
        safeAreaInsetBottom={false}
        cancel={[<Button key="1" text="取消" type="hazy" />]}>
        <Button text="确定" type="primary" />
      </ButtonBar.Confirm>

      <ButtonBar.Confirm
        safeAreaInsetBottom={false}
        cancel={[
          <Button key="1" text="全不选" type="hazy" />,
          <Button key="2" text="取消" type="hazy" />,
        ]}>
        <Button text="确定" type="primary" />
      </ButtonBar.Confirm>
    </Space>
  )
}

export default ButtonBarConfirm
