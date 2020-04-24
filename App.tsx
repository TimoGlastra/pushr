import React from 'react'
import { SafeAreaView } from 'react-native'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import * as eva from '@eva-design/eva'
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components'
import { NavigationContainer } from '@react-navigation/native'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { createStackNavigator } from '@react-navigation/stack'
import { PushScreen } from './src/screens/Push/PushScreen'

const { Navigator, Screen } = createStackNavigator()

const StackNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Push" component={PushScreen} />
  </Navigator>
)

const App = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? eva.light : eva.dark

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <Layout style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
              <StackNavigator />
            </NavigationContainer>
          </SafeAreaView>
        </Layout>
      </ApplicationProvider>
    </>
  )
}

export default () => (
  <AppearanceProvider>
    <App />
  </AppearanceProvider>
)
