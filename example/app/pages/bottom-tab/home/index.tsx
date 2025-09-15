import type { TokensType } from '@fruits-chain/react-native-xiaoshu';
import {
  Blank,
  Button,
  Space,
  Switch,
  Theme,
} from '@fruits-chain/react-native-xiaoshu';
import React from 'react';
import { Text, StyleSheet } from 'react-native';

import type { LocalLang } from '~/contexts/lang';
import { useLang } from '~/contexts/lang';
import type { LocalTheme } from '~/contexts/theme';
import { useTheme } from '~/contexts/theme';
import useStyle from '~/hooks/useStyle';
import Layout from '~/layouts/layout';
import type { BottomTabScreenProps } from '~/routes';

type ScreenProps = BottomTabScreenProps<'Home'>;

const themes: LocalTheme[] = ['system', 'light', 'dark'];
const themeOptions = themes.map(t => ({ value: t, label: t }));

const Home: React.FC<ScreenProps> = ({ navigation }) => {
  const { lang, setLang } = useLang();
  const { theme, setTheme } = useTheme();
  const { yellow_6 } = Theme.useThemeTokens();

  const Styles = useStyle(styleCreator);

  return (
    <Layout.Page headerShown={false}>
      <Blank top>
        <Space gap={16}>
          <Text style={Styles.title}>小暑</Text>
          <Text style={Styles.demo}>🌈 轻量、可靠的 React Native 组件库</Text>

          <Switch<LocalLang, LocalLang>
            activeValue="zh"
            inactiveValue="en"
            inactiveColor={yellow_6}
            value={lang}
            onChange={setLang}
            inactiveChildren="English"
            activeChildren="中文"
          />

          <Button.OptionGroup
            value={theme}
            options={themeOptions}
            onChange={(v, o) => setTheme(o[0].value)}
          />

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('DemoHome');
            }}>
            查看所有组件 DEMO
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('CustomHeaderRed');
            }}>
            自定义 header 红色 Header
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('CustomHeaderPrimary');
            }}>
            自定义 header 主题色 Header
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('PopupTextInput');
            }}>
            弹出层中有输入框
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('PopupComment');
            }}>
            弹出层评论输入框
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('Benchmark');
            }}>
            Benchmark
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('Issues85');
            }}>
            Issues85
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('Issues91');
            }}>
            Issues91
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('Issues93');
            }}>
            Issues93
          </Text>

          <Text
            style={Styles.demo}
            onPress={() => {
              navigation.navigate('Issues101');
            }}>
            Issues101
          </Text>
        </Space>
      </Blank>
    </Layout.Page>
  );
};

const styleCreator = (t: TokensType) => {
  return StyleSheet.create({
    // eslint-disable-next-line react-native/no-unused-styles
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: t.gray_8,
    },

    // eslint-disable-next-line react-native/no-unused-styles
    demo: {
      fontSize: 16,
      color: t.gray_7,
    },
  });
};

export default Home;
