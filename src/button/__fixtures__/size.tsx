/**
 * title: 按钮尺寸
 * desc: xl、l、m、s、xs
 */

import React, { memo } from 'react'

import {
  Button,
  CellGroup,
  Space,
  useTheme,
} from '@fruits-chain/react-native-xiaoshu'

const ButtonSize: React.FC = () => {
  const THEME_VAR = useTheme()

  return (
    <CellGroup title="按钮尺寸" bodyPaddingHorizontal>
      <Space tail>
        <Button
          type="primary"
          size="xl"
          text={`xl ${THEME_VAR.button_xl_height}`}
        />
        <Button
          type="primary"
          size="l"
          text={`l ${THEME_VAR.button_l_height}`}
        />
        <Button
          type="primary"
          size="m"
          text={`m ${THEME_VAR.button_m_height}`}
        />
        <Button
          type="primary"
          size="s"
          text={`s ${THEME_VAR.button_s_height}`}
        />
        <Button
          type="primary"
          size="xs"
          text={`xs ${THEME_VAR.button_xs_height}`}
        />
      </Space>
      <Space direction="horizontal">
        <Button
          type="primary"
          size="xl"
          text={`xl ${THEME_VAR.button_xl_height}`}
        />
        <Button
          type="primary"
          size="l"
          text={`l ${THEME_VAR.button_l_height}`}
        />
        <Button
          type="primary"
          size="m"
          text={`m ${THEME_VAR.button_m_height}`}
        />
        <Button
          type="primary"
          size="s"
          text={`s ${THEME_VAR.button_s_height}`}
        />
        <Button
          type="primary"
          size="xs"
          text={`xs ${THEME_VAR.button_xs_height}`}
        />
      </Space>
      <Space>
        <Button round size="xs" text="round" />
        <Button round size="s" text="round" />
        <Button round text="round" />
        <Button round size="l" text="round" />
        <Button round size="xl" text="round" />
        <Button square text="square" />
      </Space>
    </CellGroup>
  )
}

export default memo(ButtonSize)
