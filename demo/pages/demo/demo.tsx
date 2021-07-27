import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import { Cell } from 'react-native-xiaoshu'
import Layout from '@/layouts/layout'
import type * as Routes from '@/routes'

import FontSize from './font-size'
import CStyles from './style'

type DemoProps = {} & Routes.RootStackScreenProps<'DemoHome'>

const Demo: React.FC<DemoProps> = ({ navigation }) => {
  return (
    <Layout.Page title="DEMO 组件">
      <ScrollView>
        <View>
          <Text>Demo</Text>

          <FontSize />
        </View>

        <View style={CStyles.ctxSplit} />

        <Cell
          isLink
          title="FullPage"
          onPress={() => {
            navigation.navigate('DemoFull')
          }}
        />

        <Cell
          isLink
          title="NavBar"
          onPress={() => {
            navigation.navigate('DemoNavBar')
          }}
        />

        <Cell
          isLink
          title="Loading"
          onPress={() => {
            navigation.navigate('DemoLoading')
          }}
        />

        <Cell
          isLink
          title="Overlay"
          onPress={() => {
            navigation.navigate('DemoOverlay')
          }}
        />

        <Cell
          isLink
          title="Button"
          onPress={() => {
            navigation.navigate('DemoButton')
          }}
        />

        <Cell
          isLink
          title="Badge"
          onPress={() => {
            navigation.navigate('DemoBadge')
          }}
        />

        {/* <Cell
          isLink
          title="ActionBar"
          onPress={() => {
            navigation.navigate('DemoActionBar')
          }}
        /> */}

        <Cell
          isLink
          title="Popup"
          onPress={() => {
            navigation.navigate('DemoPopup')
          }}
        />

        <Cell
          isLink
          title="Cell"
          onPress={() => {
            navigation.navigate('DemoCell')
          }}
        />

        <Cell
          isLink
          title="Toast"
          onPress={() => {
            navigation.navigate('DemoToast')
          }}
        />

        {/* <Cell
          isLink
          title="ActionSheet"
          onPress={() => {
            navigation.navigate('DemoActionSheet')
          }}
        /> */}

        <Cell
          isLink
          title="Notify"
          onPress={() => {
            navigation.navigate('DemoNotify')
          }}
        />

        {/* <Cell
          isLink
          title="Image"
          onPress={() => {
            navigation.navigate('DemoImage')
          }}
        /> */}

        <Cell
          isLink
          title="Tag"
          onPress={() => {
            navigation.navigate('DemoTag')
          }}
        />

        <Cell
          isLink
          title="Divider"
          onPress={() => {
            navigation.navigate('DemoDivider')
          }}
        />

        <Cell
          isLink
          title="Grid"
          onPress={() => {
            navigation.navigate('DemoGrid')
          }}
        />

        <Cell
          isLink
          title="Switch"
          onPress={() => {
            navigation.navigate('DemoSwitch')
          }}
        />

        {/* <Cell
          isLink
          title="Dialog"
          onPress={() => {
            navigation.navigate('DemoDialog')
          }}
        /> */}

        <Cell
          isLink
          title="TextInput"
          onPress={() => {
            navigation.navigate('DemoTextInput')
          }}
        />

        {/* <Cell
          isLink
          title="Field"
          onPress={() => {
            navigation.navigate('DemoField')
          }}
        /> */}

        <Cell
          isLink
          title="Dropdown"
          onPress={() => {
            navigation.navigate('DemoDropdown')
          }}
        />

        <Cell
          isLink
          title="Checkbox"
          onPress={() => {
            navigation.navigate('DemoCheckbox')
          }}
        />

        <Cell
          isLink
          title="Empty"
          onPress={() => {
            navigation.navigate('DemoEmpty')
          }}
        />

        <Cell
          isLink
          title="SelectPopup"
          onPress={() => {
            navigation.navigate('DemoSelectPopup')
          }}
        />

        <View style={CStyles.ctxSplit} />
      </ScrollView>
    </Layout.Page>
  )
}

export default Demo
