import { CircleOutline, SuccessFill } from '@fruits-chain/icons-react-native';
import React, { memo } from 'react';

import { getDefaultValue } from '../helpers';
import Theme from '../theme';

import type { CheckboxIconProps } from './interface';
import { varCreator } from './style';

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  theme,
  active,
  activeColor,
  inactiveColor,
  size,
  disabled,
  ...restProps
}) => {
  const [CV] = Theme.useStyle({
    varCreator,
    theme,
  });

  // 从配置中拿默认值
  const _size = getDefaultValue(size, CV.checkbox_icon_size);
  const _activeColor = getDefaultValue(
    activeColor,
    CV.checkbox_checked_icon_color,
  );
  const _inactiveColor = getDefaultValue(inactiveColor, CV.checkbox_icon_color);

  if (active) {
    return (
      <SuccessFill
        {...restProps}
        size={_size}
        color={
          disabled ? CV.checkbox_checked_icon_disabled_color : _activeColor
        }
        disabled={disabled}
      />
    );
  }

  return (
    <CircleOutline
      {...restProps}
      size={size}
      disabled={disabled}
      color={disabled ? CV.checkbox_icon_disabled_color : _inactiveColor}
    />
  );
};

export default memo(CheckboxIcon);
