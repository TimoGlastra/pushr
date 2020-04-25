import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { AppLoading } from 'expo'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance'
import * as eva from '@eva-design/eva'
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
} from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { useFirstLaunch } from './src/utils/hooks'
import { Navigation } from './src/Navigation'

const App = () => {
  const colorScheme = useColorScheme()
  const theme = colorScheme === 'light' ? eva.light : eva.dark
  const isFirstLaunch = useFirstLaunch()
  const barStyle = colorScheme === 'light' ? 'dark-content' : 'light-content'

  if (isFirstLaunch === null) {
    return <AppLoading onError={console.warn} />
  }

  return (
    <>
      <StatusBar barStyle={barStyle} />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <Layout style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation isFirstLaunch={isFirstLaunch} />
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
