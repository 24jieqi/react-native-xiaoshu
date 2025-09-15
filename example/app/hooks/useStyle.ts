import { Theme } from '@fruits-chain/react-native-xiaoshu';
import type { TokensType } from '@fruits-chain/react-native-xiaoshu';

import { useThemeDark } from '~/contexts/theme';

type Creator<T> = (T: TokensType, isDark: boolean) => T;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type KeyType = [TokensType, boolean, Creator<any>];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyleMap: Map<KeyType, any> = new Map();

const useStyle = <T>(creator: Creator<T>): T => {
  const TOKENS = Theme.useThemeTokens();
  const isThemeDark = useThemeDark();

  let myStyle: T;

  for (const [key, value] of StyleMap) {
    if (key[2] === creator) {
      if (key[0] === TOKENS && key[1] === isThemeDark) {
        myStyle = value;
      } else {
        StyleMap.delete(key);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (!myStyle) {
    myStyle = creator(TOKENS, isThemeDark);

    StyleMap.set([TOKENS, isThemeDark, creator], myStyle);
  }

  return myStyle;
};

export default useStyle;
